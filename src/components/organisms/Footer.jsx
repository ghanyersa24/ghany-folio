import { Container } from '../atoms';
import { ContactInfo, SocialLinks } from '../molecules';

/** Page footer: contact details, social links, and a credit line. */
export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-12 pb-8">
      <Container>
        <div className="grid sm:grid-cols-3 gap-8 border-t border-slate-800 pt-8 text-sm">
          <ContactInfo />
          <SocialLinks />
          <div className="flex justify-center sm:justify-end items-center text-slate-500">
            <p>Didesain &amp; dibangun oleh Ghany A. E. © 2024</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
