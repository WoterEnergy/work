// function showMe(url) {
// fetch(url)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     data.forEach(element => {
//         if (element.name) {
//             this.film = element.name 
//         }
//         if (element.episodeId){
//             this.episode = element.episodeId    
//         }
//         if (element.openingCrawl){
//             this.crawl = element.openingCrawl  
//         }
//         if (element.characters){
//             this.actors = element.characters
//             const fetchChars = actors.map(charURL => {
//           return fetch(charURL).then((res) => {
//               return res.json();
//           })
//         })
//         Promise.all(fetchChars).then((data) => {
//           UL[filmId].innerHTML = "";
//           const charNames = data.map(({name}) => name);
//           charNames.forEach(item => {
//               const li = document.createElement("li");
//               li.innerText = item;
//               UL[filmId].append(li);
//           });
//       });
            
//         }

//         function getActors({results}) {
//           return results.map(({characters}) => {
//               return characters;
//           });
//         }
//         render(this.episode, this.film, this.crawl, this.actors)
    
//         function render (episode, film, crawl, actors) {
//             const container = document.getElementById('container')
//             const div = document.createElement('div')
//             const ID = document.createElement('h3')
//             const P = document.createElement('p')
//             const Name = document.createElement('h2')
//             const UL = document.createElement('ul')
//             const newContent = document.createTextNode(actors);
//             UL.className = 'list-actors'
//             const li = document.createElement('li')
//             div.className = 'film-cart'
//             Name.append(film)
//             ID.append(episode)
//             P.append(crawl)
//             li.appendChild(newContent)
//             UL.appendChild(li)
//             div.append(ID,Name,P,UL)
//             container.append(div)
//         }  

  
//     })
//   });
//   // 
  

// }


function fetchFilms(url) {
  fetch(url).then((res) => res.json()).then((data) => {
      const characters = getActors(data);
      displayData(data);
      const loadChars = document.querySelectorAll(".chars");
      characters.forEach(displayCharacters(loadChars));
  });

  function getActors({results}) {
      return results.map(({characters}) => {
          return characters;
      });
  }
}

function displayData(data) {
  let output = '';
  data.results.forEach(item => {
      output += `<div class='film-cart'><div class="Flm-id">Film ID: ${item["episode_id"]}</div><h3>${item.title}</h3>
                  <p>Short description:  ${item["opening_crawl"]}</p><h3>Characters:</h3><ul class="chars"></ul></div>`

  })
  document.body.innerHTML = output;
}

function displayCharacters(loadChars) {
  return function (charList, filmId) {
    //   loadChars[filmId].innerHTML = `<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`;
      const fetchChars = charList.map(charURL => {
          return fetch(charURL).then((res) => {
              return res.json();
          })
      });
      Promise.all(fetchChars).then((data) => {
          loadChars[filmId].innerHTML = "";
          const charNames = data.map(({name}) => name);
          charNames.forEach(item => {
              const li = document.createElement("li");
              li.innerText = item;
              loadChars[filmId].append(li);
          });
      });
  }
}

fetchFilms('https://swapi.dev/api/films/');








// showMe('https://ajax.test-danit.com/api/swapi/films')





// function bookslist () {
//   for (let i = 0; i < this.actors.length; i++) {
//     const newLI = document.createElement("li");
//     const indSpellingWord = this.actors[i];
//     const newContent = document.createTextNode(indSpellingWord);
//     newLI.appendChild(newContent);
//     const displaySpellList = document.querySelector(".list-actors");     
//     displaySpellList.appendChild(newLI);
//   }

// }   
// bookslist()