import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { LocaleKey, LocaleTranslations, enUS, arEG } from '@/i18n/';

export type LocaleName = 'en-US' | 'ar-EG';

type LocaleData = {
  translations: LocaleTranslations;
  rtl: boolean;
};

const localeMap: Record<LocaleName, LocaleData> = {
  'en-US': { translations: enUS, rtl: false },
  'ar-EG': { translations: arEG, rtl: true },
};

interface ILocaleContext {
  locale: LocaleName;
  rtl: boolean;
  setLocale: (locale: LocaleName) => void;
  t: (key: LocaleKey) => string;
}

const LocaleContext = createContext<ILocaleContext | null>(null);

const LOCALE_LOCAL_STORAGE_KEY = 'locale';

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, _setLocale] = useState<LocaleName>(() => {
    const storedLocale = localStorage.getItem(
      LOCALE_LOCAL_STORAGE_KEY
    ) as LocaleName | null;

    if (storedLocale) {
      return storedLocale;
    }

    const defaultLocale: LocaleName = 'en-US';
    localStorage.setItem(LOCALE_LOCAL_STORAGE_KEY, defaultLocale);
    return defaultLocale;
  });

  useEffect(() => {
    document.documentElement.lang = locale;

    if (localeMap[locale].rtl) {
      document.documentElement.setAttribute('dir', 'rtl');
    } else {
      document.documentElement.removeAttribute('dir');
    }
  }, [locale]);

  function setLocale(locale: LocaleName) {
    localStorage.setItem(LOCALE_LOCAL_STORAGE_KEY, locale);
    _setLocale(locale);
  }

  /**
   * Get the translation for the specific key path
   */
  function t(key: LocaleKey) {
    const path = key.split('.');
    const translation = path.reduce(
      // @ts-expect-error Would need another complex type to rebuild path array into nested keys
      (acc, key) => acc[key],
      localeMap[locale].translations
    );
    return translation as unknown as string;
  }

  return (
    <LocaleContext.Provider
      value={{ t, locale, setLocale, rtl: localeMap[locale].rtl }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);

  if (context === null) {
    throw new Error('Locale context used outside provider');
  }

  return context;
}
