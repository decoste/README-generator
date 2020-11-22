// function to generate markdown for README
function generateMarkdown(data) {
  const lc = licenseshield(data);
return `

${lc}

## Title:
${data.title}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Test
  ${data.test}

## License
  ${data.license}

## Questions
The following is my Github account:
${data.username}
  
Please feel free to send me an email if you have any question(s) ${data.email}
`;
  function licenseshield(data) {

    const userLicense = {
      Mozilla: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
      MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
      BSD2: "[![License: BSD](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
      ISC: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
      Apache: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }
    return userLicense[data.license];
  }

}

module.exports = generateMarkdown;

