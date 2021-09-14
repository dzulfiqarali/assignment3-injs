const add = (a, b) => {
    if (isNaN(a) || isNaN(b)) return false;
    if (Number.isInteger(a) !== true || Number.isInteger(b) !== true) {
        return parseFloat(a) + parseFloat(b);
    }
    return parseInt(a) + parseInt(b);
};

const sub = (a, b) => {
    if (isNaN(a) || isNaN(b)) return false;
    if (Number.isInteger(a) !== true || Number.isInteger(b) !== true) {
        return parseFloat(a) - parseFloat(b);
    }
    return parseInt(a) - parseInt(b);
};

const mul = (a, b) => {
    if (isNaN(a) || isNaN(b)) return false;
    if (Number.isInteger(a) !== true || Number.isInteger(b) !== true) {
        return parseFloat(a) * parseFloat(b);
    }
    return parseInt(a) * parseInt(b);
};

const div = (a, b) => {
    if (isNaN(a) || isNaN(b)) return false;
    if (Number.isInteger(a) !== true || Number.isInteger(b) !== true) {
        return parseFloat(a) / parseFloat(b);
    }
    return parseInt(a) / parseInt(b);
};

const calculator = (a, b, operator) => {
    if (isNaN(a) || isNaN(b)) return false;
    if (Number.isInteger(a) !== true || Number.isInteger(b) !== true) {
        if (operator === "+") {
            return parseFloat(a) + parseFloat(b);
        } else if (operator === "-") {
            return parseFloat(a) - parseFloat(b);
        } else if (operator === "*") {
            return parseFloat(a) * parseFloat(b);
        } else if (operator === "/") {
            return parseFloat(a) / parseFloat(b);
        } else {
            return "invalid operator"
        }
    } else {
        if (operator === "+") {
            return parseInt(a) + parseInt(b);
        } else if (operator === "-") {
            return parseInt(a) - parseInt(b);
        } else if (operator === "*") {
            return parseInt(a) * parseInt(b);
        } else if (operator === "/") {
            return parseInt(a) / parseInt(b);
        } else {
            return "invalid operator"
        }
    }
}

const print = (text) => {
    console.log(text)
}

module.exports = {
    add, sub, mul, div, calculator
}