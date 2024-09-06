import React from 'react';

const PopupForm = ({ onClose }) => {

  return (
    <div className="fixed inset-0 p-3 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        <h2 className="text-xl text-black text-center font-bold mb-4">Production Form</h2>
        <form>
          <div className="grid grid-cols-2 gap-2">
          <div className="mb-4">
            <label className="block  text-gray-700 text-sm font-bold mb-2">
              Gatta*
            </label>
            <input
              type="number"
              id="gatta"
              name="Gatta"
              placeholder='1 gatta'
              className="shadow  border-black appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Tray*
            </label>
            <input
              type="number"
              id="tray"
              name="Tray"
              placeholder='7 tray'
              className="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          </div>
          <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" >
              Date
            </label>
            <input
              type="date"
              id="date"
              name="Date"
              className="shadow  border-black appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-center gap-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
