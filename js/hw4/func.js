// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function square(a, b) {
//     let result = (a * b );
//     return result;
// }
// let sq = square(10,4)
// console.log(sq);
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// const p = 3.14;
// function square(p, r) {
//     let result = (p * (r * r ));
//     return result;
// }
// let sq = square(p,4)
// console.log(sq);
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// const p = 3.14;
// function square(p, r, h) {
//     let result = (2 * p * r * h);
//     return result;
// }
// let sq = square(p,4, 4)
// console.log(sq);
// - створити функцію яка приймає масив та виводить кожен його елемент
// let books =[
//     {name: 'woomens', page: 345, genre: 'detective',  authors:['fffff','ffdssss'] },
//     {name: 'fdfddfd', page: 45, genre:['roman','bgbgbg'], authors:['fffff', 'ffdssss', 'fffdd']},
//     {name: 'fdfddfd', page: 665, genre:'man', authors:['ff', 'ffdssss', 'fffdd', 'fffffkkl']}
// ];
// function arr(array) {
//     for (const arrayElement of array) {
//         console.log(arrayElement)
//     }
//
// };
// arr(books);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function Paragr(p) {
//     let result = (`<p> ${p} </p>`);
// return result;
// }
// let P = Paragr('frefeggrtgrg');
// console.log(P);
// document.write(P);
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function ul(text){
//     let result = `<ul>
//         <li>${text}</li>
//         <li>${text}</li>
//         <li>${text}</li>
//     </ul>`;
//     return result;
// }
// document.write(ul('gtgtgtgtgt'))
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function ul(text, j){
//     document.write(`<ul>`)
//     for (let i = 0; i < j; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// ul('fgghh',3);
// // let t = ul('gtgtg',3);
// document.write(t);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function arr(...ttt){
//     document.write(`${ttt}`)
// }
// arr(4,'fffff', 2, 6>4)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// // Для кожного об'єкту окремий блок.
// let users =
//     [{id:445666, name:'vasya', age: 34},
//     {id:44566666, name:'vasgfggya', age: 364},
//     {id:7, name:'v2asya', age: 3554}];
// function arr(array) {
//
//     for (const item of array) {
//         document.write(`<div>${item.id}  ${item.name} ${item.age}</div>`)
//     }
// };
// arr(users)

// - створити функцію яка повертає найменьше число з масиву
// let ar = [4,6 ,7,8,9,33,44,555,66,1,2667,899];
// function minN(array) {
//     let min = array[0];
//     for (const item of array){
//         if (item < min){
//             min = item
//         }
//     }
//     return min;
// }
// console.log(minN(ar));

// function minNum(array) {
//     let min = array[0];
//     for (const item of array) {
//         if (item < min) {
//             min = item
//         }
//     }
//     return min;
// }







// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let ar = [4,6 ,7,8,9,33,44,555,66,1,2667,899];
function f(array) {
    let sum = 0;
    for (const arrayElement of array) {
        sum += arrayElement;
    }
    return sum;
}
console.log(f(ar));