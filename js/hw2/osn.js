// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let x = -3;
// if ( x != 0 ) {console.log('Virno')}
// else {console.log('NE')};
//
// - Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = (-1);
// if ( 0 <= time, time <= 15 ) {console.log('First quarter');}
// else if ( 15 < time, time <= 30 ) {console.log('Second quarter');}
// else if ( 30 < time, time <= 45 ) {console.log('Third quarter');}
// else if ( 45 < time, time <= 59 ) {console.log('Fourth quarter');}
// else if ( time < 0 ) {console.log('nema');}
// else  console.log('ne to');
// питання!!!!


// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = (-1);
// if (day <= 10){console.log('first');}
// else if (day <= 20){console.log('second');}
// else if (day <= 31){console.log('third');}
// else if (day < 0){console.log('thi');}


//
// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).
// let day = prompt('plany');
//
// switch (day) {
//     case '1' : console.log('sunday');
//     break;
//     case '2' : console.log('monday');
//     break;
//     case "3" : console.log('tuesday');
//     break;
//     case '4' : console.log('wednesday');
//     break;
//     case '5' : console.log('thursday');
//     break;
//     case '6' : console.log('friday');
//     break;
//     case '7' : console.log('saturday');
//     break;
//     default: console.log('idler')
// }
//
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let x = prompt('x');
let y = prompt('y');
if (x>y){console.log(x) }
else if (x<y){console.log(y)}
else if (x=y) {console.log("рівні")};
