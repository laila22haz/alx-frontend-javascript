interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;

}

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);


interface printTeacherFunction {
  (firstName: string, lastName: string): string; // this interface for function not for object
}
const printTeacher: printTeacherFunction = (firstName, lastName) => `${firstName[0]}. ${lastName}`;

const functionName = printTeacher("laila", "hazmir");
console.log(functionName);

interface Students {
  firstName: string;
  lastName: string;
  workOnHomework: () => string;
  displayName: () => string;
  
}

class StudentClass implements Students {
  firstName: string;
  lastName: string;
  
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return "Currently working";
  }

  displayName() {
    return this.firstName;
  } 
}

const student1 = new StudentClass('laila', 'hazmir');
console.log(student1);
console.log(student1.displayName());
console.log(student1.workOnHomework());