import { cn } from '../../utils/cn';

/**
 * Centered, max-width content wrapper with consistent horizontal padding.
 * Replaces the repeated `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8` pattern.
 *
 * @param {'5xl'|'6xl'} [size] - max width of the container.
 */
const MAX_WIDTH = {
  '5xl': 'max-w-5xl',
  '6xl': 'max-w-6xl',
};

export default function Container({ size = '6xl', className, children }) {
  return (
    <div className={cn(MAX_WIDTH[size], 'mx-auto px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  );
}
