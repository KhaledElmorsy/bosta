import { Service } from '@/services/util';
import { getTrackShipmentSchema } from '@/models';

class ShipmentTrackingService extends Service {
  constructor() {
    super('/shipments/track');
  }

  get(trackingNumber: number) {
    return this._get(`${this.path}/${trackingNumber}`, getTrackShipmentSchema);
  }
}

export const shipmentTrackingService = new ShipmentTrackingService();
