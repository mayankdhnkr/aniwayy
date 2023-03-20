// Selecting elemets
let character_cards = document.getElementById("character-cards");
let nickname='';
const searchBtn = document.getElementById("search-btn");

// Event listeners
searchBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const searchTerm = document.getElementById("searchbar").value;
    searchCharacter(searchTerm);
});

// Function to display top anime
function topCharacter() {
    fetch("https://api.jikan.moe/v4/top/characters")
        .then((response) => response.json())
        .then((data) => {
            for (let i = 0; i < 100; i++) {
                character = data.data[i];
                if (character.nicknames.length === 0) {nickname = character.name;}
                else {nickname=character.nicknames[0]}
                const card = `<div class="col-lg-3 col-md-6 col-sm-12 card-group px-4 py-3">
                    <div class="card" style="width: 18rem;">
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary p-2 fs-6">#${i+1}</span>
                        <img src="${character.images.jpg.image_url}" class="card-img-top" alt="character-image">
                        <div class="card-body">
                            <h5 class="card-title">${character.name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${nickname}</h6>
                            <ul class="list-group list-group-flush">
                              <li class="list-group-item d-flex px-0">
                                <span class="left-item">Favourites : <span class="badge text-bg-primary p-2 fs-6">${character.favorites}</span></span>
                              </li>
                            </ul>
                        </div>
                    </div>
                </div>`;
                character_cards.innerHTML += card;
            }
        })
        .catch((error) => console.error(error));
}
// Display onload
Window.onload = topCharacter();

// Function to search anime
function searchCharacter(searchTerm) {
    fetch("https://api.jikan.moe/v4/characters?q=" + searchTerm)
        .then((response) => response.json())
        .then((data) => {
            character_cards.innerHTML = "";
            for (let i = 0; i < data.data.length; i++) {
                character = data.data[i];
                if (character.nicknames.length === 0) {nickname = character.name;} 
                else {nickname = character.nicknames[0];}

                const card = `<div class="col-lg-3 col-md-6 col-sm-12 card-group px-4 py-3">
                    <div class="card" style="width: 18rem;">
                        <img src="${character.images.jpg.image_url}" class="card-img-top" alt="character-image">
                        <div class="card-body">
                            <h5 class="card-title">${character.name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${nickname}</h6>
                            <ul class="list-group list-group-flush">
                              <li class="list-group-item d-flex px-0">
                                <span class="left-item">Favourites : <span class="badge text-bg-primary p-2 fs-6">${character.favorites}</span></span>
                              </li>
                            </ul>
                        </div>
                    </div>
                </div>`;
                character_cards.innerHTML += card;
            }
        })
        .catch((error) => console.error(error));
}
