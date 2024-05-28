-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         8.0.30 - MySQL Community Server - GPL
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para aurores
CREATE DATABASE IF NOT EXISTS `aurores` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish2_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `aurores`;

-- Volcando estructura para tabla aurores.activities
CREATE TABLE IF NOT EXISTS `activities` (
  `activity_id` int NOT NULL AUTO_INCREMENT,
  `category_id` int DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish2_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish2_ci NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`activity_id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `activities_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `activity_categories` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

-- Volcando datos para la tabla aurores.activities: ~9 rows (aproximadamente)
INSERT INTO `activities` (`activity_id`, `category_id`, `name`, `description`, `price`, `created_at`, `updated_at`) VALUES
	(1, 1, 'Morning Yoga', 'Start your day with energy and positivity', 20.00, NULL, '2024-05-25 22:33:15'),
	(2, 2, 'Evening Meditation', 'Relax and find peace before sleep', 15.00, NULL, '2024-05-25 22:33:15'),
	(3, 1, 'Pilates', 'Improve your flexibility and strength', 25.00, NULL, '2024-05-26 11:00:00'),
	(4, 4, 'Hipopresivos', 'Sesiones orientadas a la recuperación de la función de la faja abdominal y el fortalecimiento del suelo pélvico.', 30.00, '2024-05-25 23:18:30', '2024-05-25 23:18:30'),
	(5, 5, 'Yoga Terapéutico en Silla', 'Práctica suave y relajada adaptada a personas con lesiones o problemas de movilidad.', 20.00, '2024-05-25 23:18:30', '2024-05-25 23:18:30'),
	(6, 1, 'Yoga Hatha Vinyasa', 'Práctica de yoga dinámico que combina la respiración consciente con la fluidez del movimiento.', 18.00, '2024-05-25 23:18:30', '2024-05-25 23:18:30'),
	(7, 6, 'Biodanza', 'La biodanza invita a la expresión saludable, armonizando el movimiento del cuerpo y desarrollando la creatividad.', 22.00, '2024-05-25 23:18:30', '2024-05-25 23:18:30'),
	(8, 7, 'Laboratorio de Arte', 'Actividad de exploración y experimentación creativa para todas las edades.', 15.00, '2024-05-25 23:18:30', '2024-05-25 23:18:30'),
	(9, 1, 'Consciencia Corporal', 'Práctica física orientada a mejorar la flexibilidad y la fuerza, alineación postural y coordinación motriz.', 25.00, '2024-05-25 23:18:30', '2024-05-25 23:18:30');

-- Volcando estructura para tabla aurores.activity_bookings
CREATE TABLE IF NOT EXISTS `activity_bookings` (
  `booking_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `activity_id` int DEFAULT NULL,
  `session_id` int DEFAULT NULL,
  PRIMARY KEY (`booking_id`),
  KEY `user_id` (`user_id`),
  KEY `activity_id` (`activity_id`),
  KEY `session_id` (`session_id`),
  CONSTRAINT `activity_bookings_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `activity_bookings_ibfk_2` FOREIGN KEY (`activity_id`) REFERENCES `activities` (`activity_id`),
  CONSTRAINT `activity_bookings_ibfk_3` FOREIGN KEY (`session_id`) REFERENCES `activity_sessions` (`session_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

-- Volcando datos para la tabla aurores.activity_bookings: ~2 rows (aproximadamente)
INSERT INTO `activity_bookings` (`booking_id`, `user_id`, `activity_id`, `session_id`) VALUES
	(1, 1, 1, 1),
	(2, 2, 2, 2),
	(3, 3, 3, 3),
	(4, 1, 1, 1);

-- Volcando estructura para tabla aurores.activity_categories
CREATE TABLE IF NOT EXISTS `activity_categories` (
  `category_id` int NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish2_ci NOT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

-- Volcando datos para la tabla aurores.activity_categories: ~6 rows (aproximadamente)
INSERT INTO `activity_categories` (`category_id`, `category_name`) VALUES
	(1, 'Yoga'),
	(2, 'Meditation'),
	(4, 'Hipopresivos'),
	(5, 'Yoga Terapéutico'),
	(6, 'Biodanza'),
	(7, 'Arteterapia');

-- Volcando estructura para tabla aurores.activity_sessions
CREATE TABLE IF NOT EXISTS `activity_sessions` (
  `session_id` int NOT NULL AUTO_INCREMENT,
  `activity_id` int DEFAULT NULL,
  `session_start` datetime NOT NULL,
  `session_end` datetime NOT NULL,
  `capacity` int NOT NULL,
  PRIMARY KEY (`session_id`),
  KEY `activity_id` (`activity_id`),
  CONSTRAINT `activity_sessions_ibfk_1` FOREIGN KEY (`activity_id`) REFERENCES `activities` (`activity_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

-- Volcando datos para la tabla aurores.activity_sessions: ~2 rows (aproximadamente)
INSERT INTO `activity_sessions` (`session_id`, `activity_id`, `session_start`, `session_end`, `capacity`) VALUES
	(1, 1, '2023-04-10 08:00:00', '2023-04-10 09:00:00', 20),
	(2, 2, '2023-04-10 20:00:00', '2023-04-10 21:00:00', 20),
	(3, 3, '2023-04-11 10:00:00', '2023-04-11 11:00:00', 15);

-- Volcando estructura para tabla aurores.admin_logs
CREATE TABLE IF NOT EXISTS `admin_logs` (
  `admin_log_id` int NOT NULL AUTO_INCREMENT,
  `admin_id` int DEFAULT NULL,
  `log_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish2_ci NOT NULL,
  `log_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`admin_log_id`),
  KEY `admin_id` (`admin_id`),
  CONSTRAINT `admin_logs_ibfk_1` FOREIGN KEY (`admin_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

-- Volcando datos para la tabla aurores.admin_logs: ~2 rows (aproximadamente)
INSERT INTO `admin_logs` (`admin_log_id`, `admin_id`, `log_description`, `log_date`) VALUES
	(1, 3, 'Updated user permissions', '2024-04-05 19:45:36'),
	(2, 3, 'Generated monthly report', '2024-04-05 19:45:36');

-- Volcando estructura para tabla aurores.audit_logs
CREATE TABLE IF NOT EXISTS `audit_logs` (
  `log_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `action_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish2_ci NOT NULL,
  `action_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish2_ci NOT NULL,
  `action_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`log_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `audit_logs_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

-- Volcando datos para la tabla aurores.audit_logs: ~2 rows (aproximadamente)
INSERT INTO `audit_logs` (`log_id`, `user_id`, `action_type`, `action_description`, `action_date`) VALUES
	(1, 1, 'Login', 'User logged in successfully', '2024-04-05 19:43:24'),
	(2, 2, 'Purchase', 'User completed a purchase', '2024-04-05 19:43:24');

-- Volcando estructura para tabla aurores.cart_items
CREATE TABLE IF NOT EXISTS `cart_items` (
  `item_id` int NOT NULL AUTO_INCREMENT,
  `cart_id` int DEFAULT NULL,
  `activity_id` int DEFAULT NULL,
  PRIMARY KEY (`item_id`),
  KEY `cart_id` (`cart_id`),
  KEY `activity_id` (`activity_id`),
  CONSTRAINT `cart_items_ibfk_1` FOREIGN KEY (`cart_id`) REFERENCES `shopping_carts` (`cart_id`),
  CONSTRAINT `cart_items_ibfk_2` FOREIGN KEY (`activity_id`) REFERENCES `activities` (`activity_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

-- Volcando datos para la tabla aurores.cart_items: ~2 rows (aproximadamente)
INSERT INTO `cart_items` (`item_id`, `cart_id`, `activity_id`) VALUES
	(1, 1, 1),
	(2, 2, 2);

-- Volcando estructura para tabla aurores.events
CREATE TABLE IF NOT EXISTS `events` (
  `event_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish2_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish2_ci,
  `start` datetime NOT NULL,
  `end` datetime NOT NULL,
  PRIMARY KEY (`event_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

-- Volcando datos para la tabla aurores.events: ~0 rows (aproximadamente)
INSERT INTO `events` (`event_id`, `title`, `description`, `start`, `end`) VALUES
	(1, 'test', 'test', '2024-05-24 20:00:00', '2024-05-24 21:00:00'),
	(2, 'test', 'test', '2024-05-25 20:00:00', '2024-05-25 21:00:00');

-- Volcando estructura para tabla aurores.financial_reports
CREATE TABLE IF NOT EXISTS `financial_reports` (
  `report_id` int NOT NULL AUTO_INCREMENT,
  `type` enum('income','expense') CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish2_ci NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish2_ci,
  `report_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`report_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

-- Volcando datos para la tabla aurores.financial_reports: ~2 rows (aproximadamente)
INSERT INTO `financial_reports` (`report_id`, `type`, `amount`, `description`, `report_date`) VALUES
	(1, 'income', 1000.00, 'Monthly subscription fees', '2024-04-05 19:43:24'),
	(2, 'expense', 500.00, 'Operational costs', '2024-04-05 19:43:24');

-- Volcando estructura para tabla aurores.payments
CREATE TABLE IF NOT EXISTS `payments` (
  `payment_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `amount` decimal(10,2) NOT NULL,
  `payment_method_id` int DEFAULT NULL,
  `payment_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`payment_id`),
  KEY `user_id` (`user_id`),
  KEY `payment_method_id` (`payment_method_id`),
  CONSTRAINT `payments_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `payments_ibfk_2` FOREIGN KEY (`payment_method_id`) REFERENCES `payment_methods` (`method_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

-- Volcando datos para la tabla aurores.payments: ~2 rows (aproximadamente)
INSERT INTO `payments` (`payment_id`, `user_id`, `amount`, `payment_method_id`, `payment_date`) VALUES
	(1, 1, 50.00, 1, '2024-04-05 19:43:24'),
	(2, 2, 75.00, 2, '2024-04-05 19:43:24');

-- Volcando estructura para tabla aurores.payment_methods
CREATE TABLE IF NOT EXISTS `payment_methods` (
  `method_id` int NOT NULL AUTO_INCREMENT,
  `method_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish2_ci NOT NULL,
  PRIMARY KEY (`method_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

-- Volcando datos para la tabla aurores.payment_methods: ~3 rows (aproximadamente)
INSERT INTO `payment_methods` (`method_id`, `method_name`) VALUES
	(1, 'Credit Card'),
	(2, 'PayPal'),
	(3, 'Bank Transfer');

-- Volcando estructura para tabla aurores.roles
CREATE TABLE IF NOT EXISTS `roles` (
  `role_id` int NOT NULL AUTO_INCREMENT,
  `role_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish2_ci NOT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

-- Volcando datos para la tabla aurores.roles: ~4 rows (aproximadamente)
INSERT INTO `roles` (`role_id`, `role_name`) VALUES
	(1, 'admin'),
	(2, 'user'),
	(3, 'professional');

-- Volcando estructura para tabla aurores.shopping_carts
CREATE TABLE IF NOT EXISTS `shopping_carts` (
  `cart_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`cart_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `shopping_carts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

-- Volcando datos para la tabla aurores.shopping_carts: ~2 rows (aproximadamente)
INSERT INTO `shopping_carts` (`cart_id`, `user_id`) VALUES
	(1, 1),
	(2, 2);

-- Volcando estructura para tabla aurores.subscriptions
CREATE TABLE IF NOT EXISTS `subscriptions` (
  `subscription_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `activity_id` int DEFAULT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  PRIMARY KEY (`subscription_id`),
  KEY `user_id` (`user_id`),
  KEY `activity_id` (`activity_id`),
  CONSTRAINT `subscriptions_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `subscriptions_ibfk_2` FOREIGN KEY (`activity_id`) REFERENCES `activities` (`activity_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

-- Volcando datos para la tabla aurores.subscriptions: ~2 rows (aproximadamente)
INSERT INTO `subscriptions` (`subscription_id`, `user_id`, `activity_id`, `start_date`, `end_date`) VALUES
	(1, 1, 1, '2023-01-01', '2023-12-31'),
	(2, 2, 2, '2023-02-01', '2023-12-31');

-- Volcando estructura para tabla aurores.system_settings
CREATE TABLE IF NOT EXISTS `system_settings` (
  `setting_id` int NOT NULL AUTO_INCREMENT,
  `setting_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish2_ci NOT NULL,
  `setting_value` text CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish2_ci NOT NULL,
  `last_updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`setting_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

-- Volcando datos para la tabla aurores.system_settings: ~2 rows (aproximadamente)
INSERT INTO `system_settings` (`setting_id`, `setting_name`, `setting_value`, `last_updated`) VALUES
	(1, 'maintenance_mode', 'off', '2024-04-05 19:44:31'),
	(2, 'user_registration', 'enabled', '2024-04-05 19:44:31');

-- Volcando estructura para tabla aurores.users
CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish2_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish2_ci NOT NULL,
  `password_hash` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish2_ci NOT NULL,
  `role_id` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`),
  KEY `role_id` (`role_id`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

-- Volcando datos para la tabla aurores.users: ~5 rows (aproximadamente)
INSERT INTO `users` (`user_id`, `username`, `email`, `password_hash`, `role_id`, `created_at`, `updated_at`) VALUES
	(1, 'admin', 'admin@example.com', '$2b$10$BKQfmjgtp8bYZVmnm1bxZ.uGgde2klIY5jD4vd4hBKrjg22WZdsIW', 1, '2024-04-05 10:16:11', '2024-05-24 19:34:49'),
	(2, 'user', 'user@example.com', '$2b$10$BKQfmjgtp8bYZVmnm1bxZ.uGgde2klIY5jD4vd4hBKrjg22WZdsIW', 2, '2024-04-05 10:16:11', '2024-05-24 19:34:48'),
	(3, 'profesional', 'profesional@example.com', '$2b$10$BKQfmjgtp8bYZVmnm1bxZ.uGgde2klIY5jD4vd4hBKrjg22WZdsIW', 3, '2024-04-05 10:16:11', '2024-05-24 19:34:47'),
	(23, 'Test', 'test@test.com', '$2b$10$BKQfmjgtp8bYZVmnm1bxZ.uGgde2klIY5jD4vd4hBKrjg22WZdsIW', NULL, '2024-05-24 08:41:21', '2024-05-24 08:41:21'),
	(25, 'hola', 'hola@hola.com', '$2b$10$7Dcvk4uOPSIwqY5/43oUC.SJWzdaZpddZbHZj8lXbQCRo4knd5wqm', 2, '2024-05-25 17:09:59', '2024-05-25 20:05:10'),
	(26, 'test2', 'test2@test.com', '$2b$10$Xcpjkx6wPXVnm1AhNI42i.xbUgwWC8cELW/vtbnkeEWfz6LUUv7Zq', NULL, '2024-05-25 20:38:39', '2024-05-25 20:38:39'),
	(27, 'hola2', 'hola3@hola.com', '$2b$10$ZnicvvAIEPgrhCqMDtSfCe7kiXEOHfqXV8wGmex.xw7ekoy6P8aDW', NULL, '2024-05-25 20:58:54', '2024-05-25 20:58:54'),
	(28, 'test33', 'test33@test.test', '$2b$10$cW.nIgErozLBxR5pCr2j0.jPiZBF2cLbgaVqIdk5bDJRga7kiL40i', 1, '2024-05-25 21:55:30', '2024-05-25 21:55:30'),
	(29, 'alice', 'alice@example.com', '$2b$10$BKQfmjgtp8bYZVmnm1bxZ.uGgde2klIY5jD4vd4hBKrjg22WZdsIW', 2, '2024-05-26 09:00:00', '2024-05-26 09:00:00'),
	(30, 'bob', 'bob@example.com', '$2b$10$BKQfmjgtp8bYZVmnm1bxZ.uGgde2klIY5jD4vd4hBKrjg22WZdsIW', 2, '2024-05-26 09:30:00', '2024-05-26 09:30:00'),
	(31, 'carol', 'carol@example.com', '$2b$10$BKQfmjgtp8bYZVmnm1bxZ.uGgde2klIY5jD4vd4hBKrjg22WZdsIW', 3, '2024-05-26 10:00:00', '2024-05-26 10:00:00'),
	(32, 'dave', 'dave@example.com', '$2b$10$BKQfmjgtp8bYZVmnm1bxZ.uGgde2klIY5jD4vd4hBKrjg22WZdsIW', 1, '2024-05-26 10:30:00', '2024-05-26 10:30:00');

-- Volcando estructura para tabla aurores.user_contacts
CREATE TABLE IF NOT EXISTS `user_contacts` (
  `contact_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `contact_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish2_ci NOT NULL,
  `contact_value` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish2_ci NOT NULL,
  PRIMARY KEY (`contact_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `user_contacts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

-- Volcando datos para la tabla aurores.user_contacts: ~3 rows (aproximadamente)
INSERT INTO `user_contacts` (`contact_id`, `user_id`, `contact_type`, `contact_value`) VALUES
	(7, 1, 'phone', '123-456-7890'),
	(8, 1, 'email', 'john@example.com'),
	(9, 2, 'email', 'tech@example.com');

-- Volcando estructura para tabla aurores.user_profiles
CREATE TABLE IF NOT EXISTS `user_profiles` (
  `profile_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `first_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish2_ci DEFAULT NULL,
  `last_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish2_ci DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `profile_pic` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish2_ci DEFAULT NULL,
  PRIMARY KEY (`profile_id`),
  UNIQUE KEY `user_id` (`user_id`),
  CONSTRAINT `user_profiles_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

-- Volcando datos para la tabla aurores.user_profiles: ~3 rows (aproximadamente)
INSERT INTO `user_profiles` (`profile_id`, `user_id`, `first_name`, `last_name`, `birth_date`, `profile_pic`) VALUES
	(13, 1, 'John', 'Doe', '1990-01-01', 'path/to/image.jpg'),
	(14, 2, 'Tech', 'Guru', '1985-02-02', 'path/to/image.jpg'),
	(15, 3, 'Admin', 'User', '1980-03-03', 'path/to/image.jpg');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
