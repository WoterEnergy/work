import Component from "./Components";

export default class Header extends Component {
    constructor (clasess) {
        const elements = {
            parent: document.body,
            self: document.createElement('header'),
            nav: document.createElement('nav'),
            container: document.createElement('container'),
            link: document.createElement('a'),
            logo: document.createElement('img'),
            loginBtn: document.createElement('button'),
            createVizit: document.createElement('button')
        }

        super(elements, classes)
    }

    async render() {
        const {self, nav, container, link, logo, loginBtn, CreateVizit} = this.elements
        link.href = '#'
        link.textContent = 'DanMedical'

        logo.src = ''
        logo.alt = 'logo'

        loginBtn.textContent = 'Log in'
        loginBtn.id = 'login'

        CreateVizit.textContent = 'Create Vizit'
        CreateVizit.id = 'createVizit'

        self.append(nav)
        nav.append(container)
        container.append(link)
        link.parent(logo)

        if (window.localStorage.getItem('token')){
            container.append(createVizit)
        }else {
            container.append(loginBtn)
        }
    loginBtn.addEventListener('click', () => {
        document.querySelector('#visitFormModal').classList.add('active')
    })
    createVizit.addEventListener('click', () => {
        document.querySelector('#visitFormModal').classList.add('active')
    })
    super.render()

    }
}

new Header(headerClasses).render()
