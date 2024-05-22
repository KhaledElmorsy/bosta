import type { ShipmentTrackingData } from "@/models";

type ShipmentState = ShipmentTrackingData['CurrentStatus']['state'];

const colors = {
  success: 'var(--color-success)',
  waiting: 'var(--color-waiting)',
  canceled: 'var(--color-warning)'
}

const trackingColorMap = {
  CANCELLED: colors.canceled,
  AVAILABLE_FOR_PICKUP: colors.waiting,
  DELIVERED: colors.success,
  IN_TRANSIT: colors.waiting,
  PACKAGE_RECEIVED: colors.waiting,
  DELIVERY_FAILED: colors.waiting,
  OUT_FOR_DELIVERY: colors.waiting,
  WAITING_FOR_CUSTOMER_ACTION: colors.waiting,
  TICKET_CREATED: colors.waiting,
  NOT_YET_SHIPPED: colors.waiting
} satisfies Record<ShipmentState, typeof colors[keyof typeof colors]>

export default trackingColorMap;
