//user creates array
// let i='';
// let arr=[];
// do {
//     arr.push (i);
//     }
// while (i=prompt('Введіть елемент масиву:'));
// arr.shift();
// console.log(arr);
//
// function compare(a,b){
//     if (a>b) return 1;
//     if (a == b) return 0;
//     return -1;
// }
//
// arr.sort(compare);
// console.log(arr);
//
// arr.splice(1,3);
// console.log(arr);

//HW10

let array=[16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
console.log('Початковий масив:',array);

//max
console.log(`${Math.max.apply(null,array)},${array.indexOf(Math.max.apply(null,array))} `)

//min
console.log(`${Math.min.apply(null,array)},${array.indexOf(Math.min.apply(null,array))} `)
let surPlus = array.filter(function (array){
    return array > 0;
    });
let result1 = surPlus.reduce((sum,current)=> sum + current);
console.log(`Кількість додатних чисел: ${surPlus.length}`);
console.log(`Сума додатних чисел:${result1}`);

let evenPlus = surPlus.filter( function (array){
    return array % 2 === 0;
});
let result2 = evenPlus.reduce((sum,current)=> sum + current);
console.log(`Кількість додатних парних чисел: ${evenPlus.length}`);
console.log(`Сума додатних парних чисел:${result2}`);
let oddPlus = surPlus.filter( function (array){
    return array % 2 !== 0;
});
let result3 = oddPlus.reduce((sum,current)=> sum + current);
console.log(`Кількість додатних непарних чисел: ${oddPlus.length}`);
console.log(`Сума додатних непарних  чисел:${result3}`);

let result4 = evenPlus.reduce((sum,current)=> sum * current);
console.log(`Добуток додатних чисел:${result4}`);

let max = array[0];
let indexmax = 0;
for (let i = 1; i < array.length; i++) {
    if (array[i] > max)  {
        max = array[i];
        array[indexmax] = 0;
        indexmax = i;

    } else {
        array[i] = 0;}
}
console.log(array);


const users = [
    {
        "index": 0,
        "isActive": true,
        "balance": "$2,226.60",
        "name": "Eugenia Sawyer",
        "gender": "female",
        "phone": "+1 (840) 583-3207",
        "address": "949 John Street, Rose, Puerto Rico, 1857"
    },
    {
        "index": 1,
        "isActive": true,
        "balance": "$2,613.77",
        "name": "Pauline Gallegos",
        "gender": "female",
        "phone": "+1 (985) 593-3328",
        "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
    },
    {
        "index": 2,
        "isActive": false,
        "balance": "$3,976.41",
        "name": "Middleton Chaney",
        "gender": "male",
        "phone": "+1 (995) 591-2478",
        "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
    },
    {
        "index": 3,
        "isActive": true,
        "balance": "$1,934.58",
        "name": "Burns Poole",
        "gender": "male",
        "phone": "+1 (885) 559-3422",
        "address": "730 Seba Avenue, Osage, Alabama, 6290"
    },
    {
        "index": 4,
        "isActive": true,
        "balance": "$3,261.65",
        "name": "Mcfadden Horne",
        "gender": "male",
        "phone": "+1 (942) 565-3988",
        "address": "120 Scholes Street, Kirk, Michigan, 1018"
    },
    {
        "index": 5,
        "isActive": false,
        "balance": "$1,790.56",
        "name": "Suzette Lewis",
        "gender": "female",
        "phone": "+1 (837) 586-3283",
        "address": "314 Dunne Place, Bawcomville, Guam, 9053"
    }
]
console.log(users)

let users2 = users

for(let i=0; i<users2.length;i++){
    users2[i].balance=users2[i].balance.split("")
    removeElement(users2[i].balance,'$')
    removeElement(users2[i].balance,',')
    }
for(let i=0; i<users2.length;i++){
    users2[i].balance=Number(users2[i].balance.join(''))
}
console.log(users2)

let userTel = []
for(let i=0; i<users2.length;i++) {
    if (users2[i].balance >= 2000)
        userTel.push(users2[i].phone)
}
console.log(userTel);


let array2 = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, element){
    for (let i=0; i<array.length; i++){
        if (array[i] !== element)
            array.slice(0,i);
        else
            array.splice(i,1);
}}

removeElement(array2, 5);
console.log(array2);

//HW13
// function average number

let array3 = [100,2,"a",4,'JavaScript',5,6,'n'];

function averageNumbers(array) {
    let str=0;
    let n=0;
    for (let i=0; i<array.length;i++) {
        if (isNaN(array[i])) continue
        else
            str += array[i];
            n++;
    }
    console.log(str/n)
}

averageNumbers(array3)

//doMath(x,znak,y)

// let x = +prompt('Введіть Х:');
// let znak = prompt('Введіть знак: +, -, *, /, %, ^ ');
// let y = +prompt('Введіть Y:');


function doMath(x,znak,y){
let r=0;
        if (znak === "+") {
            r = x + y;
        } else if (znak === "-"){
            r = x - y;
        } else if (znak === "*"){
            r = x * y;
        } else if (znak === "/"){
            r = x / y;
        } else if (znak === "%"){
            r = x % y;
        } else if (znak === "^"){
            r=x**y;
        } else {
            console.log('Неправильний знак')
        }

console.log(r);
}
// doMath(x,znak,y);

//-Написать функцию заполнения пользовательскими данными двумерного массива.
// Длину основного массива и внутренних массивов задаёт пользователь.
// Значения всех элементов всех массивов задаёт пользователь.
let a = []
let b = []
while(c = prompt('Введіть значення для першого внутрішнього масиву:')) {
    a.push(c)}
while(d = prompt('Введіть значення для другого внутрішнього масиву:')) {
    b.push(d)}
console.log([ [a],[b] ]);

// -Создать функцию, которая убирает из строки все символы, которые мы передали вторым аргументом.
// 'func("hello world", ['l', 'd'])' вернет нам "heo wor".
// Исходную строку и символы для удаления задаёт пользователь
//
let indexes = []
let ar = ["hello world"];
let br = ['l','d'];
console.log(ar)
console.log(br)
for(let i=0;i<ar.length;i++){
    ar[i]=ar[i].split("");
    for (let j=0;j<br.length;j++){
        br[j]=br[j].split("");
    removeElement(ar[i],`${br[j]}`)}
}

console.log(ar)


