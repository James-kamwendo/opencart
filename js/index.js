document.addEventListener("DOMContentLoaded", function () {
  const mainContent = document.getElementById("main-content");
  const cartIcon = document.getElementById("cart-icon");
  const cartContainer = document.getElementById("cart-container");
  const cartItems = document.getElementById("cart-items");
  const totalAmount = document.getElementById("total-amount");
  const modalOverlay = document.getElementById("modal-overlay");
  const productModal = document.getElementById("product-modal");
  const closeModal = document.getElementById("close-modal");
  const modalImage = document.getElementById("modal-image");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const modalPrice = document.getElementById("modal-price");
  const clearCartButton = document.getElementById("clear-cart");

  // Fetch products from the FakeStoreAPI
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((products) => {
      // Display products in the catalog
      displayProducts(products);

      // Add event listeners for "Add to Cart" and "View Details" buttons
      mainContent.addEventListener("click", function (event) {
        if (event.target.classList.contains("add-to-cart")) {
          const productId = event.target.dataset.productId;
          addToCart(productId);
        } else if (event.target.classList.contains("view-details")) {
          const productId = event.target.dataset.productId;
          displayProductDetails(productId);
        }
      });

      // Show/hide cart container on cart icon click
      cartIcon.addEventListener("click", function () {
        cartContainer.style.display =
          cartContainer.style.display === "none" ? "block" : "none";
      });

      // Close modal when clicking the overlay or close button
      modalOverlay.addEventListener("click", closeModalHandler);
      closeModal.addEventListener("click", closeModalHandler);
    })
    .catch((error) => console.error("Error fetching products:", error));

  // Function to display products in the catalog
  function displayProducts(products) {
    mainContent.innerHTML = "";
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
      productCard.innerHTML = `
        <div class="image">
            <img src="${product.image}" alt="${product.title}" width="150" height="150">
        </div>
        <h3 class="productTitle">${product.title}</h3>
        <p>${product.price}$</p>
        <div class="product-action-btns">
            <button class="add-to-cart" data-product-id="${product.id}">Add to Cart</button>
            <button class="view-details" data-product-id="${product.id}">View Details</button>
        </div>
    `;
      mainContent.appendChild(productCard);
    });
  }

  // Function to display product details in the modal
  function displayProductDetails(productId) {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((product) => {
        modalImage.src = product.image;
        modalTitle.textContent = product.title;
        modalDescription.textContent = product.description;
        modalPrice.textContent = `Price: $${product.price}`;

        // Show the modal
        modalOverlay.style.display = "block";
        productModal.style.display = "block";
      })
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  }

  // Function to close the modal
  function closeModalHandler() {
    modalOverlay.style.display = "none";
    productModal.style.display = "none";
  }

  // Function to add a product to the cart
  function addToCart(productId) {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((product) => {
        // Check if the product is already in the cart
        const existingCartItem = cartItems.querySelector(
          `[data-product-id="${productId}"]`
        );

        if (existingCartItem) {
          // If the product is already in the cart, increment the quantity
          const currentQuantity =
            parseInt(existingCartItem.dataset.quantity) || 0; // Ensure it's a number
          existingCartItem.dataset.quantity = currentQuantity + 1;
          updateCartItemText(existingCartItem);
        } else {
          // If the product is not in the cart, add it with quantity 1
          const cartItem = document.createElement("li");
          cartItem.dataset.productId = productId;
          cartItem.dataset.price = product.price;
          cartItem.dataset.quantity = 1;
          cartItem.innerHTML = `
            <div class="product-item">
                <div>
                    <span class="product-title">${truncateTitle(
                      product.title,
                      20
                    )}</span>
                </div>
                <div class="price-qty" style="display: flex; justify-content: space-between;">
                    <span class="quantity">1 item</span>
                    <span>
                        ${product.price}$
                    </span>
                    <button class="remove-item" data-product-id="${productId}"><i class="fa-solid fa-rectangle-xmark"></i></button>
                </div>
            </div>
        `;
          cartItems.appendChild(cartItem);

          // Add event listener for remove button
          const removeButton = cartItem.querySelector(".remove-item");
          removeButton.addEventListener("click", function () {
            removeCartItem(productId);
          });
        }

        // Calculate and update total amount
        updateTotalAmount();

        // Update cart indicator
        updateCartIndicator();

        cartContainer.style.display = "block";
      })
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  }

  // Function to update the cart indicator
  function updateCartIndicator() {
    const cartIndicator = document.getElementById("cart-indicator");
    const cartItemCount = cartItems.children.length;

    if (cartItemCount > 0) {
      cartIndicator.style.display = "flex";
    //   cartIndicator.textContent = cartItemCount;
    } else {
      cartIndicator.style.display = "none";
    }
  }

  function truncateTitle(title, maxLength) {
    return title.length > maxLength ? title.slice(0, maxLength) + "..." : title;
  }

  // Function to update cart item text (title and quantity)
  function updateCartItemText(cartItem) {
    const productId = cartItem.dataset.productId;
    const productTitle = document.querySelector(
      `[data-product-id="${productId}"] .quantity`
    );
    const quantity = cartItem.dataset.quantity;
    productTitle.textContent = `${quantity} items`;
  }

  // Function to calculate and update the total amount in the cart
  function updateTotalAmount() {
    const items = cartItems.children;
    let total = 0;

    for (let i = 0; i < items.length; i++) {
      const price = parseFloat(items[i].dataset.price);
      const quantity = parseInt(items[i].dataset.quantity);
      total += price * quantity;
    }

    totalAmount.innerHTML = `<span>Total:</span> <span><b>$${total.toFixed(
      2
    )}</b></span>`;
  }

  // Function to remove an item from the cart
  function removeCartItem(productId) {
    const itemToRemove = cartItems.querySelector(
      `[data-product-id="${productId}"]`
    );
    if (itemToRemove) {
      // Decrement the quantity, and remove if it's 1 or less
      const currentQuantity = parseInt(itemToRemove.dataset.quantity) || 0;
      if (currentQuantity > 1) {
        itemToRemove.dataset.quantity = currentQuantity - 1;
        updateCartItemText(itemToRemove);
      } else {
        cartItems.removeChild(itemToRemove);
      }

      // Update total amount
      updateTotalAmount();

      // Update cart indicator
      updateCartIndicator();
    }
  }

  clearCartButton.addEventListener("click", function () {
    // Clear cart items
    cartItems.innerHTML = "";

    // Update total amount
    updateTotalAmount();

    // Update cart indicator
    updateCartIndicator();
  });
});
