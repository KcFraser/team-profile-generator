const generateMarkdown = (data) => {
    return `# ${data.title}
## Table of Contents
* [Descrition](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Credit](#Credit)
* [License](#License)
* [Contributing](#Contributing)
* [Test](#Test)
* [Github](#Github)
-----------------------------------------------------------------
## Descrition
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Credits
${data.credits}
## License
[![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})
## Contributing
${data.contributing}
## Test
${data.test}
## Github
https://github.com/${data.github}  
    
`
}

module.exports = generateMarkdown