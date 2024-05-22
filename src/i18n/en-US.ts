import { LocaleTranslations } from '@/i18n/schema';

const enUS: LocaleTranslations = {
  common: {
    branch: 'Branch',
    date: 'Date',
    details: 'Details',
    time: 'Time',
  },
  nav: {
    home: 'Home',
    prices: 'Prices',
    sales: 'Contact Sales',
    track: 'Track Shipment',
    login: 'Login',
  },
  tracking: {
    page: {
      delvieryAddress: 'Delivery address',
      estimatedDeliveryDate: 'Shipment delivery date',
      lastUpdate: 'Last update',
      provider: 'Provider',
      sampleAddress: '10 Salah Salem, Al Golf, Nasr City, Cairo',
      shipmentCanceled: 'Shipment Canceled',
      shipmentDetails: 'Shipment Details',
      shipmentNumber: 'Shipment Number',
      troubleshootButton: 'Report an issue',
      troubleshootQuestion: 'Is there a problem with your shipment?!',
      delivered: 'Delivered',
      outForDelivery: 'Out for delivery',
      shipmentCreated: 'Shipment created',
      shipmentDelivered: 'Shipment delivered',
      shipmentNotDelivered: 'Shipment not yet delivered',
      shipmentReceived: 'Shipment received',
    },
    hub: {
      'Beni Suef Hub': 'Beni Suef Hub',
      'Cairo Sorting Facility': 'Cairo Sorting Facility',
      'El-Mansoura Hub': 'El-Mansoura Hub',
    },
    reason: {
      'Uncovered Zone': 'Shipment area not covered',
      'Cancellation - The customer refuses to give the shipment to the star':
        'The customer refuses to give the shipment to the courier',
    },
    state: {
      AVAILABLE_FOR_PICKUP: 'Shipment available for pickup',
      CANCELLED: 'Shipment canceled',
      DELIVERED: 'Shipment delivered',
      DELIVERY_FAILED: 'Shipment delivery failed',
      IN_TRANSIT: 'In transit',
      NOT_YET_SHIPPED: 'Not yet shipped',
      OUT_FOR_DELIVERY: 'Out for delivery',
      PACKAGE_RECEIVED: 'Package received',
      TICKET_CREATED: 'Ticket created',
      WAITING_FOR_CUSTOMER_ACTION: 'Waiting for customer action',
    },
  },
};

export default enUS;
