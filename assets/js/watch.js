const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownContent = document.querySelector('.dropdown-content');

dropdownBtn.addEventListener('click', function() {
  dropdownContent.classList.toggle('show');
});

window.addEventListener('click', function(event) {
  if (!event.target.matches('.dropdown-btn')) {
    dropdownContent.classList.remove('show');
  }
});
