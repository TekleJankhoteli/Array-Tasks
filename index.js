const characters = [
   {
     name: "Luke Skywalker",
     height: "172",
     mass: "77",
     eye_color: "blue",
     gender: "male",
   },
   {
     name: "Darth Vader",
     height: "202",
     mass: "136",
     eye_color: "yellow",
     gender: "male",
   },
   {
     name: "Leia Organa",
     height: "150",
     mass: "49",
     eye_color: "brown",
     gender: "female",
   },
   {
     name: "Anakin Skywalker",
     height: "188",
     mass: "84",
     eye_color: "blue",
     gender: "male",
   },
 ];
 
// 1) Get an array of all names

// function getNames(arr){
//    let allName=[];
//    for(let i=0;i<arr.length;i++){
//       allName.push(arr[i].name)
//    }
//    return allName
// }
// console.log(getNames(characters))


// 2) Get an array of all heights

//  function getHeight(arr){
//       let allHeight=[];
//       for(let i=0;i<arr.length;i++){
//          allHeight.push(arr[i].height)
//       }
//       return allHeight
//    }
//    console.log(getHeight(characters))


// 3) Get an array of objects with just name and height properties

// let nameHeight=characters.map((i)=>{
//    return {
//       name:i.name,
//       height:i.height
//    }
// })
// console.log(nameHeight)


 // 4) Get an array of all first names

//  let names=characters.map((i)=>{
//   return i.name.split(" ")[0]
//  })
// console.log(names)

// 5) Get the total mass of all characters
//  let totalMass=characters.reduce((accumulator,item)=>{
//   return accumulator+parseInt(item.mass)
//  },0)
//  console.log(totalMass)


 // 6) Get the total height of all characters
//  let totalHeight=characters.reduce((accumulator,item)=>{
//   return accumulator+parseInt(item.height)
//  },0)
//  console.log(totalHeight)


// 7) Get the total number of characters in all the character names
//  function characterNameNumber(arr){
//   let lengthofName=[];
//   for(let i=0;i<arr.length;i++){
//    let names=arr[i].name;
//    let nameslength=names.length;
//    lengthofName.push(nameslength)
//   }
// return lengthofName
//  }
//  console.log(characterNameNumber(characters))

// //////////////////////////////////////////////////

// let characterNames=characters.map((i)=>{
//   return i.name
// })
// console.log(characterNames)

// let length=characterNames.map((j)=>{
//   return j.length
// })
// console.log(length)

// 8) Get the total number of characters by eye color (hint. a map of eye color to count)

//  let eyeColor=characters.map((i)=>{
//   let count=0;
//   if(i.eye_color==="yellow"){
//     count ++
//   }
// return count
//  })
//  console.log(eyeColor)


// 9) Get characters with mass greater than 100
// function mass(arr){
//   let result=[]
//   for(let i=0;i<arr.length;i++){
//     if(parseInt(arr[i].mass)>100 ){
//     result.push(arr[i]) 
//     }
//   }
//   return result
// }
// console.log(mass(characters))

// /////////////////////////////////////

// let filteredCharacterMass=characters.filter((i)=>{
//   return parseInt(i.mass)>100 
// })
// console.log(filteredCharacterMass)

//10)  Get characters with height less than 200
//  let filteredMass=characters.filter((i)=>{
//   return parseInt(i.height)<200
//  })
//  console.log(filteredMass)


// 11) Get all male characters
//  let filtered=characters.filter((i)=>{
//   return i.gender==="male"
//  })
//  console.log(filtered)

//12)  Get all female characters
//  let filtered=characters.filter((i)=>{
//   return i.gender==="female"
//  })
//  console.log(filtered)


 // 13) Sort by name
//  let sortedCharacters = characters.sort((a, b) => {
// if(a.name<b.name) return -1 
// });
// console.log(sortedCharacters);


 // 14) Sort by mass
//  let sortedMass=characters.sort((a,b)=>{
//   return parseInt(b.mass-a.mass) 
//  })
//  console.log(sortedMass)


//15)  Sort by height
//  let sortedHeight=characters.sort((a,b)=>{
//   return parseInt(b.height-a.height)
//  })
//  console.log(sortedHeight)


//16) Sort by gender
//  let sortedGender=characters.sort((a,b)=>{
// if(a.gender==="female") return -1
//  })
//  console.log(sortedGender)


//17)  Does every character have blue eyes?
//  function hasBlueEyes(arr) {
//   return arr.every(i => i.eye_color === "blue");
// }
// console.log(hasBlueEyes(characters));


// 18) Does every character have mass more than 40?
//  function hasheight(arr){
//   return arr.every(i=>i.height>40)
//  }
//  console.log(hasheight(characters))


// 19) Is every character shorter than 200?
//  function isShort(arr){
//   return arr.every(i=>i.height<200)
//  }
//  console.log(isShort(characters))


//20) Is every character male?
//  function isMale(arr){
//   return arr.every(i=>i.gender==="male")
//  }
//  console.log(isMale(characters))


// 21) Is there at least one male character?
//  function atLeastOneMale(arr){
//   return arr.some(i=>i.gender==="female")
//  }
//  console.log(atLeastOneMale(characters))


// 22) Is there at least one character with blue eyes?
//  function atLeastOneBlueeyes(arr){
//   return arr.some(i=>i.eye_color==="blue")
//  }
//  console.log(atLeastOneBlueeyes(characters))


// 23) Is there at least one character taller than 200?
//  function atLeastOnetaller(arr){
//   return arr.some(i=>i.height>200)
//  }
//  console.log(atLeastOnetaller(characters))


// 24) Is there at least one character that has mass less than 50?
//  function atLeastOnemass(arr){
//   return arr.some(i=>i.mass>50)
//  }
//  console.log(atLeastOnemass(characters))
 


// 25) array prototype - last()

// Array.prototype.last=function(){
//   if(this.length>0){
//     return this[this.length-1]
//   }else{
//     return "the array is empty"
//   }
// }
// let myarr=[]
// console.log(myarr.last())

