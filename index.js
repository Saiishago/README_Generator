const fs = require('fs');
const inquirer = require('inquirer');


const questions = [
  {
    type: 'input',
    name: 'projectName',
    message: 'Enter your project name:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a project description:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage instructions:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter contributing guidelines:',
  },
  {
    type: 'input',
    name: 'questions',
    message: 'How can a user/viewer get in touch with you?',
  },
  {
    type: 'input',
    name: 'license',
    message: 'Enter your project license:',
  },
];

function writeToFile(answers) {
  return `
# ${answers.projectName}

${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Questions](#questions)
- [License](#license)

## Installation

${answers.installation}

## Usage

${answers.usage}

## Contributing

${answers.contributing}

## Questions

${answers.questions}

## License

This project is licensed under the ${answers.license} License.
`;
}

const license = [
    "MIT License",
    "GNU General Public License (GPL) v3",
    "Apache License 2.0",
    "GNU Affero General Public License (AGPL) v3",
    "Mozilla Public License 2.0",
    "Unlicense",
    "GNU Lesser General Public License (LGPL) v3",
    "Eclipse Public License (EPL)"
];

inquirer
  .prompt(questions)
  .then((answers) => {
    const readmeContent = writeToFile(answers);

    // Write the README file
    fs.writeFileSync('README.md', readmeContent);

    console.log('README.md successfully created!');
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });
