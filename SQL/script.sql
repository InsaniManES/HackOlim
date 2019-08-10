-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema Friends
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `Friends` ;

-- -----------------------------------------------------
-- Schema Friends
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Friends` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
-- -----------------------------------------------------
-- Schema Users
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `Users` ;

-- -----------------------------------------------------
-- Schema Users
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Users` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
-- -----------------------------------------------------
-- Schema Words
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `Words` ;

-- -----------------------------------------------------
-- Schema Words
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Words` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `Friends` ;

-- -----------------------------------------------------
-- Table `Friends`.`friends`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Friends`.`friends` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `user_id` INT(11) NOT NULL,
  `friend_user_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`, `user_id`, `friend_user_id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

USE `Users` ;

-- -----------------------------------------------------
-- Table `Users`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Users`.`users` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(20) NOT NULL,
  `last_name` VARCHAR(30) NOT NULL,
  `birth_date` DATE NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `lang_id` INT(11) NOT NULL,
  `username` VARCHAR(15) NOT NULL,
  `password` VARCHAR(256) NOT NULL,
  `register_time_date` DATETIME NOT NULL,
  `last_login` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`, `email`, `username`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

USE `Words` ;

-- -----------------------------------------------------
-- Table `Words`.`association`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Words`.`association` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `association_text` VARCHAR(256) NULL DEFAULT NULL,
  `user_id` INT(11) NULL DEFAULT NULL,
  `lang_id` INT(11) NULL DEFAULT NULL,
  `word_id` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `Words`.`association_likes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Words`.`association_likes` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `asso_id` INT(11) NULL DEFAULT NULL,
  `user_id` INT(11) NULL DEFAULT NULL,
  `like_type` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  UNIQUE INDEX `idx_asso_user` (`asso_id` ASC, `user_id` ASC))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `Words`.`association_likes_type`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Words`.`association_likes_type` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `Words`.`languages`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Words`.`languages` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  `code` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`id`, `code`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  UNIQUE INDEX `code_UNIQUE` (`code` ASC))
ENGINE = InnoDB
AUTO_INCREMENT = 105
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `Words`.`user_words`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Words`.`user_words` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `user_id` INT(11) NOT NULL,
  `word_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`, `user_id`, `word_id`),
  UNIQUE INDEX `user_id_UNIQUE` (`id` ASC))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `Words`.`words`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Words`.`words` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `word_name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`, `word_name`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

USE `Friends` ;

-- -----------------------------------------------------
-- procedure GetFriends
-- -----------------------------------------------------

DELIMITER $$
USE `Friends`$$
CREATE DEFINER=`root`@`%` PROCEDURE `GetFriends`(userID int)
BEGIN
SELECT * FROM friends WHERE user_id = userID;
END$$

DELIMITER ;
USE `Users` ;

-- -----------------------------------------------------
-- procedure AddUser
-- -----------------------------------------------------

DELIMITER $$
USE `Users`$$
CREATE DEFINER=`root`@`%` PROCEDURE `AddUser`(firstname varchar(20), lastname varchar(30), birthdate date, username varchar(15), pass varchar(20), email varchar(50), lang_id int)
BEGIN
INSERT INTO users (first_name,last_name,birth_date,username,password,email,lang_id,register_time_date) VALUES (firstname,lastname,birthdate,username,SHA(pass),email,lang_id,NOW());
END$$

DELIMITER ;

-- -----------------------------------------------------
-- procedure Login
-- -----------------------------------------------------

DELIMITER $$
USE `Users`$$
CREATE DEFINER=`root`@`%` PROCEDURE `Login`(Username varchar(20), Pass varchar(30))
BEGIN
IF EXISTS(SELECT * FROM users WHERE `password` = SHA(Pass)) THEN
BEGIN
	SET SQL_SAFE_UPDATES=0;
    UPDATE users SET last_login = NOW() WHERE username = Username;
	SET SQL_SAFE_UPDATES=1;
    SELECT 'OK' AS STATUS;
    SELECT u.id,u.first_name,u.last_name,timestampdiff(YEAR,u.birth_date,DATE(NOW())) as age,u.email,l.code as lang_code FROM users as u 
    INNER JOIN Words.languages as l ON l.id = u.lang_id
    WHERE username = Username;
END;
ELSE
BEGIN
    SELECT 'Wrong username or password' AS DESCRIPTION, 'Error' AS STATUS;
    SELECT * FROM users WHERE username = Username AND password = SHA(Pass);
END;
END IF;
END$$

DELIMITER ;
USE `Words` ;

-- -----------------------------------------------------
-- function CountDislikes
-- -----------------------------------------------------

DELIMITER $$
USE `Words`$$
CREATE DEFINER=`root`@`%` FUNCTION `CountDislikes`(asso_id INT) RETURNS int(11)
BEGIN
RETURN (SELECT COUNT(*) FROM association_likes WHERE asso_id = asso_id AND like_type = 2);
END$$

DELIMITER ;

-- -----------------------------------------------------
-- function CountLikes
-- -----------------------------------------------------

DELIMITER $$
USE `Words`$$
CREATE DEFINER=`root`@`%` FUNCTION `CountLikes`(asso_id INT) RETURNS int(11)
BEGIN
RETURN (SELECT COUNT(*) FROM association_likes WHERE asso_id = asso_id AND like_type = 1);
END$$

DELIMITER ;

-- -----------------------------------------------------
-- procedure GetAssociationByWordID
-- -----------------------------------------------------

DELIMITER $$
USE `Words`$$
CREATE DEFINER=`root`@`%` PROCEDURE `GetAssociationByWordID`(wordID int)
BEGIN
SELECT w.id as word_id,a.lang_id,a.association_text, CountLikes(a.id) as likes, CountDislikes(a.id) as Dislikes FROM words as w
INNER JOIN association as a ON w.id = a.word_id
WHERE a.id = wordID;
END$$

DELIMITER ;

-- -----------------------------------------------------
-- procedure GetWordsAndAssociationsByUserID
-- -----------------------------------------------------

DELIMITER $$
USE `Words`$$
CREATE DEFINER=`root`@`%` PROCEDURE `GetWordsAndAssociationsByUserID`(userID INT)
BEGIN
SELECT w.id as word_id,w.word_name FROM words as w
INNER JOIN user_words as uw ON w.id = uw.word_id
WHERE uw.user_id = userID;

SELECT w.id as word_id,a.lang_id,a.association_text, CountLikes(a.id) as likes, CountDislikes(a.id) as Dislikes FROM words as w
INNER JOIN association as a ON w.id = a.word_id
INNER JOIN user_words as uw ON w.id = uw.word_id
WHERE uw.user_id = userID;
END$$

DELIMITER ;

-- -----------------------------------------------------
-- procedure GetWordsByUserID
-- -----------------------------------------------------

DELIMITER $$
USE `Words`$$
CREATE DEFINER=`root`@`%` PROCEDURE `GetWordsByUserID`(userID int)
BEGIN
SELECT w.id as word_id,w.word_name FROM words as w
INNER JOIN user_words as uw ON w.id = uw.word_id
WHERE uw.user_id = userID;
END$$

DELIMITER ;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
