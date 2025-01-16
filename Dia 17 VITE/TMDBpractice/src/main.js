//URLs

const API_BASE_URL = "https://api.themoviedb.org/3/movie/";

const API_KEY = import.meta.env.VITE_API_KEY;

console.log(API_KEY);

const POSTER_BASE_URL = "https://image.tmdb.org/t/p/w185";

// objeto que guarda los endpoints
const endpoints = {
  now_playing: "Cartelera",
  popular: "Populares",
  top_rated: "Más Votadas",
  upcoming: "Próximamente",
};

//funcion que crea el select y sus options a partir del object endpoints
function createSelect() {
  const select = document.createElement("select");
  select.id = "endpoint-select";

  Object.keys(endpoints).forEach((key) => {
    const option = document.createElement("option");
    option.value = key;
    console.log(key);

    option.textContent = endpoints[key];

    select.appendChild(option);
  });

  document.body.appendChild(select);
  return select;
}

// funcion boton ordenación alfabéticamente
let currentMovies = [];

function createSortButton() {
  const button = document.createElement("button");
  button.id = "sort-button";
  button.textContent = "Ordenar a/z";

  button.addEventListener("click", () => {
    currentMovies.sort((a, b) => a.title.localeCompare(b.title));
    displayMovies(currentMovies);
  });

  document.body.appendChild(button);
}

// funcion que renderiza la info de las pelis en el navegador
function displayMovies(movies) {
  const movieList =
    document.getElementById("movie-list") || document.createElement("div");
  movieList.id = "movie-list";
  movieList.innerHTML = "";

  movies.forEach((movie) => {
    const movieItem = document.createElement("div");
    // movieItem.textContent = `Título: ${movie.title}, Release: ${movie.release_date}`;
    movieItem.addEventListener("click", () => {
      fetchMovieDetails(movie.id);
      console.log(movie.id);

      console.log("pelicula clickada");
    });

    const movieTitle = document.createElement("p");
    movieTitle.textContent = movie.title;

    const movieReleaseDate = document.createElement("p");
    movieReleaseDate.textContent = movie.release_date;

    const movieImage = document.createElement("img");
    movieImage.src = `${POSTER_BASE_URL}${movie.poster_path}`;
    movieImage.alt = movie.title;

    movieItem.appendChild(movieImage);
    movieItem.appendChild(movieTitle);
    movieItem.appendChild(movieReleaseDate);

    movieList.appendChild(movieItem);
  });

  document.body.appendChild(movieList);
}

// funcion que renderiza una peli en detalle
function displayDetails(movie) {
  const movieDetails =
    document.getElementById("movie-details") || document.createElement("div");
  movieDetails.id = "movie-details";
  movieDetails.innerHTML = "";

  const movieList = document.getElementById("movie-list");
  movieList.innerHTML = "";

  const movieTitle = document.createElement("p");
  movieTitle.textcontent = movie.title;

  const movieImage = document.createElement("img");
  movieImage.src = `${POSTER_BASE_URL}${movie.poster_path}`;

  const overview = document.createElement("p");
  overview.textContent = movie.overview;

  const rating = document.createElement("p");
  rating.textcontent = `Puntuación promedio: ${movie.vote_average}`;

  movieDetails.appendChild(movieImage);
  movieDetails.appendChild(movieTitle);
  movieDetails.appendChild(overview);
  movieDetails.appendChild(rating);

  document.body.appendChild(movieDetails);
}

// función fetch a los endpoints seleccionados por el user
async function fetchMovies(endpoint) {
  const url = `${API_BASE_URL}${endpoint}?api_key=${API_KEY}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Error");
    }

    console.log(`Peliculas del endpoint ${endpoint}`);
    const data = await response.json();
    currentMovies = data.results;
    displayMovies(data.results);
    console.log(data);
  } catch (error) {
    console.error("error", error);
  }
}

// funcion peticion detalles pelicula

async function fetchMovieDetails(movieId) {
  const url = `${API_BASE_URL}${movieId}?api_key=${API_KEY}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Error en la petición");
    }

    const data = await response.json();
    console.log(data);

    displayDetails(data);
  } catch (error) {
    console.error(error);
  }
}

// evento carga de página
document.addEventListener("DOMContentLoaded", () => {
  const select = createSelect();
  createSortButton();

  fetchMovies("now_playing");

  select.addEventListener("change", (evento) => {
    const selectedEndpoint = evento.target.value;
    fetchMovies(selectedEndpoint);
  });
});

// // funcion peticion endpoint now_playing

// async function fetchNowPlaying() {
//   const url = `${API_BASE_URL}now_playing?api_key=${API_KEY}`;

//   try {
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error("Error en la petición", response.status);
//     }

//     const data = await response.json();

//     console.log("Películas en cartelera:");
//     data.results.forEach((movie) => {
//       console.log(`${movie.title}`);
//     });
//   } catch (error) {
//     console.error(error);
//   }
// }

// // funcion endpoint popular

// async function fetchPopularMovies() {
//   const url = `${API_BASE_URL}popular?api_key=${API_KEY}`;

//   try {
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error("Error en la petición", response.status);
//     }

//     const data = await response.json();
//     console.log("Peliculas populares: ");
//     console.log(data);

//     data.results.forEach((movie) => {
//       console.log(movie.title);
//     });
//   } catch (error) {
//     console.error(error);
//   }
// }

// //funcion peticion endpoint upcoming
// //funcion peticion endpoint top_rated

// // llamadas a las funciones
// fetchNowPlaying();
// fetchPopularMovies();
