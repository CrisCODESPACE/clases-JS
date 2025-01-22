// URLs

const AUTH_URL = "https://fakestoreapi.com/auth/login";

// peticion para hacer login dentro de la página

async function login(username, password) {
  try {
    const response = await fetch(AUTH_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log("Login successful", data);
      return data.token;
    } else {
      console.log("Login failed", data);
    }
  } catch (error) {
    console.error("Login error:", error);
  }
}

// manejador del envio del form

document
  .getElementById("loginForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const userName = event.target.username.value;
    const password = event.target.password.value;
    const token = await login(userName, password);

    if (token) {
      // redireccion a la pantalla de productos
      window.location.href = "products.html";
      //   console.log(token);
    }
  });
