const productContainer = document.querySelector(".product-container");
const totalProducts = document.querySelector("#totalProducts");
const message = document.querySelector(".message");
const finalMessage = document.querySelector(".final");
fetch("https://fakestoreapi.com/products")
  .then(function (response) {
    return response.json();
  })
  .then(function (products) {
    totalProducts.textContent = products.length;
    products.forEach(function (product) {
      createProductCard(product);
    });
  })
  .catch(function (error) {
    message.textContent = "Something Went Wrong";
    message.style.backgroundColor = "red";
    message.style.color = "white";
    message.style.textAlign = "center";
  })
/*  .finally(function () {
    finalMessage.textContent = "API Request Completed Successfully";
  });*/
function createProductCard(product) {
  const card = document.createElement("div");
  card.setAttribute("class", "product-card");
  const image = document.createElement("img");
  image.setAttribute("src", product.image);
  image.setAttribute("alt", product.title);
  const title = document.createElement("h3");
  if (product.title.length > 30) {
    title.textContent = product.title.slice(0, 30) + "...";
  } else {
    title.textContent = product.title;
  }
  const price = document.createElement("p");
  price.setAttribute("class", "price");
  price.textContent = "Price: $" + product.price;
  const category = document.createElement("p");
  category.setAttribute("class", "category");
  category.textContent = "Category: " + product.category;
  const description = document.createElement("p");
  if (product.description.length > 50) {
    description.textContent = product.description.slice(0, 50) + "...";
  } else {
    description.textContent = product.description;
  }
  const tag = document.createElement("span");
  tag.setAttribute("class", "tag");
  if (product.price > 100) {
    tag.textContent = "Expensive Product";
  } else {
    tag.textContent = "Budget Product";
  }
  const showPriceButton = document.createElement("button");
  showPriceButton.textContent = "Show Price";
  showPriceButton.addEventListener("click", function () {
    alert(product.price);
  });
  const showCategoryButton = document.createElement("button");
  showCategoryButton.textContent = "Show Category";
  showCategoryButton.addEventListener("click", function () {
    alert(product.category);
  });
  const viewDetailsButton = document.createElement("button");
  viewDetailsButton.textContent = "View Details";
  viewDetailsButton.addEventListener("click", function () {
    alert(
      "Title: " + product.title +
      "\nPrice: $" + product.price +
      "\nCategory: " + product.category
    );
  });
  card.append(image);
  card.append(title);
  card.append(price);
  card.append(category);
  card.append(description);
  card.append(tag);
  card.append(showPriceButton);
  card.append(showCategoryButton);
  card.append(viewDetailsButton);
  productContainer.append(card);
}