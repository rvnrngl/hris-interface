import React from 'react'

export const BasicInfo = () => {
 
        return (
          <div className="p-4 rounded-b-xl">
            <div className="flex">
              <label className="text-sm w-1/3 font-semibold px-1">Department</label>
              <label className="text-sm w-2/3 font-semibold px-1">Name</label>
            </div>
      
            <div className="flex">
              <input
                type="text"
                className="bg-inputgray shadow-md focus:outline-none text-gray-500 p-2 mr-2 rounded-xl w-1/3"
                readOnly
                value="Department Name"
              />
              <div className="flex w-2/3 gap-2">
                <input
                  type="text"
                  className="bg-inputgray shadow-md focus:outline-none text-gray-500 p-2 w-1/3 rounded-xl"
                  readOnly
                  value="First Name"
                />
                <input
                  type="text"
                  className="bg-inputgray shadow-md focus:outline-none text-gray-500 p-2 w-1/3 rounded-xl"
                  readOnly
                  value="Middle Name"
                />
                <input
                  type="text"
                  className="bg-inputgray shadow-md focus:outline-none text-gray-500 p-2 w-1/3 rounded-xl"
                  readOnly
                  value="Last Name"
                />
              </div>
            </div>
      
            <div className="flex gap-2 mt-2">
              <label className="text-sm w-1/3 font-semibold px-1">Date of Filing</label>
              <label className="text-sm w-1/3 font-semibold px-1">Position</label>
              <label className="text-sm w-1/3 font-semibold px-1">Salary</label>
            </div>
      
            <div className="flex gap-2">
              <input
                type="text"
                className="bg-inputgray shadow-md focus:outline-none text-gray-500 w-1/3 p-2 rounded-xl"
                readOnly
                value="YYYY-MM-DD"
              />
              <input
                type="text"
                className="bg-inputgray shadow-md focus:outline-none text-gray-500 w-1/3 p-2 rounded-xl"
                readOnly
                value="Position Title"
              />
              <input
                type="text"
                className="bg-inputgray shadow-md focus:outline-none text-gray-500 w-1/3 p-2 rounded-xl"
                readOnly
                value="Salary Amount"
              />
            </div>
      
            <div className="bg-onboard-sagegreen w-full h-[.1rem] my-4"></div>
      
            <div className="">
              <div className="flex text-sm font-semibold px-1 gap-2">
                <label className="w-1/2">6.A Type of Leave to be Availed</label>
                <label className="w-1/2">6.B Leave Details</label>
              </div>
              <input
                type="text"
                className="bg-inputgray shadow-md focus:outline-none text-gray-500 w-1/2 p-2 mr-2 rounded-xl"
                readOnly
                value="Leave Type"
              />
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div>
                  <label className="text-sm font-semibold">6.C Number of Working Days Applied</label>
                  <div className="">
                    <label className="w-full text-sm">Inclusive dates</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        className="bg-inputgray shadow-md focus:outline-none text-gray-500 p-2 w-full rounded-xl"
                        readOnly
                        value="Start Date"
                      />
                      <input
                        type="text"
                        className="bg-inputgray shadow-md focus:outline-none text-gray-500 w-full p-2 rounded-xl"
                        readOnly
                        value="End Date"
                      />
                    </div>
                    <label className="w-full text-sm">Number of Working Days </label>
                    <input
                      type="text"
                      className="bg-inputgray shadow-md focus:outline-none text-gray-500 w-full p-2 rounded-xl"
                      readOnly
                      value="Number of Days"
                    />
                  </div>
                </div>
                <div className="">
                  <label className="text-sm font-semibold w-full">6.D Type of Leave to be Availed</label>
                  <div>
                    <input
                      type="checkbox"
                      id="requestedCheckbox"
                      checked
                      className="cursor-not-allowed pointer-events-none py-2 mr-2"
                      disabled
                    />
                    <label htmlFor="requestedCheckbox" className="cursor-not-allowed pointer-events-none">
                      Requested
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
     
      
}