// Все стірлочними!!!!!!!!!
//     - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let ar = [4,6 ,7,8,9,33,44,555,66,1,899];
// let ser = (array) =>{
//     let su = 0;
//     for (const argument of array ) {
// su+= argument;
//     }
//     return su/2
// };
// console.log(ser(ar))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// (Math використовувати заборонено);
let ar = [4,6 ,7,8,9,33,-44,555,-66,1,899];
let ser = (array) => {
    let men = 0;
    let bi = 0;
    for (const argument of array) {
            if (men > argument){men = argument}
        }return document.write(men);
     if ( bi < argument){bi = argument}
    return console.log(bi)
}
ser(ar)

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let fn = () => {
//     let cont = [];
//      cont.push(Math.round(Math.random()*100));
// return cont;
// }
// console.log(fn());
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let fn = (limit) => {
//     let cont = [];
//      cont.push(Math.round(Math.random()*limit));
// return cont;
// }
// console.log(fn(2));
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let ar = [4,6 ,7,8,9,33,-44,555,-66,1,899];
// let rev = (arguments)=>{
//     let t = []
//     for (let i = arguments.length - 1; i >=0; i--) {
//         const argument = arguments[i];
//   t = console.log(arguments[i])
//     }
//     return t
// };
// rev(ar)
//
//
//     Переробити на стрілочні функції з попереднього дз
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let square = (a, b)=> a * b;
// console.log(square(10,4));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// const p = 3.14;
// let  square=(r)=> p * (r * r );
// console.log(square(6));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// const p = 3.14;
// let square=(r, h)=>(2 * p * r * h);
// console.log(square(2, 4));
// - створити функцію яка приймає масив та виводить кожен його елемент
// let books =[
//     {name: 'woomens', page: 345, genre: 'detective',  authors:['fffff','ffdssss'] },
//     {name: 'fdfddfd', page: 45, genre:['roman','bgbgbg'], authors:['fffff', 'ffdssss', 'fffdd']},
//     {name: 'fdfddfd', page: 665, genre:'man', authors:['ff', 'ffdssss', 'fffdd', 'fffffkkl']}
// ];
// let arr=(array)=> {
//     for (const arrayElement of array) {
//         console.log(arrayElement)
//     }
// };
// arr(books);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let Paragr=(p)=>document.write(`<p> ${p} </p>`);
// Paragr("dfsfsgdgdg")

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let ul=(text)=>{document.write(
//     `<ul>
//         <li>${text}</li>
//         <li>${text}</li>
//         <li>${text}</li>
//     </ul>`)
// }
// ul('gffffffffh')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let ul=(text, j)=>{
//     document.write(`<ul>`)
//     for (let i = 0; i < j; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// ul('fgghh',5);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let mas=[4,'fffff', 2, 6>4]
// let arr=(array)=>{
//     document.write(`<ul>`)
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`)
//     }
//     document.write(`</ul>`)
// }
// arr(mas)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// let users =
//     [{id:445666, name:'vasya', age: 34},
//     {id:44566666, name:'vasgfggya', age: 364},
//     {id:7, name:'v2asya', age: 3554}];
// let arr=(array)=> {
//     for (const item of array) {
//         document.write(`<div>${item.id}  ${item.name} ${item.age}</div>`)
//     }
// };
// arr(users)
// - створити функцію яка повертає найменьше число з масиву
// let ar = [4,6 ,7,8,9,33,44,555,66,1,2667,899];
// let minN=(array)=> {
//     let min = array[0];
//     for (const item of array){
//         if (item < min){
//             min = item
//         }
//     }
//     return min;
// }
// console.log(minN(ar));
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let ar = [4,6 ,7,8,9,33,44,555,66,1,2667,899];
// let f=(array)=> {
//     let sum = 0;
//     for (const arrayElement of array) {
//         sum += arrayElement;
//     }
//     return sum;
// }
// console.log(f(ar));
//
// -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.
// let go=[
//     {id:445666, name:'vasya', age: 34},
//     {id:66, name:'vasgfggya', age: 364}]
// let mis=(arr)=>{console.log(arr.reverse())
// }
// mis(go)