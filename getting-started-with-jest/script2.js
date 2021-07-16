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

button.onclick = function makeCirkle ()  {
    testBall.x
    testBall.size
    testBall.color
    testBall.draw()
    loop();
}

const balls = []

function loop () {
    ctx.fillStyle =  'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height)

    // while (balls.length <= 27) {
    //     let ball = new CriateCirkle (
    //         CriateCirkle(0, width),
    //         CriateCirkle(0, height),
    //         CriateCirkle(-7, 7),
    //         CriateCirkle(-7, 7),
    //         'rgb(' + CriateCirkle(0,255) + ',' + CriateCirkle(0,255) + ',' + CriateCirkle(0,255) +')',
    //         CriateCirkle(10, 20)
    //     );
    //     balls.push(ball);
        
    // }
for (let i = 0; i < balls.length; i++) {
    balls[i].draw()
    balls[i].update()
}
requestAnimationFrame(loop);
}


let testBall = new CriateCirkle(20, 10, 10, 10);



