function capitalize(str = "") {
    str = str.toString();
    let capitalizedWord = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalizedWord;
};

function reverse(str = "") {
    str = str.toString();
    let reversedWord = "";
    for (let i = str.length - 1; i >= 0; i--) {
    reversedWord += str.charAt(i);
    }
    return reversedWord;
};

function contains(str = "",substr = "") {
    str = str.toString();
    return str.includes(substr);
};

module.exports = {capitalize, reverse, contains};

/*

Can also export functions like this:

export function capitalize(str = "") {
    str = str.toString();
    let capitalizedWord = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalizedWord;
};

export function reverse(str = "") {
    str = str.toString();
    let reversedWord = "";
    for (let i = str.length - 1; i >= 0; i--) {
    reversedWord += str.charAt(i);
    }
    return reversedWord;
};

export function contains(str = "",substr = "") {
    str = str.toString();
    return str.includes(substr);
};
*/