# Proyecto Aurores

Este proyecto es una aplicación web de gestión de actividades, desarrollada con React en el frontend y Express en el backend. A continuación, se describen los pasos para configurar y arrancar el proyecto.

## Requisitos

- Node.js (versión 14 o superior)
- npm (versión 6 o superior)
- MySQL (versión 8 o superior)
- Git

## Instalación

### 1. Clonar el repositorio

git clone <URL_DEL_REPOSITORIO>
cd aurores-app

# Configurar la base de datos
Crea la base de datos en MySQL:

CREATE DATABASE aurores;

# Importar la base de datos
Copiar y pegar en un editor o ejecuta el script SQL proporcionado para crear las tablas y poblar la base de datos con datos iniciales:

mysql -u <usuario> -p aurores < aurores.sql

# Configurar variables de entorno
Crea un archivo .env en el directorio backend con la configuración necesaria. Aquí tienes un ejemplo:

# backend/.env
DB_HOST=localhost
DB_USER=root
DB_PASS=your_password
DB_NAME=aurores
JWT_SECRET=your_jwt_secret

# Instalar dependencias
Instala las dependencias tanto para el frontend como para el backend:

# En el directorio raíz del proyecto

cd backend
npm install

cd ../frontend
npm install

# Arrancar la aplicación
Arranca tanto el servidor backend como el frontend usando concurrently:

cd ../
npm start

#  Uso de la Aplicación
Abre tu navegador web y navega a http://localhost:5173.

Regístrate como un nuevo usuario y luego inicia sesión.
Si eres administrador, podrás acceder al gestor de usuarios desde el dashboard.

# Estructura del Proyecto
backend/: Contiene el código del servidor backend.

src/: Código fuente del backend.
config/: Configuración de la base de datos.
models/: Modelos de Sequelize.
routes/: Rutas de la API.
middleware/: Middleware de autenticación y autorización.
package.json: Dependencias y scripts del backend.
frontend/: Contiene el código del frontend.

src/: Código fuente del frontend.
components/: Componentes de React.
pages/: Páginas de React.
services/: Servicios para interactuar con la API del backend.
context/: Contexto de autenticación.
package.json: Dependencias y scripts del frontend.
Problemas Comunes
Error de CORS

Si encuentras un error relacionado con CORS, asegúrate de que el middleware de CORS está configurado correctamente en el backend.

Error de Conexión a la Base de Datos

Si el backend no puede conectarse a la base de datos, verifica la configuración de la base de datos en tu archivo .env.

# # Credenciales de Usuarios de Prueba # # 
A continuación, se incluyen tres usuarios para que puedas loguearte con los tres roles (admin, user, profesional):

Email: admin@example.com
Contraseña: 12345678
Usuario

Email: user@example.com
Contraseña: 12345678
Profesional

Email: profesional@example.com
Contraseña: 12345678

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 

Asegúrate de ajustar `<URL_DEL_REPOSITORIO>` con la URL real de tu repositorio y `your_password` y `your_jwt_secret` con los valores adecuados. Este README debe ser fácil de seguir para cualquier desarrollador que quiera configurar y arrancar el proyecto.

