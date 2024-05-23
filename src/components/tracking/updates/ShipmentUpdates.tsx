import { useShipment } from '@/contexts/shipment';
import { useLocale } from '@/contexts/locale';
import { fillEventHubs, trackingColorMap } from '@/misc/tracking';
import style from './ShipmentUpdates.module.scss';

export default function ShipmentUpdates() {
  const { shipment } = useShipment();
  const { t } = useLocale();

  if (!shipment) {
    return;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>{t('common.branch')}</th>
          <th>{t('common.date')}</th>
          <th>{t('common.time')}</th>
          <th>{t('common.details')}</th>
        </tr>
      </thead>
      <tbody>
        {fillEventHubs(shipment.TransitEvents).map((e) => {
          return (
            <tr  key={e.timestamp.toUTCString()}>
              <td>{e.hub ? t(`tracking.hub.${e.hub}`) : ''}</td>
              <td>{e.timestamp.toLocaleDateString()}</td>
              <td dir="ltr">
                {e.timestamp
                  .toLocaleTimeString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                  })
                  .toLowerCase()}
              </td>
              <td>
                <p>{t(`tracking.state.${e.state}`)}</p>
                {e.reason && (
                  <p
                    className={style.reason}
                    style={{ color: trackingColorMap[e.state] }}
                  >
                    {t(`tracking.reason.${e.reason}`)}
                  </p>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
