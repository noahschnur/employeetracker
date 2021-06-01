INSERT INTO department (id, name)
VALUES
    (1, 'Programming'),
    (2, 'Engineering'),
    (3, 'Sales');

INSERT INTO role (id, title, salary, department_id)
VALUES
    (1, 'Programmer', 50000.00, 1),
    (2, 'Manager', 70000.00, 1),
    (3, 'Computer Builder', 50000.00, 2),
    (4, 'Manager', 70000.00, 2),
    (5, 'Associate', 50000.00, 3),
    (6, 'Manager', 70000.00, 3);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES
    (1, 'Fake', 'Name', 1, 2),
    (2, 'Super', 'Faker', 2, 1),
    (3, 'Bigger', 'Fakest', 3, 4),
    (4, 'Fake', 'Faking', 4, 3),
    (5, 'Names', 'Are-Fake', 5, 6),
    (6, 'Last', 'One', 6, 5);