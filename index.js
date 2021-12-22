// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// this const represents the htmlCode() function that's in the file html_test
const html_markup = require ('./src/html_test_template');

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

]).then((data) => {
    fs.writeFile("output/index.html", html_markup(data), err => err ? console.log(err) : console.log('HTML file created!')
)});
