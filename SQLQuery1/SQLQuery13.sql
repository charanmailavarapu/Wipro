use wiprojuly
go
--INNER JOIN
SELECT e.Empno, Namee, Dept, basicpay, 
	lh.LeaveId, LeaveStartDate, LeaveEndDate
from Employ e INNER JOIN LeaveHistory lh ON e.Empno = lh.Empno;

--INNER JOIN on 3 tables
SELECT A.AgentId,  FirstName, LastName, City, State,
	P.PolicyId, AppNumber, ModalPremium, AnnualPremium, PaymentModeId
FROM Agent a INNER JOIN AgentPolicy ap ON a.AgentId = ap.AgentId;