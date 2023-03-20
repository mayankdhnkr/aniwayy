// Selecting elemets
let manga_cards = document.getElementById("manga-cards");
const searchBtn = document.getElementById("search-btn");

// Event listeners
searchBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const searchTerm = document.getElementById("searchbar").value;
    searchManga(searchTerm);
});

// Function to display top anime
function topManga() {
    fetch("https://api.jikan.moe/v4/top/manga")
        .then((response) => response.json())
        .then((data) => {
            for (let i = 0; i < 100; i++) {
                manga = data.data[i];
                if(manga.score==null){manga.score='-'}
                if (manga.type == null) {manga.type = "-";}
                if (manga.chapters == null) {manga.chapters = "-";}
                if (manga.status == null) {manga.status = "-";}
                if (manga.title_english == null) {manga.title_english = "-";}


                const card = `<div class="col-lg-3 col-md-6 col-sm-12 card-group px-4 py-3">
                    <div class="card" style="width: 18rem;">
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary p-2 fs-6">#${manga.rank}</span>
                        <img src="${manga.images.jpg.large_image_url}" class="card-img-top" alt="manga-image">
                        <div class="card-body">
                            <h5 class="card-title">${manga.title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${manga.title_english}</h6>
                            <ul class="list-group list-group-flush">
                              <li class="list-group-item d-flex px-0">
                                <span class="left-item">Score : <span class="badge text-bg-primary p-2 fs-6">${manga.score}</span></span>
                                <span class="right-item ms-auto">Type : <span class="badge text-bg-light p-2 fs-6">${manga.type}</span></span>
                              </li>
                              <li class="list-group-item d-flex px-0">
                                <span class="left-item">Chapters : <span class="badge text-bg-light p-2 fs-6">${manga.chapters}</span></span>
                                <span class="right-item ms-auto">Status : <span class="badge text-bg-light p-2 fs-6">${manga.status}</span></span>
                              </li>
                            </ul>
                        </div>
                    </div>
                </div>`;
                manga_cards.innerHTML += card;
            }
        })
        .catch((error) => console.error(error));
}
// Display onload
Window.onload = topManga();

// Function to search anime
function searchManga(searchTerm) {
    fetch("https://api.jikan.moe/v4/manga?q=" + searchTerm)
        .then((response) => response.json())
        .then((data) => {
            manga_cards.innerHTML = "";
            for (let i = 0; i < data.data.length; i++) {
                manga = data.data[i];
                const card = `<div class="col-lg-3 col-md-6 col-sm-12 card-group px-4 py-3">
                    <div class="card" style="width: 18rem;">
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary p-2 fs-6">#${manga.rank}</span>
                        <img src="${manga.images.jpg.large_image_url}" class="card-img-top" alt="manga-image">
                        <div class="card-body">
                            <h5 class="card-title">${manga.title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${manga.title_english}</h6>
                            <ul class="list-group list-group-flush">
                              <li class="list-group-item d-flex px-0">
                                <span class="left-item">Score : <span class="badge text-bg-primary p-2 fs-6">${manga.score}</span></span>
                                <span class="right-item ms-auto">Type : <span class="badge text-bg-light p-2 fs-6">${manga.type}</span></span>
                              </li>
                              <li class="list-group-item d-flex px-0">
                                <span class="left-item">Chapters : <span class="badge text-bg-light p-2 fs-6">${manga.chapters}</span></span>
                                <span class="right-item ms-auto">Status : <span class="badge text-bg-light p-2 fs-6">${manga.status}</span></span>
                              </li>
                            </ul>
                        </div>
                    </div>
                </div>`;
                manga_cards.innerHTML += card;
            }
        })
        .catch((error) => console.error(error));
}
