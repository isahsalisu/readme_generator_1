const inquirer = require('inquirer')
const fs = require('fs')
const readME = require('./lib/ReadmeGen')

// Readme prompts to help generate readme
const querries = [
     {
      type: "input",
      name: "title",
      message: "What is the title of your project?"
    },
    {
      type: "input",
      name: "description",
      message: "Please provide a brief description of your project:"
    },
    {
      type: "input",
      name: "installation",
      message: "Please provide installation instructions:"
    },
    {
      type: "input",
      name: "usage",
      message: "Please provide usage instructions:"
    },
    {
      type: "input",
      name: "contributing",
      message: "Please provide contributing guidelines:"
    },
    {
      type: "input",
      name: "tests",
      message: "Please provide test instructions:"
    },
    {
      type: "list",
      name: "license",
      message: "Please choose a license for your project:",
      choices: [ "Mozilla", "Boost", "MIT", "GNU GPLv3", "Apache License 2.0"  , "Zlip" , "None" ],
        filter(val) {
           return val.toLowerCase();
    }
    },
    {
      type: "input",
      name: "github",
      message: "Please provide your GitHub username:"
    },
    {
      type: "input",
      name: "email",
      message: "Please provide your email address:"
    }
    
    
  
]


const createMarkDown = () => inquirer.prompt(querries)
  .then((answers) => {
    const gene = readME.generateReadme(answers)
    fs.writeFile('README.md', gene, (err) => {
      if (err) {
        console.log('Unable to generate Document', err)
      } else {
        console.log('README.md generated successfully!')
      }
    })
  })
  .catch((error) => {
    console.log(error)
  });

    

createMarkDown()
