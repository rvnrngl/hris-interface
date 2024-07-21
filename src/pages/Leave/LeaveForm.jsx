import React, { useState } from "react";
import { useForm } from "react-hook-form";

const leaveOptions = [
  { id: "vacation_leave", label: "Vacation Leave" },
  { id: "mandatory_forced_leave", label: "Mandatory/Forced Leave" },
  { id: "sick_leave", label: "Sick Leave" },
  { id: "maternity_leave", label: "Maternity Leave" },
  { id: "paternity_leave", label: "Paternity Leave" },
  { id: "special_privilege_leave", label: "Special Privilege Leave" },
  { id: "solo_parent_leave", label: "Solo Parent Leave" },
  { id: "study_leave", label: "Study Leave" },
  { id: "10_day_vawc_leave", label: "10-Day VAWC Leave" },
  { id: "rehabilitation_privilege", label: "Rehabilitation Privilege" },
  {
    id: "special_leave_benefits_for_women",
    label: "Special Leave Benefits for Women",
  },
  {
    id: "special_emergency_calamity_leave",
    label: "Special Emergency (Calamity) Leave",
  },
  { id: "adoption_leave", label: "Adoption Leave" },
  { id: "others", label: "Others" },
];

export const LeaveForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name.startsWith("leaveCredits") || name.startsWith("approval")) {
      const keys = name.split(".");
      setFormData((prevState) => ({
        ...prevState,
        [keys[0]]: {
          ...prevState[keys[0]],
          [keys[1]]: value,
        },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div className="h-full w-full">
      <form
        className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="mb-6 text-2xl font-bold">Application for Leave</h1>

        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="group relative z-0 w-full">
            <input
              type="text"
              id="officeDepartment"
              {...register("officeDepartment", { required: true })}
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            />
            <label
              htmlFor="officeDepartment"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600"
            >
              Office/Department
            </label>
          </div>

          <div className="group relative z-0 w-full">
            <input
              type="text"
              id="lastName"
              {...register("lastName", { required: true })}
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            />
            <label
              htmlFor="lastName"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600"
            >
              Last Name
            </label>
          </div>

          <div className="group relative z-0 w-full">
            <input
              type="text"
              id="firstName"
              {...register("firstName", { required: true })}
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            />
            <label
              htmlFor="firstName"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600"
            >
              First Name
            </label>
          </div>

          <div className="group relative z-0 w-full">
            <input
              type="text"
              id="middleName"
              {...register("firstName", { required: false })}
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            />
            <label
              htmlFor="middleName"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600"
            >
              Middle Name
            </label>
          </div>
        </div>

        <div className="group relative z-0 mb-6 w-full">
          <input
            type="date"
            id="dateOfFiling"
            {...register("dateOfFiling", { required: true })}
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
          />
          <label
            htmlFor="dateOfFiling"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600"
          >
            Date of Filing
          </label>
        </div>

        <div className="group relative z-0 mb-6 w-full">
          <input
            type="text"
            id="position"
            {...register("position", { required: false })}
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
          />
          <label
            htmlFor="position"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600"
          >
            Position
          </label>
        </div>

        <div className="group relative z-0 mb-6 w-full">
          <input
            type="text"
            id="salary"
            {...register("salary", { required: false })}
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
          />
          <label
            htmlFor="salary"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600"
          >
            Salary
          </label>
        </div>

        <div className="mb-6">
          <h2 className="mb-4 text-lg font-semibold">
            6. Details of Application
          </h2>
          <h3 className="text-md mb-2 font-medium">
            6.A Type of Leave to be Availed Of:
          </h3>
          {leaveOptions.map((option) => (
            <div key={option.id} className="mb-2 flex items-center">
              <input
                type="checkbox"
                id={`leaveType-${option.id}`}
                {...register(`leaveType-${option.id}`, { required: false })}
                className="mr-2"
              />
              <label
                htmlFor={`leaveType-${option.id}`}
                className="text-sm text-gray-700"
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>

        <div className="group relative z-0 mb-6 w-full">
          <input
            type="text"
            id="detailsOfLeave"
            {...register("detailsOfLeave", { required: false })}
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
          />
          <label
            htmlFor="detailsOfLeave"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600"
          >
            Details of Leave
          </label>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="group relative z-0 mb-6 w-full">
            <input
              type="number"
              id="numberOfWorkingDays"
              {...register("numberOfWorkingDays", { required: false })}
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            />
            <label
              htmlFor="numberOfWorkingDays"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600"
            >
              Number of Working Days
            </label>
          </div>
          <div className="group relative z-0 mb-6 w-full">
            <input
              type="text"
              id="inclusiveDates"
              {...register("inclusiveDates", { required: false })}
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
            />
            <label
              htmlFor="inclusiveDates"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600"
            >
              Inclusive Dates
            </label>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-md mb-2 font-medium">6.D Commutation:</h3>
          <div className="mb-2 flex items-center">
            <input
              type="radio"
              id="commutationNotRequested"
              name="commutation"
              value="Not Requested"
              {...register("inclusiveDates", { required: false })}
              onChange={handleChange}
              className="mr-2"
            />
            <label
              htmlFor="commutationNotRequested"
              className="text-sm text-gray-700"
            >
              Not Requested
            </label>
          </div>
          <div className="mb-2 flex items-center">
            <input
              type="radio"
              id="commutationRequested"
              name="commutation"
              value="Requested"
              onChange={handleChange}
              className="mr-2"
            />
            <label
              htmlFor="commutationRequested"
              className="text-sm text-gray-700"
            >
              Requested
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
