import { useEffect, useState } from "react";
import datesData from "../../dates.json";

interface Event {
  date: string;
  topic: string;
  speaker: string;
}

const Countdown = () => {
  const [events, setEvents] = useState<Event[]>(datesData);
  const [targetEvent, setTargetEvent] = useState<Event | null>(null);
  const [targetDate, setTargetDate] = useState<Date | null>(null);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const now = new Date();

    const nextEvent = events.find(event => {
      const target = new Date(event.date);
      target.setHours(20, 0, 0, 0); //setting time to 8pm
      return target > now;
    });

    if (nextEvent) {
      const target = new Date(nextEvent.date);
      target.setHours(20, 0, 0, 0); // ends at 8pm
      setTargetEvent(nextEvent);
      setTargetDate(target);
    }
  }, [events]);

  useEffect(() => {
    if (!targetDate) return;

    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        const remainingEvents = events.filter(event => {
          const d = new Date(event.date);
          d.setHours(20, 0, 0, 0);
          return d > now;
        });

        setEvents(remainingEvents);
        setTargetEvent(remainingEvents.length > 0 ? remainingEvents[0] : null);
        setTargetDate(remainingEvents.length > 0 ? new Date(remainingEvents[0].date) : null);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, [targetDate, events]);

  if (!targetDate || !targetEvent) {
    return <div className="text-center text-2xl font-semibold text-gray-700">No upcoming events</div>;
  }

  return (
    <div className="max-w-4xl mx-auto text-center space-y-6 p-6 bg-gray-100 shadow-lg rounded-xl">
      {/* Event Info */}
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl md:text-3xl font-bold text-green-700">{targetEvent.topic}</h2>
        <p className="text-lg text-gray-600 font-semibold">Speaker: <span className="text-gray-800">{targetEvent.speaker}</span></p>
        <p className="text-gray-500 text-sm">Event Date: {new Date(targetEvent.date).toDateString()} at 8 PM</p>
      </div>

      {/* Countdown Timer */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {Object.entries(timeLeft).map(([label, value]) => (
          <div key={label} className="bg-white p-8 rounded-xl shadow-md transform hover:scale-105 transition duration-300 border-2 border-green-300">
            <div className="text-5xl font-bold text-green-700">{value}</div>
            <div className="text-sm text-gray-600 font-semibold">{label.charAt(0).toUpperCase() + label.slice(1)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;