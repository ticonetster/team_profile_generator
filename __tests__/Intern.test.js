// Testing the intern class
const Intern = require('../lib/Intern');

//Testing arguments
const name = 'Javier';
const id = 1;
const email = 'javier@gmail.com';
const school = 'javischool';
// Test intern constructor
describe('Intern Object', () => {
    it("Should return name, id, email and school of the intern", () => {
        const intern = new Intern(name, id, email, school);
        // Test name, id and email arguments
        expect(intern.name).toEqual(name);
        expect(intern.id).toEqual(id);
        expect(intern.email).toEqual(email);
        expect(intern.school).toEqual(school);
    });
});

// Test getName() Function
describe("getName() Function", () => {
    it("Should return the name of the intern", () => {
        const intern = new Intern(name, id, email);
        const getName = intern.getName();
        expect(getName).toEqual(name);
    });
});

// Test getId() Function
describe("getId() Function", () => {
    it("Should return the id of the intern", () => {
        const intern = new Intern(name, id, email);
        const getId = intern.getId();
        expect(getId).toEqual(id);
    });
});

// Test getEmail() Function
describe("getEmail() Function", () => {
    it("Should return the email of the intern", () => {
        const intern = new Intern(name, id, email);
        const getEmail = intern.getEmail();
        expect(getEmail).toEqual(email);
    });
});

// Test getSchool() Function
describe("getSchool() Function", () => {
    it("Should return the school of the intern", () => {
        const intern = new Intern(name, id, email, school);
        const getSchool = intern.getSchool();
        expect(getSchool).toEqual(school);
    });
});

// Test getRole() Function
describe("getRole() Function", () => {
    it("Should return the role of the intern", () => {
        const intern = new Intern(name, id, email, school);
        const getRole = intern.getRole();
        expect(getRole).toEqual("Intern");
    });
});