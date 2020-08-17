DROP DATABASE IF EXISTS Shitty_Employee_Tracker;

CREATE DATABASE Shitty_Employee_Tracker;

USE Shyitty_Employee_Tracker;

CREATE TABLE dead_end_department(
id integer auto_increment not null,
name varchar(30) not null,
primary key(id)
);

CREATE TABLE made_up_role(
id integer auto_increment not null,
title varchar(30) not null,
salary decimal not null,
dead_end_department_id Integer not null,
constraint fk_dead_end_department_id foreign key (dead_end_department_id) references dead_end_department(id),
primary key(id)
);


CREATE TABLE shitty_employee(
id integer auto_increment not null,
first_name varchar(30) not null,
last_name varchar(30) not null,
made_up_role_id integer not null,
constraint fk_made_up_role_id FOREIGN KEY (made_up_role_id) REFERENCES made_up_role(id),
manager_id integer ,
constraint fk_asshole_manager_id FOREIGN KEY (asshole_manager_id) REFERENCES shitty_employee(id),
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

INSERT into made_up_role (title, salary, dead_end_department_id)
VALUES ("Shity Assistant", 45000, 1);
INSERT into made_up_role (title, salary, dead_end_department_id)
VALUES ("Aweful Salesperson", 35000, 2);
INSERT into made_up_role (title, salary, dead_end_department_id)
VALUES ("Lead Douchy Salesperson", 43000, 3);
INSERT into made_up_role (title, salary, dead_end_department_id)
VALUES ("High-School Drop out Accountant", 50000, 4);
INSERT into made_up_role (title, salary, dead_end_department_id)
VALUES ("Attorny/Drug-Dealer", 50000, 5);
INSERT into made_up_role (title, salary, dead_end_department_id)
VALUES ("Manager/Asshole", 65000, 6);

select * from made_up_role;

INSERT into shitty_employee (first_name, last_name, made_up_role_id)
values ("JohnBlake", " Henderson", 1); 
INSERT into shitty_employee (first_name, last_name, made_up_role_id)
values ("Adam", "Demamp", 1);
INSERT into shitty_employee (first_name, last_name, made_up_role_id)
values ("Anders", "Holmvic", 1);
INSERT into shitty_employee (first_name, last_name, made_up_role_id)
values ("Alison", "Murphy", 6);
INSERT into shitty_employee (first_name, last_name, made_up_role_id)
values ("Karl", "Hevacheck", 5);
INSERT into shitty_employee (first_name, last_name, made_up_role_id)
values ("Montez", "Walker", 3);

select * from shitty_employee;

