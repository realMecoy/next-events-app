import { useRouter } from "next/router";

import { Fragment } from "react";
import { getEventById } from "../dummy-data";
import EventContent from "../../components/events/event-detail/event-content";
import EventLogistics from "../../components/events/event-detail/event-logistics";
import EventSummary from "../../components/events/event-detail/event-summary";
import ErrorAlert from "../../components/events/ui/error-alert";

export default function EventsDetailsPage() {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);
  getEventById(eventId);

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}
