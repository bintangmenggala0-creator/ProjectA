document.addEventListener("DOMContentLoaded", () => {
  
  const searchIcon = document.querySelector('.search-icon');
  const searchWrapper = document.querySelector('.search-wrapper');
  const searchInput = document.querySelector('.search-input');

  if (searchIcon && searchWrapper && searchInput) {
    searchIcon.addEventListener('click', () => {
      searchWrapper.classList.toggle('active');
      if (searchWrapper.classList.contains('active')) {
        searchInput.focus();
      }
    });

    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault(); 
        const query = searchInput.value.trim();
        if (query) {
          alert(`Anda mencari: "${query}"`);
          searchInput.value = '';
          searchWrapper.classList.remove('active');
        }
      }
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("v");
        entry.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15 
  });

  const sections = document.querySelectorAll(".cd");
  sections.forEach((section) => {
    observer.observe(section);
  });
  
});
