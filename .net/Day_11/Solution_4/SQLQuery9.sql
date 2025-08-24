SET NOCOUNT ON
DROP database wiprojuly
GO
CREATE database wiprojuly 
GO

USE wiprojuly
go

if exists (select * from sysobjects where name = 'LeaveHistory')
DROP table LeaveHistory
go

if exists ( select * from sysobjects where name = 'Employ') 
drop table Employ
go

create table Employ 
(
	Empno INT constraint pk_employ_empno primary key,
	Namee Varchar(50) not null,
	Gender varchar(10) 
	constraint chk_employ_gender check(Gender IN('male' , 'female')),
	Dept varchar(30)
	constraint chk_employ_dept check(Dept IN('java', 'dotnet', 'python')),
	Desig varchar(30) not null,
	basicpay Numeric ( 9,2) constraint chk_employ_basicpay check(basicpay between 10000 and 90000)

) 
go

Insert Into Employ(Empno, Namee, Gender, Dept, Desig, basicpay)
values(1,'Yamini','FEMALE','Dotnet','Expert',88222),
(2,'Anusha','FEMALE','Java','Manager',82222),
(3,'Uday','MALE','Python','Expert',68833),
(4,'Datta','MALE','Dotnet','Manager',88322),
(5,'Mahi','FEMALE','Python','Expert',88223)
go

Create table LeaveHistory 
(
	LeaveId Int identity(1,1) constraint pk_LeaveHistory_leaveid Primary key,
	EmpNo Int constraint FK_Employ_Empno Foreign key (Empno) references Employ(Empno),
	LeaveStartDate Date,
	LeaveEndDate Date,
	noOfDays Int,
	LossOfPay numeric (9,2)
)

Insert into LeaveHistory(EmpNo,LeaveStartdate,LeaveEndDate)
values(1,'08/02/2025','08/05/2025'),
      (2,'09/03/2025','09/22/2025')
GO








