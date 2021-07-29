let btn = document.querySelector('.click')
let text = document.querySelector('.info')

btn.addEventListener('click', async function (event) {
    fetch('https://api.ipify.org/?format=json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        let IpInfo = data
        let ipCheck = JSON.stringify(data)
        //  text.append(ipCheck)
        text.append( print(IpInfo))
        // alert(ipCheck)
      return console.log(IpInfo);
    
      
    });
    
})

const print = function(o){
    let str='';

    for(const p in o){
        if(typeof o[p] == 'string'){
            str+= "YOUR IP ADDRESS : " + o[p];
        }
        // else{
        //     str+= p + ': {' + print(o[p]) + '}'
        // }
    }

    return str;
}


function dispData (data) {
const output = data.forEach(element => {
    str =''
    str += `<div> IP is : ${ip} </div>`
});

document.body.innerHTML = str
}