// Needs employee class since we are exteding from it
const Employee = require('./Employee');

// Intern class extends from the Employee class
class Intern extends Employee  {
    // Build the Intern class
    constructor (name, id, email, school) {
        // Building parent class: Employee
        super (name, id, email); 
        // Adding school name
        this.school = school; 
    }

    // Get school name from prompt
    getSchool () {
        return this.school;
    }

    // Change the role from Employee to Intern
    getRole () {
        return "Intern";
    }
}

// Exportable 
module.exports = Intern;