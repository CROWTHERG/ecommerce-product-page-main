const decreaseBtn = document.querySelector('.decrease');
const increaseBtn = document.querySelector('.increase');
const quantityDisplay = document.querySelector('.quantity');
const addToCartBtn = document.querySelector('.add-to-cart');
const cartCount = document.querySelector('.cart-count');
const cartItem = document.querySelector('.cart-item');
const emptyCartMsg = document.querySelector('.empty-cart');
const checkoutBtn = document.querySelector('.checkout');
const deleteItemBtn = document.querySelector('.delete-item');
const cartToggle = document.getElementById('cart-toggle');
const cartPreview = document.getElementById('cart-preview');

let quantity = 0;

// Increase quantity
increaseBtn.addEventListener('click', () => {
  quantity++;
  quantityDisplay.textContent = quantity;
});

// Decrease quantity
decreaseBtn.addEventListener('click', () => {
  if (quantity > 0) {
    quantity--;
    quantityDisplay.textContent = quantity;
  }
});

// Create and show custom alert
function showCustomAlert(message, type = 'success') {
  // Create alert element
  const alert = document.createElement('div');
  alert.textContent = message;

  // Style alert
  alert.style.position = 'fixed';
  alert.style.top = '20px';
  alert.style.right = '20px';
  alert.style.padding = '1rem 1.5rem';
  alert.style.backgroundColor = type === 'success' ? 'hsl(152, 68%, 50%)' : 'hsl(0, 70%, 50%)';
  alert.style.color = '#fff';
  alert.style.fontSize = '16px';
  alert.style.borderRadius = '8px';
  alert.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
  alert.style.opacity = '0';
  alert.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  alert.style.zIndex = '1000';

  document.body.appendChild(alert);

  // Fade in
  requestAnimationFrame(() => {
    alert.style.opacity = '1';
    alert.style.transform = 'translateY(0)';
  });

  // Auto remove after 3s
  setTimeout(() => {
    alert.style.opacity = '0';
    alert.style.transform = 'translateY(-20px)';
    setTimeout(() => {
      alert.remove();
    }, 300);
  }, 3000);
}

// Add to cart
addToCartBtn.addEventListener('click', () => {
  if (quantity > 0) {
    cartCount.textContent = quantity;
    cartCount.style.display = 'block';
    cartItem.querySelector('.cart-item-quantity').textContent = quantity;
    cartItem.querySelector('.cart-item-total').textContent = `$${(quantity * 125).toFixed(2)}`;
    cartItem.classList.remove('hidden');
    emptyCartMsg.classList.add('hidden');
    checkoutBtn.classList.remove('hidden');

    // Show custom success alert
    showCustomAlert(`✅ Added ${quantity} item(s) to cart!`, 'success');

    // Reset quantity
    quantity = 0;
    quantityDisplay.textContent = quantity;
  } else {
    // Show custom error alert
    showCustomAlert('⚠️ Please select a quantity before adding to cart.', 'error');
  }
});

// Toggle cart preview
cartToggle.addEventListener('click', () => {
  cartPreview.classList.toggle('hidden');
});

// Delete item from cart
deleteItemBtn.addEventListener('click', () => {
  cartCount.textContent = '0';
  cartCount.style.display = 'none';
  cartItem.classList.add('hidden');
  emptyCartMsg.classList.remove('hidden');
  checkoutBtn.classList.add('hidden');

  // Show custom alert for removal
  showCustomAlert('🗑️ Item removed from cart.', 'error');
});
