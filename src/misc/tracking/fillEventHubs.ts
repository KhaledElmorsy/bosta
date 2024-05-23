import type { ShipmentTrackingData } from '@/models';

type ShipmentEvents = ShipmentTrackingData['TransitEvents'];

/**
 * Copies event hubs to following events until the hub changes
 */
export default function fillEventHubs(events: ShipmentEvents): ShipmentEvents {
  let currentHub: ShipmentEvents[number]['hub'] | null = null;
  return events.map((event) => {
    if (event.hub && currentHub !== event.hub) {
      currentHub = event.hub;
    }
    return currentHub
      ? {
          ...event,
          hub: currentHub,
        }
      : event;
  });
}
