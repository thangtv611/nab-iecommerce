create database if not exists `nab-product`;
use `nab-product`;

CREATE TABLE IF NOT EXISTS `products` (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    price DECIMAL DEFAULT 0,
    brand VARCHAR(50) DEFAULT 'NOBRAND',
    color VARCHAR(50) DEFAULT '',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT NULL,
    INDEX (name , price , brand , color)
);

insert into products(name, price, color, brand) values ("iPhone 12",1200,"Red","Apple");
insert into products(name, price, color, brand) values ("iPhone 12 Pro Max",2000,"Black","Apple");
insert into products(name, price, color, brand) values ("AirPod Pro",300,"White","Apple");
insert into products(name,  price, color, brand) values ("Garmin Instinct",400,"Red","Garmin");
insert into products(name,  price, color, brand) values ("MacBook Pro 2020",2000,"Green","Apple");
insert into products(name,  price, color, brand) values ("DELL Vostro 3560",560,"Red","DELL");
insert into products(name, price, color, brand) values ("ASUS ZenPhone 4",500,"Violet","ASUS");
insert into products(name,  price, color, brand) values ("Asus PRO",300,"Black","ASUS");
insert into products(name,  price, color, brand) values ("Samsung A320",500,"White","Samsung");

--CREATE TABLE IF NOT EXISTS `users` (
--    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--    username VARCHAR(50) NOT NULL,
--    password VARCHAR(50) NOT NULL,
--    email VARCHAR(50) NOT NULL,
--    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
--    updated_at DATETIME DEFAULT NULL,
--    INDEX (username , email),
--    CONSTRAINT unique_username UNIQUE (username , email)
--);
--
--INSERT INTO `nab-product`.`users`(`username`,`password`,`email`) VALUES('admin','password','admin@localhost');


