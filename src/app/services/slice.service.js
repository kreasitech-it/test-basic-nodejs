exports.count = (str2) => {
    const str1 = 'abcdefghijklmnopqrstuvwxyz';
    const arr1 = str1.split('');

    const set = new Set(str2.split(''));
    const arr2 = [...set];

    return arr1.reduce((a, b) => a + arr2.includes(b), 0);
}