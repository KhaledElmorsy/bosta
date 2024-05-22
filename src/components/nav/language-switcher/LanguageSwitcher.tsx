import { LocaleName, useLocale } from '@/contexts/locale';
import style from './LanguageSwitcher.module.scss';
import clsx from 'clsx';

interface LanguageSwitcherProps {
  className?: string;
  long?: boolean;
  onToggle?: (locale: LocaleName) => void;
}

export default function LanguageSwitcher({
  className,
  long = false,
  onToggle,
}: LanguageSwitcherProps) {
  const { locale, setLocale } = useLocale();

  const alternateLocale = locale === 'ar-EG' ? 'en-US' : 'ar-EG';
  const english = long ? 'English' : 'ENG';

  return (
    <button
      className={clsx(style.switcher, className)}
      lang={alternateLocale}
      onClick={() => {
        setLocale(alternateLocale);
        onToggle && onToggle(alternateLocale);
      }}
    >
      {locale === 'en-US' ? 'العربية' : english}
    </button>
  );
}
