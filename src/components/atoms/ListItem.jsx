import { CheckCircle2 } from 'lucide-react';
import { cn } from '../../utils/cn';

/**
 * A single bullet row in a feature/result list.
 *
 * @param {'check'|'check-emerald'|'arrow'} [marker] - the leading glyph.
 */
export default function ListItem({ marker = 'check', className, children }) {
  return (
    <li className={cn('flex items-start gap-2', className)}>
      {marker === 'check' && (
        <CheckCircle2 className="w-5 h-5 text-cyan-400/80 flex-shrink-0 mt-0.5" />
      )}
      {marker === 'check-emerald' && (
        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
      )}
      {marker === 'arrow' && <span className="text-amber-400 mt-1">›</span>}
      <span>{children}</span>
    </li>
  );
}
