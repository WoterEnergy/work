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
//// что бы можно было управлять с клавиатуры и доп вариант радио бтн чтобы он сам скакал


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
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;


function CriateCirkle(velX, velY, x, y,) {
    // this.size = size;
    // this.color = color;
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;

}
CriateCirkle.prototype.draw = function () {
    ctx.beginPath()
    ctx.fillStyle = color.value
    ctx.arc(this.x, this.y, size.value, 0, 2 * Math.PI)
    ctx.fill()
    
}

CriateCirkle.prototype.update = function () {
    if ((this.x + size) >= width) {
        this.velX = -(this.velX);
      }
    
      if ((this.x - size) <= 0) {
        this.velX = -(this.velX);
      }
    
      if ((this.y + size) >= height) {
        this.velY = -(this.velY);
      }
    
      if ((this.y - size) <= 0) {
        this.velY = -(this.velY);
      }
    
      this.x += this.velX;
      this.y += this.velY;
}


let testBall = new CriateCirkle(20, 10, 10, 10);


button.onclick = () => {
    testBall.x
    testBall.size
    testBall.color
    testBall.draw()

}

