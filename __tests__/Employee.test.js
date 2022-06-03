// Testing the employee class
const Employee = require('../lib/Employee');

//Testing arguments
const name = 'Javier';
const id = 1;
const email = 'javier@gmail.com';
// Test employee constructor
describe('Employee Object', () => {
    it("Should return name, id and email of the employee", () => {
        const employee = new Employee(name, id, email);
        // Test name, id and email arguments
        expect(employee.name).toEqual(name);
        expect(employee.id).toEqual(id);
        expect(employee.email).toEqual(email);
    });
});

// Test getName() Function
describe("getName() Function", () => {
    it("Should return the name of the employee", () => {
        const employee = new Employee(name, id, email);
        const getName = employee.getName();
        expect(getName).toEqual(name);
    });
});

// Test getId() Function
describe("getId() Function", () => {
    it("Should return the id of the employee", () => {
        const employee = new Employee(name, id, email);
        const getId = employee.getId();
        expect(getId).toEqual(id);
    });
});

// Test getEmail() Function
describe("getEmail() Function", () => {
    it("Should return the email of the employee", () => {
        const employee = new Employee(name, id, email);
        const getEmail = employee.getEmail();
        expect(getEmail).toEqual(email);
    });
});

// Test getRole() Function
describe("getRole() Function", () => {
    it("Should return the role of the employee", () => {
        const employee = new Employee(name, id, email);
        const getRole = employee.getRole();
        expect(getRole).toEqual("Employee");
    });
});