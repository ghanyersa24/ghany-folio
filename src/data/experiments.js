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
        href: 'https://ghanyersa24.github.io/VR-menggunakan-A-Frame/webar-handtracking.html',
      },
      {
        label: 'Source Code',
        href: 'https://github.com/ghanyersa24/VR-menggunakan-A-Frame',
      },
    ],
    note: 'Butuh izin kamera & koneksi internet untuk memuat model hand tracking.',
  },
];
