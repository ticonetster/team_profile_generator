//Based class
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }

    // Get name from prompt
    getName () {
        return this.name;
    }

    // Get id from prompt
    getId () {
        return this.id;
    }   

    // Get email from prompt
    getEmail () {
        return this.email;
    }

    // Get role from prompt 
    getRole () {
        return 'Employee'; 
    }
};

// Exportable 
module.exports = Employee; 