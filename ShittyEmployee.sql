DROP DATABASE IF EXISTS Shitty_Employee_Tracker;

CREATE DATABASE Shitty_Employee_Tracker;

USE Shitty_Employee_Tracker;

CREATE TABLE dead_end_department(
id integer auto_increment not null,
name varchar(250) not null,
primary key(id)
);

CREATE TABLE made_up_role(
id int auto_increment not null,
title varchar(200) not null,
primary key(id)
);


CREATE TABLE shitty_employee(
    id int auto_increment not null,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    made_up_role varchar(30) not null,
    Primary key(id)
);

select * from shitty_employee;
select * from made_up_role;
select * from dead_end_department;

INSERT into dead_end_department (name)
VALUES ("Aweful Salesperson");
INSERT into dead_end_department (name)
VALUES ("Lead Douchy Salesperson");
INSERT into dead_end_department (name)
VALUES ("High-School Drop out Accountant");
INSERT into dead_end_department (name)
VALUES ("Attorny/Drug-Dealer");
INSERT into dead_end_department (name)
VALUES ("Manager/Asshole");

select * from dead_end_department;

INSERT into made_up_role (title)
VALUES ("Shity Assistant");
INSERT into made_up_role (title)
VALUES ("Aweful Salesperson");
INSERT into made_up_role (title)
VALUES ("Lead Douchy Salesperson");
INSERT into made_up_role (title)
VALUES ("High-School Drop out Accountant");
INSERT into made_up_role (title)
VALUES ("Attorny/Drug-Dealer");
INSERT into made_up_role (title)
VALUES ("Manager/Asshole");

select * from made_up_role;

INSERT into shitty_employee (first_name, last_name)
values ("JohnBlake", " Henderson"); 
INSERT into shitty_employee (first_name, last_name)
values ("Adam", "Demamp");
INSERT into shitty_employee (first_name, last_name)
values ("Anders", "Holmvic");
INSERT into shitty_employee (first_name, last_name)
values ("Alison", "Murphy");
INSERT into shitty_employee (first_name, last_name)
values ("Karl", "Hevacheck");
INSERT into shitty_employee (first_name, last_name)
values ("Montez", "Walker");

select * from shitty_employee;

