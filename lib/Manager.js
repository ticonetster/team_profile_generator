// Needs Employee class since we are exteding from it
const Employee = require('./Employee');

// Manager class extends from the Employee class
class Manager extends Employee {
    //Build the Manager class
    constructor (name, id, email, officeNum) {
        // Building parent class: Employee
        super (name, id, email); 
        // Adding office number
        this.officeNum = officeNum; 
    }

    // Get office number from prompt
    getOfficeNum () {
        return this.officeNum;
    }

    // Change the role from Employee to Manager
    getRole () {
        return "Manager";
    }
}

// Exportable 
module.exports = Manager; 