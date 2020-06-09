// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(teamName, name, id, jobTitle, email, school) {
    super(teamName);
    super(teamName);
    super(name);
    super(id);
    super(jobTitle);
    super(email);
    this.school = school;
  }

  getSchool(arr) {
    return this.school;
  }
}

module.exports = Intern;
