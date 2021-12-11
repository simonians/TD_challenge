create database online_motorbike_shop;
use online_motorbike_shop;

CREATE TABLE `online_motorbike_shop`.`customers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `online_motorbike_shop`.`available_credit` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `available_customer_credit` INT NULL,
  PRIMARY KEY (`id`));

ALTER TABLE `online_motorbike_shop`.`available_credit` 
ADD COLUMN `customer_id` INT NOT NULL AFTER `available_customer_credit`,
ADD INDEX `fk_customer_credit_idx` (`customer_id` ASC) VISIBLE;
;
ALTER TABLE `online_motorbike_shop`.`available_credit` 
ADD CONSTRAINT `fk_customer_credit`
  FOREIGN KEY (`customer_id`)
  REFERENCES `online_motorbike_shop`.`customers` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

  
select * from customers;
select * from available_credit;