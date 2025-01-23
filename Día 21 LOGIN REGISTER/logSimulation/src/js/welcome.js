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
  sessionStorage.removeItem("token");
  window.location.href = "index.html";
});

// Para guardar un token en el Local Storage o en el Session Storage usamos --> localStorage.setItem("key", value);
// Para obtener un token que se encuentra alojado en el Local Storage o en el Session Storage usamos --> sessionStorage.getItem("keyName");
// Para limpiar los datos guardados en el local o session usamos --> localStorage.clear();
// Para borrar un item en concreto del local o el session usamos --> sessionStorage.removeItem("keyName");
