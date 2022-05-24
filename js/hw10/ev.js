// Создать произвольный елемент с id = text.  Используя JavaScript,
//
// сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
// const element = document.getElementById('text')
// element.style.backgroundColor = 'red';
// const button = document.createElement('button');
// button.innerText = 'del'
// document.body.appendChild(button);
//
// button.addEventListener('click', (e)=> {
// element.remove();
// })






//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// const f2 =document.getElementById('ff');
// f2.onsubmit = function (e) {
//     e.preventDefault();
//     let age = f2.age.value;
//     if (age < 18){console.log('go home')}
//
// }

//
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та
// виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
// let arr = [];
// const f1= document.forms.f21;
// const f2= document.forms.f22;
// const but = document.getElementById('comp');
// but.onclick = function (e){
//     e.preventDefault();
//     let name = f1.name.value;
//     let surname = f1.surname.value;
//     let dog = f2.dog.value;
//     let partner = f2.partner.value;
//
//     let people = {
//         Pn:name,
//         Sn:surname,
//         Dn:dog,
//         Partn:partner,
//     }
//     arr.push(people);
//     console.log(people);
//
// };
//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)