// explain express comes from node_modules that comes from writing npm install express -s
// Take a look inside the folder!
const express = require("express");
const app = express();
const path = require("path");
const addHead = require("./add_head");

app.get("/", (request, response) => {
    response.send(`
    ${addHead('Home')}
    <body>
      <h1>My portfolio</h1>
    </body>
  `);
});

app.get("/contact", (request, response) => {
    response.send(`
    ${addHead('Contact')}
    <body>
        <h1>Contact</h1>
        <a href="https://www.linkedin.com/in/jai-makena-38988029/">Social Media</a>
        <p>Phone: 26207672</p>
    </body>
  `);
});

app.get("/education", (request, response) => {
    response.send(`
    ${addHead('Education')}
    <body>
        <h1>Education</h1>
        <ul>
        <li>BTech</li>
        <li>MBA</li>
    </body>
  `);
});

app.get("/skills", (request, response) => {
    response.send(`
    ${addHead('Skills')}
    <body>
        <h1>Skills</h1>
        <p>My skillset</p>
        <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JAVASCRIPT</li>
        <li>SQL</li>
        </ul>
    </body>
  `);
});

app.get("/projects", (request, response) => {
    const codeUrl = 'https://github.com/jaimakena/hyf-homework/blob/master/html-css/week1/Index.html';
    const previewUrl = 'https://htmlpreview.github.io/?';
    response.send(`
    ${addHead('Projects')}
  <body>
  <h1>Projects</h1>
  <ul>
  <li>
  <h3>My Project 1</h3>
  <a class="previewUrl codeUrl" width=1000 height=500 src=${previewUrl + codeUrl} title="Project-1"></a>
  <img/> 
  </li> 
  <li>My Project 2</li>
  <li>My Project 3</li>
  </ul>
  </body>
`);
});

app.get('/test-report', function (requset, response) {
    response.sendFile(path.join(__dirname + '/test-report.html'));
});

const server = app.listen(3000, function () {
    console.log(`> Ready on http://localhost:3000`);
});

// Export app for testing purposes
module.exports = app;
