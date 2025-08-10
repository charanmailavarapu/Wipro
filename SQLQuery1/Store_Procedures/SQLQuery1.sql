if exists(select * from sysobjects where name = 'PrcSayhello')
Drop Proc PrcSayHello
go
create Proc prcSayHello
AS
BEGIN
	PRINT 'Welcome to T-SQL'
END
GO

Exec prcSayHello
GO