// JavaScript code for shopping cart functionality

const cartItems = [];

function addToCart(productName, price) {
  cartItems.push({ name: productName, price: price });
  updateCart();
}

function updateCart() {
  const cartItemsList = document.getElementById('cartItems');
  cartItemsList.innerHTML = '';
  let totalAmount = 0;

  cartItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.innerHTML = `<span>${item.name} - $${item.price.toFixed(2)}</span>`;
    cartItemsList.appendChild(listItem);
    totalAmount += item.price;
  });

  const totalAmountElement = document.querySelector('.total-amount');
  totalAmountElement.textContent = `Total: $${totalAmount.toFixed(2)}`;
}

function checkout() {
  // You can add more logic here, like sending the cart items to the server, etc.
  alert('Your order is placed! Total amount: $' + getTotalAmount().toFixed(2));
  cartItems.length = 0; // Clear the cart
  updateCart();
}

function getTotalAmount() {
  let totalAmount = 0;
  cartItems.forEach(item => {
    totalAmount += item.price;
  });
  return totalAmount;
}
