use Bank
GO
create table Login 
(
	ID int primary key IDENTITY(1,1),
	UserName varchar(30) UNIQUE,
	Password varchar(30)
)