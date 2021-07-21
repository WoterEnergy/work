async function f() {
    return 1
}


f().then(alert)


async function j() {
    
let promice = new Promise((reselve, reject) => {
    setTimeout(() => reselve('Done'), 1000)
})

let result = await Promise

alert(result)
}

j()



async function showAvatar () {
    let responce = await fetch('/article/promise-chaining/user.json')
    let user = await responce.json()

    let gitHub = await fetch(`https://api.github.com/users/${user.name}`)
    let gitHubUser = await gitHub.json()

    let img = document.createElement('img')
    img.src = gitHubUser.avatar_url
    img.className = 'promice avatar exemple'
    document.body.append(img)


    await new Promise ((resolve, reject) => setTimeout(resolve, 3000))

    img.remove()

    return gitHubUser
}

showAvatar()



