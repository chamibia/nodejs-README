// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `[![License](https://img.shields.io/badge/license-${license}-blue.svg)
    `
  } else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents
----------------------------------------------------------------
- ## [Description](#Description)
- ## [Installation](#Installation)
- ## [Usage](#usage)
- ## [Contributors](#Contributors)
- ## [Testing Application](#Testing)
- ## [License](#License)
- ## [Username](#Username)
- ## [Email](#Email)

--------------------------------------------------

## Description
${data.description}

## Installation
${data.installation}

## Usage 
${data.usage}

## Contributors
${data.contributors}

##Testing Application
${data.testing}

## License 
${renderLicenseBadge(data.license)}

## Username
${data.username}

## Email
${data.email}

`;
}

module.exports = generateMarkdown;
