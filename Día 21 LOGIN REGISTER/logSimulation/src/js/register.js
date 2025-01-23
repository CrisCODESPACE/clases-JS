const API_BASE_URL = "https://reqres.in";

async function register(email, password) {
  const url = `${API_BASE_URL}/api/register`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.log("Registration failed", response.status, data);
    } else {
      console.log("Registration successful", data);
      return data.token;
    }
  } catch (error) {
    console.error("Request failed", error);
  }
}

// evento manejador del formulario de registro

document
  .getElementById("registerForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    const token = await register(email, password);

    if (token) {
      window.location.href = "index.html";
    }
  });

// evento manejador boton vuelta al login

document.getElementById("showLogin").addEventListener("click", () => {
  window.location.href = "index.html";
});
