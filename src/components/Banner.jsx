import { useState } from "react";
import banner from "../assets/banner/banner1.jpg";
import biryani from "../assets/menu-images/biryani.png";

export default function Banner() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [sessionType, setSessionType] = useState("");
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedTime, setSelectedTime] = useState("");

  const handleTodayClick = () => {
    setSelectedDate(new Date());
  };

  const handleTomorrowClick = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setSelectedDate(tomorrow);
  };

  const handleSessionChange = (session) => {
    setSessionType(session);

    if (session === "Lunch") {
      const lunchSlots = [];
      for (let i = 12; i <= 18; i++) {
        lunchSlots.push(`${i}:00`);
      }
      setAvailableSlots(lunchSlots);
      setSelectedTime("12:00");
    } else if (session === "Dinner") {
      const dinnerSlots = [];
      for (let i = 19; i <= 22; i++) {
        dinnerSlots.push(`${i}:00`);
      }
      setAvailableSlots(dinnerSlots);
      setSelectedTime("19:00");
    } else {
      setAvailableSlots([]);
    }
  };

  const handleDateChange = (e) => {
    setSelectedDate(new Date(e.target.value));
  };

  return (
    <div
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        height: "100vh",
        opacity: "95%",
      }}
    >
      <div className="flex justify-between mx-10 items-center pt-10">
        <h1
          className="text-yellow-600 font-poppins font-extrabold text-6xl"
          style={{ width: "400px" }}
        >
          Discover bold flavours and more!
        </h1>
        <div
          className="border p-6 bg-white max-w-sm rounded-3xl "
          style={{ height: "auto" }}
        >
          <h2 className="text-black font-poppins font-extrabold text-lg">
            Let us serve you better
          </h2>
          <p className="text-gray-600 mb-6 font-noto">
            Don’t wait in a line to enjoy your meal. Reserve a table in advance
            with us.
          </p>
          <div className="flex flex-col mb-6 font-poppins">
            <label htmlFor="" >Location</label>
            <select name="" id="location" className="border border-red-500 font-poppins">
              <option value="">Choose location</option>
              <option value="New Colony">New Colony</option>
              <option value="Saipriya Nagar">Saipriya Nagar</option>
              <option value="Ring Road">Ring Road</option>
              <option value="Reliance food court">Reliance food court</option>
              <option value="Kasturi Nagar">Kasturi Nagar</option>
            </select>
          </div>
          <div className="mt-5 mb-6 font-poppins ">
            <label htmlFor="Date">Date</label>
            <div className="flex gap-2">
              <button
                className="border border-red-400 bg-red-100 hover:bg-red-300 hover:duration-300 px-2  rounded-lg"
                onClick={handleTodayClick}
              >
                Today
              </button>
              <button
                className="border border-red-400 bg-red-100 hover:bg-red-300 hover:duration-300 px-2  rounded-lg"
                onClick={handleTomorrowClick}
              >
                Tomorrow
              </button>
              <input
                className="border border-red-500 rounded px-2"
                type="date"
                value={selectedDate.toISOString().slice(0, 10)}
                onChange={handleDateChange}
              />
            </div>
          </div>
          <div className="font-poppins">
            <label htmlFor="Session">Session</label>
            <div className="flex gap-6">
              <button
                className="border border-red-400 bg-red-100 hover:bg-red-300 hover:duration-300 px-2 rounded-lg"
                onClick={() => handleSessionChange("Lunch")}
              >
                Lunch
              </button>
              <button
                className="border border-red-400 bg-red-100 hover:bg-red-300 hover:duration-300 px-2 rounded-lg"
                onClick={() => handleSessionChange("Dinner")}
              >
                Dinner
              </button>
              <select
                className="border border-red-500 rounded"
                name=""
                id="time"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              >
                <option value=""></option>
                {availableSlots.map((slot, index) => (
                  <option key={index} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button className="border font-poppins bg-red-600 hover:bg-red-800 hover:duration-300 px-2 py-2 mt-4 rounded-lg w-full text-white">
            Book a table!
          </button>
          <div className="flex justify-center mt-2">
            <img src={biryani} alt="" width={170} />
          </div>
        </div>
      </div>
    </div>
  );
}
