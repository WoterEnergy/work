export default class API {
    static URL = "https://ajax.test-danit.com/api/v2/cards";

    static getHeadears () {
        return {
            'Content-Type' : 'application/json',
            'Autorization' : `Bearer ${API.token || localStorage.token}`
        }
    }
    static async login (userData){
        
    }
}