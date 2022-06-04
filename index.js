// Required modules
const fs = require('fs'); 
const inquirer = require('inquirer');

// Profile constructors
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//Logger
const Logger = require('./lib/logger');
const { default: generate } = require('@babel/generator');
const log = new Logger();

//HTML constructors
const generateHTML = require('./src/generateHTML');

// Team array
const team = [];

// Function to add the Manager
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the team manager\'s name',
            validate: entry => {
                if (entry){
                    return true;
                }else{
                    log.red('\n', 'Please enter the team manager\'s name');
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'id',
            message: 'Enter the team manager\'s ID',
            validate: entry => {
                if (entry){
                    return true;
                }else{
                    log.red('\n', 'Please enter the team manager\'s ID number');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the team manager\'s email',
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid){
                    return true;
                }else{
                    log.red('\n', 'Wrong format!, Please enter the team manager\'s email. Ex: joe@email.com');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNum',
            message: 'Enter the team manager\'s office phone number',
            validate: phone => {
                valid = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone)
                if (valid){
                    return true;
                }else{
                    log.red('\n', 'Wrong format!, Please enter the team manager\'s office phone number. Ex: (000)000-0000');
                    return false;
                }
            }
        }
    ]).then(managerInfo => {
        const  { name, id, email, officeNum } = managerInfo; 
        const manager = new Manager (name, id, email, officeNum);

        // Add the manager to the array team
        team.push(manager);
        const print = JSON.stringify(manager, null, " ");
        log.cyan('Manager: ' + print);
    })
};

// Function to add Employees: Engineers or Interns
const addEmployee = () => {
    
    //Color the console text yellow
    log.yellow('#### Enter Team member\'s information ####');
    
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: 'Enter the employee\'s role',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'Enter the employee\'s name',
            validate: entry => {
                if (entry){
                    return true;
                }else{
                    log.red('\n', 'Please enter the employee\'s name');
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'id',
            message: 'Enter the employee\'s ID',
            validate: entry => {
                if (entry){
                    return true;
                }else{
                    log.red('\n', 'Please enter the employee\'s ID number');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the employee\'s email',
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid){
                    return true;
                }else{
                    log.red('\n', 'Wrong format!, Please enter the employee\'s email. Ex: joe@email.com');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter the employee\'s github username',
            when: (entry) => entry.role === "Engineer",
            validate: entry => {
                if (entry) {
                    return true;
                } else {
                    log.red('\n', 'Please enter the employee\'s github username')
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter the intern\'s school name',
            when: (entry) => entry.role === "Intern",
            validate: entry => {
                if (entry) {
                    return true;
                } else {
                    log.red('\n', 'Please enter the intern\'s school name')
                }
            }
        },
        {
            type: 'confirm',
            name: 'stop',
            message: 'Would you like to finish building your team?'
        }
    ]).then(employeeInfo => {
        const {name, id, email, role, github, school, stop} = employeeInfo;
        
        var employee;

        // If the role is engineer build an Engineer profile else is an Intern
        if(role === 'Engineer'){
            employee = new Engineer(name, id, email, github);
            //Print Engineer to console
            const print = JSON.stringify(employee, null, " ");
            log.cyan('Engineer: ' + print);
        }else{
            employee = new Intern(name, id, email, school);
            //Print Intern to console
            const print = JSON.stringify(employee, null, " ");
            log.cyan('Intern: ' + print);
        }
        
        // Add the employee (either Engineer or Intern) to the array team
        team.push(employee);
        
        //Print Employee to console
        //const print = JSON.stringify(employee, null, " ");
        //log.cyan('Team member: ' + print);

        if (stop) {
            const print = JSON.stringify(team, null, " ");
            log.cyan('Team: ' + print);
            return team;
        } else {
            return addEmployee(team); 
        }
    })
};

//Write to File function
const writeToFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the page has been created 
        } else {
            console.log("Your team profile has been successfully created! Please check out the /dist/index.html")
        }
    })
}
// Ask Manager questions first
addManager()
// Then the Employee questions
.then(addEmployee)
// Then when the addEmployee function is returned it will contain the complete team array
// Then pass the team array to generateHTML function in /src/generateHTML.js
.then(arrayToHTML => {
    return generateHTML(arrayToHTML);
})
//Then pass generateTeamHTML (which is the complete team profile html raw data) to the writeToFile function here
.then(HTMLRawToFile => {
    return writeToFile(HTMLRawToFile);
})
.catch(err => {
    console.log(err);
});