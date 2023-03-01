export const bookings = [
  {
    name: "Event1",
    eventStartTime: "9:10",
    eventEndTime: "10:00",
    treatment:"Skin Care"
  },
  {
    name: "Event2",
    eventStartTime: "14:00",
    eventEndTime: "14:50",
    treatment:"Botox 30ml"
  }, 
  {
    name: "Event3",
    eventStartTime: "12:00",
    eventEndTime: "13:00",
    treatment:"Body Care"
  }, 
  {
    name: "Event5",
    eventStartTime: "15:00",
    eventEndTime: "18:00",
    treatment:"Treatment"
  },
];

export const convertTimeToDecimal = (time) => {
  return time.replace(":", ".");
};