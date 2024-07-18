const inquirer = require('inquirer');
const fs = require('fs');

// Function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
  
  ## Description
  
  ${data.description}
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Credits
  
  ${data.credits}
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
  ## License
  
  This project is licensed under the ${data.license} License.
  `;
  }

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), err => {
    if (err) {
      console.error('Error writing to README file:', err);
    } else {
      console.log(`Successfully generated ${fileName}`);
    }
  });
}

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Usage instructions:',
  },
  {
    type: 'input',
    name: 'credits',
    message: 'List any collaborators or resources used:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide guidelines for contributing:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Instructions for running tests:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-2-Clause', 'BSD-3-Clause', 'None'],
  },
];

// Function to initialize application
function init() {
  inquirer.prompt(questions)
    .then(answers => {
      writeToFile('README.md', answers);
    })
    .catch(error => {
      console.error('Error initializing application:', error);
    });
}

// Initialize application
init();