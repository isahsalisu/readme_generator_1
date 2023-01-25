class readME {
    // The renderLicenseBadge method takes in a license type and returns a string that is a badge representing the license.

    // In the provided code, all the methods renderLicenseBadge, renderLicenseLink, renderLicenseSection, and generateReadme are static methods, which means they can be called on the class itself, rather than on an instance of the class.

    static renderLicenseBadge(license){

        const badges = {

            Mozilla: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',

            Boost: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',

            Apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',

            mit:  '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',

            isc: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',

            AGPLv3: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',


            Zlip:' [![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)'
        
        }
        return badges[license]
    }
    // The renderLicenseLink method takes in a license type and returns a string that is a link to the license's webpage.

    static renderLicenseLink(license){
        const licenselinks = {
            Mozilla: '[Mozilla](https://opensource.org/licenses/MPL-2.0)',
            Boost: '[Boost](https://www.boost.org/LICENSE_1_0.txt)',
            Apache: '[Apache](https://opensource.org/licenses/Apache-2.0)',
            mit:  '[MIT](https://opensource.org/licenses/MIT)',
            isc: '[ISC](https://opensource.org/licenses/ISC)',
            AGPLv3: '[AGPL v3](https://www.gnu.org/licenses/agpl-3.0)',
            Zlip: '[Zlip](https://opensource.org/licenses/Zlib)',

        }
        return licenselinks[license]
    }
    //The renderLicenseSection method takes in a license type and returns a string that says "Licensed under the license name license"

    static renderLicenseSection(license) {
        if(license){
            return `Licensed under the ${this.renderLicenseLink(license)} license`
        } else return ''
    }
    // The generateReadme method takes in an object called answers and returns a string that is a template for a README file. It uses the above methods to include the license badge and section in the README template.
    
    static generateReadme(answers) {
        return `
# ${answers.title}
 
${this.renderLicenseBadge(answers.license)}


## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)

 
## Description
${answers.description}

## Usage
${answers.usage}

## installation
${answers.installation}

## Contributing
${answers.contributing}

## Questions
reach me via: ${answers.email}\n
https://github.com/${answers.github}



## License
${this.renderLicenseSection(answers.license)}

      `
    }
}
module.exports = readME