// //@Task1
//
// //Выполните следущие задания, связанные с объектами:
//
//   //  1. Создайте объект, описывающий автомобиль (производитель,
//     модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:
// let Car =
//     {
//         manufacturer: "BMW",
//         model: "Advantage",
//         year: "2022",
//         avarageSpeed: 100 //per hours
//     };
//
// // - Функция для вывода на экран информации об автомобиле;
// function printAuto(car) {
//
//     console.log("manufacturer: " + car.manufacturer);
//     console.log("model: " + car.model);
//     console.log("year: " + car.year);
//     console.log("Avarage Speed: " + car.avarageSpeed);
// }
//
// printAuto(Car);
//
// // - Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.
// //
// function TimeForDistance(car, dictance) {
//     return dictance / car.avarageSpeed
// }
//
//
// console.log(TimeForDistance(Car, 100) + "H");
//
// // 2. Создайте объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом:
//
// let fraction1 = {
//     numerator: 2,
//     denominator: 4
// }
// let fraction2 = {
//     numerator: 5,
//     denominator: 6
// }
//
// function greatestCommonDivisor(numm1, numm2) {
//     while (numm1 !== 0 && numm2 !== 0) {
//         if (numm1 > numm2) {
//             numm1 = numm1 % numm2;
//         } else {
//             numm2 = numm2 % numm1;
//         }
//     }
//     return numm1 + numm2;
// }
//
// function leastCommonMultiple(num1, num2) {
//     return num1 * num2 / (greatestCommonDivisor(num1, num2));
// }
//
// function commonDenominator(f1, f2) {
//     let commonValue = leastCommonMultiple(f1.denominator, f2.denominator);
//     let f1Multile = commonValue / f1.denominator;
//     let f2Multilpe = commonValue / f2.denominator;
//
//     f1.numerator *= f1Multile;
//     f1.denominator *= f1Multile;
//
//     f2.numerator *= f2Multilpe;
//     f2.denominator *= f2Multilpe;
//     return [f1, f2];
// }
//
// //     - Функция сложения 2-х объектов-дробей;
// function addFraction(fraction1, fraction2) {
//     let list = commonDenominator(fraction1, fraction2);
//
//     let fr = {
//         numerator: list[0].numerator + list[1].numerator,
//         denominator: list[0].denominator
//     }
//     return fr;
//
// }
//
// // - Функция вычитания 2-х объектов-дробей;
// function substractFraction(fraction1, fraction2) {
//     let list = commonDenominator(fraction1, fraction2);
//
//     let fr = {
//         numerator: list[0].numerator - list[1].numerator,
//         denominator: list[0].denominator
//     }
//     return fr;
//
// }
//
// // - Функция умножения 2-х объектов-дробей
// function multyplyFraction(fraction1, fraction2) {
//     let fr = {
//         numerator: fraction1.numerator * fraction2.numerator,
//         denominator: fraction1.denominator * fraction2.denominator
//     }
//     return reductionOfFraction(fr);
// }
//
// console.log(multyplyFraction(fraction1, fraction2));
//
// // - Функция деления 2-х объектов-дробей;
// function divideFraction(fraction1, fraction2) {
//     let fr = {
//         numerator: fraction1.numerator * fraction2.denominator,
//         denominator: fraction1.denominator * fraction2.numerator
//     }
//     return reductionOfFraction(fr);
// }
//
// console.log(divideFraction(fraction1, fraction2));
//
// // - Функция сокращения объекта-дроби.
//
// function reductionOfFraction(fraction) {
//     let gcd = greatestCommonDivisor(fraction.numerator, fraction.denominator);
//     let fr =
//         {
//             numerator: fraction.numerator / gcd, denominator: fraction.denominator / gcd
//         }
//
//     return fr;
// }

//console.log(reductionOfFraction(fraction1));
//
// 3. Создайте объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом:

// let MyDateTime = //Дальше будет гавнокод но дргуое я не смогла прдумать
//     {
//         hour: 1,
//         minute: 10,
//         second: 10
//     }
//
// //     - Функция вывода времени на экран;
// function printTime(MyDateTime) {
//     console.log(`${MyDateTime.hour}: ${MyDateTime.minute}: ${MyDateTime.second}`);
// }
//
// printTime(MyDateTime);
//
// // - Функция изменения времени на переданное количество секунд;
//
// function addSeconds(usersSeconds, MyDateTime) {
//
//     let allSeconds = (MyDateTime.hour * 3600 + MyDateTime.minute * 60 + MyDateTime.second) + usersSeconds;
//     let hours = parseInt(allSeconds / 3600);
//     let minutes = parseInt((allSeconds % 3600) / 60);
//     let seconds = (allSeconds % 3600) % 60;
//     let dateTime = {
//         hour: hours, minute: minutes, second: seconds
//     }
//     return dateTime;
// }
//
// MyDateTime = addSeconds(290, MyDateTime)
// console.log(MyDateTime);
//
// // - Функция изменения времени на переданное количество минут;
//
// function addMinutes(usersMinute, MyDateTime) {
//
//     let allminutes = MyDateTime.hour * 3600 + MyDateTime.minute * 60 + usersMinute;
//     let hours = parseInt(allminutes / 60);
//     let minutes = parseInt(allminutes % 60);
//     let dateTime = {
//         hour: hours, minute: minutes, second: MyDateTime.second
//     }
//     return dateTime;
// }
//
// MyDateTime = addMinutes(290, MyDateTime)
// console.log(MyDateTime);
//
// // - Функция изменения времени на переданное количество часов.
//
// function addHours(usersHours, MyDateTime) {
//
//     let allHours = MyDateTime.hour * 3600 + usersHours;
//     let dateTime =
//         {
//             hour: allHours, minute: MyDateTime.minute, second: MyDateTime.second
//         }
//     return dateTime;
// }
//
// // ! В последних трёх функциях, при изменении одной части времени, может измениться и другая.
// //
// //     @Task2
// //
// // Выполните следущие задания, связанные с массивами:
// //
// //     1. Создайте массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта,
// //     необходимое количество и куплен или нет. Напишите несколько функций для работы с таким массивом:
//
// let products = [];
// let product =
//     {
//         name: "water",
//         amount: 1,
//         price: 3,
//         isBought: false
//     };
// let product2 =
//     {
//         name: "chease ",
//         amount: 1,
//         price: 3,
//         isBought: true
//     };
// products.push(product);
// products.push(product2);
//
// // - Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные;
// function AllProducts(Products) {
//     let SortedProducts = [];
//     let BoughtList = [];
//     let NotBoughtList = [];
//     for (let i = 0; i < Products.length; i++) {
//         if (Products[i].isBought === true) {
//             BoughtList.push(Products[i]);
//         } else {
//             NotBoughtList.push(Products[i]);
//         }
//
//     }
//
//     SortedProducts = SortedProducts.concat(BoughtList, NotBoughtList);
//     return SortedProducts;
// }
//
// console.log(products);
// console.log(AllProducts(products));
//
// // - Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую;
// function AddProduct(product, products) {
//     let newProducts = products;
//     for (let i = 0; i < products.length; i++) {
//         if (products[i].name === product.name) {
//             newProducts[i].amount++;
//             return newProducts;
//         }
//     }
//     newProducts.push(product);
//     return newProducts;
// }
//
// // - Покупка продукта. Функция принимает название продукта и отмечает его как купленный.
//
// function BuyProduct(productName, products) {
//     let newProducts = products;
//     for (let i = 0; i < products.length; i++) {
//         if (products[i].name === productName) {
//
//             newProducts[i].isBought = true;
//             return newProducts;
//         }
//     }
// }
//
// console.log(BuyProduct("water", products));
// // 2. Создайте массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара,
// // количества и цены за единицу товара. Напишите следующие функции:
//
// var recept = [];
//
// var receptItems =
//     {
//         productName: "Water",
//         amount: 1,
//         price: 1
//     };
//
// recept.push(receptItems);
//
// //     - Распечатка чека на экран;
// function printRecept(recept) {
//     console.log("* * * * * * * * * *");
//     console.log("        Recept     ");
//     console.log("  Name          Amount      Price      ");
//
//     for (let i = 0; i < recept.length; i++) {
//         console.log(`  ${recept[i].productName}          ${recept[i].amount}        ${recept[i].price} `);
//     }
//     console.log("* * * * * * * * * *");
//
//
// }
//
// printRecept(recept);
//
// // - Подсчет общей суммы покупки;
//
// function total(recept) {
//     let sum = 0;
//     for (let i = 0; i < recept.length; i++) {
//
//         sum += recept[i].price * recept[i].amount;
//     }
//     return sum;
// }
//
// // - Получение самой дорогой покупки в чеке;
//
// function heigherAmount(recept) {
//     let max = 0;
//     for (let i = 0; i < recept.length; i++) {
//         if (recept[i].price > max) {
//             max = recept[i].price;
//         }
//     }
//     return max;
// }
//
// console.log(heigherAmount(recept));
//
// // - Подсчет средней стоимости одного товара в чеке.
//
// function avaragePrice(recept) {
//     let sum = total(recept);
//     return total / recept.length;
// }

// 3. Создать массив css-стилей. Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля.
// Напишите функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах
// <p></p>, добавив в открывающий тег атрибут style со всеми сти-
// лями, перечисленными в массиве.
//
// let cssList = [];
//
// let cssObject =
//     {
//         propertyName: "color", value: "red"
//     };
//
// function foo(cssObject, text) {
//
//     return `<p style="${cssObject.propertyName}:${cssObject.value}">${text}</p>`;
// }
//
// foo([{color: "pink"}], "Hello world");

// ! Например, при вызове этой функции foo([{color: "pink"}], "Hello world"); результат будет <p style="color:red;">Hello world</p>
//
// @Task3
//
// Выполните следущие задания, связанные со строками:
//
//     1. Написать функцию, которая принимает строку и выводит статистику о ней: количество букв, количество цифр и количество других знаков.
// function stringStatistics(string) {
//     let chars = 0;
//     let number = 0;
//     let symbols = 0;
//     for (let i in string) {
//         if ((/[0-9]/).test(string[i])) {
//             number++;
//         } else if ((/[a-zA-Z]/).test(string[i])) {
//             chars++;
//         } else {
//
//             symbols++
//         }
//     }
//     return `chars:${chars} numbers${number} symbols:${symbols}`;
// }
//
// console.log(stringStatistics("1nej2!"));

// 2. Написать функцию, которая принимает двузначное число и возвращает его в текстовом виде.
// Например: 35 – тридцать пять, 89 – восемьдесят девять, 12 – двенадцать.
// function textNumeric(num) {
//     let numStr = num.toString();
//     if (num < 10 && num > 100) {
//         return null;
//     }
//     let begining;
//     if (num >= 10 && num < 20) {
//         switch (num) {
//             case 10 : {
//                 return "Десять";
//             }
//             case 11 : {
//                 return "одиннадцать";
//             }
//             case 12 : {
//                 return "двенадцать";
//             }
//             case 13 : {
//                 return "тринадцать";
//             }
//             case 14 : {
//                 return "четырнадцать";
//             }
//             case 15 : {
//                 return "пятнадцать";
//             }
//             case 16 : {
//                 return "шестнадцать";
//             }
//             case 17 : {
//                 return "семнадцать";
//             }
//             case 18 : {
//                 return "восемнадцать";
//             }
//             case 19 : {
//                 return "девятнадцать";
//             }
//
//         }
//
//     }
//
//     if (num >= 20 && num < 30) {
//         begining = "Двадцать "
//     }
//     if (num >= 30 && num < 40) {
//         begining = "тридцать  "
//     }
//     if (num >= 40 && num < 50) {
//         begining = "сорок  "
//     }
//     if (num >= 50 && num < 60) {
//         begining = "пятьдесят "
//     }
//     if (num >= 60 && num < 70) {
//         begining = "шестьдесят "
//     }
//     if (num >= 70 && num < 80) {
//         begining = "семьдесят "
//     }
//
//     if (num >= 80 && num < 90) {
//         begining = "восемьдесят "
//     }
//
//     if (num >= 90 && num < 100) {
//         begining = "девяносто "
//     }
//
//     switch (numStr[1]) {
//         case "0":
//         {
//             return begining;
//         }
//         case "1": {
//             return begining + "один";
//         }
//         case "2": {
//             return begining + "два";
//         }
//         case "3": {
//             return begining + "три";
//         }
//         case "4": {
//             return begining + "четыре";
//         }
//         case "5": {
//             return begining + "пять";
//         }
//         case "6": {
//             return begining + "шесть";
//         }
//         case "7": {
//             return  begining+"семь";
//         }
//         case "8": {
//             return  begining+"восемь";
//         }
//         case "9": {
//             return  begining+"девять";
//         }
//     }
//
// }
// console.log(textNumeric(20));

// 3. Написать функцию, которая заменяет в полученной строке большие буквы на маленькие, маленькие – на большие,
// а цифры – на знак нижнего подчеркивания.
// function CheangeCase(string) {
//     let newStr = "";
//     for (let i = 0; i < string.length; i++) {
//         let char = string[i];
//         if (((/[a-z]/).test(char))) {
//             newStr += char.toUpperCase();
//         } else if (((/[A-Z]/).test(char))) {
//             newStr += char.toLowerCase();
//         } else if (((/[0-9]/).test(char))) {
//             newStr += "_";
//         } else {
//             newStr += char;
//         }
//     }
//     return newStr;
// }
//
// console.log(CheangeCase("hElLo111"))

// 4. Написать функцию, которая преобразует названия css-стилей с дефисом в название в СamelСase стиле: font-size в fontSize, background-color в backgroundColor, text- align в textAlign.
// function cssToCamel(string) {
//     let list = string.split("-");
//     if(list.length<2)
//     {
//         return string;
//     }
//     let s = list[1].charAt(0).toUpperCase() + list[1].slice(1);
//     list[1] = s;
//     return list.join("");
// }
//
// console.log(cssToCamel("color"));

// 5. Написать функцию, которая принимает словосочетание и превращает его в аббревиатуру.
// Например: cascading style sheets в CSS, объектно-ориентированное программирование в ООП.
// function makeAbbreviation(string) {
//     list = string.split("");
//     let newList = [];
//
//     for (let i = 0; i < list.length; i++) {
//         if (list[i].includes("-")) {
//             newList.push(list[i].replace("-", " "));
//             continue;
//         }
//         newList.push(list[i]);
//     }
//     let wordWithSpaces = newList.join("");
//
//     newList = wordWithSpaces.split(" ");
//     let abriviature = "";
//
//     for (let i = 0; i < newList.length; i++) {
//         abriviature += newList[i].charAt(0).toUpperCase();
//     }
//
//     return abriviature;
// }
//
// console.log(makeAbbreviation("cascading style sheets"));
// 6. Написать функцию, которая принимает любое количество строк, объединяет их в одну длинную строку и возвращает ее.

// function MakeString(...value) {
//     let string = ""
//
//     for (let i = 0; i < value.length; i++) {
//         string += value[i];
//     }
//     return string;
// }
//
// console.log(MakeString("hehehe", "lol", "it is mine"));
// 7. Написать функцию – калькулятор. Функция принимает строку с примером, определяет,
// какое действие необходимо выполнить (+ - * /), переводит операнды в числа, решает пример и возвращает результат.

//это простая функция и может выполнять действия только для двух чисел
// вводите строку в виде "12*2" "11+20"
// function calculate(string) {
//     let items = [];
//     let operator = "";
//     if (string.includes("+")) {
//         items = string.split("+");
//         operator = "+";
//     }
//     if (string.includes("-")) {
//         items = string.split("-");
//         operator = "-";
//     }
//     if (string.includes("/")) {
//         items = string.split("/");
//         operator = "/";
//     }
//     if (string.includes("*")) {
//         items = string.split("*");
//         operator = "*";
//     }
//
//     let a = parseInt(items[0]);
//     let b = parseInt(items[1]);
//     switch (operator) {
//         case"+": {
//             return a + b;
//         }
//         case "/": {
//             if (b !== 0) {
//                 return a / b;
//             }
//         }
//         case "*": {
//             return a * b;
//         }
//         case "-": {
//             return a - b;
//         }
//
//     }
//     return items;
// }
//
// console.log(calculate("122"));

// 8. Написать функцию, которая получает url и выводит подробную информацию о нем.
// Например: url "https://itstep.org/ua/about", информация "протокол: https, домен: itstep.org, путь: /ua/about".
// function urlInfo(string) {
//
//     let list = string.split("://");
//     let protocol = list[0];
//     list = list[1].split("/");
//     let domen = list.shift();
//     let directory = list.join("/");
//     return `protocol: ${protocol} domen ${domen} directory ${directory}`
//
// }
//
// console.log(urlInfo("https://itstep.org/ua/about"));
// 9. Написать функцию, которая принимает строку и разделитель и возвращает массив подстрок, разбитых с помощью указанного разделителя.
// Например: строка "10/08/2020", разделитель "/", результат: "10", "08", "2020". Выполняя задание, не используйте функцию split().
// function mySplit(string, separator) {
//     let list = [];
//     let listItem = "";
//     for (i in string) {
//
//         if (string[i] === separator) {
//             list.push(listItem);
//             listItem = "";
//         } else {
//             listItem += string[i];
//         }
//     }
//     if (listItem) {
//         list.push(listItem)
//     }
//     return list;
// }

// console.log(mySplit("10/08/2020", "/"));


// 10. Написать функцию вывода текста по заданному шаблону. Функция принимает первым параметром шаблон, в тексте которого может
// \использоваться %, после символа % указывается индекс входного параметра. При выводе вместо %индекс необходимо вывести
// значение соответствующего входного параметра. Например: print("Today is %1 %2.%3.%4", "Monday", 10, 8, 2020)
// // должна вывести "Today is Monday 10.8.2020".
// function specialAdding(string, ...temps) {
//     return string.replace(/%(\d+)/g, (newString, num) => temps[num - 1]);
// }
//
// console.log(specialAdding("Today is %1 %2.%3.%4", "Monday", 10, 8, 2020));