var x = document.getElementById("shippingForm");
x.style.display = "none";
function showDifferentAddress() {
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}