const productsContainer = document.getElementById("productsContainer");
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products/");
        const products = await response.json();
        const productCards = products.map(product => {
          return `
            <div class="card">
              <img src="${product.image}" alt="${product.title}">
              <h3>${product.title}</h3>
              <p>$${product.price}</p>
            </div>
          `;
        });
        productsContainer.innerHTML = productCards.join("");
      } catch (error) {
        productsContainer.innerHTML = "<p>Failed to load products.</p>";
        console.log("Error:", error);
      }
    }
    fetchProducts();