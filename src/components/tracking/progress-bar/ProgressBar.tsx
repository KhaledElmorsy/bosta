import style from './ProgressBar.module.scss';
import {
  trackingColorMap,
  getShipmentStep,
  getShipmentReason,
} from '@/misc/tracking';
import { useShipment } from '@/contexts/shipment';
import { useLocale } from '@/contexts/locale';
import { useIsMobile } from '@/hooks';
import clsx from 'clsx';

import { FaCheck } from 'react-icons/fa6';
import { FaShippingFast } from 'react-icons/fa';
import { LuPackageCheck } from 'react-icons/lu';
import { LiaHandshakeSolid } from 'react-icons/lia';
import { GoPackageDependencies } from 'react-icons/go';

const flipStyle = { transform: 'scale(-1,1)' };

export default function ProgressBar() {
  const { shipment } = useShipment();
  const { t, rtl } = useLocale();
  const isMobile = useIsMobile();

  if (!shipment) return;

  const trackingColor = trackingColorMap[shipment.CurrentStatus.state];

  const steps = [
    {
      title: t('tracking.page.shipmentCreated'),
      icon: <GoPackageDependencies style={rtl ? {} : flipStyle} />,
    },
    { title: t('tracking.page.shipmentReceived'), icon: <LiaHandshakeSolid /> },
    {
      title: t('tracking.page.outForDelivery'),
      icon: <FaShippingFast style={rtl ? flipStyle : {}} />,
    },
    { title: t('tracking.page.shipmentDelivered'), icon: <LuPackageCheck /> },
  ];

  const currentStep = getShipmentStep(shipment.TransitEvents);
  const numSections = steps.length - 1;
  const meterProgress = `${
    (Math.min(currentStep - 1, numSections) / numSections) * 100
  }%`;
  const meterProgressStyle = isMobile
    ? { height: meterProgress }
    : { width: meterProgress };

  const reason = getShipmentReason(shipment.TransitEvents);

  return (
    <div className={style.container}>
      {steps.map(({ icon, title }, i) => {
        const isComplete = i < currentStep - 1;
        const isCurrent = i === currentStep - 1;
        return (
          <div className={style.step}>
            <div className={style.iconContainer}>
              <div
                className={clsx(
                  style.iconBackground,
                  (!isComplete || isCurrent) && style.big,
                  !isComplete && !isCurrent && style.incomplete
                )}
                style={
                  isComplete || isCurrent
                    ? { backgroundColor: trackingColor }
                    : {}
                }
              >
                {isComplete ? <FaCheck /> : icon}
              </div>
            </div>
            <div className={style.stepText}>
              <p
                style={isComplete || isCurrent ? { fontWeight: 700 } : {}}
                className={style.title}
              >
                {title}
              </p>
              {reason && isCurrent && (
                <p className={style.reason} style={{ color: trackingColor }}>
                  {t(`tracking.reason.${reason}`)}
                </p>
              )}
            </div>
          </div>
        );
      })}
      <div className={style.meterContainer}>
        <div
          className={style.meter}
          style={{ ...meterProgressStyle, backgroundColor: trackingColor }}
        />
      </div>
    </div>
  );
}
