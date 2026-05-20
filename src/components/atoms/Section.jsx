import { cn } from '../../utils/cn';

/**
 * A page section with an anchor id (for nav scroll) and consistent
 * vertical rhythm. Optional `bordered` adds the dark-divider treatment.
 */
export default function Section({ id, bordered = false, className, children }) {
  return (
    <section
      id={id}
      className={cn(
        'py-20',
        bordered && 'border-y border-slate-800',
        className,
      )}
    >
      {children}
    </section>
  );
}
