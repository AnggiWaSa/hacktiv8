
// Togel to Menubar
function toggleMenu() {
    let navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}

// digital clock aside
generateDigitalClok = () => {
    let date = new Date();

    let jam = `0${date.getHours()}`.substr(-2);
    let menit = `0${date.getMinutes()}`.substr(-2);
    let detik = `0${date.getSeconds()}`.substr(-2);

    let tahun = `0${date.getFullYear()}`.substr(-2);
    let bulan = `0${date.getMonth()}`.substr(-2);
    let hari = `0${date.getDate()}`.substr(-2);

    document.getElementById('clock-digital').innerHTML = `<span class="cd-date">${hari}/${bulan}/${tahun}</span> | <span class="cd-time">${jam}:${menit}:${detik}</span>`;
}

setInterval(() => {
    generateDigitalClok();
}, 1000);

//dark mode
const themeIcon = document.getElementById('theme-icon');
const themeText = document.getElementById('theme-text');

// Cek tema yang tersimpan di localStorage
const savedTheme = localStorage.getItem('theme');

// Fungsi untuk mengganti tema
function toggleTheme() {
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        // Tema saat ini adalah gelap, ubah ke terang
        document.documentElement.setAttribute('data-theme', 'light');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        themeText.textContent = 'Gelap';
    } else {
        // Tema saat ini adalah terang, ubah ke gelap
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        themeText.textContent = 'Terang';
    }

    // Simpan preferensi tema di localStorage
    localStorage.setItem('theme', document.documentElement.getAttribute('data-theme'));
}

// Cek tema yang tersimpan di localStorage dan terapkan jika ada
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);

    if (savedTheme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        themeText.textContent = 'Terang';
    }
}