//1
let name = prompt ('Имя');
let age = prompt ('Возраст');
let city = prompt ('Город');
let phone = prompt ('Телефон');
let email = prompt ('Электронная почта');
let company = prompt ('Место работы');
console.log (name, age, city, phone, email, company);
//2
let birthday = 2021 - age;
console.log (birthday);
//3
let number = prompt ('Введите 6 цифр');
let summnumber1 = number[0] + number[1] + number[2];
let summnumber2 = number[3] + number[4] + number[5];
	    if(summnumber1 == summnumber2) {
        result = "Да";
    } else {
        result = "Нет";
    }
console.log (result);	
//4
let a4 = prompt("1, 0 или -3?");
    a4 = Number(a4);
    
    if(a4 > 0) {
        result4 = "Верно";
    } else {
        result4 = "Не верно";
    }
console.log (result4);
//5
let a5 = 10;
let b5 = 2;
let summ = a5 + b5;
let razn = a5 - b5;
let proiz = a5 * b5;
let chas = a5 / b5;
	if (summ > 1) {
        kvadrat = Math.pow(summ, 2);
    }
console.log (summ, razn, proiz, chas, kvadrat);
//6
if (((a5 > 2) && (a5 < 11)) || ((b5 >= 6) && (b5 < 14))) {
    result6 = "Верно";
} else {
    result6 = "Не верно";
console.log (result6);
}
//7??

//8
let day = prompt ('Введите число от 1 до 31');
	day = Number (day);
	if ((day >= 1) && (day <= 10)) {
		result8 = "1 декада";
	}	else if ((day >= 11) && (day <= 20)) {
		result8 = "2 декада";
	}	else if ((day >= 21) && (day <= 31)) {
		result8 = "3 декада";
	}
console.log (result8);


