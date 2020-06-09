// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(teamName, name, id, jobTitle, email, officeNumber) {
    super(teamName);
    super(teamName);
    super(name);
    super(id);
    super(jobTitle);
    super(email);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber(arr) {
    return this.officeNumber;
  }
}

module.exports = Manager;
