interface IEmploy {
    empno : number;
    name : string;
    salary : number;
}

const employ1 : IEmploy = {
    empno: 101,
    name: "Charan",
    salary: 50000
};

console.log(`Employ No: ${employ1.empno}, Name: ${employ1.name}, Salary: ${employ1.salary}`);