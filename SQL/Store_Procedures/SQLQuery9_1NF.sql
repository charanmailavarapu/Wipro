Create Table Department 
(
	DeptCode VARCHAR(10) PRIMARY KEY,
	DeptName VARCHAR(100)
);

Create table Employee 
(
	Empno VARCHAR(10) PRIMARY KEY,
	Name varchar(30) not null,
	Dept varchar(30),
	Gender varchar(10),
	Salary numeric(9,2),
	DeptCode VARCHAR(10)
	FOREIGN KEY (DeptCode) REFERENCES Department(DeptCode)
	
);

Create Table ProjectAssignment
(
	Empno VARCHAR(10),
	ProjCode VARCHAR(10),
	Hours INT,
	PRIMARY KEY (Empno, ProjCode),
	FOREIGN KEY  (Empno) REFERENCES Employee(Empno)
);

CREATE TABLE Project (
    ProjCode VARCHAR(10) PRIMARY KEY,
    ProjName VARCHAR(100)
);

INSERT INTO Department(DeptCode, DeptName)
VALUES ('D001', 'DOTNET');

INSERT INTO Employee (Empno, Name, Gender, Salary, DeptCode)
VALUES ('E100', 'Uday', 'Male', 88423.00, 'D001');

INSERT INTO ProjectAssignment (Empno, ProjCode, Hours)
VALUES 
    ('E100', 'P001', 88),
    ('E100', 'P123', 111);

INSERT INTO Project (ProjCode, ProjName)
VALUES 
    ('P001', 'Project A'),
    ('P123', 'Project B');

SELECT * FROM Department;

SELECT * FROM Employee;

SELECT * FROM ProjectAssignment;

SELECT * FROM Project;