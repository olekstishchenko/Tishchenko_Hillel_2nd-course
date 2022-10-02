//user creates array
let i='';
let arr=[];
do {
    arr.push (i);
    }
while (i=prompt('Введіть елемент масиву:'));
arr.shift();
console.log(arr);

function compare(a,b){
    if (a>b) return 1;
    if (a == b) return 0;
    return -1;
}

arr.sort(compare);
console.log(arr);

arr.splice(1,3);
console.log(arr);



