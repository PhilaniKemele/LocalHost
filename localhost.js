function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// AirCav

const form = document.querySelector('#myForm');

form.addEventListener('submit', (e) => {

  popup.style.display = "none";

  e.preventDefault();

  const formData = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    headers: {
      'Accept': 'application/json'
    },
    body: formData
  })

  .then(response => { 
    alert('Thank you for your Submission!');
    form.reset();
  })

  .catch(error => {
    alert('There was an error submitting your request. Please try again later.');
  });

});

function openAboutUs() {
  document.getElementById("aboutUsPopup").style.display = "block";
}

function closeAboutUs() {
  document.getElementById("aboutUsPopup").style.display = "none";
}

// AirCav

const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const body = document.body;

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('is-active');
  sidebar.classList.toggle('open');
  
  if (sidebar.classList.contains('open')) {
    body.classList.add('sidebar-open');
  } else {
    body.classList.remove('sidebar-open');
  }
});


// AirCav

window.addEventListener('scroll', function() {
  var button = document.querySelector('.back-to-top');
  var footer = document.querySelector('footer');
  var footerOffset = footer.offsetTop;
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > footerOffset) {
    button.style.left = '20px';
    button.style.bottom = (scrollTop + window.innerHeight - footerOffset + 20) + 'px';
  } else {
    button.style.left = '20px';
    button.style.bottom = '20px';
  }

  if (scrollTop > 900) {
    button.classList.add('show');
  } else {
    button.classList.remove('show');
  }
});

// AirCav

const searchIcon = document.querySelector('.search-icon');
const searchForm = document.querySelector('.search-form');

searchIcon.addEventListener('click', () => {
  searchForm.classList.toggle('show');
});

// AirCav

function performSearch(event) {
  event.preventDefault();

  var searchInput = document.getElementById("search-input");
  var searchTerm = searchInput.value.trim().toLowerCase();

  var cards = document.querySelectorAll(".cards .card");

  for (var i = 0; i < cards.length; i++) {
    var card = cards[i];
    var title = card.querySelector("h2").innerText.toLowerCase();

    if (title.includes(searchTerm)) {
      card.style.display = ""; 
    } else {
      card.style.display = "none"; 
    }
  }

  searchInput.value = "";
}

// AirCav

document.addEventListener("DOMContentLoaded", function () {
  const cardsContainer = document.querySelector(".cards-container");
  const cards = document.querySelector(".cards");
  const scrollLeftBtn = document.querySelector(".scroll-left");
  const scrollRightBtn = document.querySelector(".scroll-right");

  scrollLeftBtn.addEventListener("click", function () {
    cardsContainer.scrollBy({
      left: -300, 
      behavior: "smooth",
    });
  });

  scrollRightBtn.addEventListener("click", function () {
    cardsContainer.scrollBy({
      left: 300, 
      behavior: "smooth",
    });
  });

  cardsContainer.addEventListener("scroll", function () {
    scrollLeftBtn.style.display =
      cardsContainer.scrollLeft === 0 ? "none" : "flex";
    scrollRightBtn.style.display =
      cardsContainer.scrollLeft + cardsContainer.clientWidth >=
      cardsContainer.scrollWidth
        ? "none"
        : "flex";
  });
});

// AirCav
