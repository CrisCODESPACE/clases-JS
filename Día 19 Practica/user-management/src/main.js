// PETICION POST (CREAR NUEVO USER)
// PETICION GET (TRAER TODOS LOS USERS)
// PETICION GET (TRAER UN SOLO USER)
// PETICION PUT (EDITAR UN USER)
// PETICION DELETE (BORRAR UN USER)

// URLs

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

//-------------PETICIONES---------------------------

// PETICION POST (CREAR NUEVO USER)

async function createUser(data) {
  try {
    const response = await fetch(`${API_BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Error en la solicitud: ", response.status);
    }

    console.log(response.status);

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Error al crear el usuario", error);
  }
}

// const newUser = {
//   name: "Joseph",
//   email: "joseph@gmail.com",
//   username: "joe",
// };

// createUser(newUser);

// PETICION GET (TRAER TODOS LOS USERS)

async function getAllUsers() {
  try {
    const response = await fetch(`${API_BASE_URL}/users`);

    if (!response.ok) {
      throw new Error("Error en la solicitud: ", response.status);
    }

    console.log(response.status);

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// PETICION GET (TRAER UN SOLO USER)

async function getUser(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${id}`);

    if (!response.ok) {
      throw new Error("Error en la solicitud: ", response.status);
    }

    console.log(response.status);

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// PETICION PUT (EDITAR UN USER)

async function updateUser(id, data) {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Error en la solicitud: ", response.status);
    }

    console.log(response.status);

    const result = await response.json();
    console.log(result);
  } catch (error) {}
}

// PETICION DELETE (BORRAR UN USER)

async function deleteUser(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Error en la solicitud: ", response.status);
    }

    console.log(response.status);

    console.log("Usuario borrado exitosamente.");
  } catch (error) {
    console.error("Error al borrar el user: ", error);
  }
}

deleteUser(2);
getAllUsers();

// --------------------FUNCIONES AUX-------------------------------

// manejador del boton create-user
function handleCreateUser() {
  const name = document.getElementById("new-name").value;
  const email = document.getElementById("new-email").value;
  const phone = document.getElementById("new-phone").value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !phone) {
    alert("Todos los campos son requeridos");
    return;
  }

  if (name.length < 3) {
    alert("Nombre no válido");
    return;
  }

  if (!emailRegex.test(email)) {
    alert("Introduce un email válido");
    return;
  }

  if (name && email && phone) {
    createUser({ name, email, phone });
  }
}

// manejador editar user

function editUser(id) {
  const name = prompt("Nuevo nombre: ");
  const email = prompt("Nuevo email: ");
  const phone = prompt("Nuevo telefono: ");

  if (name && email && phone) {
    updateUser(id, { name, email, phone });
  }
}

// editUser(2);

// --------------------DOM-------------------------
document.addEventListener("DOMContentLoaded", () => {
  const createButton = document.getElementById("create-button");
  createButton.addEventListener("click", handleCreateUser);

  // getAllUsers();
  getUser(2);
});
