function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

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

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('is-active');
  sidebar.classList.toggle('open');
});









