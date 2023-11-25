// Toggle class active untuk crochet menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika crochet menu di klik
document.querySelector("#crochet-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
    searchForm.classList.toggle("active");
    searchBox.focus();
    e.preventDefault();
};

//Toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#shopping-cart-button").onclick = (e) => {
    shoppingCart.classList.toggle("active");
    e.preventDefault();
};

// klik di luar elemen
const cr = document.querySelector("#crochet-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
    if (!cr.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
  }
  
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
}

if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
}
});

// Shopping Cart button
const si = document.querySelector('.shopping-cart');
const sci = document.querySelector('.shopping-cart-item');
const it = document.querySelectorAll('.remove-item');

// Klik tombol sampah
const updateShoppingCartHTML = function (){
    if(sci.lenght < 0){
        let result = <h4 class="empty">Your shopping cart is empty</h4>
    }
}

document.addEventListener("click", function (e) {
    if (!it.contains(e.target) && !si.contains(e.target)) {
        sci.classList.remove("active");
  }
});

document.querySelector('.remove-item').forEach ((btn) =>{
    btn.onclick = (e) => {
    sci.style.display = 'none';
    e.preventDefault();
};
});

// // Modal Box
// let itemDetailModal = document.querySelector('#item-detail-modal1');
// let itemDetailButtons = document.querySelectorAll('.item-detail-button1');

// itemDetailButtons.forEach((btn) => {
//     btn.onclick = (e) => {
//         itemDetailModal.style.display = 'flex';
//         e.preventDefault();
//     };
// });

// // Klik tombol close Modal
// document.querySelector('.modal .close-icon')
//     btn.onclick = (e) => {
//         itemDetailModal.style.display = 'none';
//         e.preventDefault();
//     };

// // Klik di luar Modal
// window.onclick = (e) => {
//     if (e.target === itemDetailModal1) {
//         itemDetailModal.style.display = 'none';
//     }
// };
