// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
let height = 23 ;
let width = 10;
let s = (height + width);
console.log(s);
// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
let heightC = 10;
let dC = 4;
const p = 3.14;

let v = (p * Math.pow((dC /2), 2) * heightC );
console.log(v);
// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
let n = 3;
let m = 4;

// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
let k = ( Math.pow(n , 2) + Math.pow(m , 2) );
console.log(k);

//

//
// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
//     5 ? 6 -> true
// 5 ? 6 -> false
console.log( 5 > 6 );
// 5 ? 6 -> false
console.log( 5 == 6 );
// 5 ? 6 -> false
console.log(5===6);
// 10 ? 10 -> true
console.log( 10 == 10);
// 10 ? 10 -> true
console.log( 10===10 );
// 10 ? 10 -> false
console.log(10 < 10 );
// 10 ? 10 -> false
console.log(10 > 10 );
// 10 ? 10 -> false
console.log(10 != 10 );
// 123 ? '123' -> false
console.log(123 === '123' );
// 123 ? '123' -> true
console.log(123 == '123' );