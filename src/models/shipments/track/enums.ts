import { z } from 'zod';

export const deliveryStateSchema = z.enum([
  'IN_TRANSIT',
  'DELIVERED',
  'TICKET_CREATED',
  'OUT_FOR_DELIVERY',
  'PACKAGE_RECEIVED',
  'NOT_YET_SHIPPED',
  'WAITING_FOR_CUSTOMER_ACTION',
  'AVAILABLE_FOR_PICKUP',
  'DELIVERY_FAILED',
  'CANCELLED',
]);

export const eventReasonSchema = z.enum([
  'Cancellation - The customer refuses to give the shipment to the star',
  'Uncovered Zone',
]);

export const deliveryHubSchema = z.enum([
  'El-Mansoura Hub',
  'Beni Suef Hub',
  'Cairo Sorting Facility',
  'FM & Reverse Hub'
]);
