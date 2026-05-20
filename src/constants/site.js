// Single source of truth for external links & contact info.
// TODO: replace GITHUB_URL and CALENDAR_URL with real destinations.

export const CONTACT = {
  email: 'ghanyersa24@gmail.com',
  phone: '+6282164028264',
  phoneDisplay: '+62 821-6402-8264',
  location: 'Jawa Timur, Indonesia',
  linkedin: 'https://www.linkedin.com/in/ghany-abdillah-ersa-06156013a',
  github: 'https://github.com/ghanyersa',
};

export const LINKS = {
  whatsapp:
    'https://wa.me/6282164028264?text=Halo%20Ghany%2C%20saya%20ingin%20mendiskusikan%20kolaborasi.',
  github: CONTACT.github,
  linkedin: CONTACT.linkedin,
  emailDiscuss: `mailto:${CONTACT.email}?subject=Kolaborasi%20%E2%80%94%20Diskusi%20Awal`,
  calendar: `mailto:${CONTACT.email}?subject=Jadwal%20Diskusi%20Kolaborasi`,
};
