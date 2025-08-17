if exists (select * from sysobjects where name = 'prcEmployOut')
Drop proc prcEmployOut
GO

Create proc prcEmployOut
		@empno INT,
		@name varchar(30) OUTPUT,
		@gender varchar(30) OUTPUT,
		@dept varchar(30) OUTPUT,
		@desig varchar(30) OUTPUT,
		@basic numeric(9,2) OUTPUT
AS
BEGIN
	IF EXISTS (select * from Employ where empno = @empno)
	BEGIN
		select @name = namee, @gender = Gender, @dept = Dept, @desig = Desig , 
			@basic = basicpay
		from Employ WHERE Empno = @empno
		RETURN 1
	END
	RETURN 0
END

If exists (select * from sysobjects where name = 'prcEmployOutExec')
Drop proc prcEmployOutExec
GO

Create Proc prcEmployOutExec
		@empno INT
AS
BEGIN 
	Declare
		@ret INT,
		@name varchar(30),
		@gender varchar(10),
		@dept varchar(30),
		@desig varchar(30),
		@basic numeric(9,2)
		Exec @ret = prcEmployOut @empno, @name output, @gender OUTPUT, @dept OUTPUT, @desig OUTPUT,
				@basic OUTPUT
		if @ret =1
		BEGIN
			Print 'Name is ' + @name
			Print 'Gender is ' + @gender
			Print 'Department ' + @dept
			Print 'Designation ' + @desig
			print 'Basic ' + CAST(@basic AS varchar)
		END
		ELSE 
		BEGIN
				Print 'Record not found'
		END
END
GO

Exec prcEmployOutExec 1 
GO
