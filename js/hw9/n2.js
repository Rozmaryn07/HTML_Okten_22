// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
//

// let el = document.createElement('div');
// document.body.appendChild(el);
// el.innerText = 'dhfyhfjk'
// el.style.background = 'grey';
// el.style.color = 'red';
// el.style.fontSize = '20px';
// el.classList.add('wrap', 'collapse','alpha','beta');
// let elclon = el.cloneNode(true);
// document.body.appendChild(elclon);

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт
// котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
// const arr = ['Main','Products','About us','Contacts'];
//
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     const bl = document.getElementsByClassName('menu')[0];
//     const crel = document.createElement('li');
//     crel.innerText = arrElement
//     bl.append(crel);
// }



//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // Завдання робити через цикли.
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     const creatbl = document.createElement('div');
//     creatbl.innerText = `title : ${coursesAndDurationArrayElement.title}   month - ${coursesAndDurationArrayElement.monthDuration}`
//     document.body.appendChild(creatbl)
// }
//
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
    const divcl = document.createElement('div');
    divcl.classList.add('item');
    document.body.appendChild(divcl)
    const xxx = document.createElement('p');
    xxx.classList.add('heading');
    xxx.innerText = `${coursesAndDurationArrayElement.title}`;
    const pp = document.createElement('p');
    pp.classList.add('description');
    pp.innerText = `${coursesAndDurationArrayElement.monthDuration}`;
    divcl.appendChild(xxx);
    divcl.appendChild(pp);
    // document.body.appendChild(xxx);
    // document.body.appendChild(pp);



}