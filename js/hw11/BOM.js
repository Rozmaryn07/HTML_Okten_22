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


// const but = document.getElementById('but');
// const model = document.forms.f2.model.value;
// const type = document.forms.f2.type.value;
// const volume = document.forms.f2.volume.value;
// const car = {model,type,volume};
// let parcr = JSON.parse(localStorage.getItem('key'));
// parcr.push(car);
// localStorage.setItem('car' , JSON.stringify(parcr));
const but = document.getElementById('but');
const model = document.forms.f2.model;
const type = document.forms.f2.type;
const volume = document.forms.f2.volume;
const x = (model,type,volume) => {
    let parcr = JSON.parse(localStorage.getItem('key'));
    parcr.push({model,type,volume});
    localStorage.setItem('car' , JSON.stringify(parcr));
}
but.onclick = ()=>{
    x(model.value, type.value, volume.value)
}
