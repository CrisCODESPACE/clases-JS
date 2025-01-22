// PETICION A TODOS LOS PRODUCTOS
// PETICION A UN PRODUCTO
// PETICION PARA EDITAR UN PRODUCTO
// PETICION PARA CREAR UN NUEVO PRODUCTO
// PETICION PARA BORRAR UN PRODUCTO

// URLs

const API_BASE_URL = "https://fakestoreapi.com";

//------------PETICIONES-----------------------

// peticion para traernos todos los productos

async function getAllProducts() {
  const url = `${API_BASE_URL}/products`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Request failure", response.status);
    }

    const data = await response.json();

    console.log("Product list:", data);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

getAllProducts();

// peticion para traer un producto mediante su id

async function getProductById(id) {
  const url = `${API_BASE_URL}/products/${id}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Request failure", response.status);
    }

    const data = await response.json();
    console.log("Single product:", data);
  } catch (error) {
    console.error("Error fetching product:", error);
  }
}

getProductById(5);

// peticion crear un nuevo producto

async function createProduct(productData) {
  const url = `${API_BASE_URL}/products`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (!response.ok) {
      throw new Error("Request failure", response.status);
    }

    console.log(response.status);

    const result = await response.json();
    console.log("Created product:", result);
  } catch (error) {
    console.error("Error creating product:", error);
  }
}

createProduct({
  title: "test product",
  price: 20,
  description: "lorem ipsum set",
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBulg8Mxel1MjdKW4B89GIyMfynCIAMnr5jA&s",
  category: "men's clothing",
});

// peticion para editar un producto

async function updateProduct(productData, id) {
  const url = `${API_BASE_URL}/products/${id}`;

  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (!response.ok) {
      throw new Error("Request failure", response.status);
    }

    const result = await response.json();
    console.log("Updated product: ", result);
  } catch (error) {
    console.error("Error updating product:", error);
  }
}

updateProduct({ price: 100 }, 5);

// peticion para borrar un producto

async function deleteProduct(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Request failure", response.status);
    }

    console.log(response.status);

    const data = await response.json();
    console.log("Deleted product", data);
  } catch (error) {
    console.error("Error deleting product:", error);
  }
}

deleteProduct(1);

//------------FUNCIONES AUX--------------------

//------------DOM------------------------------
