import React from 'react';

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'cobalt' | 'vermilion' | 'secondary' | 'outline' | 'yellow' | 'steve-split' | 'disabled';
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  needsUserInput?: boolean;
  className?: string;
  icon?: React.ReactNode;
  circleIcon?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  ariaLabel?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  variant = 'primary',
  href,
  onClick,
  disabled = false,
  needsUserInput = false,
  className = '',
  icon,
  circleIcon,
  size = 'md',
  ariaLabel,
}) => {
  const isActuallyDisabled = disabled || needsUserInput;

  const sizeClasses = {
    sm: 'pl-3.5 pr-1.5 py-1 text-xs',
    md: 'pl-5 pr-2 py-1.5 text-sm',
    lg: 'pl-6 pr-2.5 py-2 text-base',
  };

  const circleSizes = {
    sm: 'w-6 h-6 text-xs',
    md: 'w-8 h-8 text-sm',
    lg: 'w-10 h-10 text-base',
  };

  const baseClasses =
    'inline-flex items-center justify-between gap-3 font-bold tracking-tight transition-all duration-150 select-none whitespace-nowrap rounded-full active:scale-95 cursor-pointer shadow-sm border border-[#171717]';

  const variantClasses = {
    primary:
      'bg-[#31543A] text-white hover:bg-[#26432E] focus-visible:outline-[#31543A]',
    'steve-split':
      'bg-[#31543A] text-white hover:bg-[#26432E] focus-visible:outline-[#31543A]',
    yellow:
      'bg-[#F9B51B] dark:bg-[#d1fe17] text-[#171717] hover:bg-[#e0a012] dark:hover:bg-[#bce610] focus-visible:outline-[#F9B51B] dark:focus-visible:outline-[#d1fe17]',
    cobalt:
      'bg-[#31543A] text-white hover:bg-[#26432E] focus-visible:outline-[#31543A]',
    vermilion:
      'bg-[#F9B51B] dark:bg-[#d1fe17] text-[#171717] hover:bg-[#e0a012] dark:hover:bg-[#bce610] focus-visible:outline-[#F9B51B] dark:focus-visible:outline-[#d1fe17]',
    secondary:
      'bg-white text-[#171717] dark:bg-[#1E1E1E] dark:text-white hover:bg-[#F5F5F5] dark:hover:bg-[#2A2A2A] focus-visible:outline-[#31543A]',
    outline:
      'bg-transparent text-[#171717] dark:text-white border-2 border-[#171717] dark:border-white hover:bg-[#171717] hover:text-white dark:hover:bg-white dark:hover:text-[#171717]',
    disabled:
      'bg-[#E9E9E9] dark:bg-[#2A2A2A] text-[#999999] cursor-not-allowed opacity-75 border border-[#CCCCCC] shadow-none active:scale-100',
  };

  const computedVariant = isActuallyDisabled ? 'disabled' : variant;

  const defaultCircle = (
    <span
      className={`rounded-full flex items-center justify-center shrink-0 font-bold transition-transform group-hover:translate-x-0.5 ${circleSizes[size]} ${
        computedVariant === 'yellow'
          ? 'bg-[#31543A] text-white'
          : 'bg-[#F9B51B] dark:bg-[#d1fe17] text-[#171717]'
      }`}
      aria-hidden="true"
    >
      {circleIcon || (
        <svg
          className="w-3.5 h-3.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      )}
    </span>
  );

  const content = (
    <>
      <span className="flex items-center gap-2">
        {icon && <span className="shrink-0" aria-hidden="true">{icon}</span>}
        <span>{children}</span>
      </span>
      {needsUserInput ? (
        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#171717] text-white shrink-0">
          NEEDS INPUT
        </span>
      ) : (
        defaultCircle
      )}
    </>
  );

  if (href && !isActuallyDisabled) {
    return (
      <a
        href={href}
        className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[computedVariant]} ${className}`}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={isActuallyDisabled ? undefined : onClick}
      disabled={isActuallyDisabled}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[computedVariant]} ${className}`}
      aria-label={ariaLabel}
      aria-disabled={isActuallyDisabled}
    >
      {content}
    </button>
  );
};
