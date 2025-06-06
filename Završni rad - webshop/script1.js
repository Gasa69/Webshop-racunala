let cartCount = 0;

// Dodavanje u košaricu
function addToCart(productName, price) {
    cartCount++;
    updateCartCount();
    alert(`Dodan ${productName} u košaricu. Cijena: €${price}`);
}

function updateCartCount() {
    document.getElementById('cart-count').innerText = cartCount;
}

// Povratak na vrh stranice
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Pomicanje na dno stranice
function scrollToBottom() {
  document.body.scrollTop = document.body.scrollHeight;
  document.documentElement.scrollTop = document.documentElement.scrollHeight;
}


// Prikazivanje gumba za povratak na vrh kada se stranica pomiče 
window.onscroll = function () {
    var button = document.getElementById("back-to-top");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

// Otvaranje navigacije
function openNav() {
    document.getElementById("mySidenav").style.width = "280px";
    document.getElementById("main").style.marginLeft = "280px";
}

// Zatvaranje navigacije
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

// Forma (obrazac)
document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    if(fname === "" || lname === "" || email === "" || message === "") {
      alert("Molimo popunite sva polja.");
    } else {
      alert("Hvala na poruci, " + fname + "!");
      document.getElementById("contactForm").reset();
    }
  });

// Dohvati modal
var modal = document.getElementById('id01');

// Zatvaranje
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}