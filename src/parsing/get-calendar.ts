import { CalendarSchema, Event } from "@/interfaces/calendar";
import { compareAsc, isBefore } from "date-fns";

const BASE_URL = "https://www.googleapis.com/calendar/v3/calendars" as const;

export default async function getCalendar(
  calendarId: string,
  apiKey: string
): Promise<{
  past: Event[];
  future: Event[];
} | null> {
  const url = `${BASE_URL}/${calendarId}/events?key=${apiKey}`;

  try {
    const res = await fetch(url);
    const json = await res.json();

    const calendar = await CalendarSchema.parseAsync(json);

    if (!calendar.items) return null;

    const past: Event[] = [];
    const future: Event[] = [];

    calendar.items.forEach((event) => {
      if (!event.end || !event.end.dateTime) return;

      if (isBefore(event.end.dateTime, new Date())) {
        past.push(event);
      } else {
        future.push(event);
      }
    });

    past.sort((a: Event, b: Event) =>
      compareAsc(a.start!.dateTime!, b.start!.dateTime!)
    );

    future.sort((a: Event, b: Event) =>
      compareAsc(a.start!.dateTime!, b.start!.dateTime!)
    );

    return { past, future };
  } catch (error) {
    console.error(error);

    return null;
  }
}
