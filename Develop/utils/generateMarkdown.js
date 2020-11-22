// function to generate markdown for README
function generateMarkdown(data) {
  let userLicense =license(data)
  return `
  ${userLicense}

  ##Title:
  ${data.title}

  ##Description
  ${data.description}

  ##Installation
  ${data.installation}

  ##Usage
  ${data.usage}

  ##Contributing
  ${data.contributing}

  ##Test
  ${data.test}

  ##License
  ${data.license}

  ##Questions
  The following is my Github account:
  ${data.username}
  
  Please feel free to send me an email if you have any question(s) ${data.email}
`;

function license(data) {
  if (data.license === "MIT") {
    return `MIT License\n
    [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (data.license === "BSD2") {
    return `BSD2 License\n
    [![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
  } else if (data.license === "Mozilla") {
    return `Mozilla 2.0 License\n
    [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  } else if (data.license === "ISC") {
    return `ISC License\n
    [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
  } else {
    return " ";
  }
}

}

module.exports = generateMarkdown;

