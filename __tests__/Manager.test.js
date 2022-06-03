// Testing the manager class
const Manager = require('../lib/Manager');

//Testing arguments
const name = 'Javier';
const id = 1;
const email = 'javier@gmail.com';
const officeNum = '000-000-0000'
// Test manager constructor
describe('Manager Object', () => {
    it("Should return name, id, email and office phone number of the manager", () => {
        const manager = new Manager(name, id, email, officeNum);
        // Test name, id and email arguments
        expect(manager.name).toEqual(name);
        expect(manager.id).toEqual(id);
        expect(manager.email).toEqual(email);
        expect(manager.officeNum).toEqual(officeNum);
    });
});

// Test getName() Function
describe("getName() Function", () => {
    it("Should return the name of the manager", () => {
        const manager = new Manager(name, id, email, officeNum);
        const getName = manager.getName();
        expect(getName).toEqual(name);
    });
});

// Test getId() Function
describe("getId() Function", () => {
    it("Should return the id of the manager", () => {
        const manager = new Manager(name, id, email, officeNum);
        const getId = manager.getId();
        expect(getId).toEqual(id);
    });
});

// Test getEmail() Function
describe("getEmail() Function", () => {
    it("Should return the email of the manager", () => {
        const manager = new Manager(name, id, email, officeNum);
        const getEmail = manager.getEmail();
        expect(getEmail).toEqual(email);
    });
});

// Test getOfficeNum() Function
describe("getOfficeNum() Function", () => {
    it("Should return the office phone number of the manager", () => {
        const manager = new Manager(name, id, email, officeNum);
        const getOfficeNum = manager.getOfficeNum();
        expect(getOfficeNum).toEqual(officeNum);

    });
});

// Test getRole() Function
describe("getRole() Function", () => {
    it("Should return the role of the manager", () => {
        const manager = new Manager(name, id, email, officeNum);
        const getRole = manager.getRole();
        expect(getRole).toEqual("Manager");
    });
});