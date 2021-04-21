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
    id INTEGER  AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(30)

);


CREATE TABLE roles(
    id INTEGER  AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INTEGER NULL,
-- rule only for departments then we create the foreign then we refrence the foreign key created
    CONSTRAINT FK_departments FOREIGN KEY(department_id) REFERENCES departments(id)
    -- when we delete it must follow the same rules as the table so it can be deleted as well 
    ON DELETE CASCADE
);



CREATE TABLE employees(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INTEGER  NULL,
    manager_id INTEGER  NULL,
    
    CONSTRAINT FK_roles FOREIGN KEY(role_id) REFERENCES roles(id)
    ON DELETE CASCADE,

    CONSTRAINT FK_manager FOREIGN KEY (manager_id) REFERENCES employees(id)
    ON DELETE SET NULL

);