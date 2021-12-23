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
  const answer =   
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
    ]).then(answer => {
        console.log(answer);
    })
}
    questions()


// If intern has been selected than proceed to answer these questions
if (answer.role === "Engineer") {
    const githubAnswer = inquirer
    .prompt([
        {
        type: "input",
        name: "github",
        message: "Enter your Github user name.",
        },  
     ])
     
    const newEngineer = new Engineer(
        answer.name,
        githubAnswer.github,
        answer.id,
        answer.email,
    );
    newNewHireMemberData.push(newEngineer);

// If manager has been selected than proceed to answer these questions
}else if (answer.role === "Manager") {
    const managerAnswer = 
     inquirer.prompt([
        {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?",
        }, 
    ])
    
    const newManager = new Manager(
        answer.name,
        managerAnswer.officeNumber,
        answer.id,
        answer.email,
    );
    newNewHireMemberData.push(newManager);
// If intern has been selected than proceed to answer these questions.

}else if (answer.role === "Intern") {
    const internAnswer = 
     inquirer.prompt([
        {
        type: "input",
        name: "school",
        message: "Enter in the name of the university you attented.",
        },  
    ])

    const newIntern = new Intern(
        answer.name,
        internAnswer.school,
        answer.id,
        answer.email,
    );
    newNewHireMemberData.push(newIntern)
    ;
    
    }; //End of question
    
    const addNewMemberAnswer = inquirer
    .prompt([
        {
            type: "list",
            name: "addNewMember",
            message: "Please choose the following option.",
            choices: ["Create a team", "Add new member"]
        }
    ])

    if(addNewMemberAnswer.addNewMember === "Add new member") {
    
    }
    // return createTeam ();

    
    const createTeam = () => {
        console.log ("new member", newStaffMemberData)
        fs.writeFileSync("./front-end/index.html", generareTeam(newstaffMemberData),"utf-8"
        );
    }