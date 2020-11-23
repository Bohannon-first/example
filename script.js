let number = +prompt("Введите число");
let dec;
let num;

if (number > 0 && number > 9 && number < 100) {
    dec = (parseInt(number / 10)) * 10;
    num = number - dec;
    document.write(`Полный вид числа ${number}: ${dec} и ${num}`);
} else {
    document.write(`Неверно указано число`);
}