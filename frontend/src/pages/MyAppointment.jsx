import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MyAppointment = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div>
      <p className="pb-3 mt-12 font-medium border-b text-zinc-600 border-gray-400">
        My Appointments
      </p>
      <div>
        {/* For now no appointments here after backend i will fix this */}
        {doctors.slice(0, 3).map((doc, ind) => (
          <div
            className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b border-gray-100"
            key={ind}
          >
            <div>
              <img className="w-32 bg-indigo-50" src={doc.image} alt="" />
            </div>
            <div className="flex-1 text-sm text-zinc-600">
              <p className="text-neutral-800 font-semibold">{doc.name}</p>
              <p className="">{doc.speciality}</p>
              <p className="text-zinc-600 font-semibold mt-1">Address:</p>
              <p className="text-xs">{doc.address.line1}</p>
              <p className="text-xs">{doc.address.line2}</p>
              <p className="text-xs mt-1">
                <span className="text-sm text-neutral-800 font-medium">
                  Date & Time:{" "}
                </span>
                22nd Nov 2025 | 11:30 AM
              </p>
            </div>
            <div></div>
            <div className="flex flex-col gap-3 justify-end">
              <button className="border border-gray-100 py-2 px-1 rounded-lg hover:bg-primary hover:text-white cursor-pointer transition-all duration-300">
                Pay Online
              </button>
              <button className="border border-gray-100 py-2 px-1 rounded-lg hover:bg-red-600 hover:text-white cursor-pointer transition-all duration-300">
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointment;
