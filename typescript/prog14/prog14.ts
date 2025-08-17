import {Employ} from "../EmployNew/EmployNew";
const employs = [
    new Employ(1, "Charan", 50000),
    new Employ(2, "Ajay", 60000),
    new Employ(3, "Shanmukh", 70000)
];

employs.forEach(x => {
    console.log(x.empno + " " + x.name + " " + x.basic)
})