// array of questions for user
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");


inquirer
.prompt([
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
        choices: ['Mozilla', 'Apache', 'GPL', 'GNU', 'MIT', 'None of the obove'],
    },
    {
        type: "input",
        name: "username",
        message: "Github username:",
    },
    {
        type: "input",
        name: "email",
        message: "Email address:",
    }])
.then((questions) => {
    console.log(questions)
});
