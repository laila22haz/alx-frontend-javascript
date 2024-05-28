interface Students {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Students = 
  {
    firstName:'laila',
    lastName: 'hazmir',
    age: 22,
    location: 'morocco'
  };
const student2: Students = 
  {
    firstName:'mama',
    lastName: 'mama',
    age: 40,
    location: 'morocco'
  };

const studnetsList: Students[] = [student1, student2];

console.table(studnetsList, ['firstName', 'location']);
console.table(studnetsList);