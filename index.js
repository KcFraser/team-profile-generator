//node modules
const fs = require('fs');
const generateTeam = require('./src/template.js');
const inquirer = require('inquirer');


// New hire modual
const Intern = require('./library/Intern.js');
const Engineer = require('./library/Engineer.js');
const Manager = require('./library/Manager.js');


//Answers to Questions array
const newStaffData = [];

//Array of questions asked to users
const questions = () => {
  const answers =   
   inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter your name.",
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email.",
        },
        {
            type: "input",
            name: "id",
            message: "Please enter your ID number.",
        }, {
            type: "list",
            name: "role",
            message: "Please select your role.",
            choices: ["Intern", "Engineer", "Manager"],
        },
    ]).then(answers => {
        console.log(answers);
    })
}

    questions()
//  console.log(answers);

// If intern has been selected than proceed to answer these questions
if (answer.role === "Engineer") {
    const githubAnswer = 
    inquirer.prompt([
        {
        type: "input",
        name: "github",
        message: "Enter your Github user name.",
        }  
    ]).then(answers => {
        console.log(answers);
    })
    githubAnswer()

    const newEngineer = new Engineer(
        answer.name,
        EngineerAnswer.school,
        answer.id,
        answer.email,
    );
    newNewHireMemberData.push(newEngineer);

// If manaer has been selected than proceed to answer these questions
}else if (answer.role === "Manager") {
    const managerAnswer = 
     inquirer.prompt([
        {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?",
        }  
    ]).then(answers => {
        console.log(answers);
    })

    const newManager = new Manager(
        answer.name,
        ManagerAnswer.school,
        answer.id,
        answer.email,
    );
    newNewHireMemberData.push(newManager);

}