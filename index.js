// Write your solution in this file!
const employee = {
    name : " ",
    streetAddress : " "
}

function updateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    const newEmployee = {...employee};
    newEmployee[name] = streetAddress;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, streetAddress){
    employee[name] = streetAddress;
    return employee;
}

function deleteFromEmployeeByKey(employee, name) {
    let newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
}