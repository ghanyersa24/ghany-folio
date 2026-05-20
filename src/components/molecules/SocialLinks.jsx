import { Linkedin, Github, MessageCircle, Mail } from 'lucide-react';
import { CONTACT, LINKS } from '../../constants/site';

// Declared once so the markup stays a simple map.
const SOCIALS = [
  { label: 'LinkedIn', href: CONTACT.linkedin, icon: Linkedin, external: true },
  { label: 'GitHub', href: LINKS.github, icon: Github, external: true },
  { label: 'WhatsApp', href: LINKS.whatsapp, icon: MessageCircle, external: true },
  { label: 'Email', href: `mailto:${CONTACT.email}`, icon: Mail, external: false },
];

/** Row of social icon links used in the footer. */
export default function SocialLinks() {
  return (
    <div className="flex justify-center items-center gap-6">
      {SOCIALS.map(({ label, href, icon: Icon, external }) => (
        <a
          key={label}
          href={href}
          {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
          className="text-slate-400 hover:text-cyan-400 transition-colors p-2"
        >
          <span className="sr-only">{label}</span>
          <Icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
}
