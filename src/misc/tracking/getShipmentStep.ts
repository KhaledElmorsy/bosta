import type { ShipmentTrackingData } from "@/models";

type ShipmentState = ShipmentTrackingData['CurrentStatus']['state'];
type ShipmentEvents = ShipmentTrackingData['TransitEvents'];

const stepMap = {
  TICKET_CREATED: 1,
  PACKAGE_RECEIVED: 2,
  OUT_FOR_DELIVERY: 3,
  DELIVERED: 5,
} satisfies Partial<Record<ShipmentState, number>>

export default function getShipmentStep(events: ShipmentEvents) {
  let maxStep = 0;
  events.forEach(event => {
    const eventStep = stepMap?.[event.state as keyof typeof stepMap] ?? 0;
    if (eventStep > maxStep) {
      maxStep = eventStep
    }
  })
  return maxStep;
}
