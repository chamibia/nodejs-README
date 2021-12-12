// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `[![License](https://img.shields.io/badge/License-license-blue.svg)](https://opensource.org/licenses/license)

    https://opensource.org/licenses/license
    `
  } else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents
[Description](#description)
[Installation Instructions](#installation)
[Usage Instructions](#instructions)
[Contributors](#contributors)
[Testing Application](#testing)
[License](#license)
[Username](#username)
[Contact Details](#confirmDetail)

--------------------------------------------------

## Description
${data.description}

## Installation
${data.confirmInstallation}

## Usage Instructions
${data.instructions}

## Contributors
${data.contributors}

##Testing Application
${data.testing}

## License 
${renderLicenseBadge(data.license)}

## Username
${data.username}

## Contact Details
${data.confirmDetail}

`;
}

module.exports = generateMarkdown;
