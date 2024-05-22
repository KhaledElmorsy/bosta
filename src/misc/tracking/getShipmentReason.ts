import type { ShipmentTrackingData } from '@/models';

type ShipmentEvents = ShipmentTrackingData['TransitEvents'];
type Reason = ShipmentEvents[number]['reason'];

export default function getShipmentReason(
  events: ShipmentEvents
): Reason | null {
  let reason = null;
  events.forEach((event) => {
    if (event.reason) {
      reason = event.reason;
    }
  });
  return reason;
}
