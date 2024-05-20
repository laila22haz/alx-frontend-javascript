export default (set, startString) => {
    if (startString === '') {
        return '';
    }

    let resutl = [];
    for (const string of set) {
        if (string.startsWith(startString)) { 
            resutl.push(string.slice(startString.length));
        }
    }
    return resutl.join('-');
}