export default (set, startString) => {
    if (typeof startString !== 'string') return "";

    if (startString === '') return '';
    let resutl = [];
    for (const string of set) {
        if (typeof string !== 'string') continue;
        if (string.startsWith(startString)) { 
            resutl.push(string.slice(startString.length));
        }
    }
    return resutl.join('-');
}