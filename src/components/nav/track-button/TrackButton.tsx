import { useLocale } from '@/contexts/locale';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { IoIosSearch } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { useOnClickOutside } from 'usehooks-ts';
import clsx from 'clsx';
import style from './TrackButton.module.scss';

interface TrackButtonProps {
  className?: string;
}

export default function TrackButton({ className }: TrackButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState('');
  const buttonRef = useRef(null);
  useOnClickOutside(buttonRef, () => {
    setIsOpen(false);
  });
  const { t, rtl } = useLocale();
  const arrow = rtl ? <IoIosArrowBack /> : <IoIosArrowForward />;

  return (
    <button
      ref={buttonRef}
      className={clsx(style.trackButton, className, isOpen && style.open)}
      onClick={(e) => {
        if (e.target !== buttonRef.current) return;
        setIsOpen((p) => !p);
      }}
    >
      {t('nav.track')}
      {isOpen ? arrow : <span style={{ color: '#e2e2e2' }}>&nbsp;&nbsp;|</span>}
      {isOpen && (
        <div className={style.trackingNumberWindow}>
          <p>{t('nav.track')}</p>
          <div className={style.inputContainer}>
            <input
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              placeholder={t('nav.trackingNumber')}
            />
            <Link
              to={`/track/${trackingNumber}`}
              onClick={() => setIsOpen(false)}
            >
              <IoIosSearch />
            </Link>
          </div>
        </div>
      )}
    </button>
  );
}
