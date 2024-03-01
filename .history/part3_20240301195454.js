let a = "5";
let b = "6.7";
console.log(a); // string 5
console.log(parseInt(a)); // 5
console.log(parseFloat(b)); //6.7
//Number(value) : Chuyen value ve dang number
console.log(Number(a)); // 5
console.log(Number(b)); //6.7
console.log(Number("asdasd")); //NaN
console.log(Number(undefined)); // NaN
console.log(Number(null)); //0
console.log(Number(NaN)); //NaN
console.log(Number(false)); //0
console.log(Number(true)); //1
//String(value) : Chuyen value ve dang string
console.log(String(5)); //'5'
console.log(String("asdasd")); //'asdasd'
console.log(String(undefined)); //'undefined'
console.log(String(null)); //'null'
console.log(String(false)); //'false'
console.log(String(true)); //'true'
//Boolean(value) : true or false
console.log(Boolean(0)); //false
console.log(Boolean(1)); //true
console.log(Boolean(1000)); //true
console.log(Boolean("")); //false
console.log(Boolean({})); //true
