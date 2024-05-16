export default function getStudentIdsSum(list) {
    if (!Array.isArray(list)) return [];
    return list.reduce((element, currentValue) => {
        return element += currentValue.id;
    }, 0);
}