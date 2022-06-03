// Testing the engineer class
const Engineer = require('../lib/Engineer');

//Testing arguments
const name = 'Javier';
const id = 1;
const email = 'javier@gmail.com';
const github = 'javigithub';
// Test engineer constructor
describe('Engineer Object', () => {
    it("Should return name, id, email and github of the engineer", () => {
        const engineer = new Engineer(name, id, email, github);
        // Test name, id and email arguments
        expect(engineer.name).toEqual(name);
        expect(engineer.id).toEqual(id);
        expect(engineer.email).toEqual(email);
        expect(engineer.github).toEqual(github);
    });
});

// Test getName() Function
describe("getName() Function", () => {
    it("Should return the name of the engineer", () => {
        const engineer = new Engineer(name, id, email);
        const getName = engineer.getName();
        expect(getName).toEqual(name);
    });
});

// Test getId() Function
describe("getId() Function", () => {
    it("Should return the id of the engineer", () => {
        const engineer = new Engineer(name, id, email);
        const getId = engineer.getId();
        expect(getId).toEqual(id);
    });
});

// Test getEmail() Function
describe("getEmail() Function", () => {
    it("Should return the email of the engineer", () => {
        const engineer = new Engineer(name, id, email);
        const getEmail = engineer.getEmail();
        expect(getEmail).toEqual(email);
    });
});

// Test getGithub() Function
describe("getGithub() Function", () => {
    it("Should return the github of the engineer", () => {
        const engineer = new Engineer(name, id, email, github);
        const getGithub = engineer.getGithub();
        expect(getGithub).toEqual(github);
    });
});

// Test getRole() Function
describe("getRole() Function", () => {
    it("Should return the role of the engineer", () => {
        const engineer = new Engineer(name, id, email, github);
        const getRole = engineer.getRole();
        expect(getRole).toEqual("Engineer");
    });
});