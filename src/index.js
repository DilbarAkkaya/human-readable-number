module.exports = function toReadable (number) {
let arrayOfOneAndTwoDigitNumber = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight','nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen','seventeen', 'eighteen', 'nineteen'];
let arrayOfTyes = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy','eighty', 'ninety'];

if (number < 20) {
return number = arrayOfOneAndTwoDigitNumber[number];
}   
if (number >= 20 && number <= 99) {//если число в этом промежутке
    if (number % 10 === 0) {// и остаток от деления равно 0, т.е.это десятки, то 
    return number = arrayOfTyes[number / 10]; //то возвращаем соответствующий  индекс из массива однозназ и двухзнач цифрами
    } else {//иначе, т.е. числа, кроме десяток, возвращаем соответствующие индексы первой и вторых цифр из массивов 
    return `${arrayOfTyes[Math.floor(number / 10)]} ${arrayOfOneAndTwoDigitNumber[number % 10]}`;
    }
}
if (number >= 100 && number <= 999) {
    if (number % 100 === 0) {// если сотки, возвращаем значение индекса из массива
    return `${arrayOfOneAndTwoDigitNumber[number / 100]} hundred`;
    } else if (number % 10 === 0) {
    return `${arrayOfOneAndTwoDigitNumber[Math.floor(number / 100)]} hundred ${arrayOfTyes[(Math.floor(number / 10)) % 10]}`;
    } else if (number % 100 < 20) {
    return `${arrayOfOneAndTwoDigitNumber[Math.floor(number / 100)]} hundred ${arrayOfOneAndTwoDigitNumber[number % 100]}`;
    } else {
    return `${arrayOfOneAndTwoDigitNumber[Math.floor(number / 100)]} hundred ${arrayOfTyes[(Math.floor(number / 10)) % 10]} ${arrayOfOneAndTwoDigitNumber[number % 10]}`;
    }
}
}