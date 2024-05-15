// ### Exercise #3
for (let i = 1; i <= 5; i++) { // Adjust the condition to include 5 rows

    let stars = '';
    for (let j = 0; j < i; j++) {
        stars += '*';
    }
    console.log(stars);
}
// ### Exercise #4.1
xValue = 10
while(xValue>0){
    console.log(xValue)
    xValue -= 0.5;
}
// 4.2
let num = 1
while(num<100){
    console.log(num);
    num += 2;
}
// 4.3
let k =''
let n = 5
let j = 1
while(n>0){

    k = k +` [${j}] `
    n--
    j +=1
}
console.log(k)
//4.4
let c = 19;
let sum=c;
while(c>0){
    c--;
    sum = sum + c
}
console.log(`sum = ${sum}`)

