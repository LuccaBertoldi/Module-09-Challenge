function renderLicenseBadge(license) {
  if (license && license !== 'None') {
    return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// Function to generate the license link
function renderLicenseLink(license) {
  if (license && license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

// Function to generate the license section of README
function renderLicenseSection(license) {
  if (license && license !== 'None') {
    return `## License

This project is licensed under the ${license} License. See the [LICENSE](LICENSE) file for details.

`;
  }
  return '';
}



// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

${renderLicenseLink(data.license)}
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Contributing](#contributing)
* [Tests](#tests)

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

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;