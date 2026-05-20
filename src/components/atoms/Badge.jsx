import { cn } from '../../utils/cn';

/**
 * Small pill label. Two visual variants:
 *  - 'eyebrow' : cyan mono text above section headings.
 *  - 'status'  : emerald bordered pill with a pulsing dot (availability).
 *
 * @param {React.ComponentType} [icon] - optional leading lucide icon.
 */
export default function Badge({ variant = 'eyebrow', icon: Icon, className, children }) {
  if (variant === 'status') {
    return (
      <div
        className={cn(
          'inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono',
          'border border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
          className,
        )}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
        </span>
        {children}
      </div>
    );
  }

  return (
    <p
      className={cn(
        'text-cyan-400 font-mono text-sm flex items-center gap-2',
        className,
      )}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </p>
  );
}
