function showMe(url) {
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    data.forEach(element => {
        if (element.name) {
            this.film = element.name 
        }
        if (element.episodeId){
            this.episode = element.episodeId    
        }
        if (element.openingCrawl){
            this.crawl = element.openingCrawl  
        }
        if (element.characters){
            this.actors = element.characters
       
       
        }
        render(this.episode, this.film, this.crawl, this.actors)
    
        function render (episode, film, crawl, actors) {
            const container = document.getElementById('container')
            const div = document.createElement('div')
            const ID = document.createElement('h3')
            const P = document.createElement('p')
            const Name = document.createElement('h2')
            const UL = document.createElement('ul')
            const li = document.createElement('li')
            div.className = 'film-cart'
            Name.append(film)
            ID.append(episode)
            P.append(crawl)
            li.append(actors)
            UL.append(li)
            div.append(ID,Name,P,UL)
            container.append(div)
        }
        
        
    });

  });

}
showMe('https://ajax.test-danit.com/api/swapi/films')