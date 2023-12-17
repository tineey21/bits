/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});













var totalPrice = 0;
                    
function addToCart(itemName, itemPrice) {
  var cartItemsElement = document.getElementById('cartItems');
  var li = document.createElement('li');
  li.textContent = itemName + ' - ₱' + itemPrice.toFixed(2);
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
  alert('Total amount: ₱' + totalPrice.toFixed(2) + '\nThank you for your order!');
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
