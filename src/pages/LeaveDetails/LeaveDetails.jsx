import React, { useState } from 'react';
import { BasicInfo } from '../../components/LeaveDetailsComponent/BasicInfo';
import { ApplicationDetails } from '../../components/LeaveDetailsComponent/ApplicationDetails';


const LeaveMilestone = () => {
  return (
    <div>
      <h2>Leave Milestone</h2>
      {/* Your LeaveMilestone code here */}
    </div>
  );
};

const LeaveDetails = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 ">
      <div className=" shadow-lg rounded-lg w-[60vw] p-6 bg-blue-100 ">
        <div className="text-center py-3">
          <h1 className="font-semibold text-xl">Republic of the Philippines</h1>
          <p className="text-md">Department of Education</p>
          <span className="text-md">(Location)</span>
        </div>

        <div className="py-5 flex justify-center">
          <LeaveMilestone />
        </div>

        <div className="grid grid-cols-2">
          <button
            className={`p-2 rounded-t-xl font-semibold text-lg ${
              activeTab === 1 ? "bg-white" : "bg-onboard-gray text-darksagegreen border border-1 shadow-sm"
            }`}
            onClick={() => handleTabClick(1)}
          >
            Basic Information of Application
          </button>

          <button
            className={`p-2 rounded-t-xl font-semibold text-lg ${
              activeTab === 2 ? "bg-white" : "bg-onboard-gray text-darksagegreen border border-1 shadow-sm"
            }`}
            onClick={() => handleTabClick(2)}
          >
            Application Action Details
          </button>
        </div>

        {activeTab === 1 && <BasicInfo />}
        {activeTab === 2 && <ApplicationDetails />}
      </div>
    </div>
  );
};

export default LeaveDetails;
