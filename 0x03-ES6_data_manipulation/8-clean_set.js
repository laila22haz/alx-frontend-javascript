export default (set, startString) => {
    let resutl = [];
    for (const string of set) {
        if (string.startsWith(startString)) { 
            resutl.push(string.slice(startString.length));
        }
        if (startString === '') {
            return ' ';
        }
    }
    return resutl.join('-');
}