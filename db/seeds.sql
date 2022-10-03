INSERT INTO departments (name)
VALUES

    ('Customer Service'),
    ('Business Operations'),
    ('Management');
INSERT INTO roles (title, salary, department_id)
VALUES

    ('Customer Service Rep', 30000, 1),
    ('Front Desk Rep', 25000, 1),

    ('Sales Rep', 55000, 2),
    ('Product Developement', 60000, 2),
    ('Product Strategy', 45000, 2),
    ('Marketing Assoc', 50000, 2),

    ('Shipping Manager', 50000, 3),
    ('Sales Manager', 70000, 3),
    ('Product Manager', 70000, 3),
    ('Store Manager', 70000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
    ('Phil', 'Foden', 6, 8),
    ('Gary', 'Neville', 6, 8),
    ('Kyle', 'Walker', 6, 8),

    ('Kierran', 'Tripper', 5, 9),
    ('Trent', 'Arnold', 5, 9),

    ('Raheem', 'Streling', 4, 9),
    ('Harry', 'Kane', 4, 9),

    ('Harry', 'Maguire', 1, 7),

    ('David ', 'Degea', 2, 10),

    ('Luke', 'Shaw', 7, 10),

    ('Cristiano', 'Ronaldo', 8, 10),

    ('Gary', 'Peyton', 9, 10),

    ('Chad', 'Boswick', 10, 10);