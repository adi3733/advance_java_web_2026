CREATE DATABASE student;
USE student;

CREATE TABLE studentinfo (
    rollno INT PRIMARY KEY,
    name VARCHAR(50),
    emailid VARCHAR(100),
    dept VARCHAR(50)
);

INSERT INTO studentinfo VALUES
(1, 'Amit', 'amit@gmail.com', 'Computer'),
(2, 'Priya', 'priya@gmail.com', 'IT'),
(3, 'Rahul', 'rahul@gmail.com', 'Mechanical'),
(4, 'Sneha', 'sneha@gmail.com', 'ENTC');

SELECT * FROM studentinfo;