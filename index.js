// Required modules
const fs = require('fs'); 
const inquirer = require('inquirer');

// Profile constructors
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

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
                    console.log('\n', '\x1b[31mPlease enter the team manager\'s name\x1b[0m');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the team manager\'s ID',
            validate: entry => {
                if (entry){
                    return true;
                }else{
                    console.log('\n', '\x1b[31mPlease enter the team manager\'s ID\x1b[0m');
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
                    console.log('\n', '\x1b[31mWrong format!, Please enter the team manager\'s email. Ex: joe@email.com\x1b[0m');
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
                    console.log('\n', '\x1b[31mWrong format!, Please enter the team manager\'s office phone number. Ex: \(000\)000-0000\x1b[0m');
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
        console.log("\x1b[36m%s\x1b[0m",'Manager: ' + print);
    })
};

// Function to add Employees: Engineers or Interns
const addEmployee = () => {
    
    //Color the console text yellow
    console.log("\x1b[33m%s\x1b[0m", '#### Enter Team member\'s information ####');
    
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
                    console.log('\n', '\x1b[31mPlease enter the employee\'s name\x1b[0m');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the employee\'s ID',
            validate: entry => {
                if (entry){
                    return true;
                }else{
                    console.log('\n', '\x1b[31mPlease enter the employee\'s ID\x1b[0m');
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
                    console.log('\n', '\x1b[31mWrong format!, Please enter the employee\'s email. Ex: joe@email.com\x1b[0m');
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
                    console.log ('\n', '\x1b[31mPlease enter the employee\'s github username\x1b[0m')
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
                    console.log ('\n', '\x1b[31mPlease enter the intern\'s school name\x1b[0m')
                }
            }
        },
        {
            type: 'confirm',
            name: 'stop',
            message: 'Would you like to finish building your team?',
            default: true
        }
    ]).then(employeeInfo => {
        const {name, id, email, role, github, school, stop} = employeeInfo;
        
        var employee;

        // If the role is engineer build an Engineer profile else is an Intern
        if(role === 'Engineer'){
            employee = new Engineer(name, id, email, github);
            //Print Engineer to console
            const print = JSON.stringify(employee, null, " ");
            console.info("\x1b[36m%s\x1b[0m", 'Engineer: ' + print);
        }else{
            employee = new Intern(name, id, email, school);
            //Print Intern to console
            const print = JSON.stringify(employee, null, " ");
            console.info("\x1b[36m%s\x1b[0m", 'Intern: ' + print);
        }
        
        // Add the employee (either Engineer or Intern) to the array team
        team.push(employee);
        
        //Print Employee to console
        //const print = JSON.stringify(employee, null, " ");
        //console.info("\x1b[36m%s\x1b[0m", 'Team member: ' + print);

        if (stop) {
            return team;
        } else {
            return addEmployee(team); 
        }
    })
};

// Ask Manager questions
addManager()
    // Then the Employee questions
  .then(addEmployee)
  .catch(err => {
 console.log(err);
  });