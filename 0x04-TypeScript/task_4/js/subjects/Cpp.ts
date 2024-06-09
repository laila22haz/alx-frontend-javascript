/// <reference path="Teacher.ts"/>
/// <reference path="Subject.ts"/>
namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }
  export class Cpp extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }
    getAvailableTeacher(): string {
      if (!this.teacher.experienceTeachingC) return 'No available teacher';
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}

const teacher = {
  firstName : "Laila",
  lastName : "Hazmir",
  experienceTeachingC : 12
}

console.log("*****CPP IS HERE******");
const cpp = new Subjects.Cpp(teacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log("*****REACT IS HERE******");
const react = new Subjects.React(teacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

console.log("*****JAVA IS HERE******");
const java = new Subjects.Java(teacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
