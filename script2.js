'use strict';

let a = 1;
let b = 1;


let c = ++a;
alert(c); //префиксная форма отображает новое значение

let d = b++;
alert(d); //постфиксная форма отображает старое значение

let num_1 = 2 + ++a;
alert(num_1); // 2 + 3('а' ранее уже было увеличено и равнялось 2 + еще 1)

let num_2 = 2 + b++;
alert(num_2); // 2 + 2("b" был постфиксно увеличен на 1 и равнялось 2, плюс еще 1, но т.к. увеличение постфиксное значение берем старое)


alert(a);
alert(b); //Значения одинаковые, т.к. постфиксная и префиксная формы в нашем случае увеличили числа одинаковое кол-во раз

/* 2  */

let e = 2;
let x = 1 + (e *= 2); // 5(сначало выполняется умножение потом сложение)


/* 3  */

let num1 = -11;
let num2 = 7;

if (num1 >= 0 && num2 >= 0) {
    alert(num1 - num2);
}else if (num1 < 0 && num2 < 0) {
    alert(num1 * num2);
}else {
    alert(num1 + num2);
}


/* 4  */

function calc (a, b, c) {
    if (c == '+'){
        return a + b;
    }else if (c == '-'){
        return a - b;
    }else if (c == '*'){
        return a * b;
    }else if (c == '/'){
        return a / b;
    }
}

alert(calc(23, 12, '*'));
alert(calc(23, 12, '+'));
alert(calc(23, 12, '-'));
alert(calc(23, 12, '/').toFixed(2));

/* 5 */

function mathOperation(arg1, arg2, operation){
    switch (operation) {
        case '+':
            alert(arg1 + arg2);
            break;
        case '-':
            alert(arg1 - arg2);
            break;
        case '*':
            alert(arg1 * arg2);
            break;
        case '/':
            alert((arg1 / arg2).toFixed(2));
            break;
    }
}

mathOperation(23, 12, '*');
mathOperation(23, 12, '+');
mathOperation(23, 12, '-');
mathOperation(23, 12, '/');


/* 6 */

let user_num = prompt('Сколько денег вы хотите положить на ваш счет? ');

if (user_num.slice(-1) == 1){
    alert(`Ваша сумма в ${user_num} рубль успешно зачислена`);
}else if (user_num.slice(-1) == 2 || user_num.slice(-1) == 3 || user_num.slice(-1) == 4){
    alert(`Ваша сумма в ${user_num} рубля успешно зачислена`);
}else {
    alert(`Ваша сумма в ${user_num} рублей успешно зачислена`);
}













