import EventSummary from "@/components/event-summary";

export default async function SocialsPage() {
  return (
    <EventSummary
      calendarId={process.env.SOCIALS_CALENDAR_ID}
      upcomingEventsLabel="Upcoming Socials"
      pastEventsLabel="Past Socials"
    />
  );
}
