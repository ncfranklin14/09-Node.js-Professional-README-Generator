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
    ]).then((data) => {
        const filename = `${data.title.toUpperCase().split(' ').join('')}.md`;
        //   //   use appendfile or writefile
        fs.writeFile(filename, `# ${data.title}\
    ![license](https://img.shields.io/badge/license-${data.license}-brightgreen)
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Description
${data.description} 
    
## Installation
${data.installation}
    
## Usage
${data.usage}
    
## License
${data.license}
    
## Contributing
${data.contributing}
    
## Tests
${data.tests}
    
## Questions
${data.questions}
    `,
            (err) =>
                err ? console.error(err) : console.log('Commit logged!')
        )
    });