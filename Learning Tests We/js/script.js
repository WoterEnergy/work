
function showText() {
    const btn = document.getElementById('btn')
    const text = document.getElementById('text')
    const loginForm = document.getElementById('login')
    const BurgerMenu = document.getElementById('burger')
    btn.onclick = () => {
        text.classList.remove('hidden');
        loginForm.classList.add('hidden')
        BurgerMenu.classList.remove('hidden')
    }
}

showText()

document.querySelector('.burger').addEventListener('click', function(){
  document.querySelector('.burger span').classList.toggle('active');
  document.querySelector('.menu').classList.toggle("animate");
 
})

