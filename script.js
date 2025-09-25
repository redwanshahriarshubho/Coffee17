let cartCount = 0;

function addToCart(item) {
  cartCount++;
  document.getElementById("cartBtn").innerText = `Cart (${cartCount})`;
  alert(item + " added to cart!");
}
