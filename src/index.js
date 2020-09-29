const adapterFirst = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    0: "zero",
};

const adapterSecond = {
    0: "",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
};

const adapterThird = {
    2: "twenty",
    3: "thirty",
    4: "forty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighty",
    9: "ninety",
};

const converterLessOneHundred = (number) => {
    const arr = number.toString().split("");
    const secondNumber = Number(arr[1]) > 0 ? ` ${adapterFirst[arr[1]]}` : "";
    return `${adapterThird[arr[0]]}${secondNumber}`;
};

module.exports = function toReadable(number) {
    if (number < 10) {
        return adapterFirst[number];
    }
    if (number >= 10 && number < 20) {
        return adapterSecond[number];
    }
    if (number >= 20 && number < 100) {
        return converterLessOneHundred(number);
    }

    if (number % 100 === 0) {
        const arr = number.toString().split("");
        return `${adapterFirst[arr[0]]} hundred`;
    }

    const arr = number.toString().split("");
    return `${adapterFirst[arr[0]]} hundred ${toReadable(
        Number(arr.slice(1).join(""))
    )}`;
};
