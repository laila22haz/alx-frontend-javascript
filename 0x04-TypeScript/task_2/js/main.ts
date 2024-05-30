interface DirectorInterface {
  workFromHome: () => string;
  getCoffeeBreak: () => string;
  workDirectorTasks: () => string;
}

interface TeacherInterface {
  workFromHome: () => string;
  getCoffeeBreak: () => string;
  workTeacherTasks: () => string;
}

class Director implements DirectorInterface {
  workFromHome() {
    return "Working from home";
  }
  
  getCoffeeBreak() {
    return "Getting a coffee break";
  }
  
  workDirectorTasks() {
    return "Getting to director tasks";
  }
  
}

class Teacher implements TeacherInterface {
  workFromHome() {
    return "Cannot work from home";
  }
  
  getCoffeeBreak() {
    return "Cannot have a break";
  }
  
  workTeacherTasks() {
    return "Getting to work";
  }
  
}

const createEmployee = (salary: string | number): Director | Teacher => {
  if (typeof(salary) === "number" && salary < 500) return new Teacher();
  return new Director();

}

const isDirector = (employee: Director | Teacher): boolean => 
{
    if (employee instanceof Director) return true;
    return false;
}

const executeWork = (employee: Director | Teacher) => {
  if (isDirector(employee)) return new Director().workDirectorTasks();
  return new Teacher().workTeacherTasks();
}

type Subjects = 'Math' | 'History';
const teachClass = (todayClass: Subjects): string => `Teaching ${todayClass}`;

console.log(teachClass('Math'));
console.log(teachClass('History'));


console.log(executeWork(createEmployee(254)));
console.log(executeWork(createEmployee(7894668)));





console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));