Create proc prcDivision
		@a INT,
		@b INT
AS
BEGIN
	BEGIN TRY
		Set @a = 5;
		Set @b = @a / 0
		print @b
	END TRY
	BEGIN CATCH
		print 'Error is '
		print ERROR_MESSAGE()
	END CATCH
END
GO

EXEC prcDivision 10,0
GO
	
create proc prcEvenCheck
			@n INT
AS
BEGIN
		Declare
			@res INT
		Begin TRY
				if @n % 2 = 0
				BEGIN
					PRINT 'NO ERROR'
					PRINT 'EVEN NUMBER'
				END
				ELSE 
				BEGIN
					print 'ODD NUMBER - THROWING ERROR'
					RAISERROR('Error occurred', 16, 1)
				END
		END TRY
		BEGIN CATCH
				Print Error_Message()
		END CATCH
END
GO
Exec prcEvenCheck 2;
GO
