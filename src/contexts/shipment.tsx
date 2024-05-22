import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { shipmentTrackingService } from '@/services/shipments/track';
import type { ShipmentTrackingData } from '@/models';

interface IShipmentContext {
  shipment: ShipmentTrackingData | null;
  isLoading: boolean;
}

const ShipmentContext = createContext<IShipmentContext | null>(null);

interface ShipmentProviderProps {
  children: ReactNode;
  trackingNumber: number;
}

export function ShipmentProvider({
  children,
  trackingNumber,
}: ShipmentProviderProps) {
  const [isLoading, setLoading] = useState(false);
  const [shipment, setShipment] = useState<ShipmentTrackingData | null>(null);

  useEffect(() => {
    setLoading(true);
    shipmentTrackingService
      .get(trackingNumber)
      .then((shipmentData) => {
        setShipment(shipmentData);
      })
      .catch(() => {
        setShipment(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [trackingNumber]);

  return (
    <ShipmentContext.Provider
      value={{ shipment, isLoading }}
    >
      {children}
    </ShipmentContext.Provider>
  );
}

export function useShipment() {
  const context = useContext(ShipmentContext);

  if (!context) {
    throw new Error('Shipment context used outside provider');
  }

  return context;
}
