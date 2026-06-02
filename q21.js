const productsContainer = document.getElementById("productsContainer");
    const searchInput = document.getElementById("searchInput");
    const categoryFilter = document.getElementById("categoryFilter");
    const sortPrice = document.getElementById("sortPrice");
    const cartContainer = document.getElementById("cartContainer");
    const totalElement = document.getElementById("total");

    let allProducts = [];
    let cart = [];

    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products/");
        const products = await response.json();

        allProducts = products;

        displayProducts(allProducts);
      } catch (error) {
        productsContainer.innerHTML = "<p>Failed to load products.</p>";
        console.log("Error:", error);
      }
    }

    function displayProducts(products) {
      productsContainer.innerHTML = products.map(product => {
        return `
          <div class="card">
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
          </div>
        `;
      }).join("");
    }

    function filterSortSearchProducts() {
      let updatedProducts = [...allProducts];

      const searchValue = searchInput.value.toLowerCase();
      const selectedCategory = categoryFilter.value;
      const selectedSort = sortPrice.value;

      if (selectedCategory !== "all") {
        updatedProducts = updatedProducts.filter(product => {
          return product.category === selectedCategory;
        });
      }

      if (searchValue !== "") {
        updatedProducts = updatedProducts.filter(product => {
          return product.title.toLowerCase().includes(searchValue);
        });
      }

      if (selectedSort === "lowToHigh") {
        updatedProducts.sort((a, b) => a.price - b.price);
      } else if (selectedSort === "highToLow") {
        updatedProducts.sort((a, b) => b.price - a.price);
      }

      displayProducts(updatedProducts);
    }

    function addToCart(productId) {
      const product = allProducts.find(item => item.id === productId);

      const existingProduct = cart.find(item => item.id === productId);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        cart.push({
          id: product.id,
          title: product.title,
          price: product.price,
          quantity: 1
        });
      }

      displayCart();
    }

    function displayCart() {
      if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        totalElement.innerHTML = "Total: $0";
        return;
      }

      cartContainer.innerHTML = cart.map(item => {
        return `
          <div class="cart-item">
            <span>${item.title}</span>
            <span>
              $${item.price} x ${item.quantity}
              <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
            </span>
          </div>
        `;
      }).join("");

      calculateTotal();
    }

    function calculateTotal() {
      let total = cart.reduce((sum, item) => {
        return sum + item.price * item.quantity;
      }, 0);

      totalElement.innerHTML = `Total: $${total.toFixed(2)}`;
    }

    function removeFromCart(productId) {
      cart = cart.filter(item => item.id !== productId);
      displayCart();
    }

    searchInput.addEventListener("input", filterSortSearchProducts);
    categoryFilter.addEventListener("change", filterSortSearchProducts);
    sortPrice.addEventListener("change", filterSortSearchProducts);

    fetchProducts();