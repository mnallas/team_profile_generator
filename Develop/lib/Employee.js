// TODO: Write code to define and export the Employee class

class Employee {
  constructor(teamName) {
    this.teamName = teamName;
    this.name = name;
    this.id = id;
    this.jobTitle = jobTitle;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getTitle() {
    return this.jobTitle;
  }

  getEmail() {
    return this.email;
  }
}

module.exports = Employee;
