DROP DATABASE IF EXISTS the_employee_tracker;
CREATE DATABASE IF EXISTS the_employee_tracker;
USE the_employee_tracker;

CREATE TABLE Departments (
    id INTEGER UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE Roles (
    id INTEGER UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) UNIQUE NOT NULL,
  salary DECIMAL UNSIGNED NOT NULL,
  department_id INTEGER UNSIGNED NOT NULL,
  INDEX dep_id (department_id),
  CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES Departments(id) ON DELETE CASCADE
);

CREATE TABLE Employees (
  id INTEGER UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER UNSIGNED NOT NULL,
  INDEX role_id (role_id),
  CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES Roles(id) ON DELETE CASCADE,
  manager_id INTEGER UNSIGNED,
  INDEX man_id (manager_id),
  CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES Employees(id) ON DELETE SET NULL
);
