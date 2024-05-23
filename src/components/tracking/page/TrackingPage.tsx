import { useParams } from 'react-router-dom';
import { ShipmentProvider } from '@/contexts/shipment';
import TrackingDetails from '../details/TrackingDetails';
import { useLocale } from '@/contexts/locale';
import ShipmentUpdates from '../updates/ShipmentUpdates';
import style from './TrackingPage.module.scss';
import Button from '@/components/common/button/Button';
import supportImage from '@/assets/images/tracking/support.jpg';

export default function TrackingPage() {
  const { t } = useLocale();
  const trackingNumber = Number(useParams().trackingNumber);

  return (
    <ShipmentProvider trackingNumber={trackingNumber}>
      <div className={style.container}>
        <TrackingDetails />
        <div className={style.bottomContainer}>
          <div className={style.shipmentUpdates}>
            <h3>{t('tracking.page.shipmentDetails')}</h3>
            <ShipmentUpdates />
          </div>
          <div className={style.secondaryContainer}>
            <div className={style.addressContainer}>
              <h3>{t('tracking.page.delvieryAddress')}</h3>
              <div className={style.address}>
                <p>{t('tracking.page.sampleAddress')}</p>
              </div>
            </div>
            <div className={style.supportContainer}>
              <img src={supportImage}/>
              <div className={style.info}>
                <p className={style.question}>{t('tracking.page.troubleshootQuestion')}</p>
                <Button>{t('tracking.page.troubleshootButton')}</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ShipmentProvider>
  );
}
