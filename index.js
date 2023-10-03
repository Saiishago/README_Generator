const fs = require('fs');
const inquirer = require('inquirer');
const figlet = require('figlet');

//var imageElement = require.createElement('image');


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
    name: 'Please enter your Github user name and or email address',
    messasge:'personalinformation'
    //There is a miscommunication between line 31 and 32.
  },
  {
    type: 'input',
    name: 'motivation',
    message: 'Why this project and what did you learn?',
  },
  {
    type: 'input',
    name: 'question',
    message: 'How can a user/viewer get in touch with you?',
  },
  {
    type: 'input',
    name: 'credits',
    message: 'Who contributed towards the completion of this project?',
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
- [Personal Information](#personalinformation)
- [Motivation](#motivation)
- [Question](#question)
- [Credits](#credits)
- [License](#license)

## Installation

${answers.installation}

## Usage

${answers.usage}

## Personal Information

${answers.github}

## Motivation

${answers.motivation}

## Question

${answers.question}

## Credits

${answers.credits}


## License

This project is licensed under the ${answers.license} License.
`;
}

//imageElement.src = 'assets/images/README.md preview file.png';
//imageElement.alt = 'Screenshot of the preview README file';
//document.body.appendChild(imageElement);

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

// Define badge information
// const badges = [
//   {
//       title: "MIT License",
//       color: 'green',
//   },
// ];

// Function to display a badge
// function displayBadge(badge) {
//   console.log(`Title: ${badge.title}`);
//   console.log(`Color: ${badge.color}`);
//   console.log('----------------------------------');
// }

// Display all badges
//badges.forEach(displayBadge);


// function displayLicenseBadge() {
//   const badgeText = 'MIT License';
//   const font = 'Small';

//   const options = {
//     font: font,
//   };
//   figlet(badgeText, options, function (err,data) {
//     if(err) {
//       console.log('Please fix me.');
//       console.dir(err);
//       return;
//     }
//     console.log(data);
//   });
// }
// displayLicenseBadge();

inquirer
  .prompt(questions)
  .then((answers) => {
    const readmeContent = writeToFile(answers);

    // Write the README file
    fs.writeFileSync('README.md', readmeContent);

    console.log('README.md file has been created!');
  })
  .catch((error) => {
    console.error('Error encounterd:', error);
  });
