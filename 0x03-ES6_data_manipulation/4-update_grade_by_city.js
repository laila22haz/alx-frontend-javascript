export default (listStudent, city, newGrades) => {
    const list = listStudent.filter(Element => Element.location===city);
    return list.map(element => {
        element.grade = 'N/A';
        newGrades.map(el => {
            if (el.studentId === element.id) element.grade = el.grade;
        });
        return element;
    });
};
