DROP DATABASE IF EXISTS `KitchenManager`;
CREATE DATABASE `KitchenManager`;
USE `KitchenManager`;
DROP TABLE IF EXISTS `StorageArea`;
CREATE TABLE `StorageArea` (
  AreaId INT(11) NOT NULL AUTO_INCREMENT,
  AreaName VARCHAR(30) NOT NULL,
  PRIMARY KEY (`AreaId`)
);
DROP TABLE IF EXISTS `Ingredient`;
CREATE TABLE `Ingredient` (
  `IngId` INT(11) NOT NULL AUTO_INCREMENT,
  `IngName` VARCHAR(60) NOT NULL,
  `IngQty` INT(11) NOT NULL,
  `IngArea` INT(11) NOT NULL,
  `IngMeasure` VARCHAR(5) NOT NULL,
  PRIMARY KEY (`IngId`),
  KEY  (`IngName`, `IngQty`, `IngMeasure`),
  CONSTRAINT `FK_AreaId` FOREIGN KEY (`IngArea`) REFERENCES  `StorageArea`(`AreaId`)
);
DROP TABLE IF EXISTS `Recipe`;
CREATE TABLE `Recipe` (
  `RecipeId` INT(11) NOT NULL AUTO_INCREMENT,
  `RecipeName` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`RecipeId`),
  KEY `Key` (`RecipeName`)
);
DROP TABLE IF EXISTS `RecipeIngredient`;
CREATE TABLE `RecipeIngredient` (
  `RecipeId` INT(11) NOT NULL,
  `IngId` INT(11) NOT NULL,
  `IngQtyPerServing` INT(11) NOT NULL,
  KEY `FK` (`RecipeId`, `IngId`),
  CONSTRAINT `FK_RecipeId` FOREIGN KEY (`RecipeId`) REFERENCES  `Recipe`(`RecipeId`),
  CONSTRAINT `FK_IngId` FOREIGN KEY (`IngId`) REFERENCES  `Ingredient`(`IngId`),
  KEY `Key` (`IngQtyPerServing`)
);

