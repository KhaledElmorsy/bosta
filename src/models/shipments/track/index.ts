import { z } from 'zod';
import * as trackingEnums from './enums';
import * as commonEnums from '@/models/enums';

export const getTrackShipmentSchema = z.object({
  provider: z.string(),
  CurrentStatus: z.object({
    state: trackingEnums.deliveryStateSchema,
    timestamp: z.coerce.date(),
  }),
  PromisedDate: z.coerce.date(),
  TrackingNumber: z.coerce.number(),
  TrackingURL: z.string(),
  SupportPhoneNumbers: z.coerce.number().array(),
  TransitEvents: z.array(
    z.object({
      state: trackingEnums.deliveryStateSchema,
      timestamp: z.coerce.date(),
      hub: trackingEnums.deliveryHubSchema.optional(),
      reason: trackingEnums.eventReasonSchema.optional(),
    })
  ),
  CreateDate: z.coerce.date(),
  isEditableShipment: z.boolean(),
  nextWorkingDay: z
    .array(
      z.object({
        dayDate: z.coerce.date(),
        dayName: commonEnums.dayNameSchema,
      })
    )
    .optional(),
});

export type ShipmentTrackingData = z.infer<typeof getTrackShipmentSchema>;
