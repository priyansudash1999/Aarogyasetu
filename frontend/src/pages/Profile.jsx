import React, { useState } from "react";
import { assets } from "../assets/assets";

const Profile = () => {
  const [data, setData] = useState({
    name: "Jack Sparrow",
    image: assets.profile_pic,
    email: "jacksparrow01@gmail.com",
    phone: "+1 987 654 3210",
    address: {
      line1: "65th Cross, Richmond",
      line2: "Circle, Church Road, London",
    },
    gender: "Male",
    dob: "1996-10-11",
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="max-w-lg flex flex-col gap-4 text-sm">
      <img className="w-36 rounded" src={data.image} alt="" />
      {isEdit ? (
        <input
          className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
          type="text"
          value={data.name}
          onChange={(e) =>
            setData((prev) => ({
              ...prev,
              name: e.target.value,
            }))
          }
        />
      ) : (
        <p className="font-medium text-3xl mt-4 text-neutral-800">
          {data.name}
        </p>
      )}
      <hr className="bg-zinc-400 h-px border-none" />
      <div>
        <p className="text-neutral-800 underline mt-3 text-xl">
          Contact Information
        </p>
        <div className="grid grid-cols[1fr_3fr]">
          <p>Email: {data.email}</p>
          <div className="flex gap-2 mt-1">
            <p>Phone:</p>
            {isEdit ? (
              <input
                className="bg-gray-50"
                type="text"
                value={data.phone}
                onChange={(e) =>
                  setData((prev) => ({
                    ...prev,
                    phone: e.target.value,
                  }))
                }
              />
            ) : (
              <p>{data.phone}</p>
            )}
          </div>
          <div className="flex gap-3 mt-1">
            <p>Address: </p>
            {isEdit ? (
              <p>
                <input
                  className="bg-gray-50"
                  type="text"
                  value={data.address.line1}
                  onChange={(e) =>
                    setData((prev) => ({
                      ...prev,
                      address: {
                        ...prev.address,
                        line1: e.target.value,
                      },
                    }))
                  }
                />
                <br />
                <input
                  className="bg-gray-50"
                  type="text"
                  value={data.address.line2}
                  onChange={(e) =>
                    setData((prev) => ({
                      ...prev,
                      address: {
                        ...prev.address,
                        line2: e.target.value,
                      },
                    }))
                  }
                />
              </p>
            ) : (
              <p>
                {data.address.line1}
                <br />
                {data.address.line2}
              </p>
            )}
          </div>
        </div>
      </div>

      <div>
        <p className="text-neutral-800 underline mt-3 text-lg">
          Basic Information
        </p>
        <div className="grid grid-cols[1fr_3fr] gap-1">
          <div className="flex gap-2">
            <p>Gender: </p>
            {isEdit ? (
              <select
                value={data.gender}
                onChange={(e) =>
                  setData((prev) => ({
                    ...prev,
                    gender: e.target.value,
                  }))
                }
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p>{data.gender}</p>
            )}
          </div>
          <div className="flex gap-2">
            <p>Birthday:</p>
            {isEdit ? (
              <input
                className="bg-gray-50"
                type="date"
                value={data.dob}
                onChange={(e) =>
                  setData((prev) => ({
                    ...prev,
                    dob: e.target.value,
                  }))
                }
              />
            ) : (
              <p>{data.dob}</p>
            )}
          </div>
        </div>
      </div>
      <div>
        {isEdit ? (
          <button
            className="bg-gray-500 px-2 py-1 rounded-2xl text-white"
            onClick={() => setIsEdit(false)}
          >
            Save Info
          </button>
        ) : (
          <button
            className="bg-cyan-400 text-white px-2 py-1 rounded-2xl"
            onClick={() => setIsEdit(true)}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
