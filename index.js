// // BT1
// const array = ["Saab", "Volvo", "BMW"];
// console.log(array[1])
// // BT2
// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// for(let i = 0; i < arr.length; i++){
//     sum += arr[i];  
//     console.log(sum)
// } 
// // BT3
// let students = [
//     {name: "Alice", age: 20 },
//     {name: "Bob", age: 22},
//     {name: "Charlie", age: 25}
// ];
// let ds = 0;
// for (let i=1; i<students.length; i++){
//      ds = (students[i]);
//      console.log(ds)
// }
// // BT4
// let numbers = [2, 4, 6, 8, 10];
// for (let i=0; i<numbers.length; i++){
//     x = numbers[i]*2;
//     console.log(x)
// }
// // BT5
// let names = ["Alice", "Bob", "Charlie", "David", "Eve"];
// console.log(names.slice(0, 1), names.slice(2, 3), names.slice(3, 4))
// // BT6
// let shop = [
//     {name : "iphone", price:999},
//     {name : "Macbook", price:1999},
//     {name : "Airpods", price:199},
//     {name : "ipad", price:799}
// ]
// let Tong = 0;
// for (let i=0; i<shop.length; i++){
//     Tong += shop[i].price;
//     console.log(Tong)
// }
// // BT7
// let myarray = [1, 2, 3, 4, 5];
// let json = JSON.stringify(myarray);
// console.log(json)
// // BT1
// let firstarray = [1, 4, 5, 2];
// let sencondarray = [4, 6, 8, 9, 0];
// const newfirs = firstarray.concat(sencondarray)
// console.log(newfirs)
// for (let i=0; i<newfirs.length; i++){
//     x = newfirs[i]*3;
//     console.log(x)
// }
// // BT2
// let numberArr = [2, 5, 6, 3, 5, 9];
//     numberArr.push(0, 8, 1);
//     console.log(numberArr);
//     numberArr.shift();
//     // console.log(numberArr);
//     // numberArr.splice(1, 2, 7);
//     console.log(numberArr);
//     numberArr.sort()
//     console.log(numberArr);
//   numberArr.reverse()
//   console.log(numberArr)
// // BT3
// let bobsteps = [5000, 4300, 4000, 5800, 6000, 4500, 3000];
// let alicesteps = [3000, 4200, 6000, 4000, 5500, 4500, 3500];
// let sum1 = 0;
// let tbcbob = 0;
// for (let i=0; i<bobsteps.length;i++){
//     sum1 += bobsteps[i];
// }
//    tbcbob = sum1/bobsteps.length;
// for (let i=0; i<alicesteps.length;i++){
//     sum1 += alicesteps[i];
// }
//    tbcalice = sum1/alicesteps.length;
// if (tbcbob > tbcalice){
//     console.log("Bob đi nhiều hơn alice")
// }
// if (tbcbob < tbcalice){
//     console.log("Alice đi nhiều hơn BOB")
// } else{
//     console.log("Hai người đi như nhau")
// }
// // BT4
// let studeninfo = [
//     {name:"Bob", age:20},
//     {name:"Alice", age:25},
//     {name:"Lisa", age:19},
//     {name:"Max", age:22}
// ]
// studeninfo.push({name:"Alex", age:21}, {name:"Adam", age:18})
// studeninfo.splice(0, 1, {name:"Sturt", age:26})
// if (studeninfo.age > 20){
//     console.log(studeninfo);
// }
// // BT1
// function multip(numbers){
//         for (let i=1; i<= 10; i++){
//           let bcc =  numbers*i;
//          console.log(bcc);
//         }
// }

// multip(3)
// // BT2
// function age(numbers){
//     let d = new Date(2023);
//     let tuoi = d - numbers
//     console.log(tuoi);
// }
// age(1998)
// // BT3
// const sting1 = ["austraylia", "germany", "united states America", "Viet nam"];
// function longest(sting1) {
//     let max = '';
//     for (let i =0; i<sting1.length; i++){
//         if(sting1[i].length>max.length){
//          max = sting1[i];
//         }
//     } return max;
// }
// console.log(longest(sting1));
// // BT4
// const ar = [1, 6, 7 , 4, 3];
// function findindex(ar,numbers){
//     let a = 7;
//        for (let i = 0; i < ar.length; i++) {
//         if(ar[i]==a){
//             a = i;
//             console.log("vị trí của số 7 là:",i)
//         }
//        }
// }
// findindex(ar,7);
// // BT5
// function numpower(numbers1, numbers2){
//     console.log(Math.pow(numbers1, numbers2));
// }
// numpower(2, 3);
// // BT6
// const person = [{name: "Bob", height: 1.75, weight: 60}, {name: "Alice", height: 1.68, weight: 55}, {name: "Max", height: 1.80, weight: 66},{name: "Jame", height: 1.74, weight: 75},{name: "Ana", height: 1.64, weight: 65}];
// function bmi(person) {
//     for (let i = 0; i < person.length; i++) {
//        let bmi = person[i].weight/(person[i].height*2) ;
//         person[i].BMI = bmi;
//         // console.log(person);
//         if(18.5>person[i].BMI){
//             console.log('thin :',person[i])
//         } else
//         if(18.5<=person[i].BMI<=24.9){
//             console.log('BT :',person[i])
//         } else
//         if(person[i].BMI>24.9){
//             console.log('fat :',person[i])
//         }
//     }
// }
// bmi(person);
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function tinhTongSoNguyenTo() {
    const a = parseInt(document.getElementById("inputA").value);
    const b = parseInt(document.getElementById("inputB").value);
    let tong = 0;

    if (a >= b) {
        document.getElementById("ketQua").innerHTML = "Vui lòng nhập số b lớn hơn số a.";
    } else {
        for (let i = a; i <= b; i++) {
            if (isPrime(i)) {
                tong += i;
            }
        }
        document.getElementById("ketQua").innerHTML = `Tổng các số nguyên tố từ ${a} đến ${b} là: ${tong}`;
    }
}
