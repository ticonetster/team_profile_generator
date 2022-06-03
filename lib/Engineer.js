// Needs Employee class since we are exteding from it
const Employee = require("./Employee");

// Engineer class extends from the Employee class
class Engineer extends Employee {
    // Build the Engineer class
    constructor (name, id, email, github) {
        // Building parent class: Employee
        super (name, id, email);
        // Adding github
        this.github = github; 
    }

    // Get github from prompt
    getGithub () {
        return this.github;
    }

     // Change the role from Employee to Engineer
    getRole () {
        return "Engineer";
    }
}

// Exportable 
module.exports = Engineer; 