// Menu Toggle
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

if (menuToggle && nav) { // Memastikan elemen ada sebelum menambahkan event listener
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('slide');
    });
}

// Validasi Form
const form = document.querySelector('form');

if (form) { // Memastikan elemen form ada
    form.addEventListener('submit', function(event) {
        let isValid = true; // Variabel untuk melacak validitas form

        // Contoh Validasi: Memastikan input dengan id "nama" tidak kosong
        const namaInput = document.getElementById('nama');
        if (namaInput && namaInput.value.trim() === '') {
            isValid = false;
            alert('Nama harus diisi!');
            namaInput.focus(); // Fokus ke input yang salah
        }

        // Contoh Validasi: Memastikan email valid
        const emailInput = document.getElementById('email');
        if (emailInput) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(emailInput.value)) {
            isValid = false;
            alert('Email tidak valid!');
            emailInput.focus();
          }
        }

        // Tambahkan validasi lain sesuai kebutuhan (misalnya, nomor telepon, dll.)

        if (!isValid) {
            event.preventDefault(); // Mencegah form dikirim jika tidak valid
        }
    });
}