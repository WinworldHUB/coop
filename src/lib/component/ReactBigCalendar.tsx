import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
// import events from "./events";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

export default function ReactBigCalendar() {
    const eventdata =  [
        {
          id: 0,
          title: "All Day Event very long title",
          start: moment("2024-05-05T10:00:00").toDate(),
          end: moment("2024-05-05T11:00:00").toDate(),
        },
        {
          id: 1,
          title: "Family",
          start: new Date(2024, 5, 7),
          end: new Date(2024, 5, 10)
        }
      ];
      
//   const [eventsData, setEventsData] = useState(events);

//   const handleSelect = ({ start, end }) => {
//     console.log(start);
//     console.log(end);
//     const title = window.prompt("New Event name");
//     if (title)
//       setEventsData([
//         ...eventsData,
//         {
//           start,
//           end,
//           title
//         }
//       ]);
//   };
  return (
    <div className="App">
      <Calendar
        views={["day", "agenda", "week", "month"]}
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={eventdata}
        style={{ height: "80vh" }}
        onSelectEvent={(event) => alert(event.title)}
        // onSelectSlot={handleSelect}
      />
    </div>
  );
}
