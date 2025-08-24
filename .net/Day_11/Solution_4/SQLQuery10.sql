--Display Last Occurrence of given char in a string

SELECT LEN(LEFT('keerthi', LEN('keerthi') - CHARINDEX('e', REVERSE('keerthi')) + 1)) AS LastIndexOfE;
Go

--Take FullName as 'Venkata Narayana' and split them into firstName and LastName
DECLARE @FullName NVARCHAR(100) = 'Venkata Narayana';

SELECT 
    LEFT(@FullName, CHARINDEX(' ', @FullName) - 1) AS FirstName,
    RIGHT(@FullName, LEN(@FullName) - CHARINDEX(' ', @FullName)) AS LastName;

--  In Word 'misissipi' count no.of 'i' 
SELECT LEN('misissipi') - LEN(REPLACE('misissipi', 'i', '')) AS I_Count;

--4) Display the last day of next month
SELECT EOMONTH(DATEADD(MONTH, 1, GETDATE())) AS LastDayOfNextMonth;

--5) Display First Day of Previous Month

SELECT DATEFROMPARTS(YEAR(DATEADD(MONTH, -1, GETDATE())), 
                     MONTH(DATEADD(MONTH, -1, GETDATE())), 
                     1) AS FirstDayOfPreviousMonth;

--6) Display all Fridays of current month

WITH Dates AS (
    SELECT CAST(DATEFROMPARTS(YEAR(GETDATE()), MONTH(GETDATE()), 1) AS DATE) AS dt
    UNION ALL
    SELECT DATEADD(DAY, 1, dt)
    FROM Dates
    WHERE MONTH(dt) = MONTH(GETDATE())
)
SELECT dt AS Friday
FROM Dates
WHERE DATENAME(WEEKDAY, dt) = 'Friday'
OPTION (MAXRECURSION 31);
