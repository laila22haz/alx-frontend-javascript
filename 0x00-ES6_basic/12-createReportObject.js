export default function createReportObject(employeesList) {
    return {
        allEmployees: employeesList,
        getNumberOfDepartments: () => Object.keys(employeesList).length,
    };
    //console.log(allEmployees);
    //console.log(employeesList);
}
