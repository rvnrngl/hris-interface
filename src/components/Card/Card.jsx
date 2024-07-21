import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ user }) => {
  const statusClasses = user.status === 'approve'
    ? 'bg-green-100 text-green-800'
    : 'bg-red-100 text-red-800';

  return (
    <div className="max-w-2xl mx-auto my-4 p-6 bg-white shadow-lg rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-white">
            {user.name}
          </h2>
          <span className={`mt-2 px-3 py-1 rounded-full text-sm font-medium ${statusClasses}`}>
            {user.status}
          </span>
        </div>

        <div className="flex flex-col">
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Department:</span> {user.department}
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Leave Type:</span> {user.leaveType}
          </p>
        </div>

        <div className="flex flex-col">
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold">{user.duration}</span> days
          </p>
          <div className="text-right mt-auto">
          <Link
              className="inline-flex items-center font-medium text-blue-600 hover:underline dark:text-blue-400"
              to={`/leave/approval/details`} 
            >
              View details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
