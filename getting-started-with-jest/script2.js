// const promice = new Promice((resolve, reject) => {
//     setTimeout(() => {
//         resolve('result')
//     },1000)
// })

// promice.then( result => {
//     alert('fullfiled'+ result)
// }, 
// error => {
//     alert('rejected:' + error)
// })


////// задача создать окно для ввода данных с диаметр, цвет, кномкой создать круг, и скорость анимации прикрутить действия на 
//// что бы можно было управлять с клавиатуры 


let container = document.createElement('div')
let size = document.createElement('input')
let color  = document.createElement('input')
let speed = document.createElement('input')
let button = document.createElement('button')
const main = document.getElementById("root")
size.placeholder = 'write size'
size.className = 'size'
color.placeholder = 'write color'
color.className = 'color'
speed.placeholder = 'Write speed'
speed.className = 'speed'
button.innerText = "OK"
button.className = 'btn'
container.className = 'modal'
container.append(size, color, speed, button)
main.append(container)
