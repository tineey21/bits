

var totalPrice = 0;

   function addToCart(itemName, itemPrice) {
      var cartItemsElement = document.getElementById('cartItems');
      var li = document.createElement('li');
      li.textContent = itemName + ' - $' + itemPrice.toFixed(2);
      li.className = 'custom-cart-li';
      cartItemsElement.appendChild(li);
      totalPrice += itemPrice;
      updateTotalPrice();

  showCart();
    }
    function updateTotalPrice() {
      var totalPriceElement = document.getElementById('totalPrice');
      totalPriceElement.textContent = totalPrice.toFixed(2);
    }

    function checkout() {
      alert('Total amount: $' + totalPrice.toFixed(2) + '\nThank you for your order!');
      hideCart(); // Hide the cart after checkout
    }

    // Function to toggle the visibility of the cart and adjust menu size
    function toggleCart() {
      var orderMenu = document.getElementById('orderMenu');
      var cartContainer = document.getElementById('cartContainer');

      if (cartContainer.style.width === '0px' || cartContainer.style.width === '') {
        // Show the cart
        orderMenu.classList.add('shrink-menu');
        showCart();
      } else {
        // Hide the cart
        orderMenu.classList.remove('shrink-menu');
        hideCart();
      }
    }

    // Function to show the cart
    function showCart() {
      var cartContainer = document.getElementById('cartContainer');
      cartContainer.style.width = '25%'; // You can adjust the width as needed
    }

    // Function to hide the cart
    function hideCart() {
      var cartContainer = document.getElementById('cartContainer');
      cartContainer.style.width = '0';
    }
