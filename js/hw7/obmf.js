// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User (id,name,surname,email,phone) {
//     this.id = id
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//
// }
// let user1 = new User(65 , 'dodia' , 'dtuod' , 'rfgjrat' , 46533567688);
// console.log(user1);
// let user2 = new User(5 , 'dodjjia' , 'dtutod' , 'rgjfrat' , 44446567688);
// console.log(user2);
// let user3 = new User(675 , 'dodugia' , 'dtuod' , 'rfnvrat' , 4656567688);
// console.log(user3);
// let user4 = new User(6555 , 'dojgdia' , 'dtuod' , 'rfrat' , 4656786688);
// console.log(user4);
// let user5 = new User(615 , 'donndia' , 'dtutod' , 'rfrat' , 46567688);
// console.log(user5);
// let user6 = new User(5 , 'dovndia' , 'dgguod' , 'rfrat' , 46567688);
// console.log(user6);
// let user7 = new User(98 , 'dodvia' , 'dnvod' , 'rfgjrat' , 4656768678);
// console.log(user7);
// let user8 = new User(545 , 'dodnia' , 'dnod' , 'rfragjt' , 4656789688);
// console.log(user8);
// let user9 = new User(11 , 'dovdia' , 'dod' , 'rfrat' , 4656767688);
// console.log(user9);
// let user10 = new User(2 , 'dodvia' , 'dod' , 'rfrat' , 465677688);
// console.log(user10);
// let nat = function ( ...users){
//     let kkkk = [];
//     kkkk.push(...users);
//     return kkkk
// };
// let Us = nat(user1, user2, user3, user4, user10, user6, user8, user7, user9, user5 );
// console.log(Us);
//
//
// //
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let par = Us.filter(value => value.id % 2 === 0);
// console.log(par);
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// console.log(Us.sort((a, b) => a.id - b.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// class Client {
//     constructor(id, name, surname , email, phone, order) {
//
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
// }
// }
// let client1 = new Client(56, 'grgg', 'hhh', 'dfr6', 7676790, ['hhh','hhgh','gjjj','dgdg','dgd','dgd']);
// let client2 = new Client(5676, 'grgg', 'hhh', 'dfr6', 7676790, ['hhh','hhgh','gjjj']);
// let client3 = new Client(56, 'grgg', 'hhh', 'dfr6', 7676790, ['hhh','hhgh','gjjj','gdggd','dgdd']);
// let client4 = new Client(576, 'grgg', 'hhh', 'dfr6', 7676790, ['gjjj']);
// let client5 = new Client(556, 'grgg', 'hhh', 'dfr6', 7676790, ['hhh','hhgh','gjjj']);
// let client6 = new Client(576, 'grgg', 'hhh', 'dfr6', 7676790, ['hhh','hhgh','gjjj']);
// let client7 = new Client(5896, 'grgg', 'hhh', 'dfr6', 7676790, ['hhh','hhgh','gjjj','f','gg','ff']);
// let client8 = new Client(506, 'grgg', 'hhh', 'dfr6', 7676790, ['hhh','hhgh','gjjj']);
// let client9 = new Client(5-6, 'grgg', 'hhh', 'dfr6', 7676790, ['hhh','hhgh','gjjj']);
// let client10 = new Client(506, 'grgg', 'hhh', 'dfr6', 7676790, ['hhgh','gjjj']);
// console.log(client1);
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// //
// let Ma = function ( ...clients){
//     let cl = [];
//     cl.push(...clients);
//     return cl
// };
// let sor = Ma(client1,client2,client3,client4,client5,client6,client7,client8,client9,client10);
// console.log(sor.sort((a, b) => a.order.length - b.order.length));
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// let car = function (model, prod, year, maxspeed, v){
//     this.model = model;
//     this.prod = prod;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.v = v;
//     this.drive = function (){
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
//     }
//     // this.info = function () {
//     //     // console.log(`модель - ${this.model}  виробник - ${this.prod} рік - ${this.year} швидкість - ${this.maxspeed} обєм - ${this.v} `);
//     //
//     //     for (const argument in this) {
//     //         console.log(`${argument} - ${this[argument]}`);
//     //     }
//     // }
// this.increaseMaxSpeed =  function (newSpeed){
//     this.maxspeed += newSpeed;
//     }
//     this.changeYear = function (newValue){
//          this.year = newValue;
//     }
//     this.addDriver = function (driver){
//        this.driver = driver;
//
//     }
// };
// let car1 = new car('ggg','gghh', 6, 77, 4);
// // car1.drive()
// // car1.info()
// car1.increaseMaxSpeed(2);
// car1.changeYear(8);
// console.log(car1);
// car1.addDriver(['fhfh',['ggtgt']]);
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class car {
//     constructor (model, prod, year, maxspeed, v) {
//         this.model = model;
//         this.prod = prod;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.v = v;
//     }
//         drive(){
//             console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
//         }
//         info() {
//             console.log(`модель - ${this.model}  виробник - ${this.prod} рік - ${this.year} швидкість - ${this.maxspeed} обєм - ${this.v} `);
//         }
//         increaseMaxSpeed(newSpeed){
//             this.maxspeed += newSpeed;
//         }
//         changeYear(newValue){
//             this.year = newValue;
//         }
//         addDriver(driver){
//             this.driver = driver;
//
//         }
// }
// let car1 = new car('ggg','gghh', 6, 77, 4);
// // car1.drive()
// // car1.info()
// car1.increaseMaxSpeed(2);
// car1.changeYear(8);
// console.log(car1);
// car1.addDriver(['fhfh','ggtgt']);
// console.log(car1);
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбек

function POP (name, age, footsize){
    this.name = name;
    this.age = age;
    this.footsize = footsize;
}
let arrpop = [
    new POP('ina', 22, 40),
    new POP('rina', 32, 31),
    new POP('pina', 42, 32),
    new POP('zina', 52, 34),
    new POP('kina', 31, 37),
    new POP('dina', 35, 36),
    new POP('kaina', 12, 38),
    new POP('spina', 17, 30),
    new POP('valina', 24, 21),
    new POP('karina', 26, 50),
];
console.log(arrpop);
class Prince {
    constructor(name, age, tuff) {
        this.name = name;
        this.age = age;
        this.tuff = tuff;
    }
};
let pibc = new Prince('stepan', 42, 37);
console.log(pibc);
let happy = (popu, prince)=>{
for (const pibcElement of popu) {
    if (pibcElement.footsize === prince.tuff) {
      return  `${pibcElement.name}`;
    }
}
};
console.log(happy(arrpop, pibc));

console.log(arrpop.find(value => value.footsize === 37));