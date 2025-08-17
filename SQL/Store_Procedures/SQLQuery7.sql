create Table EmployPrc 
(
	Eno INT PRIMARY KEY,
	Name varchar(30),
	Gender varchar(10) constraint chk_dummy_gen check(gender in ('MALE', 'FEMALE')),
	Salary numeric(9,2) constraint chk_dummy_sal check(salary between 10000 and 80000)
)
GO

Create proc prcEmpInsNew
				@eno INT,
				@nam varchar(30),
				@gen varchar(10),
				@bas numeric(9,2)
AS
BEGIN
		Declare
			@erNo INT
			BEGIN TRY
			Insert into EmployPrc values( @eno,@nam, @gen, @bas)
			END TRY
			BEGIN CATCH
				select @erNo = ERROR_NUMBER()
				Print 'Error Number' + convert(varchar, @erNO)
				Print ERROR_MESSAGE()
		PRINT ERROR_SEVERITY()
		PRINT ERROR_LINE()
	END CATCH
END
GO

Exec PrcEmpInsNew 3,'Charan','MALE',30000
GO