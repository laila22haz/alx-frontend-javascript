var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
var printTeacher = function (firstName, lastName) { return "".concat(firstName[0], ". ").concat(lastName); };
var functionName = printTeacher("laila", "hazmir");
console.log(functionName);
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var student1 = new StudentClass('laila', 'hazmir');
console.log(student1);
console.log(student1.displayName());
console.log(student1.workOnHomework());
