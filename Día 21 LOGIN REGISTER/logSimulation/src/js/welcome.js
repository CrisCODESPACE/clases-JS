// evento manejador "cierre de sesión"

// const token = localStorage.getItem(token);

function displayToken() {
  const token = localStorage.getItem("token");

  if (token) {
    console.log(token);
  } else {
    console.log("no hay token");
  }
}

displayToken();

document.getElementById("logoutButton").addEventListener("click", () => {
  sessionStorage.clear();
  window.location.href = "index.html";
});
