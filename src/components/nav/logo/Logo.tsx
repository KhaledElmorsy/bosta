import { useLocale } from '@/contexts/locale';
import BostaAr from '@/assets/logo/BostaAr.svg';
import BostaEn from '@/assets/logo/BostaEn.svg';

export default function Logo() {
  const { locale } = useLocale();
  return locale === 'en-US' ? <BostaEn /> : <BostaAr />;
}
