import { projectImages } from '../assets/images';

export const caseStudies = [
  {
    title: 'Sistem Asesmen Enterprise - talentics.id',
    role: 'Frontend Developer · Sekolah.mu',
    image: projectImages.talentics,
    problem:
      'Modul asesmen melayani ribuan kandidat klien korporat secara bersamaan. Halaman terasa berat, state form kompleks, dan tiap rilis fitur baru rawan regresi.',
    action: [
      'Refactor struktur komponen Nuxt.js dan terapkan code-splitting per modul asesmen.',
      'Pisahkan state form berat ke composables agar re-render terisolasi.',
      'Rapikan kolaborasi dengan product & QA via checklist rilis untuk mengurangi regresi.',
    ],
    decisions: [
      {
        q: 'Refactor besar atau patch kecil bertahap?',
        a: 'Pilih patch bertahap per modul - refactor besar berisiko menahan rilis bisnis. Kami trade-off antara kecepatan rilis vs kerapian arsitektur, dan kecepatan menang karena klien korporat butuh fitur baru tiap sprint.',
      },
      {
        q: 'Composables atau global store?',
        a: 'Pakai composables untuk state form karena form-nya rumit tapi scope-nya lokal. Global store akan over-engineering dan bikin re-render menyebar ke modul lain.',
      },
    ],
    result: [
      'Halaman asesmen terasa lebih ringan dan responsif untuk kandidat.',
      'Siklus rilis fitur baru lebih cepat dan minim regresi antar sprint.',
      'Tim product percaya menambahkan fitur kompleks tanpa takut merusak alur kandidat.',
    ],
    stack: ['Nuxt.js', 'Vue.js', 'Tailwind', 'TypeScript'],
  },
  {
    title: 'Sistem Manajemen Aset - FIFGROUP (ASTRA)',
    role: 'Solo Programmer · FIFGROUP',
    image: projectImages.fifgroup,
    problem:
      'Pencatatan aset internal masih manual lintas cabang, sulit diaudit, dan rawan data ganda. Tidak ada tooling tunggal untuk operasional aset.',
    action: [
      'Rancang sistem end-to-end: skema database, API Spring Boot, dan UI React.',
      'Bangun alur pencatatan, perpindahan, dan pelaporan aset dalam satu dashboard.',
      'Sediakan ekspor laporan untuk mempercepat proses audit.',
    ],
    decisions: [
      {
        q: 'Spring Boot atau Node.js untuk backend?',
        a: 'Pilih Spring Boot mengikuti standar internal ASTRA - bukan karena teknologinya lebih baik, tapi karena maintainability oleh tim internal setelah saya selesai jauh lebih penting daripada preferensi pribadi.',
      },
      {
        q: 'Monolith atau microservice?',
        a: 'Monolith. Hanya 1 developer (saya), 1 domain bisnis, dan tim internal kecil. Microservice akan menambah kompleksitas deployment tanpa keuntungan nyata - over-engineering yang umum di proyek seukuran ini.',
      },
      {
        q: 'Custom build atau pakai SaaS asset management?',
        a: 'Custom - karena alur approval dan struktur cabang FIFGROUP sangat spesifik. SaaS akan butuh adaptasi proses bisnis ke tool, bukan sebaliknya.',
      },
    ],
    result: [
      'Operasional tim aset bergeser dari spreadsheet manual ke satu sistem terpusat.',
      'Audit aset jadi lebih cepat karena laporan tersedia on-demand.',
      'Dikerjakan solo dari requirement hingga deployment - bukti kapabilitas fullstack end-to-end.',
    ],
    stack: ['React.js', 'Java Spring Boot', 'REST API', 'Fullstack'],
  },
];
