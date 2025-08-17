Create proc prcFactorial
				@n INT
AS
BEGIN
		Declare 
			@res BIGINT = 1
		Declare @i INT = 1
		BEGIN TRY
			@res = (@n * (@n -1) * (@n-2) * (@n - 3) * (@n - 4));
			if(@res <> 0)
			BEGIN 
				Print 'NO ERROR'
				Print 'Factorial'
			END
			ELSE
			BEGIN
				print 'Error Occured'
				THROW 61000, 'Error occured', 1;
			END
			END TRY
			BEGIN CATCH
				print Error_Message()
			END CATCH
		END
END
