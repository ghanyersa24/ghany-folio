// `icon` is a string key resolved via constants/icons.js → getIcon().
export const experiments = [
  {
    icon: 'hand',
    title: 'WebAR Hand Tracking - Clap & Grab',
    tagline: 'Spawn objek 3D di browser dengan gestur tangan.',
    description:
      'Eksperimen WebAR berbasis A-Frame & MediaPipe Hand Tracking. Kamera browser mendeteksi gestur tepuk tangan untuk memunculkan kubus 3D yang bisa di-"grab" di ruang AR - tanpa instalasi aplikasi, langsung jalan di browser modern.',
    stack: ['A-Frame', 'WebXR', 'Hand Tracking', 'MediaPipe', 'HTML'],
    links: [
      {
        label: 'Live Demo',
        href: 'https://ghany-ersa.github.io/immersive-learning/webar-handtracking.html',
      },
      {
        label: 'Source Code',
        href: 'https://github.com/ghanyersa24/VR-menggunakan-A-Frame',
      },
    ],
    note: 'Butuh izin kamera & koneksi internet untuk memuat model hand tracking.',
  },
  {
    icon: 'terminal',
    title: 'please-test - NPM Library',
    tagline: 'Selenium WebDriver abstraction untuk automation test yang lebih ekspresif.',
    description:
      'Library open-source yang dipublish di npm untuk menyederhanakan penulisan automation test berbasis Selenium WebDriver. Membungkus operasi umum (klik, fill, scroll, wait, assertion) ke dalam satu objek `please` yang ekspresif - mengurangi boilerplate dan membuat test script lebih mudah dibaca.',
    stack: ['JavaScript', 'Selenium WebDriver', 'npm', 'Mocha', 'Node.js'],
    links: [
      {
        label: 'npm Package',
        href: 'https://www.npmjs.com/package/please-test',
      },
    ],
  },
  {
    icon: 'puzzle',
    title: 'WA Blast - Chrome Extension',
    tagline: 'Kirim pesan WhatsApp massal langsung dari browser.',
    description:
      'Chrome extension untuk mengirim pesan WhatsApp ke banyak kontak sekaligus tanpa perlu tool pihak ketiga. Memanfaatkan WhatsApp Web API yang berjalan di browser, lengkap dengan antarmuka yang simpel untuk input daftar nomor dan pesan kustom.',
    stack: ['Chrome Extension', 'JavaScript', 'WhatsApp Web', 'HTML', 'CSS'],
    links: [
      {
        label: 'Chrome Web Store',
        href: 'https://chromewebstore.google.com/detail/mlacfalphoimakgnnlgkmchacncflech',
      },
    ],
    note: 'Pastikan sudah login ke WhatsApp Web sebelum menggunakan extension ini.',
  },
];
