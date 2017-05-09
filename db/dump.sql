CREATE TABLE `Veiculo` (
  `Codigo` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `Modelo` varchar(15) NOT NULL,
  `Placa` varchar(8) NOT NULL,
  `Descricao` varchar(10) NOT NULL,
  `Tarifa` float NOT NULL,
  PRIMARY KEY (`Codigo`)
)