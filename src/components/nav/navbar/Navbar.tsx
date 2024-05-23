import { useEffect, useState } from 'react';
import { useLocale } from '@/contexts/locale';
import { useIsMobile } from '@/hooks';

import style from './Navbar.module.scss';
import clsx from 'clsx';

import Hamburger from 'hamburger-react';
import Logo from '../logo/Logo';
import LanguageSwitcher from '../language-switcher/LanguageSwitcher';
import TrackButton from '../track-button/TrackButton';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const isMobile = useIsMobile();
  const { t } = useLocale();

  useEffect(() => {
    setShowMenu(false);
  }, [isMobile]);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showMenu])

  const links = {
    home: { href: '', title: t('nav.home') },
    prices: { href: '', title: t('nav.prices') },
    sales: { href: '', title: t('nav.sales') },
    login: { href: '', title: t('nav.login') },
  };

  return (
    <header className={style.header}>
      <nav className={style.navBar}>
        <Logo />
        {isMobile ? (
          <>
            <div className={style.mobileContainer}>
              <TrackButton className={style.navLink} />
              <Hamburger
                color="#252d48"
                toggled={showMenu}
                onToggle={() => setShowMenu((p) => !p)}
              />
            </div>
            <div className={clsx(style.sideMenu, showMenu && style.open)}>
              {[links.home, links.prices, links.sales, links.login].map((l) => (
                <a key={l.title} className={style.navLink} href={l.href}>
                  {l.title}
                </a>
              ))}
              <LanguageSwitcher long onToggle={() => setShowMenu(false)} />
            </div>
          </>
        ) : (
          <>
            <div className={clsx(style.linkContainer, style.horizontal)}>
              {[links.home, links.prices, links.sales].map((l) => (
                <a key={l.title} className={style.navLink} href={l.href}>
                  {l.title}
                </a>
              ))}
            </div>
            <div className={clsx(style.linkContainer, style.horizontal)}>
              <TrackButton className={style.navLink} />
              <a className={style.navLink} href={links.login.href}>
                {links.login.title}
              </a>
              <LanguageSwitcher />
            </div>
          </>
        )}
      </nav>
    </header>
  );
}
