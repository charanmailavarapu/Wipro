use EmpSample_#OK
go
SELECT * FROM tblEmployees
go
--Write a query to Get a List of Employees who have a one part name
SELECT * FROM tblEmployees 
WHERE Name NOT LIKE '% %';
--Write a query to Get a List of Employees who have a three part name
SELECT * FROM tblEmployees
WHERE Name LIKE '% % %';

--  write a query to get a list of Employees who have a First Middle Or last name as Ram, and not any thing else
SELECT * FROM tblEmployees
WHERE Name LIKE '% Ram %' OR Name LIKE '% % Ram';

-- Write the answers for the below
SELECT 65 | 11  AS "65 OR 11";
SELECT 65 ^ 11 AS "65 XOR 11";
SELECT 65 & 11 AS Result;  
SELECT (12 & 4) | (13 & 1) AS Result;  
SELECT 127 | 64 AS Result;  
SELECT 127 ^ 64 AS Result;  
SELECT 127 ^ 128 AS Result;
SELECT 127 & 64 AS Result; 
SELECT 127 & 128 AS Result;

--. Write a query which returns data in all columns from the table dbo.tblCentreMaster
SELECT * FROM tblCentreMaster;

--Write a query which gives employee types in the organization.
SELECT EmployeeType FROM tblEmployees;

--Write a query which returns Name, FatherName, DOB of employees whose PresentBasic is
--a.      Greater than 3000.
--b.      Less than 3000.
--c.      Between 3000 and 5000.

SELECT Name, FatherName, DOB
FROM tblEmployees
WHERE PresentBasic > 3000;

SELECT Name, FatherName, DOB
FROM tblEmployees
WHERE PresentBasic < 3000;

SELECT Name, FatherName, DOB
FROM tblEmployees
WHERE PresentBasic BETWEEN 3000 AND 5000;

--Write a query which returns All the details of employees whose Name
--a.      Ends with 'KHAN'
--b.      Starts with 'CHANDRA'
--c.      Is 'RAMESH' and their initial will be in the rage of alphabets a-t.
SELECT * FROM tblEmployees
WHERE Name LIKE '%KHAN';

SELECT * FROM tblEmployees
WHERE Name LIKE 'CHANDRA%';

SELECT * FROM tblEmployees as emp
WHERE NAME LIKE '%RAMESH' AND NAME LIKE '[a-t]%';

--Exercise 2

--1.    Write a query to get Total Present basic  for all departments where total Present basic is greater than 30000, data should be sorted by department
SELECT DepartmentCode, sum(PresentBasic) summ FROM tblEmployees as emp
GROUP BY DepartmentCode having sum(PresentBasic)>30000 order by DepartmentCode;

--2.       Write a query to Get Max , Min and Average age of employees by service Type , Service Status for each Centre (display in years and Months)
select emp.CentreCode,emp.ServiceType,emp.ServiceStatus,
CONVERT(varchar(10), MAX(DATEDIFF(MM, EMP.DOB,GETDATE())/12))+'years' + 
CONVERT(varchar(10), MAX(DATEDIFF(MM, EMP.DOB,GETDATE())%12)) + 'months' AS MAX_AGE,
CONVERT(varchar(10), MIN(DATEDIFF(MM, EMP.DOB,GETDATE())/12)) + 'years' +
CONVERT(varchar(10), MAX(DATEDIFF(MM, EMP.DOB, GETDATE())%12)) + 'months' AS MIN_AGE, 
CONVERT(varchar(10), AVG(DATEDIFF(MM, EMP.DOB, GETDATE())/12)) + 'years' +
CONVERT(varchar(10), AVG(DATEDIFF(MM, EMP.DOB, GETDATE())%12)) + 'months' as AVG_AGE
FROM dbo.tblEmployees as emp
group by emp.CentreCode,emp.ServiceType,emp.ServiceStatus
order by emp.CentreCode,emp.ServiceType,emp.ServiceStatus;












