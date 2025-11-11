import { Link } from 'react-router-dom';
import clsx from 'clsx';

interface CTAButtonsProps {
  primary?: { label: string; to: string };
  secondary?: { label: string; to: string };
  center?: boolean;
}

export const CTAButtons = ({ primary, secondary, center = true }: CTAButtonsProps) => {
  return (
    <div
      className={clsx('flex flex-col sm:flex-row gap-4', center && 'justify-center items-center')}
    >
      {primary && (
        <Link
          to={primary.to}
          className="inline-block px-8 py-3 bg-neon text-white font-body font-semibold rounded hover:bg-neon-dark transition-all duration-300 shadow-neon hover:shadow-neon-lg text-center"
        >
          {primary.label}
        </Link>
      )}
      {secondary && (
        <Link
          to={secondary.to}
          className="inline-block px-8 py-3 bg-black border-2 border-neon text-neon font-body font-semibold rounded hover:bg-neon hover:text-white transition-all duration-300 text-center"
        >
          {secondary.label}
        </Link>
      )}
    </div>
  );
};
