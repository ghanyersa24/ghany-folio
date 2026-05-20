import { cn } from '../../utils/cn';

/**
 * Link styled as a button (every CTA on the page is an anchor).
 *
 * @param {'primary'|'secondary'|'ghost'|'outline'} [variant]
 * @param {React.ComponentType} [icon] - leading lucide icon.
 * @param {boolean} [external] - adds target=_blank + rel=noreferrer.
 */
const VARIANTS = {
  primary:
    'bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold',
  secondary:
    'bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium',
  ghost:
    'bg-transparent border border-slate-700 hover:border-cyan-500/50 ' +
    'hover:text-cyan-300 text-slate-300 font-medium',
  outline:
    'bg-transparent border border-cyan-500/40 hover:bg-cyan-500/10 ' +
    'text-cyan-300 font-medium',
};

export default function Button({
  href,
  variant = 'primary',
  icon: Icon,
  external = false,
  className,
  children,
}) {
  const externalProps = external
    ? { target: '_blank', rel: 'noreferrer' }
    : {};

  return (
    <a
      href={href}
      {...externalProps}
      className={cn(
        'inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-colors duration-300',
        VARIANTS[variant],
        className,
      )}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </a>
  );
}
