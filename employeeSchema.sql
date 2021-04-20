-- // * **department**:

-- //   * **id** - INT PRIMARY KEY
-- //   * **name** - VARCHAR(30) to hold department name

-- // * **role**:

-- //   * **id** - INT PRIMARY KEY
-- //   * **title** -  VARCHAR(30) to hold role title
-- //   * **salary** -  DECIMAL to hold role salary
-- //   * **department_id** -  INT to hold reference to department role belongs to

-- // * **employee**:

-- //   * **id** - INT PRIMARY KEY
-- //   * **first_name** - VARCHAR(30) to hold employee first name
-- //   * **last_name** - VARCHAR(30) to hold employee last name
-- //   * **role_id** - INT to hold reference to role employee has
-- //   * **manager_id** - INT to hold reference to another employee that manages the employee being Created. This field may be null if the employee has no manager


DROP DATABASE if exists employeeTrackerDB;

CREATE DATABASE employeeTrackerDB;

USE employeeTrackerDB;

CREATE TABLE departments(
    id INTEGER NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY (id)

);


CREATE TABLE roles(
    id INTEGER NOT NULL AUTO_INCREMENT,
    tile VARCHAR(30),
    salary DECIMAL,
    department_id INTEGER NULL,
    PRIMARY KEY (id)
);



CREATE TABLE employees(
    id INTEGER NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INTEGER NOT NULL,
    manager_id INTEGER NOT NULL,
    PRIMARY KEY(id)

);