import { useShipment } from '@/contexts/shipment';
import { useLocale } from '@/contexts/locale';
import style from './TrackingDetails.module.scss';
import { trackingColorMap } from '@/misc/tracking';

export default function TrackingDetails() {
  const { shipment } = useShipment();
  const { t, locale } = useLocale();

  if (!shipment) return;

  const trackingColor = trackingColorMap[shipment.CurrentStatus.state];

  return (
    <div className={style.container}>
      <div className={style.shipmentInfo}>
        <div className={style.infoBlock}>
          <p className={style.title}>
            {t('tracking.page.shipmentNumber')}{' '}
            <span>{shipment?.TrackingNumber}</span>
          </p>
          <p className={style.data} style={{ color: trackingColor }}>
            {t(`tracking.state.${shipment.CurrentStatus.state}`)}
          </p>
        </div>
        <div className={style.infoBlock}>
          <p className={style.title}>{t('tracking.page.lastUpdate')}</p>
          <p className={style.data}>
            {shipment.CurrentStatus.timestamp.toLocaleString(locale, {
              weekday: 'long',
              month: '2-digit',
              day: '2-digit',
              year: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
              numberingSystem: 'latn',
            })}
          </p>
        </div>
        <div className={style.infoBlock}>
          <p className={style.title}>{t('tracking.page.provider')}</p>
          <p className={style.data}>{shipment.provider}</p>
        </div>
        <div className={style.infoBlock}>
          <p className={style.title}>
            {t('tracking.page.estimatedDeliveryDate')}
          </p>
          <p className={style.data}>
            {shipment.PromisedDate.toLocaleDateString(locale, {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
              numberingSystem: 'latn',
            })}
          </p>
        </div>
      </div>
      <div className={style.progress}></div>
    </div>
  );
}
