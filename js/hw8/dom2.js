// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
// const add = document.getElementById('main_header')
// add.classList.add('nameband')


// b) робить шириниу елементу ul 400px
// const widht = document.getElementsByTagName('ul');
// for (const widhtElement of widht) {
// widhtElement.style.width = '400px';
// }

// c) робить шириниу всіх елементів з класом linkList шириною 50%
// const widhtlinklist = document.getElementsByClassName('linkList');
// for (const widhtlinklistElement of widhtlinklist) {
//     widhtlinklistElement.style.width = '50%'
// }
// d) отримує текст який зберігається в елементі з класом listElement2
// const text = document.getElementsByClassName('listElement2');
// for (const textElement of text) {
//     console.log(textElement.textContent);
// };
// e) отримує всі елементи li та змінює ім колір фону на сірий
// const li = document.getElementsByTagName('li');
// for (const liElement of li) {
//     liElement.style.background = 'gray';
// }
// f) отримує всі елементи 'a' та додає їм клас anchor
// const anc = document.getElementsByTagName('a')
// for (const ancElement of anc) {
//     console.log(ancElement);
//     ancElement.classList.add('anchor')
// }
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// for (const ancElement of anc) {
//     if (ancElement.textContent === 'link3'){
//         ancElement.style.fontSize = '40px'
//     }
// }
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
const anc = document.getElementsByTagName('a')
for (const ancElement of anc) {
    ancElement.classList.add('element_XXX');
    ancElement.innerText = 'bfhtujyu'
!!!!!!!!!!!!!!!!!!!!!!attention
}
// // i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// const sub = document.getElementsByClassName('sub-header')
// for (const subElement of sub) {
//     subElement.style.background =prompt('color');
// }
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment .
// Колір отримати з prompt()
// const tex = document.getElementsByClassName('sub-header')
// for (const tex1 of tex) {
//     if (tex1.textContent === 'content 2 segment'){
//         tex1.style.color = prompt('color')
//     }
// }
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// const cont = document.getElementsByClassName('content_1')
// for (const contElement of cont) {
//     contElement.textContent = prompt('text')
// }

// l) отримати елементи p та змінити їм padding на 20px
// const p = document.getElementsByTagName('p')
// for (const pElement of p) {
//     pElement.style.padding = '20px'
// }
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// const t2 = document.getElementsByClassName('text2')
// for (const t2Element of t2) {
//     t2Element.textContent = 'sep-2021'
// }