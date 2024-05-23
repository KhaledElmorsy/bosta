import { z } from 'zod';
import * as trackingEnums from '@/models/shipments/track/enums';
import type { DotPaths } from '@/util';

export type LocaleTranslations = {
  common: Record<CommonKeys, string>;
  nav: Record<NavKeys, string>;
  tracking: {
    page: Record<TrackingPageKeys, string>;
    hub: Record<HubKeys, string>;
    state: Record<DeliveryStatsKeys, string>;
    reason: Record<EventReasonKeys, string>;
  };
};

type HubKeys = z.infer<(typeof trackingEnums)['deliveryHubSchema']>;
type DeliveryStatsKeys = z.infer<(typeof trackingEnums)['deliveryStateSchema']>;
type EventReasonKeys = z.infer<(typeof trackingEnums)['eventReasonSchema']>;

type CommonKeys = 'branch' | 'date' | 'time' | 'details';
type NavKeys =
  | 'home'
  | 'prices'
  | 'sales'
  | 'track'
  | 'login'
  | 'trackingNumber';
type TrackingPageKeys =
  | 'shipmentNumber'
  | 'lastUpdate'
  | 'provider'
  | 'estimatedDeliveryDate'
  | 'shipmentDetails'
  | 'delvieryAddress'
  | 'troubleshootQuestion'
  | 'troubleshootButton'
  | 'shipmentCanceled'
  | 'shipmentDelivered'
  | 'shipmentNotDelivered'
  | 'sampleAddress'
  | 'shipmentCreated'
  | 'shipmentReceived'
  | 'outForDelivery'
  | 'delivered';

/**
 * Dot path notation to every nested translation in the translation object
 */
export type LocaleKey = DotPaths<LocaleTranslations> extends infer I
  ? I extends object
    ? keyof I
    : never
  : never;
