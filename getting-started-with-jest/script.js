// console.log('hello world');

// const student = {
//     name: 'vasya',
//     age: 13,
//     scores: {
//       match: 64,
//       engl: 37,
//     },
//   };
  
// const {name: fullname, age: Age = 16} = student 
// const {name, scores:{match, engl, science = 35}} = student
// console.log(`Hello ${fullname} your age is ${Age}`)
// console.log(`and you score in science is  ${science}`)





// let red = 100;
// let green = 100;
// let black = 100;
// const RGB = [256, 128, 56];
// [red, green] = RGB;




// // const [red, green, black] = RGB
// console.log(`you color is ${red} ,${black}, ${green} `)

// const myArray = [1, 2, 3];


// function doSomthing (first, second, thre) {

// }
// doSomthing (...myArray);


const ArrMass = ['angel', 'clown', 'mandarin', 'sturgeon']
const testAdd = ArrMass.splice(3, 0, 'nasok', 'nasos' ,'kynik', 'orgazm')

console.log(ArrMass)

ArrMass.forEach((arr)=> {
if (arr === 'kynik') {
  console.log('Idi breysa i chist zyby')
}
else if (arr === 'nasos') {
  console.log('go to sosat')
}
})


function getRandomInt() {
  let matchGame = Math.floor(Math.random() * 100);
  if (matchGame <= 10 ){
    alert ('GOOOD')
  }
  else if (matchGame >= 10) {
    alert ('Baad')
  }
  return matchGame
}

console.log(getRandomInt())

function prikolAlert () {
  if (matchGame >= 0 ){
    alert ('GOOOD')
  }
  else if (matchGame <= 50) {
    alert ('Baad')
  }
}