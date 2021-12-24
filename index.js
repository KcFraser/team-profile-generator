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
const questions = async () => {
  const answer = await inquirer.prompt([
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
    ])
    console.log(answer);
    positionQs (answer);
}

// Ask questions based on the employee's position
const positionQs = async (answer) => {

    // If employee is an Engineer
    if (answer.role === "Engineer") {
        const githubAnswer = await inquirer.prompt([
            {
            type: "input",
            name: "github",
            message: "Enter your Github user name.",
            },  
        ])
        console.log(githubAnswer);
         
        /* const newEngineer = new Engineer(
            answer.email,
            answer.name,
            answer.id,
            answer.role,
            githubAnswer,
        );
        console.log(newEngineer); */
        //newNewHireMemberData.push(newEngineer); 

    // If employee is a Manager
    } else if (answer.role === "Manager") {
        const managerAnswer = await inquirer.prompt([
            {
            type: "input",
            name: "officeNumber",
            message: "What is your office number?",
            }, 
        ])
        console.log(managerAnswer);
        
        /* const newManager = new Manager(
            answer.name,
            managerAnswer.officeNumber,
            answer.id,
            answer.email,
        );
        console.log(newManager); */
        //newNewHireMemberData.push(newManager);

    // If employee is an intern
    } else if (answer.role === "Intern") {
        const internAnswer = await inquirer.prompt([
            {
            type: "input",
            name: "school",
            message: "Enter in the name of the university you attented.",
            },  
        ])
        console.log(internAnswer)
    
        /* const newIntern = new Intern(
            answer.name,
            internAnswer.school,
            answer.id,
            answer.email,
        );
        console.log(newIntern); */
        //newNewHireMemberData.push(newIntern);
    }
}

/*const addNewMemberAnswer = inquirer
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
*/
    
/* const createTeam = () => {
    console.log ("new member", newStaffMemberData)
    fs.writeFileSync("./front-end/index.html", generareTeam(newstaffMemberData),"utf-8"
    );
}  */

questions()
