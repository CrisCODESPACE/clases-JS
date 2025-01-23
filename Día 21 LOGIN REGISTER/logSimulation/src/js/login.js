//URLs

const API_BASE_URL = "https://reqres.in";

// funcion para inicio de sesion

async function login(email, password) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log(data);

    if (!response.ok) {
      throw new Error("unexpected error");
    } else {
      console.log("Login successful", data);
      sessionStorage.setItem("token", data.token);
      return data.token;
    }
  } catch (error) {
    console.error("Error during login:", error);
  }
}

// evento manejador del formulario

document
  .getElementById("loginForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    const token = await login(email, password);

    if (token) {
      window.location.href = "welcome.html";
    }
  });

// evento manejador boton redireccion a registro

document.getElementById("showRegister").addEventListener("click", () => {
  window.location.href = "register.html";
});
