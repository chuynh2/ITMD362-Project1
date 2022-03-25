var x = document.getElementById("shippingForm");
x.style.display = "none";
function showDifferentAddress() {
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}
function ctnPayment(){
    location.href='payment/index.html';
}
function backShopping(){
    location.href='../index.html';
}
function ctnShipping(){
    location.href='../shipping/index.html';
}
function backPayment(){
    location.href='../payment/index.html';
}