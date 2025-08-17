use EmpSample_#OK
go

--Select all departments where Total Salary of a Department is Greater than thrice the Average Salary for the department
SELECT DepartmentCode, sum(PresentBasic) FROM tblEmployees
GROUP BY DepartmentCode HAVING sum(PresentBasic) > 3*AVG(PresentBasic);

--Select all departments where Total Salary of a Department is Greater than twice the Average Salary for the department. And max basic for the department is at least thrice the Min basic for the department
SELECT DepartmentCode, sum(PresentBasic) 'Sum' FROM tblEmployees
GROUP BY DepartmentCode HAVING sum(PresentBasic) > 3*AVG(PresentBasic) AND MAX(PresentBasic) >= 3*MIN(PresentBasic);

--Select all the centers where max Length of the employee  name is twice the min length of the employee name
SELECT CentreCode FROM tblEmployees
group by CentreCode
HAVING MAX(lEN(Name)) = 2*MIN(LEN(Name));

-- SELECT 