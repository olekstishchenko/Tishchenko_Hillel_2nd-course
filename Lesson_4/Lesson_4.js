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