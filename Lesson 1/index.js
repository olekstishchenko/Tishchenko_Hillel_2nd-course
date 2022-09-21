// let string = 'My first string'
// let number = 123
//
// console.log(string);

const obj = {p:3.14}
console.log(obj, obj.p)
obj.p =3;
obj.e=2.7;

alert('Я – JavaScript!2.0');

let admin;
let name;
name='Іван';
admin=name;
alert(admin)

let nameUser = "Ілля";
alert( `привіт ${1}` ); /* привіт 1*/
alert( `привіт ${"nameUser"}` );/* привіт nameUser*/
alert( `привіт ${nameUser}` );/* привіт Ілля*/

let firstName = prompt('Як Вас звати?','');
alert(`Вас звати ${firstName} !`);