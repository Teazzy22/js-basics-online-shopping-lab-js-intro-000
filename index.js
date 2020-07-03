var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var itemObj = {itemName:`${item}`, itemPrice: Math.floor(Math.random()*100)}
 cart.push(itemObj);

 return itemObj.itemName + " has been added to your cart."
}

function viewCart() {
  // write your code here
  if (cart <= 0){
    return("Your shopping cart is empty.");
  }else {
    return `In your cart, you have ${itemObj.itemName} at ${itemObj.itemPrice}.`;
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
