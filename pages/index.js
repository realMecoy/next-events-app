import { getFeaturedEvents } from "./dummy-data";
import EventList from "../components/events/event-list";
import Footer from "../components/events/layout/footer";

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
      <Footer />
    </div>
  );
}
