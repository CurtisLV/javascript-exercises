const repeatString = function (string, num) {
    if (num < 0) {
        return 'ERROR';
    }

    let emptyString = '';
    for (i = 1; i <= num; i++) {
        emptyString += string;
    }
    return emptyString;
};

// Do not edit below this line
module.exports = repeatString;
