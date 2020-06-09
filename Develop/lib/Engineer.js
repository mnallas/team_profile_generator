// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(teamName, name, id, jobTitle, email, github) {
    super(teamName);
    super(name);
    super(id);
    super(jobTitle);
    super(email);
    this.github = github;
  }

  getGithub(arr) {
    return this.github;
  }
}

module.exports = Engineer;
