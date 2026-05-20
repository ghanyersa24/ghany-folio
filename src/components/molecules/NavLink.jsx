import { cn } from '../../utils/cn';

/**
 * Single navigation link. Renders the desktop (underline) or mobile
 * (block) style and reflects the scroll-spy active state.
 *
 * @param {{id: string, name: string}} item
 * @param {boolean} isActive
 * @param {'desktop'|'mobile'} [variant]
 * @param {() => void} [onClick]
 */
export default function NavLink({ item, isActive, variant = 'desktop', onClick }) {
  if (variant === 'mobile') {
    return (
      <a
        href={`#${item.id}`}
        onClick={onClick}
        className={cn(
          'block px-3 py-2 rounded-md text-base font-medium',
          'text-slate-300 hover:text-white hover:bg-slate-800',
        )}
      >
        {item.name}
      </a>
    );
  }

  return (
    <a
      href={`#${item.id}`}
      className={cn(
        'px-1 py-2 text-sm font-medium transition-all duration-300',
        isActive
          ? 'text-cyan-400 border-b-2 border-cyan-400'
          : 'text-slate-300 hover:text-white hover:border-b-2 hover:border-slate-700',
      )}
    >
      {item.name}
    </a>
  );
}
