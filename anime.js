
// Selecting elemets
let anime_cards = document.getElementById("anime-cards");
const searchBtn = document.getElementById("search-btn");

// Event listeners
searchBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const searchTerm = document.getElementById("searchbar").value;
    searchAnime(searchTerm);
});

// Function to display top anime
function topAnime() {
fetch("https://api.jikan.moe/v4/top/anime")
    .then((response) => response.json())
    .then((data) => {
        
        for (let i = 0; i < 100; i++) {
            anime=data.data[i];
            const card = 
            `<div class="col-lg-3 col-md-6 col-sm-12 card-group px-4 py-3">
                    <div class="card" style="width: 18rem;">
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary p-2 fs-6">#${anime.rank}</span>
                        <img src="${anime.images.jpg.large_image_url}" class="card-img-top" alt="anime-image">
                        <div class="card-body">
                            <h5 class="card-title">${anime.title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${anime.title_english}</h6>
                            <ul class="list-group list-group-flush">
                              <li class="list-group-item d-flex px-0">
                                <span class="left-item">Score : <span class="badge text-bg-primary p-2 fs-6">${anime.score}</span></span>
                                <span class="right-item ms-auto">Episode : <span class="badge text-bg-light p-2 fs-6">${anime.episodes}</span></span>
                              </li>
                              <li class="list-group-item d-flex px-0">
                                <span class="left-item">Duration : <span class="badge text-bg-light p-2 fs-6">${anime.duration}</span></span>
                                <span class="right-item ms-auto">Status : <span class="badge text-bg-light p-2 fs-6">${anime.status}</span></span>
                              </li>
                            </ul>
                        </div>
                    </div>
                </div>`;
            anime_cards.innerHTML += card;
        }
        
    })
    .catch((error) => console.error(error));
}
// Display onload
Window.onload = topAnime();


// Function to search anime
function searchAnime(searchTerm){
    fetch("https://api.jikan.moe/v4/anime?q=" + searchTerm)
        .then((response) => response.json())
        .then((data) => {
            anime_cards.innerHTML="";
            for (let i = 0; i < data.data.length; i++) {
                anime = data.data[i];
                const card = 
                `<div class="col-lg-3 col-md-6 col-sm-12 card-group px-4 py-3">
                    <div class="card" style="width: 18rem;">
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary p-2 fs-6">#${anime.rank}</span>
                        <img src="${anime.images.jpg.large_image_url}" class="card-img-top" alt="anime-image">
                        <div class="card-body">
                            <h5 class="card-title">${anime.title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${anime.title_english}</h6>
                            <ul class="list-group list-group-flush">
                              <li class="list-group-item d-flex px-0">
                                <span class="left-item">Score : <span class="badge text-bg-primary p-2 fs-6">${anime.score}</span></span>
                                <span class="right-item ms-auto">Episode : <span class="badge text-bg-light p-2 fs-6">${anime.episodes}</span></span>
                              </li>
                              <li class="list-group-item d-flex px-0">
                                <span class="left-item">Duration : <span class="badge text-bg-light p-2 fs-6">${anime.duration}</span></span>
                                <span class="right-item ms-auto">Status : <span class="badge text-bg-light p-2 fs-6">${anime.status}</span></span>
                              </li>
                            </ul>
                        </div>
                    </div>
                </div>`;
                anime_cards.innerHTML += card;
            }
        })
        .catch((error) => console.error(error));
}

