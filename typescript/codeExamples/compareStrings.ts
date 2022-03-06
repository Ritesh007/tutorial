// Compare two version strings, the key to this problem is to append unused version substrings to existing version
const str1 = 'rit';
const str2 = 'ritest';



const compare = (arg0, arg1)  => {
    const tempArray = [];
    const str1 = `${arg0}`.split('');
    const str2 = `${arg1}`.split('');
    if (str2.length > str1.length) {
        str2.forEach((item, i) => {
            if (item !== str1[i]) {
                tempArray.push(item);
            }
        })
    }
    return tempArray.toString();
};


console.log(compare(str1, str2));