// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
//
// let arr = [];
// const but = document.getElementById('but');
// but.addEventListener("click", function () {
//     const name = document.forms.f1.impone.value;
//     const age = document.forms.f1.imptwo.value;
//     let user = {
//         name , age
//     }
//     arr.push(user);
//     console.log(arr);
// localStorage.setItem('user' , JSON.stringify(user));
// });

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let arr = [];
const but = document.getElementById('but');
but.addEventListener("click", function () {
    const model = document.forms.f2.model.value;
    const type = document.forms.f2.type.value;
    const volume = document.forms.f2.volume.value;
    let car = {
        model , type , volume
    }
    arr.push(car);
    console.log(arr);
localStorage.setItem('car' , JSON.stringify(car));
});