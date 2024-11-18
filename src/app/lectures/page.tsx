import EventSummary from "../../components/event-summary";

export default async function LecturesPage() {
  return (
    <EventSummary
      calendarId={process.env.LECTURES_CALENDAR_ID}
      upcomingEventsLabel="Upcoming Lectures"
      pastEventsLabel="Past Lectures"
    />
  );
}
