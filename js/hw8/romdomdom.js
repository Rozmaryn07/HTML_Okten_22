// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
const take = document.getElementById('content');
console.log(take);
// -- отримує текст з блоку з id "rules"
const takee = document.getElementById('rules');
console.log(takee);
// -- замініть текст параграфа з id 'content' на будь-який інший
take.innerHTML = 'rgrrrrrrrgrg grg grg gr ggrrrrrr';
// -- замініть текст параграфа з id 'rules' на будь-який інший
takee.innerHTML = 'bandera';
// -- змініть кожному елементу колір фону на червоний
// const EL = document.children;
// for (const elElement of EL) {
//     elElement.style.background = 'red';
// }
// -- змініть кожному елементу колір тексту на синій
// for (const elElement of EL) {
//     elElement.style.color='blue';
// }
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
const rr = rules.children
for (const rrElement of rr) {
    console.log(rrElement);
}
// console.log(rr);
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
// const rol = document.getElementsByClassName('fc_rules');
// for (const rolElement of rol) {
//     rolElement.style.color ='red';
// }
//
//
//
