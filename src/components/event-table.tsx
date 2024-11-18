import formatTiming from "@/utils/format-timing";
import { Table, DataList } from "@radix-ui/themes";
import Markdown from "./markdown";
import { Event } from "@/interfaces/calendar";

export default function EventTable({ events }: { events: Event[] }) {
  return (
    <Table.Root>
      <Table.Body>
        {events.map((event: Event) => (
          <Table.Row key={event.id}>
            <Table.Cell>
              <DataList.Root>
                {event.summary && (
                  <DataList.Item>
                    <DataList.Label>Summary</DataList.Label>
                    <DataList.Value>
                      <Markdown source={event.summary} />
                    </DataList.Value>
                  </DataList.Item>
                )}

                {event.start &&
                  event.start.dateTime &&
                  event.end &&
                  event.end.dateTime && (
                    <DataList.Item>
                      <DataList.Label>Timing</DataList.Label>
                      <DataList.Value>
                        {formatTiming(event.start.dateTime, event.end.dateTime)}
                      </DataList.Value>
                    </DataList.Item>
                  )}

                {event.location && (
                  <DataList.Item>
                    <DataList.Label>Location</DataList.Label>
                    <DataList.Value>{event.location}</DataList.Value>
                  </DataList.Item>
                )}

                {event.description && (
                  <DataList.Item>
                    <DataList.Label>Description</DataList.Label>
                    <DataList.Value>{event.description}</DataList.Value>
                  </DataList.Item>
                )}
              </DataList.Root>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
