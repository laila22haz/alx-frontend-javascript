export default (set, startString) => {
    for (const string of set) {
        if (string.startsWith(startString)) {
            return true;
        }
        console.log(string);
    }
}