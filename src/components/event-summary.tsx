import getCalendar from "@/parsing/get-calendar";
import { Box, Container, Heading, Section } from "@radix-ui/themes";
import EventTable from "./event-table";

export default async function EventSummary({
  calendarId,
  upcomingEventsLabel: upcomingLabel,
  pastEventsLabel: pastLabel,
}: {
  calendarId?: string;
  upcomingEventsLabel: string;
  pastEventsLabel: string;
}) {
  if (!calendarId) return null;

  const res = await getCalendar(calendarId, process.env.GOOGLE_CLOUD_API_KEY);

  if (!res) return null;

  const { past, future } = res;

  return (
    <>
      {future.length > 0 && (
        <Section>
          <Container size="2">
            <Box px="3" pb="4">
              <Heading size="4" weight="medium">
                {upcomingLabel}
              </Heading>
            </Box>

            <EventTable events={future} />
          </Container>
        </Section>
      )}

      {past.length > 0 && (
        <Section>
          <Container size="2">
            <Box px="3" pb="4">
              <Heading size="4" weight="medium">
                {pastLabel}
              </Heading>
            </Box>

            <EventTable events={past} />
          </Container>
        </Section>
      )}
    </>
  );
}
