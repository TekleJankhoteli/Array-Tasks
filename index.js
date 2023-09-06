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
