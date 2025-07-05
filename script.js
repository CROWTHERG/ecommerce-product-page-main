// ======= LIGHTBOX FUNCTIONALITY =======
const mainImage = document.getElementById("main-product-image");
const lightbox = document.getElementById("lightbox");
const lightboxMainImage = document.getElementById("lightbox-main-image");
const closeLightboxBtn = document.querySelector(".close-lightbox");
const thumbnails = document.querySelectorAll(".thumbnail");
const lightboxThumbnails = document.querySelectorAll(".lightbox-thumbnail");

// Open lightbox when clicking main image
mainImage.addEventListener("click", () => {
  lightbox.classList.remove("hidden");
  lightboxMainImage.src = mainImage.src;
});

// Close lightbox
closeLightboxBtn.addEventListener("click", () => {
  lightbox.classList.add("hidden");
});

// Thumbnail click: change main image
thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    // Change main image
    mainImage.src = thumb.dataset.full;

    // Update active thumbnail
    thumbnails.forEach((t) => t.classList.remove("active"));
    thumb.classList.add("active");
  });
});

// Lightbox thumbnail click
lightboxThumbnails.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    // Change lightbox main image
    lightboxMainImage.src = thumb.dataset.full;

    // Update active thumbnail
    lightboxThumbnails.forEach((t) => t.classList.remove("active"));
    thumb.classList.add("active");
  });
});


// ======= CART FUNCTIONALITY =======
const decreaseBtn = document.querySelector(".decrease");
const increaseBtn = document.querySelector(".increase");
const quantityEl = document.querySelector(".quantity");
const addToCartBtn = document.querySelector(".add-to-cart");
const cartCount = document.querySelector(".cart-count");
const cartPreview = document.getElementById("cart-preview");
const cartIcon = document.querySelector(".cart-icon");
const cartItem = document.querySelector(".cart-item");
const emptyCartMsg = document.querySelector(".empty-cart");
const checkoutBtn = document.querySelector(".checkout");
const cartItemQuantity = document.querySelector(".cart-item-quantity");
const cartItemTotal = document.querySelector(".cart-item-total");
const deleteItemBtn = document.querySelector(".delete-item");

let quantity = 0;

// Increase quantity
increaseBtn.addEventListener("click", () => {
  quantity++;
  quantityEl.textContent = quantity;
});

// Decrease quantity
decreaseBtn.addEventListener("click", () => {
  if (quantity > 0) {
    quantity--;
    quantityEl.textContent = quantity;
  }
});

// Toggle cart preview
cartIcon.addEventListener("click", () => {
  cartPreview.classList.toggle("hidden");
});

// Add to cart
addToCartBtn.addEventListener("click", () => {
  if (quantity === 0) return;

  // Show cart count
  cartCount.classList.remove("hidden");
  cartCount.textContent = quantity;

  // Show cart item details
  cartItem.classList.remove("hidden");
  emptyCartMsg.classList.add("hidden");
  checkoutBtn.classList.remove("hidden");

  // Update cart item details
  cartItemQuantity.textContent = quantity;
  const totalPrice = (125 * quantity).toFixed(2);
  cartItemTotal.textContent = `$${totalPrice}`;
});

// Delete item from cart
deleteItemBtn.addEventListener("click", () => {
  // Hide cart item
  cartItem.classList.add("hidden");
  emptyCartMsg.classList.remove("hidden");
  checkoutBtn.classList.add("hidden");

  // Reset cart count
  cartCount.textContent = "0";
  cartCount.classList.add("hidden");
});
