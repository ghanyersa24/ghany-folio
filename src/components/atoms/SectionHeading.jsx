import Badge from './Badge';
import { cn } from '../../utils/cn';

/**
 * Section title. Two layouts:
 *  - align="left"   : heading + horizontal rule (Tentang, Keahlian, Pengalaman).
 *  - align="center" : eyebrow + heading + description (AI Workflow, Lab, Kolaborasi).
 *
 * @param {string} [eyebrow] - small mono label shown above the title.
 * @param {React.ComponentType} [eyebrowIcon]
 * @param {string} [description] - supporting paragraph (center layout).
 */
export default function SectionHeading({
  eyebrow,
  eyebrowIcon,
  title,
  description,
  align = 'left',
  className,
}) {
  if (align === 'center') {
    return (
      <div className={cn('text-center max-w-3xl mx-auto mb-12', className)}>
        {eyebrow && (
          <Badge icon={eyebrowIcon} className="justify-center mb-3">
            {eyebrow}
          </Badge>
        )}
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{title}</h2>
        {description && (
          <p className="text-slate-400 leading-relaxed">{description}</p>
        )}
      </div>
    );
  }

  return (
    <div className={cn('flex items-center gap-4 mb-12', className)}>
      <h2 className="text-3xl font-bold text-white whitespace-nowrap">{title}</h2>
      <div className="h-px bg-slate-700 flex-grow max-w-xs" />
    </div>
  );
}
