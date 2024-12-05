const header = document.querySelector("header");


window.addEventListener("scroll",function(){
    header.classList.toggle("sticky", this.window.scrollY>0 );
})


const productContainer = document.querySelector('.product-container-a');

function scrollLeft() {
    productContainer.scrollBy({
        left: -300,
        behavior: 'smooth'
    });
}

function scrollRight() {
    productContainer.scrollBy({
        left: 300,
        behavior: 'smooth'
    });
}


    //cart push up
    function toggleCartPopup() {
        const cartPopup = document.getElementById('cartPopup');
        cartPopup.style.display = cartPopup.style.display === 'none' || cartPopup.style.display === '' ? 'flex' : 'none';
    }

    function removeItem() {
        alert("Item removed (Demo Function)");
        // You can add JavaScript logic here to remove the item from the cart
    }

    // Close cart popup when clicking outside of it
    window.onclick = function(event) {
        const cartPopup = document.getElementById('cartPopup');
        const cartIcon = document.querySelector('.cart-icon');

        // Check if click is outside the cart popup and not on the cart icon
        if (event.target !== cartPopup && event.target !== cartIcon && !cartPopup.contains(event.target)) {
            cartPopup.style.display = 'none';
        }
    }


    function toggleSearch() {
        const searchContainer = document.getElementById("searchPopup");
        searchContainer.style.display = searchContainer.style.display === "none" || searchContainer.style.display === "" ? "block" : "none";
      }
      
    

      




  
  //javascript in shop.html
  function toggleSize() {
    const header = document.querySelector('.filter-header');
    const options = document.getElementById('gender-options');
    options.style.display = options.style.display === 'block' ? 'none' : 'block';
    header.classList.toggle('collapsed');
  }

  function toggleSize1() {
    const header = document.querySelector('.filter-header-color');
    const options = document.getElementById('color-options');
    options.style.display = options.style.display === 'block' ? 'none' : 'block';
    header.classList.toggle('collapsed');
  }

  function toggleSize2() {
    const header = document.querySelector('.filter-header-collection');
    const options = document.getElementById('collection-options');
    options.style.display = options.style.display === 'block' ? 'none' : 'block';
    header.classList.toggle('collapsed');
  }