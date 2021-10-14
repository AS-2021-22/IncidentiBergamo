-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 14, 2021 at 01:43 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.3.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `incidenti_bergamo`
--
CREATE DATABASE IF NOT EXISTS `incidenti_bergamo` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `incidenti_bergamo`;

-- --------------------------------------------------------

--
-- Table structure for table `incidenti`
--

CREATE TABLE `incidenti` (
  `Protocollo` varchar(12) NOT NULL,
  `Anno` year(4) NOT NULL,
  `Data` date NOT NULL,
  `Ora` time NOT NULL,
  `Localita` varchar(255) NOT NULL,
  `NaturaIncidente` varchar(255) NOT NULL,
  `Illesi` int(11) NOT NULL DEFAULT 0,
  `Feriti` int(11) NOT NULL DEFAULT 0,
  `Riservata` int(11) NOT NULL DEFAULT 0,
  `Morti` int(11) NOT NULL DEFAULT 0,
  `Pedoni` tinyint(1) NOT NULL DEFAULT 0,
  `Velocipedi` tinyint(1) NOT NULL DEFAULT 0,
  `Ciclomotori` tinyint(1) NOT NULL DEFAULT 0,
  `MezziPesanti` tinyint(1) NOT NULL DEFAULT 0,
  `Localizzazione` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `incidenti`
--
ALTER TABLE `incidenti`
  ADD PRIMARY KEY (`Protocollo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
