if exists(select * from sysobjects where name = 'prcEmpSearch')
Drop proc prcEmpSearch
GO
create proc prcEmpSearch
	@empno INT
AS 
BEGIN
Declare
	@name varchar(30),
	@dept varchar(30),
	@gender varchar(10),
	@desig varchar(30),
	@basic Numeric(9,2)
BEGIN
if exists (select * from Employ where empno = Empno)
BEGIN
	select @name = Namee, @gender = Gender, @dept = Dept, @desig = Desig , 
			@basic = basicpay
	FROM Employ where Empno = @empno
	Print 'Employ Name ' + @name
	Print 'Gender ' + @gender
	Print 'Department: ' + @dept
	Print 'Designation ' + @desig
	Print 'Basic ' + convert(varchar,@basic)
END
ELSE 
BEGIN
	Print 'Record not Found'
END
END
END

Exec prcEmpSearch 1
GO


