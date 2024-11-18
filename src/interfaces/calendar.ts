import * as z from "zod";

export const EventSchema = z.object({
  id: z.string().optional(),
  summary: z.string().optional(),
  description: z.string().optional(),
  location: z.string().optional(),
  start: z
    .object({
      dateTime: z.coerce.date().optional(),
      timeZone: z.string().optional(),
    })
    .optional(),
  end: z
    .object({
      dateTime: z.coerce.date().optional(),
      timeZone: z.string().optional(),
    })
    .optional(),
});
export type Event = z.infer<typeof EventSchema>;

export const CalendarSchema = z.object({
  items: z.array(EventSchema).optional(),
});
export type Calendar = z.infer<typeof CalendarSchema>;
