// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project title for the repository? (Required)",
      //confirm that value is there
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter project name!");
          return false;
        }
      },
    },

    {
      type: "input",
      name: "description",
      message:
        "Would you like to add a description to your repository?(Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a description for your repository");
          return false;
        }
      },
    },
    //confirm installation process
    {
      type: "confirm",
      name: "confirmInstallation",
      message: "Please confirm if there is an installation process?",
    },
    {
      type: "input",
      name: "installation",
      message: "Please provide installation instructions.",
      when: ({ confirmInstallation }) => {
        if (confirmInstallation) {
          return true;
        } else {
          return false;
        }
      },
    },
    //confirm
    {
      type: "confirm",
      name: "confirmUsage",
      message: "Would you like to provide instructions for your apllication?",
    },
    {
      type: "input",
      name: "instructions",
      message:
        "Please provide any instructions required for using your application",
      when: ({ confirmUsage }) => {
        if (confirmUsage) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "confirmContributors",
      message: "Did any other developers contribute to your repository?",
    },
    {
      type: "input",
      name: "contributors",
      message:
        "Please provide details of how other developers have contributed to your project",
      when: ({ confirmContributors }) => {
        if (confirmContributors) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "confirmTest",
      message: "Is there any tests?",
    },
    {
      type: "input",
      name: "testing",
      message: "How are users able to test your application?",
      when: ({ testConfirm }) => {
        if (testConfirm) {
          return true;
        } else {
          return false;
        }
      },
    },
    //create checkbox to pick licenses
    {
      type: "checkbox",
      name: "license",
      message: "Please pick a license.",
      choices: [
        "MIT",
        "IPL-1.0",
        "NASA-1.3",
        "NPOSL-3.0",
        "OSL-3.0",
        "MPL-2.0",
        "GPL-2.0",
        "BSD-3-Clause",
        "CDDL-1.0",
      ],
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please select a license.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "username",
      message: "What is your Github username? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your Github username.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "questions",
      message: "Please provide any details if you would like to be contacted.",
      validate: (nameInput) => {
        if (nameInput) {
          return false;
        } else {
          return false;
        }
      },
    },
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
//init();