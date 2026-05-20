import { MapPin, Phone, Mail } from 'lucide-react';
import { CONTACT } from '../../constants/site';

/** Footer contact column: location, phone, and email. */
export default function ContactInfo() {
  return (
    <div className="flex flex-col items-center sm:items-start text-slate-400 gap-2">
      <span className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
        <MapPin className="w-4 h-4" /> {CONTACT.location}
      </span>
      <a
        href={`tel:${CONTACT.phone}`}
        className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
      >
        <Phone className="w-4 h-4" /> {CONTACT.phoneDisplay}
      </a>
      <a
        href={`mailto:${CONTACT.email}`}
        className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
      >
        <Mail className="w-4 h-4" /> {CONTACT.email}
      </a>
    </div>
  );
}
