// Complete the function "getFullName", "checkVoteEligiblity" in the below object

const employee = {
  firstName: "Ravi",
  lastName: "Teja",
  age: 16,
  id: 1122,
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
  checkVoteEligiblity: function () {
    if(this.age >=18){
      return "Eligible to vote";
    }
    else{
      return "Not Eligible to Vote";
    }
	
  }
};

