const express = require('express');
const router = express.Router();
const { User, Role } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middleware/auth');
const adminMiddleware = require('../middleware/admin');

// Ruta para registrar un nuevo usuario
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const existingUser = await User.findOne({ where: { email } });

        if (existingUser) {
            return res.status(400).json({ error: 'Email ya registrado' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ username, email, password_hash: hashedPassword, role_id: 2 });
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Error registering user' });
    }
});

// Ruta para iniciar sesión
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({
            where: { email },
            include: [{ model: Role, attributes: ['role_name'] }]
        });

        if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

        const isMatch = await bcrypt.compare(password, user.password_hash);
        if (!isMatch) return res.status(401).json({ error: 'Contraseña inválida' });

        const token = jwt.sign({ userId: user.user_id, role: user.Role.role_name }, 'secret_key', { expiresIn: '1h' });
        res.json({
            user: {
                user_id: user.user_id,
                username: user.username,
                email: user.email,
                role_name: user.Role.role_name,
            },
            token
        });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ error: 'Error logging in' });
    }
});

// Ruta para obtener todos los usuarios (solo para administradores)
router.get('/', authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const users = await User.findAll({
            include: [{ model: Role, attributes: ['role_name'] }]
        });
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching users' });
    }
});

// Ruta para registrar un nuevo usuario (usada por administradores)
router.post('/', authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const { username, email, password, role_id } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ username, email, password_hash: hashedPassword, role_id });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'Error creating user' });
    }
});

// Ruta para actualizar un usuario
router.put('/:id', authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const { username, email, password, role_id } = req.body;
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ error: 'User not found' });

        const hashedPassword = password ? await bcrypt.hash(password, 10) : user.password_hash;

        user.username = username || user.username;
        user.email = email || user.email;
        user.password_hash = hashedPassword;
        user.role_id = role_id || user.role_id;

        await user.save();
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Error updating user' });
    }
});

// Ruta para eliminar un usuario
router.delete('/:id', authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ error: 'User not found' });

        await user.destroy();
        res.json({ message: 'User deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting user' });
    }
});

module.exports = router;
