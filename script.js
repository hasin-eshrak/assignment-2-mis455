const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

function process(){
  var birthplace = document.getElementById("place").value;
  var food = document.getElementById("food").value;

  var message = `
  
  <h3> Your Generated NickName Is : ${birthplace} ${food}. <h4>
  
  `;

  document.getElementById("results").innerHTML = message;
}