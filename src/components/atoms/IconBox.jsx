import { cn } from '../../utils/cn';

/**
 * Rounded, tinted square that frames a lucide icon.
 * Used across value cards, service cards, AI-workflow cards, etc.
 *
 * @param {React.ComponentType} icon - a lucide-react icon component.
 * @param {'sm'|'md'|'lg'} [size]
 * @param {'cyan'|'violet'} [tone]
 */
const SIZES = {
  sm: { box: 'w-10 h-10 rounded-lg', icon: 'w-5 h-5' },
  md: { box: 'w-12 h-12 rounded-xl', icon: 'w-6 h-6' },
  lg: { box: 'w-12 h-12 rounded-xl', icon: 'w-6 h-6' },
};

const TONES = {
  cyan: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
  violet: 'bg-violet-500/10 border-violet-500/20 text-violet-300',
};

export default function IconBox({ icon: Icon, size = 'sm', tone = 'cyan', className }) {
  const { box, icon } = SIZES[size];
  return (
    <div
      className={cn(
        'flex items-center justify-center border flex-shrink-0',
        box,
        TONES[tone],
        className,
      )}
    >
      <Icon className={icon} />
    </div>
  );
}
