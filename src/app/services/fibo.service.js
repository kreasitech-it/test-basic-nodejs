exports.generate = (n) => {
    let arr = [];
    let a = 0, b = 1, c = 1;
    let i = 1;

    arr.push(c);

    while (i <= n - 1) {
        c = a + b;

        if (c % 2 != 0) {
            arr.push(c);
            i++;
        }

        a = b;
        b = c;
    }

    return arr.sort((a, b) => (a > b ? -1 : 1));
}