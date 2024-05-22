import { useLocale } from '@/contexts/locale';
import clsx from 'clsx';

interface TrackButtonProps {
  className?: string;
}

export default function TrackButton({ className }: TrackButtonProps) {
  const { t } = useLocale();

  return (
    <button className={clsx(className)}>
      {t('nav.track')}
      <span style={{ color: '#e2e2e2' }}> |</span>
    </button>
  );
}
