const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
// array of questions for user
    const questions = [
    {
        type: "input",
        name: "title",
        message: "the project title:"
    },
    {
        type: "input",
        name: "description",
        message: "description of the project:"
    },
    {
        type: "input",
        name: "installation",
        message: "Project installation:"
    },
    {
        type: "input",
        name: "usage",
        message: "instructions for the user:"
    },
    {
        type: "input",
        name: "contributing",
        message: "contributing:"
    },
    {
        type: "input",
        name: "test",
        message: "test:"
    },
    {
        type: "list",
        name: "license",
        message: "which license is needed for this application?",
        choices: ['Mozilla', 'BSD2', 'ISC', 'MIT', 'Apache', 'None of the obove'],
    },
    {
        type: "input",
        name: "username",
        message: "Github link",
    },
    {
        type: "input",
        name: "email",
        message: "Email address:",
    }]

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Success!')
  );
}

// function to initialize program
function init() {
    
inquirer
.prompt(questions)
    .then((data) => {
    writeToFile('userREADME.md', generateMarkdown(data))
       
      });

}

// function call to initialize program
init();
