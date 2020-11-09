-- MySQL dump 10.17  Distrib 10.3.25-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: facturacion
-- ------------------------------------------------------
-- Server version	10.3.25-MariaDB-0ubuntu0.20.04.1-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `acuerdo`
--

DROP TABLE IF EXISTS `acuerdo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `acuerdo` (
  `acuerdo_id` int(11) NOT NULL AUTO_INCREMENT,
  `acuerdo_oferta_id` int(11) DEFAULT NULL,
  `acuerdo_valor` decimal(8,2) DEFAULT NULL,
  `acuerdo_fecha_pago` datetime DEFAULT NULL,
  `acuerdo_fecha_creacion` datetime DEFAULT NULL,
  `acuerdo_estado` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`acuerdo_id`),
  KEY `acuerdo_oferta_id` (`acuerdo_oferta_id`),
  CONSTRAINT `acuerdo_ibfk_1` FOREIGN KEY (`acuerdo_oferta_id`) REFERENCES `oferta` (`oferta_id`),
  CONSTRAINT `CONSTRAINT_1` CHECK (`acuerdo_estado` in (0,1))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `acuerdo`
--

LOCK TABLES `acuerdo` WRITE;
/*!40000 ALTER TABLE `acuerdo` DISABLE KEYS */;
/*!40000 ALTER TABLE `acuerdo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cliente` (
  `cliente_id` int(11) NOT NULL AUTO_INCREMENT,
  `cliente_nombre` varchar(70) DEFAULT NULL,
  `cliente_identificacion` varchar(20) DEFAULT NULL,
  `cliente_fecha_creacion` datetime DEFAULT NULL,
  PRIMARY KEY (`cliente_id`),
  UNIQUE KEY `cliente_identificacion` (`cliente_identificacion`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` VALUES (1,'Javier López Martínez','22223333','2020-11-06 22:11:39');
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oferta`
--

DROP TABLE IF EXISTS `oferta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oferta` (
  `oferta_id` int(11) NOT NULL AUTO_INCREMENT,
  `oferta_cliente_id` int(11) DEFAULT NULL,
  `oferta_valor` decimal(8,2) DEFAULT NULL,
  `oferta_numero_producto` int(11) DEFAULT NULL,
  `oferta_fecha_creacion` datetime DEFAULT NULL,
  `oferta_dias_mora` int(11) DEFAULT NULL,
  PRIMARY KEY (`oferta_id`),
  KEY `oferta_cliente_id` (`oferta_cliente_id`),
  CONSTRAINT `oferta_ibfk_1` FOREIGN KEY (`oferta_cliente_id`) REFERENCES `cliente` (`cliente_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oferta`
--

LOCK TABLES `oferta` WRITE;
/*!40000 ALTER TABLE `oferta` DISABLE KEYS */;
INSERT INTO `oferta` VALUES (1,1,10000.00,2,'2020-11-06 22:16:17',1),(2,1,20000.00,3,'2020-11-07 18:55:55',2);
/*!40000 ALTER TABLE `oferta` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-09  8:32:38
