import clsx from 'clsx';
import { ReactNode } from 'react';
import style from './Button.module.scss';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export default function Button({
  children,
  onClick,
  href,
  className,
}: ButtonProps) {
  const buttonClass = clsx(style.button, className);
  return href ? (
    <a className={buttonClass} onClick={onClick} href={href}>
      {children}
    </a>
  ) : (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
}
