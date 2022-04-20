const fs = require('fs');
const inquirer = require('inquirer');

inquirer
.prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Provide a short description explaining the what, why, and how of your project.',
      name: 'description'
    },
    {
      type: 'input',
      message: 'If your README is long, add a Table of Contents',
      name: 'table of contents',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'What Provide instructions and examples for use. Include screenshots as needed.',
        name: 'usage'
      },
      {
        type: 'list',
        message: 'Choose a lincense.',
        choices: ["BSD", "MIT", "GPL."],
        name: 'license',
      },
      {
        type: 'input',
        message: 'Provide a guidelines for how other developers can contirbute to your porject',
        name: 'contributing',
      },
      {
        type: 'input',
        message: 'Provide examples of how to run tests on your application',
        name: 'tests',
      },
      {
        type: 'input',
        message: 'Provide your email and github link so that users can reach you if they have any questions',
        name: 'questions',
      },
  ])  