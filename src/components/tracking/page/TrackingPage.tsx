import { useParams } from 'react-router-dom';
import { ShipmentProvider } from '@/contexts/shipment';
import TrackingDetails from '../details/TrackingDetails';
import style from './TrackingPage.module.scss';

export default function TrackingPage() {
  const trackingNumber = Number(useParams().trackingNumber);

  return (
    <ShipmentProvider trackingNumber={trackingNumber}>
      <div className={style.container}>
        <TrackingDetails />
      </div>
    </ShipmentProvider>
  );
}
