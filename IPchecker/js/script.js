class GetIp {
    constructor () {
        this.data = this.getInfo()
        this.elements = {
            btn: document.querySelector('.click'),
            text: document.querySelector('.info')
        }
    }
    async getInfo () {
        const ip = await fetch('https://api.ipify.org/?format=json')
        const jsonIp = await ip.json()
        const data = await fetch(`http://ip-api.com/json/${jsonIp.ip}?fields=country,regionName,city,zip,timezone,query`)
        return data.json()

    }
    async render () {
        const {btn, text} = this.elements
        const {country, regionName, city, zip, timezone, query} = await this.data
     
        const empty = ''
        const info = (`You info : Country - ${country},  region name - ${regionName}, city - ${city}, zip - ${zip}, time - ${timezone}, you ip ${query}`);
        btn.addEventListener('click', () => {
            text.innerHTML = ""
            text.append(info)}
     )
    
    }
}
const checkIP = new GetIp()
checkIP.render()

