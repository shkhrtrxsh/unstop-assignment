import React from 'react';
import dashboard from '../assets/dashboard.svg';
import note_alt from '../assets/note_alt.svg';
import quiz from '../assets/quiz.svg';
import admin_meds from '../assets/admin_meds.svg';

const Sidebar = () => {
  return (
    <div className="p-4">
      <div className="mb-6">
        <div className="flex justify-center items-center mb-2">
          <img src={dashboard} alt="" className="w-6 h-6" />
        </div>
        <p className="text-center font-medium text-sm">Dashboard</p>
      </div>
      <div className="p-3 mb-6 bg-blue-100 border-2 border-blue-300 rounded-xl">
        <div className="flex justify-center items-center mb-2">
          <img src={note_alt} alt="" className="w-6 h-6" />
        </div>
        <p className="text-center text-blue-500 font-medium text-sm">Assessment</p>
      </div>
      <div className='mb-4'>
        <div className="flex justify-center items-center mb-2">
          <img src={quiz} alt="" className="w-6 h-6" />
        </div>
        <p className="text-center font-medium text-sm">My Library</p>
      </div>
      <p className='text-center p-2'>...................</p>
      <div className="flex flex-col items-center"> {/* Use flex-col and items-center */}
        <div className="w-10 bg-red-100 border border-red-500 rounded-full text-orange-700 text-[10px] font-medium flex justify-center items-center">
          Admin
        </div>
        <div className="flex justify-center items-center mb-2 mt-2">
          <img src={admin_meds} alt="" className="w-6 h-6" />
        </div>
        <p className="text-center font-medium text-sm">Round Status</p>
      </div>
    </div>
  );
};

export default Sidebar;




