// CRUD (CREATE, READ, UPDATE, DELETE)
// GET -> READ
// POST -> CREATE

// URL

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

// función para crear un recurso nuevo (PETICIÓN POST)

async function createResource(data) {
  const url = `${API_BASE_URL}/posts`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Error en la solicitud:", response.status);
    }

    console.log(response.status);

    const result = await response.json();
    console.log(result);
    displayResource(result);
  } catch (error) {
    console.error("Error al crear el nuevo recurso: ", error);
  }
}

// EJEMPLO DE USO POST

const newResource = {
  title: "HOLA MUNDO",
  body: "ESTO ES UNA PETICION POST DESDE CODESPACE",
  userId: 1,
};

// createResource(newResource);

// función para leer un recurso existente (PETICIÓN GET)

async function getResource(id) {
  const url = `${API_BASE_URL}/posts/${id}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Error al traer el recurso", response.status);
    }

    console.log(response.status);

    const result = await response.json();
    console.log(result);

    displayResource(result);
  } catch (error) {
    console.error("Error al obtener el recurso", error);
  }
}

// función para actualizar un recurso existente (PETICIÓN PUT)

async function updateResource(id, data) {
  const url = `${API_BASE_URL}/posts/${id}`;

  try {
    const response = await fetch(url, {
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
    console.log("Recurso editado: ", result);
    removeResourceFromDisplay(id);
    displayResource(result);
  } catch (error) {
    console.error("Error al actualizar", error);
  }
}

const updateResourceVar = {
  body: "ESTE CONTENIDO ESTA ACTUALIZADO DESDE UNA PETI PUT",
  userId: 100,
};

// función para borrar un recurso existente (PETICIÓN DELETE)

async function deleteResource(id) {
  const url = `${API_BASE_URL}/posts/${id}`;

  try {
    const response = await fetch(url, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Error al eliminar el recurso", response.status);
    }

    const result = await response.json();
    console.log("Recurso eliminado correctamente", result);
    removeResourceFromDisplay(id);
  } catch (error) {
    console.error("Error", error);
  }
}

// funcion para mostrar un recurso en el DOM

const app = document.getElementById("app");

function displayResource(resource) {
  const resourceList = document.getElementById("resource-list");
  const resourceItem = document.createElement("div");
  resourceItem.id = `resource-${resource.id}`;
  resourceItem.innerHTML = `
  <h3>${resource.title}</h3>
  <p>${resource.body}</p>`;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Eliminar";
  deleteButton.addEventListener("click", () => deleteResource(resource.id));

  const editButton = document.createElement("button");
  editButton.textContent = "Editar";
  editButton.addEventListener("click", () => editResource(resource.id));

  resourceItem.appendChild(deleteButton);
  resourceItem.appendChild(editButton);
  resourceList.appendChild(resourceItem);
}

// funcion para eliminar un recurso del DOM

function removeResourceFromDisplay(id) {
  const resourceItem = document.getElementById(`resource-${id}`);

  if (resourceItem) {
    resourceItem.remove();
  }
}

// funcion para editar un recurso desde el DOM

// HAY QUE BORRAR EL RESULT QUE NO ESTA UPDATEADO
// toDo

function editResource(id) {
  const title = prompt("Nuevo título");
  const body = prompt("Nuevo contenido");

  if (title && body) {
    updateResource(id, { title, body });
  }
}

// funcion para manejar la creacion de un nuevo recurso del DOM

function handlerCreateResource() {
  const title = document.getElementById("new-title").value;
  const body = document.getElementById("new-body").value;

  if (title && body) {
    createResource({ title, body, userId: 1 });
  }
}

// evento carga del documento

document.addEventListener("DOMContentLoaded", () => {
  const createButton = document.getElementById("create-button");
  createButton.addEventListener("click", handlerCreateResource);

  getResource(1);
});
