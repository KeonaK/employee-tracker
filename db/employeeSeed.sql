USE employeeTrackerDB;

INSERT INTO departments (name)
VALUES ("Sales"), ("Engineering"),("Finance"), ("Legal");


INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1),("Salesperson", 80000, 1),("Lead Engineer", 150000, 2),("Software Engineer", 120000, 2), ("Accountant", 125000, 3), ("Legal Team Lead", 250000, 4), ("Lawyer", 190000, 4),("Lead Engineer", 150000, 2);
-- sales lead 1
-- salesperson 2
-- lead engineer 3
-- software engineer 4
-- accountant 5
-- legal team lead 6
-- lawyer 7



INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, 1 ),("Mike", "Chen", 2, 2),("Ashley", "Roddriguez", 3, NULL),("Kevin", "Tupik", 4, 1), ("Malia", "Brown", 5, NULL), ("Sarah", "Lourd", 6, NULL), ("Tom", "Allen", 7 , 3);