export default function createIteratorObject(report) {
    return Object.values(report.allEmployees).join().split(",");
    //const array = [];
    //for (const index in report.allEmployees) {
        //for (const item of report.allEmployees[index]) {
            //array.push(item);
        //}
    //}
    //return array;
}