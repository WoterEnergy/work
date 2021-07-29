let btn = document.querySelector('.click')
let text = document.querySelector('.info')

btn.addEventListener('click', async function (event) {
    fetch('https://api.ipify.org/?format=json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        let IpInfo = data
         JSON.stringify(data)
        text.append( print(IpInfo) )
      return console.log(IpInfo);
    });
    
})

const print = function(o){
    let str='';

    for(const p in o){
        if(typeof o[p] == 'string'){
            str+= p + ': ' + o[p]+' ';
        }else{
            str+= p + ': {' + print(o[p]) + '}'
        }
    }

    return str;
}
