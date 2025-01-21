-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: bd_usuarios
-- ------------------------------------------------------
-- Server version	8.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cita`
--

DROP TABLE IF EXISTS `cita`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cita` (
  `idCita` int NOT NULL AUTO_INCREMENT,
  `usuarioID` varchar(255) DEFAULT NULL,
  `servicioID` varchar(255) DEFAULT NULL,
  `horario` enum('09:00-12:00','12:00-15:00','15:00-18:00','18:00-21:00') NOT NULL,
  `dia` enum('lunes','martes','miércoles','jueves','viernes','sábado','domingo') NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`idCita`),
  UNIQUE KEY `idCita` (`idCita`),
  KEY `usuarioID` (`usuarioID`),
  KEY `servicioID` (`servicioID`),
  CONSTRAINT `cita_ibfk_1` FOREIGN KEY (`usuarioID`) REFERENCES `usuarios` (`idUsuario`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `cita_ibfk_2` FOREIGN KEY (`servicioID`) REFERENCES `servicios` (`idServicio`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cita`
--

LOCK TABLES `cita` WRITE;
/*!40000 ALTER TABLE `cita` DISABLE KEYS */;
INSERT INTO `cita` VALUES (1,'1','1','09:00-12:00','lunes','2023-12-12 09:00:02','2023-12-12 09:00:02'),(2,'6','1','09:00-12:00','martes','2023-12-12 09:33:44','2023-12-12 09:33:44'),(3,'6','4','09:00-12:00','martes','2023-12-12 09:36:08','2023-12-12 09:36:08');
/*!40000 ALTER TABLE `cita` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comentarios` (
  `idComentario` int NOT NULL AUTO_INCREMENT,
  `descripcionComentario` varchar(255) NOT NULL,
  `usuarioID` varchar(255) DEFAULT NULL,
  `servicioID` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`idComentario`),
  UNIQUE KEY `idComentario` (`idComentario`),
  KEY `usuarioID` (`usuarioID`),
  KEY `servicioID` (`servicioID`),
  CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`usuarioID`) REFERENCES `usuarios` (`idUsuario`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`servicioID`) REFERENCES `servicios` (`idServicio`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentarios`
--

LOCK TABLES `comentarios` WRITE;
/*!40000 ALTER TABLE `comentarios` DISABLE KEYS */;
INSERT INTO `comentarios` VALUES (1,'Pesimo Servicio a buen precio','6','4','2023-12-12 05:17:20','2023-12-12 05:17:20'),(2,'Buen Servicio',NULL,NULL,'2023-12-12 08:23:46','2023-12-12 08:23:46'),(3,'ed',NULL,NULL,'2023-12-12 08:25:43','2023-12-12 08:25:43'),(4,'ws',NULL,NULL,'2023-12-12 08:27:19','2023-12-12 08:27:19');
/*!40000 ALTER TABLE `comentarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicios`
--

DROP TABLE IF EXISTS `servicios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `servicios` (
  `idServicio` varchar(255) NOT NULL,
  `usuarioID` varchar(255) NOT NULL,
  `nombreServicio` varchar(255) NOT NULL,
  `tipoServicio` enum('In Situ','Lugar') NOT NULL,
  `terminos` varchar(255) NOT NULL,
  `condiciones` varchar(255) NOT NULL,
  `costo` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`idServicio`),
  UNIQUE KEY `idServicio` (`idServicio`),
  KEY `usuarioID` (`usuarioID`),
  CONSTRAINT `servicios_ibfk_1` FOREIGN KEY (`usuarioID`) REFERENCES `usuarios` (`idUsuario`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicios`
--

LOCK TABLES `servicios` WRITE;
/*!40000 ALTER TABLE `servicios` DISABLE KEYS */;
INSERT INTO `servicios` VALUES ('1','1','Cafe Tostadora','Lugar','Ningunos','buenas','500MX','Bonito Lugar','2023-12-12 08:42:11','2023-12-12 08:42:11'),('2','2','Autolavado','In Situ','Buen lavado','Ningunas','40 MXM','Lavado','2023-12-12 08:47:01','2023-12-12 08:47:01'),('4','6','Agendalo','In Situ','Hola aqui estaras','Asistir','40 MXM','BUEN LUGAR','2023-12-12 02:11:23','2023-12-12 02:11:23');
/*!40000 ALTER TABLE `servicios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `idUsuario` varchar(255) NOT NULL,
  `nombreCompleto` varchar(255) NOT NULL,
  `correoElectronico` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fechaNacimiento` date NOT NULL,
  `genero` enum('Masculino','Femenino','No binario') NOT NULL,
  `lugarProcedencia` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`idUsuario`),
  UNIQUE KEY `idUsuario` (`idUsuario`),
  UNIQUE KEY `correoElectronico` (`correoElectronico`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES ('1','Administador','administrador@admi.com','987654321','2002-09-10','Masculino','N/A','2023-12-12 05:52:08','2023-12-12 05:52:08'),('2','edwin Nombre','edwin@email.com','heeeee','1990-01-01','Masculino','Nueva Ciudad','2023-12-12 05:29:34','2023-12-12 07:44:23'),('6','Pamela Rafael','pamelAlvarez@hotmail.com','112312ed','2023-12-01','Femenino','Xicotepec','2023-12-12 01:52:31','2023-12-12 16:56:18');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-20 21:16:59
