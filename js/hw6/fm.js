// - Знайти та вивести довижину настипних стрінгових значень
// let s ='hello world';
// console.log(s.length);
// console.log('lorem ipsum'.length)
// console.log('javascript is cool'.length)
// - Перевести до великого регістру наступні стрінгові значення
// console.log('hello world'.toUpperCase());
// console.log('javascript is cool'.toUpperCase());
// console.log('lorem ipsum'.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// console.log('HELLO WORLD'.toLowerCase());
// console.log('LOREM IPSUM'.toLowerCase());
// console.log('JAVASCRIPT IS COOL'.toLowerCase());
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   '
// console.log(str.replaceAll(' ', ''))
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// let str = 'Ревуть воли як ясла повні';
// console.log(toArray(str));
// stringToarray(str)
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let nums = [10,8,-7,55,987,-1011,0,1050,0];
// let mapAnms = nums.map(value => value.toString());
// console.log(mapAnms);
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
    let nums = [11,21,3];
let sortNums=(array, direction)=>{
    if(direction === 0 ) {array.sort((n1, n2)=> n1 - n2)}
    if(direction === 1 ) {array.sort((n1, n2)=> n2 - n1)};

    console.log(sortNums(nums,0))
}
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// let sortNums = nums.sort((a,b)=>a - b);
// console.log(sortNums)
// let sortNums = nums.sort((a,b)=>b - a);
// console.log(sortNums)
//
//


// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
// let sp=coursesAndDurationArray.sort((a,b )=>b.monthDuration - a.monthDuration )
// console.log(sp);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let zt = coursesAndDurationArray.filter(value => value.monthDuration > 5);
// console.log(zt);

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let koloda = [
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
    {value: 'joker'},
    {value: 'joker'}
];
// - знайти піковий туз
console.log(koloda.find(value =>value.cardSuit === "spade" && value.value === 'ace' ))
// - всі шістки
console.log(koloda.filter(value => value.value === '6'))
// - всі червоні карти
console.log(koloda.filter(value => value.color === 'red'));
// - всі буби
console.log(koloda.filter(value => value.cardSuit === 'diamond'))
// - всі трефи від 9 та більше
console.log(koloda.filter(value => value.cardSuit === 'spade'  && value.value.length >=2))