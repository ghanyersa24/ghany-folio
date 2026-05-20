import { projectImages } from '../assets/images';

export const experiences = [
  {
    company: 'Sekolah.mu | talentics.id',
    role: 'Frontend Developer',
    period: 'April 2022 - April 2026',
    highlights: [
      'Membangun & memelihara modul asesmen enterprise berbasis Nuxt.js yang melayani ribuan kandidat per bulan.',
      'Memangkas waktu render halaman asesmen melalui code-splitting, lazy loading, dan optimasi state management.',
      'Berkolaborasi dengan tim product, designer, dan backend untuk merilis fitur baru secara berkelanjutan setiap sprint.',
    ],
    project: {
      title: 'Sistem Asesmen (talentics.id)',
      description:
        'Antarmuka sistem asesmen enterprise yang responsif, interaktif, dan tahan beban - digunakan klien korporat untuk seleksi talenta digital.',
      image: projectImages.talentics,
      tech: ['Nuxt.js', 'Vue.js', 'TypeScript', 'Tailwind'],
    },
  },
  {
    company: 'Nikaah.id',
    role: 'Backend Developer',
    period: 'November 2022 - April 2025',
    highlights: [
      'Mendesain arsitektur multi-tenant berbasis subdomain dinamis sehingga setiap klien mendapat undangan sendiri tanpa intervensi developer.',
      'Membangun REST API untuk RSVP, autentikasi, dashboard admin, dan personalisasi undangan dengan Express.js.',
      'Mengoptimasi struktur database dan integrasi layanan agar platform scalable seiring bertambahnya pengguna.',
    ],
    project: {
      title: 'Platform Undangan Digital (nikaah.id)',
      description:
        'Backend SaaS undangan digital dengan sistem multi-tenant, manajemen tamu, dan personalisasi penuh per klien.',
      image: projectImages.nikaah,
      tech: ['Express.js', 'REST API', 'Multi-tenant', 'PostgreSQL'],
    },
  },
  {
    company: 'FIFGROUP member of ASTRA',
    role: 'IT Development',
    period: 'April 2021 - Mei 2022',
    highlights: [
      'Berperan sebagai solo programmer end-to-end: requirement gathering, perancangan sistem, implementasi, hingga deployment.',
      'Membangun Sistem Manajemen Aset internal berbasis React.js + Java Spring Boot yang menggantikan proses manual lintas cabang.',
      'Mengurangi kerja administratif tim aset dengan otomasi pencatatan dan pelaporan.',
    ],
    project: {
      title: 'Sistem Manajemen Aset Internal',
      description:
        'Aplikasi internal untuk pencatatan, pelacakan, dan pelaporan aset perusahaan - meningkatkan akurasi & kecepatan audit aset.',
      image: projectImages.fifgroup,
      tech: ['React.js', 'Java Spring Boot', 'REST API', 'Fullstack'],
    },
  },
  {
    company: 'Comika Indonesia',
    role: 'IT Vendor - Comika Media',
    period: 'Juni 2021 - Oktober 2021',
    highlights: [
      'Membangun platform media comika.media dengan Next.js + Express.js, fokus pada performa SEO dan user experience.',
      'Mengintegrasikan payment gateway Midtrans untuk subscription dan pembelian merchandise sebagai sumber monetisasi.',
    ],
    project: {
      title: 'Website Comika Media',
      description:
        'Platform media konten komedi dengan fitur subscription digital, e-commerce merchandise, dan checkout terintegrasi.',
      image: projectImages.comika,
      tech: ['Next.js', 'Express.js', 'Midtrans', 'Fullstack'],
    },
  },
  {
    company: 'Peopleshift (shiftacademy.id)',
    role: 'Tutor & Fullstack JavaScript Developer',
    period: 'Desember 2020 - Mei 2022',
    highlights: [
      'Mengajar 500+ jam pelatihan: HTML, CSS, JavaScript, Git, database, Express.js, Vue/Nuxt.js.',
      'Membimbing ratusan peserta dari fundamental hingga merilis aplikasi production-ready melalui project-based learning.',
      'Menyusun kurikulum praktis berorientasi industri yang dipakai berulang lintas batch bootcamp.',
    ],
    project: {
      title: 'Mentoring & Bootcamp JavaScript',
      description:
        'Bimbingan intensif untuk peserta bootcamp di ekosistem JavaScript modern - menjembatani teori dengan praktik industri.',
      image: projectImages.shiftacademy,
      tech: ['Teaching', 'Curriculum Design', 'JavaScript', 'Mentoring'],
    },
  },
  {
    company: 'PT Bejana Investidata Globalindo (BIGIO.ID)',
    role: 'Software QA & Automation Engineer',
    period: 'Maret 2020 - Desember 2020',
    highlights: [
      'Menyusun test scenario, melakukan manual testing, serta mengembangkan automation testing dengan Selenium JavaScript.',
      'Membangun tools automation internal yang menghasilkan testing report otomatis - mempercepat validasi fitur tiap rilis.',
      'Membantu tim development mengidentifikasi & mereproduksi bug lebih cepat sehingga siklus QA lebih ringkas.',
    ],
    project: {
      title: 'Automation Testing & QA Tools',
      description:
        'Internal automation testing tools dengan pelaporan otomatis - meningkatkan efisiensi proses QA dan stabilitas rilis.',
      image: projectImages.bigio,
      tech: ['Selenium', 'JavaScript', 'Automation', 'QA'],
    },
  },
  {
    company: 'Eksekutif Mahasiswa Universitas Brawijaya',
    role: 'Product Owner - EM Apps',
    period: 'Januari 2019 - Desember 2019',
    highlights: [
      'Memimpin pengembangan aplikasi mahasiswa dengan 20.000+ pengguna aktif.',
      'Mengelola product roadmap, koordinasi tim, dan pengembangan REST API berbasis CodeIgniter.',
      'Merilis fitur rekam aktivitas mahasiswa dan sistem pemesanan wawancara digital yang menggantikan proses manual.',
    ],
    project: {
      title: 'EM Apps - Portal Mahasiswa',
      description:
        'Platform digital mahasiswa untuk pelacakan aktivitas non-akademik dan manajemen jadwal wawancara - dipakai 20K+ mahasiswa.',
      image: projectImages.emApps,
      tech: ['CodeIgniter', 'REST API', 'Product Ownership'],
    },
  },
];
