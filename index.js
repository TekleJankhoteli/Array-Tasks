// 1. დაწერეთ ფუნქცია რომელსაც გადასცემთ ციფრს // თუ ციფრი დადებითია ფუნქციამ უნდა დააბრუნოს "დადებითია", თუ // არა "უარყოფითია"

// function checkNumbers(x) {
//   if (x >= 0) {
//     console.log("dadebitia");
//   } else if (x < 0) {
//     console.log("uarkofitia");
//   } else {
//     console.log("error");
//   }
// }
// checkNumbers(-15);


// 2. დაწერეთ ფუნქცია რომელიც დააბრუნებს ყველა ციფრის ჯამს // 1 დან 100 მდე

// function sum(numb) {
//   let cvladi = 0;
//   for (let i = 1; i <= numb; i++) {
//     cvladi = cvladi + i;
//   }
//   console.log(cvladi);
// }

// sum(100);


// 3. დაწერეთ ფუნქცია რომელსაც გადასცემთ ციფრს, ფუნქციამ უნდა // დააბრუნოს ეს ციფრი კენტია თუ ლუწი

// function checkNumb(x) {
//   if (typeof x !== "number") {
//     console.log("es ar aris cifri");
//   } else if (x % 2 === 0) {
//     console.log("luwia");
//   } else {
//     console.log("kentia");
//   }
// }

// checkNumb("oeuhrgfo3");


// 4. შექმენით ობიექტი car რომელსაც ექნება year და model.

// let car = { year: 2000, model: "Mercedes" };

// console.log(car);
// დაწერეთ ფუნქცია რომელსაც გადასცემთ ამ მანქანის ობიექტს // და ფუნქციამ უნდა დააბრუნოს მანქანის ასაკი

// function checkAge(car) {

// const currentYear=new Date().getFullYear()
// return currentYear -car.year 
//   console.log(2023 - car.year);
// }
// checkAge(car);


// 5. დაწერეთ ფუნქცია რომელსაც გადავცემთ ციფრების მასივს, // მაგალითად [1,4,88,99, 123]. ფუნქციამ უნდა იპოვოს და დააბრუნოს // მასივის უდიდესი ციფრი

// let arr = [1, 34, 17, 1525, -2];
// function udidesiCifri(arr) {
//   let numb = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (numb < arr[i]) {
//       numb = arr[i];
//     }
//   }
//   console.log(numb);
// }

// udidesiCifri(arr);



// 6. გააკეთეთ იგივე ოღონდ დააბრუნეთ უმცირესი ციფრი

// let arr = [1, 34, 17, 1525, -2, -30];
// function umciresiCifri(arr) {
//   let numb = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (numb > arr[i]) {
//       numb = arr[i];
//     }
//   }
//   console.log(numb);
// }

// umciresiCifri(arr);


// 7. დაწერეთ ფუნქცია რომელსაც გადასცემთ სიტყვას, // ფუნქციამ უნდა დააბრუნოს ამ სიტყვის შებრუნებული ვერსია, // მაგალითად თუ გადავცემთ someFn("ერთი"), უნდა დააბრუნოს "ითრე"

// function shebrunebuli(word) {
//   let newArr = "";

//   for (let i = word.length - 1; i >= 0; i--) {
//     newArr = newArr + word[i];
//   }
//   console.log(newArr);
// }
// shebrunebuli("nika");



//////////////////// ///////////////////ახალი დავალება/////////////////////////////



// #1
// დაწერეთ ფუნქცია რომელსაც გადასცემთ წინადადებას და ციფრს
// მაგალითად fn("გამარჯობა, როგორ ხარ?", 5)
// ფუნქციამ უნდა შეამოკლოს ხუთი სიმბოლო და დაამატოს ბოლოში "..."
// და დააბრუნოს შედეგი "გამარ..."



// function dots(string, numb) {
//     if (string.length > numb) {
//         return string.slice(0, numb) + "...";
//     } else {
//         return string;
//     }
// }

// console.log(dots("tekle jankhoteli", 8));



// #3
// დაწერეთ ფუნქცია რომელსაც გადასცემთ ტელეფონის ნომერს
// და ქვეყანას
// მაგალითად fn("995599123456", "GE")
// თუ ქვეყანა არის GE დააბრუნოს +995599123456
// თუ ქვეყანა არის US დააბრუნოს +1(995)99123456
// თუ ქვეყანა არის RU დააბრუნოს +7(995)99123456
// თუ ქვეყანა არის სხვა დააბრუნოს შეცდომა "არ ვიცით რა ქვეყანაა ეს"


// function checkTelNumb(number,region){

//     if(region==="GE"){
//         console.log(`+${number} `)
//     }else if(region==="US"){
//         console.log(`+1(${number.slice(0,3)})${number.slice(3)}`)
//     }else if(region==="RU"){
//         console.log(`+7(${number.slice(0,3)})${number.slice(3)}`)
//     }else{
//         console.log("this is not a country")
//     }
// }
// checkTelNumb("995599123456","RU")




// #4
// დაწერეთ ფუნქცია რომელსაც გადასცემთ ციფრების მასივს
// მაგალითად fn([1, 2, 3, 3, 5, 2, 7, 8, 7, 10])
// დააბრუნოს მასივის ყველა უნიკალური ელემენტი
// მაგალითად [1, 2, 3, 5, 7, 8, 10]

// function unique(x){
//     let newArr=[];

//     for(let i=0; i<x.length; i++){
//         if(!newArr.includes(x[i])){
//             newArr.push(x[i])
//         }
//     }
//     return newArr
// }

// console.log(unique([1,2,5,88,88]))


// #5
// დაწერეთ ბანკომატის ფუნქციონალი რომელსაც გადასცემთ ციფრს
// ბანკომატში გვაქვს 200 , 100 , 50, 20, 10, 5 ლარიანი კუპიურები
// ფუნქციამ უნდა გვითხრას რამდენ ცალს და რამდენ ლარიან კუპიურად
// დაგვიშლის ჩვენს თანხას
// მაგალითად თუ ვეტყვით რომ გვინდა 555 ლარი
// ფუნქციამ უნდა დაგვიბრუნოს
// 2 ცალი 200 ლარიანი
// 1 ცალი 100 ლარიანი
// 1 ცალი 50 ლარიანი
// 1 ცალი 5 ლარიანი



// function bankomati(x){
//     let kupiura=[200,100,50,5];
//     let functionResult=[];

//     for(let i of kupiura){
//         let count=0;
//         while(x>=i){
//             x=x-i;
//             count ++
//         }

//         if(count>0){
//             functionResult[i]=count;
//         }

//     }
//     return functionResult;
// }

// let tanxa=[555];
// console.log(bankomati(tanxa))




