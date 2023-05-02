// Write your solution in this file!
const employee = {
    name: "value1",
    streetAddress: "value2",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const employeeClone = {...employee};
    employeeClone[key] = value;
    return employeeClone;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
};

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
 };

 function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
 };
 