// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require ('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the name of this project?"
    },
    {
        type: "input",
        name: "description",
        message: "Describe this project?"
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter instructions on how this project will be used."  
    },
    {
        type: "input",
        name: "usage",
        message: "Please advise examples on how to use (screenshot or short video)." 
    },
    {
        type: "input",
        name: "credits",
        message: "Please enter list collaborators." 
    },
    {
        type: "checkbox",
        name: "license",
        message: "What License will you use?",
        choices: ["ISC", "NCSA", "lgpl_3.0", "gpl_3.0","MIT", "ZLIB", "Apache_2.0"]
    },
    {
        type: "input",
        name: "test",
        message: "How would someone test this application?" 
    },
    {
        type: "input",
        name: "contributing",
        message: "Please add example of what you might want to add." 
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your Github user name."
    },

    
]).then((data) => {
    fs.writeFile("ReadME.md", markdown(data), err => err ? console.log(err) : console.log('Read me created!')
)});