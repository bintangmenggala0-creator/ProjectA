document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Logika Interaktif Search Box
  const searchIcon = document.querySelector('.search-icon');
  const searchWrapper = document.querySelector('.search-wrapper');
  const searchInput = document.querySelector('.search-input');

  // Pastikan elemen ada di halaman agar tidak error (berguna jika dipakai di banyak halaman)
  if (searchIcon && searchWrapper && searchInput) {
    
    // Animasi membuka/menutup search box saat ikon diklik
    searchIcon.addEventListener('click', () => {
      searchWrapper.classList.toggle('active');
      
      // Otomatis fokus ke kotak input saat kolom terbuka
      if (searchWrapper.classList.contains('active')) {
        searchInput.focus();
      }
    });

    // Aksi pencarian saat tombol 'Enter' ditekan
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault(); 
        
        const query = searchInput.value.trim();
        if (query) {
          alert(`Anda mencari: "${query}" \n(Ini adalah contoh aksi. Anda dapat menghubungkannya ke fungsi backend nanti)`);
          
          // Reset setelah mencari
          searchInput.value = '';
          searchWrapper.classList.remove('active');
        }
      }
    });
  }

  // 2. Logika Animasi Scroll untuk Card (.cd)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("v");
        entry.unobserve(entry.target); // Hanya dijalankan 1x saat muncul
      }
    });
  }, {
    threshold: 0.15 // Terpicu saat 15% elemen masuk layar
  });

  const sections = document.querySelectorAll(".cd");
  sections.forEach((section) => {
    observer.observe(section);
  });
  
});