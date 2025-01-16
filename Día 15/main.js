import { movies } from "./data.js";

console.log(movies);

const section = document.getElementById("app");

const searchInput = document.createElement("input");
searchInput.type = "text";

// const card = document.createElement("div");

// const poster = document.createElement("img");
// poster.setAttribute("src", movies[0].poster);

// const title = document.createElement("h2");
// title.textContent = movies[0].title;

// const rating = document.createElement("p");
// rating.textContent = movies[0].rating;

// const overview = document.createElement("p");
// overview.textContent = movies[0].description;

// card.appendChild(poster);
// card.appendChild(title);
// card.appendChild(overview);
// card.appendChild(rating);
// section.appendChild(card);

function createCard(film) {
  const card = document.createElement("div");
  card.className = "card-container";

  const poster = document.createElement("img");
  poster.setAttribute("src", film.poster);
  poster.className = "film-poster";

  const title = document.createElement("h2");
  title.textContent = film.title;
  title.className = "film-title";

  const rating = document.createElement("p");
  rating.textContent = film.rating;
  rating.className = "film-rating";

  const overview = document.createElement("p");
  overview.textContent = film.description;
  overview.className = "film-overview";

  card.appendChild(poster);
  card.appendChild(title);
  card.appendChild(overview);
  card.appendChild(rating);

  return card;
}

function renderMovies(allMovies, container) {
  container.innerHTML = "";
  allMovies.forEach((movie) => {
    const movieCard = createCard(movie);
    container.appendChild(movieCard);
  });
}

const selectCategory = document.createElement("select");

const categories = ["Drama", "Action", "Crime", "Biography", "Adventure"];

categories.forEach((category) => {
  const option = document.createElement("option");
  option.value = category;
  option.text = category;

  selectCategory.appendChild(option);
});

selectCategory.addEventListener("change", () => {
  const selectedCat = selectCategory.value;
  console.log(`Has seleccionado la categoría ${selectedCat}`);
  filterMovieByCategory(selectedCat);
});

// function filterMovieByCategory(cat) {
//   if (!cat) {
//     renderMovies(movies, section);
//   } else {
//     const filteredMovies = movies.filter((movie) => movie.category === cat);
//     console.log(filteredMovies);
//     section.innerHTML = "";
//     renderMovies(filteredMovies, section);
//   }
// }

function filteredMoviesBySearch(word) {
  // const formatedWord = word.toLowercase();

  const movieFilter = movies.filter((movie) =>
    movie.title.toLowerCase().includes(word)
  );

  renderMovies(movieFilter, section);
}

searchInput.addEventListener("input", (e) => {
  const word = e.target.value;
  console.log(word);

  filteredMoviesBySearch(word);
});

section.parentNode.insertBefore(searchInput, section);
// section.parentNode.insertBefore(selectCategory, section);

renderMovies(movies, section);
