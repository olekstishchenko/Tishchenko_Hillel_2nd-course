// let numOrStr = prompt('input number or string');
// console.log(numOrStr)
//
// if(numOrStr === null) {
//     console.log('вы отменили')
// } else if( numOrStr.trim() === '' ) {
//     console.log('Empty String');
// } else if( isNaN( +numOrStr ) ) {
//     console.log('number is Ba_NaN')
// } else {
//     console.log('OK!')
// }

let numOrStr = prompt('input number or string');
console.log(numOrStr);

switch (true){
    case numOrStr === null:
        console.log('вы отменили');
        break;
    case numOrStr.trim() === '':
        console.log('Empty String');
        break;
    case isNaN( +numOrStr ):
        console.log('number is Ba_NaN');
        break;
    default:
        console.log('OK!');
}


let str1 = '';
for (let i=10; i >= 10 && i <= 20; i++){
    str1 += i+',';}
console.log(str1)

let str2 = '';
for (let i=10; i >= 10 && i <= 20; i++){
    str2 += i*i+',';}
console.log(str2)

let str3 = '';
for (let i=1; i <= 10; i++){
    str3 += i*7+',';}
console.log(str3)

let str4 = 0;
for (let i=1; i <= 15; i++){
    str4 += i}
console.log(str4)

let str5 = 1;
for (let i=15; i <= 35; i++){
    str5 *= i}
console.log(str5)

let str6 = 0;
for (let i=1; i<=100; i++){
    str6 += i/i++
}
console.log(str6)

let str7 = 0;
for (let i=30; i<=80;i++){
    if (i % 2 !==0) continue
    str7 +=i;
}
console.log(str7)

let str8 = '';
for (let i = 100; i<=200; i++){
    if (i % 3 !==0) continue
    str8 += i+',';
}
console.log(str8);

let str9 = '';
let x=prompt('Введіть число')
for (let i=1; i<=x; i++){
    if (x % i !==0) continue
    str9 += i+',';
}
console.log(str9);

let m = 0;
let str10 = 0;
let y=prompt('Введіть число')
    for (let i = 1; i <= y; i++) {
        if (y % i !== 0) continue
        if (i % 2 !== 0) continue
        str10++;
        m += i;
    }
console.log(str10);
console.log(m);

//Таблица умножения

for (let i=1; i<=10; i++){
    for (let j=1; j<=10; j++){
        console.log(i*j);
    }
}

// 20-30 step 0.5

let str11='';
let a = 5;
let b= 300;
for (let i=195; i<b; ){
    i += a;
    str11 += `${i/10} `;

}
console.log(str11);

// dollar to UAH

let str12='';
let c = 10;
let d= 100;
let e = 27;
for (let i=0; i<d; ){
    i += c;
    str12 += `${i*e}, `;

}
console.log(str12);

//all numbers less than square
let str13 = '';
let z=prompt('Введіть число')
for (let i=1; i<=z; i++){
    if (i ** 2 >= z) break
    str13 += i+',';
}


console.log(str13);

//simple or not?

let str14 = 0;
let w=prompt('Введіть число:')
for (let i = 1; i<=w; i++){
    if (w % i !==0) continue
    str14++;

}
if (str14===2)
    console.log(`${w} Simple`);
else
    console.log(`${w} No_Simple`);

//3^n=x?

let str15;
let q=prompt('Введіть число:')
for (let n=1; n<=q; n++){
    if (Math.pow(3,n)>q) break
    str15 = Number(Math.pow(3,n));
}
if (str15 == q)
    console.log('True');
else
    console.log('False');
