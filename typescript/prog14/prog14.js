"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmployNew_1 = require("../EmployNew/EmployNew");
var employs = [
    new EmployNew_1.Employ(1, "Charan", 50000),
    new EmployNew_1.Employ(2, "Ajay", 60000),
    new EmployNew_1.Employ(3, "Shanmukh", 70000)
];
employs.forEach(function (x) {
    console.log(x.empno + " " + x.name + " " + x.basic);
});
