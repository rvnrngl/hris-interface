import React, { useState } from "react";
import { FaCalendarDay } from "react-icons/fa";
import Calendar from "react-calendar"; // Ensure you have installed react-calendar
import "react-calendar/dist/Calendar.css"; // Import the calendar CSS

export const ApplicationDetails = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false); // Hide the calendar after selecting a date
  };

  const formatDate = (date) => {
    if (!date) return "";
    const options = { month: "long", day: "2-digit", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <>
      <div className="  bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400">
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="w-full font-semibold">
              7.A CERTIFICATION OF LEAVE CREDITS
            </label>

            <div className="w-full flex justify-between">
              <label>As of</label>
              <div className="relative">
                <input
                  type="text"
                  className="px-4 py-1 h-6 border border-1 border-b rounded-md border-gray-400 pr-8"
                  value={selectedDate ? formatDate(selectedDate) : ""}
                  readOnly
                />
                <button
                  onClick={toggleCalendar}
                  className="absolute right-0 top-0 mt-1 mr-1 text-gray-500"
                >
                  <FaCalendarDay />
                </button>
                {showCalendar && (
                  <div className="absolute z-50 bg-white mt-8 p-2 border rounded shadow-lg">
                    <Calendar onChange={handleDateChange} value={selectedDate} />
                  </div>
                )}
              </div>
            </div>

            <div className="table pt-2">
              <table className="table-auto border border-collapse border-black-400 w-full">
                <thead>
                  <tr className="text-sm text-center font-semibold">
                    <th className="border border-black">Leave Type</th>
                    <th className="border border-black">Total Earned</th>
                    <th className="border border-black">
                      Less this application
                    </th>
                    <th className="border border-black">Total</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-center">
                  <tr>
                    <td className="border border-black">Vacation Leave</td>
                    <td className="border border-black">-</td>
                    <td className="border border-black">-</td>
                    <td className="border border-black">-</td>
                  </tr>
                  <tr>
                    <td className="border border-black">Sick Leave</td>
                    <td className="border border-black">-</td>
                    <td className="border border-black">-</td>
                    <td className="border border-black">-</td>
                  </tr>
                  <tr>
                    <td className="border border-black">Privilege Leave</td>
                    <td className="border border-black">-</td>
                    <td className="border border-black">-</td>
                    <td className="border border-black">-</td>
                  </tr>
                  <tr>
                    <td className="border border-black">Force Leave</td>
                    <td className="border border-black">-</td>
                    <td className="border border-black">-</td>
                    <td className="border border-black">-</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex flex-col pt-2">
              <input
                type="text"
                className="bg-inputgray shadow-md focus:outline-none text-gray-500 p-2 mr-2 rounded-xl w-full"
                readOnly
              />
              <label className="w-full text-center">(Authorized Officer)</label>
            </div>
          </div>

          <div className="w-1/2">
            <label className="w-full font-semibold">7.B RECOMMENDATION</label>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="requestedCheckbox"
                checked
                className="cursor-not-allowed pointer-events-none"
                disabled
              />
              <label
                htmlFor="requestedCheckbox"
                className="cursor-not-allowed pointer-events-none text-sm pl-2"
              >
                For approval (uncheck if disapprove)
              </label>
            </div>

            <div>
              <div className="text-sm">For disapproval due to</div>
              <input
                type="text"
                className="bg-inputgray shadow-md focus:outline-none text-gray-500 p-2 mr-2 rounded-xl w-full"
                readOnly
              />
            </div>

            <div className="pt-2">
              <input
                type="text"
                className="bg-inputgray shadow-md focus:outline-none text-gray-500 p-2 mr-2 rounded-xl w-full"
                readOnly
              />
              <label className="flex justify-center items-center">
                (Authorized Officer)
              </label>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="w-1/2">
            <label className="w-full font-semibold">7.C APPROVED FOR:</label>
            <div className="flex pt-2">
              <input
                type="text"
                className="bg-inputgray shadow-md focus:outline-none text-gray-500 p-2 mr-2 rounded-xl w-1/2"
                readOnly
              />
              <label className=" flex justify-center items-center">
                days with pay
              </label>
            </div>

            <div className="flex pt-2">
              <input
                type="text"
                className="bg-inputgray shadow-md focus:outline-none text-gray-500 p-2 mr-2 rounded-xl w-1/2"
                readOnly
              />
              <label className=" flex justify-center items-center">
                days without pay
              </label>
            </div>

            <div className="flex pt-2">
              <input
                type="text"
                className="bg-inputgray shadow-md focus:outline-none text-gray-500 p-2 mr-2 rounded-xl w-1/2"
                readOnly
              />
              <label className=" flex justify-center items-center">
                others (Specify)
              </label>
            </div>
          </div>
          <div className="w-1/2">
            <label className="w-full font-semibold">
              7.D DISAPPROVED DUE TO:
            </label>
            <div className="pt-2">
              <input
                type="text"
                className="bg-inputgray shadow-md focus:outline-none text-gray-500 p-2 mr-2 rounded-xl w-1/2"
                readOnly
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="pt-2">
            <input
              type="text"
              className="bg-inputgray shadow-md focus:outline-none text-gray-500 p-2 mr-2 rounded-xl w-full"
              readOnly
            />
            <label className="flex justify-center items-center">
              (Authorized Officer)
            </label>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="pt-2">
            <input
              type="text"
              className="bg-inputgray shadow-md focus:outline-none text-gray-500 p-2 mr-2 rounded-xl w-full"
              readOnly
            />
            <label className="flex justify-center items-center">Remarks</label>
          </div>
        </div>
      </div>
    </>
  );
};


