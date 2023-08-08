import React from 'react';
import vector from '../assets/Vector 298.svg';
import view from '../assets/view_agenda.svg';
import frame from '../assets/Frame 1000009353.svg';
import frame1 from '../assets/Frame 1000005832.svg';
import frame2 from '../assets/Frame 1000009100.svg';
import add from '../assets/add.svg'
import bag from '../assets/Frame 1000008703.svg'
import link from '../assets/link.svg'
import mobile from '../assets/mobile_screen_share.svg'
import dots from '../assets/Group 6.svg'

function Main() {
  return (
    <div className='bg-white rounded-md'>
     <div className='header flex flex-col md:flex-row items-center justify-between rounded px-4 py-3 md:py-0'>
      <div className='flex flex-row items-center'>
       <div className="text-[#1C4980] text-xl font-semibold leading-7">Assessment</div>
  <div className='px-5 py-2'>
    <img src={vector} alt="" />
  </div>
  <div className="text-[#0073E6] text-sm font-semibold border-b-2 border-[#0073E6] py-5">My Assessments</div>  
      </div>
 
  <div className='flex justify-end'>
    <img src={mobile} alt="" />
  </div>
</div>

      <hr className="" />
      <div className='main px-4 py-2'>
        <div className="py-3 text-[#1C4980] text-lg font-medium leading-[25.20px]">Assessments Overview</div>
        <div className='gallery flex flex-row border border-[#363d43] rounded-xl'>
          <div className='p-4 flex-grow gallery'>
            <div className="text-blue-900 text-sm font-semibold leading-tight">Total Assessment</div>
            <div className='flex flex-row pt-2'>
              <div className='bg-[#EBE8FD] rounded'>
                <img src={view} alt="" />
              </div>
              <div className="pl-2 text-blue-900 text-xl font-bold leading-7">34</div>
            </div>
          </div>
          <div className='p-4 flex-grow gallery border-l border-[#363d43]'>
            <div className="text-blue-900 text-sm font-semibold leading-tight">Candidates</div>
            <div className='flex flex-row pt-2'>
              <div className='bg-[#EBE8FD] rounded'>
                <img src={frame} alt="" />
              </div>
              <div className='flex flex-col pl-2'>
                <div className='flex flex-row'>
                  <div className="text-blue-900 text-xl font-bold leading-7">11,145</div>
                  <div className="text-green-500 text-xs font-medium leading-none ml-2">+89</div>
                </div>
                <div className='text-blue-900 text-xs font-medium leading-none'>Total Candidate</div>
              </div>
              <div className='px-2'>
          <img src={vector} alt="" />
        </div>
              <div className='flex flex-col pl-2'>
                <div className='flex flex-row'>
                  <div className="text-blue-900 text-xl font-bold leading-7">1,14</div>
                  <div className="text-green-500 text-xs font-medium leading-none ml-2">+89</div>
                </div>
                <div className='text-blue-900 text-xs font-medium leading-none'>Who Attempted</div>
              </div>
            </div>
          </div>
          <div className='p-4 flex-grow gallery border-l border-[#363d43]'>
            <div className="text-blue-900 text-sm font-semibold leading-tight">Candidates Source</div>
            <div className='flex flex-row pt-2'>
              <div className='bg-[#EBE8FD] rounded'>
                <img src={frame1} alt="" />
              </div>
              <div className='flex flex-col pl-2'>
                <div className='flex flex-row'>
                  <div className="text-blue-900 text-xl font-bold leading-7">11,000</div>
                  <div className="text-green-500 text-xs font-medium leading-none ml-2">+89</div>
                </div>
                <div className='text-blue-900 text-xs font-medium leading-none'>Email</div>
              </div>
              <div className='px-2'>
          <img src={vector} alt="" />
        </div>
              <div className='flex flex-col pl-2'>
                <div className='flex flex-row'>
                  <div className="text-blue-900 text-xl font-bold leading-7">145</div>
                  <div className="text-green-500 text-xs font-medium leading-none ml-2">+89</div>
                </div>
                <div className='text-blue-900 text-xs font-medium leading-none'>Social Share</div>
              </div>
              <div className='px-2'>
          <img src={vector} alt="" />
        </div>
              <div className='flex flex-col pl-2'>
                <div className='flex flex-row'>
                  <div className="text-blue-900 text-xl font-bold leading-7">145</div>
                  <div className="text-green-500 text-xs font-medium leading-none ml-2">+89</div>
                </div>
                <div className='text-blue-900 text-xs font-medium leading-none'>Unique Link</div>
              </div>
            </div>
          </div>
          <div className='p-4 flex-grow gallery border-l border-[#363d43]'>
            <div className="text-blue-900 text-sm font-semibold leading-tight">Total Purpose</div>
            <div className='flex flex-row pt-2'>
              <div className='bg-[#EBE8FD] rounded'>
                <img src={frame2} alt="" />
              </div>
              <div className="pl-2 text-blue-900 text-xl font-bold leading-7 flex items-center">11</div>
            </div>
          </div>
        </div>
      </div>
      <div className='lower pt-4 flex-grow'>
      <div className="pl-4 text-blue-900 text-lg font-medium leading-[25.20px]">My Assessment</div>
      <div className='flex flex-row p-3'>
        <div className=" flex-grow w-[388px] h-[209px]  bg-slate-50 rounded-xl border border-gray-300 flex-col justify-center items-center gap-3 inline-flex">
    <div className="flex-col justify-start items-center gap-2.5 flex">
        <div className="w-[70px] h-[70px] p-2.5 bg-white rounded-[72px] justify-center items-center gap-2.5 inline-flex">
            <img src={add} alt="" />
        </div>
        <div className="text-center text-blue-900 text-lg font-medium">New Assessment</div>
    </div>
    <div className="self-stretch text-center text-blue-900 text-xs font-medium">From here you can add questions of multiple types like MCQs, subjective (text or paragraph)!</div>
</div>
<div className="mx-4 flex-grow w-[388px] h-[209px] p-4 bg-white rounded-xl border border-gray-300 flex-col justify-start items-start gap-4 inline-flex">
    <div className="w-[58px] h-[49px] relative" />
    <div className="self-stretch justify-between items-start gap-2.5 inline-flex">
        <div className="flex-col justify-center items-start gap-2.5 inline-flex">
            <div className="w-[50px] h-[50px] relative bg-violet-100 rounded-xl">
<img src={bag} alt="" />
              </div>
            <div className="flex-col justify-start items-start gap-0.5 flex">
                <div className="text-blue-900 text-lg font-medium leading-[25.20px]">Math Assessment</div>
                <div className="justify-start items-center gap-2.5 inline-flex">
                    <div className="w-[26px] h-5 text-blue-900 text-sm font-semibold leading-tight">Job</div>
                    <div className="w-[91px] justify-start items-center gap-1 flex">
                        <div className="w-3.5 h-3.5 relative" />
                        <div className="text-slate-400 text-xs font-medium">20 Apr 2023</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-[30px] h-[30px] px-2.5 py-[5px] bg-white rounded-[50px] justify-center items-center gap-2.5 flex">
        <div className="w-5 h-5 relative origin-top-left rotate-180">
              <img src={dots} alt="" />
              </div>
        </div>
    </div>
    <div className="self-stretch justify-between items-center gap-5 inline-flex">
        <div className="justify-start items-start gap-3.5 flex">
            <div className="flex-col justify-start items-start inline-flex">
                <div className="text-blue-900 text-sm font-semibold leading-tight">00</div>
                <div className="text-blue-900 text-xs font-medium leading-none">Duration</div>
            </div>
            <div className="flex-col justify-start items-start inline-flex">
                <div className="text-blue-900 text-sm font-semibold leading-tight">00</div>
                <div className="text-blue-900 text-xs font-medium leading-none">Questions</div>
            </div>
        </div>
        <div className="justify-start items-center gap-2.5 flex">
            <div className="w-[77px] pl-1.5 pr-2 py-0.5 bg-white rounded-[50px] border border-blue-900 justify-center items-center gap-1 flex">
            <img src={link} alt="" />
                <div className="text-blue-900 text-sm font-medium leading-tight">Share</div>
            </div>
            <div className="justify-start items-center gap-1 flex">
                <div className="w-[30px] h-[30px] px-1.5 py-[5px] bg-indigo-600 rounded-[32.73px] border border-white flex-col justify-center items-end gap-2.5 inline-flex">
                    <div className="text-center text-white text-sm font-bold">LP</div>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="flex-grow w-[388px] h-[209px] p-4 bg-white rounded-xl border border-gray-300 flex-col justify-start items-start gap-4 inline-flex">
    <div className="w-[58px] h-[49px] relative" />
    <div className="self-stretch justify-between items-start gap-2.5 inline-flex">
        <div className="flex-col justify-center items-start gap-2.5 inline-flex">
            <div className="w-[50px] h-[50px] relative bg-violet-100 rounded-xl">
              <img src={bag} alt="" />
              </div>
            <div className="flex-col justify-start items-start gap-0.5 flex">
                <div className="text-blue-900 text-lg font-medium leading-[25.20px]">Math Assessment</div>
                <div className="justify-start items-center gap-2.5 inline-flex">
                    <div className="w-[26px] h-5 text-blue-900 text-sm font-semibold leading-tight">Job</div>
                    <div className="w-[91px] justify-start items-center gap-1 flex">
                        <div className="w-3.5 h-3.5 relative" />
                        <div className="text-slate-400 text-xs font-medium">20 Apr 2023</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-[30px] h-[30px] px-2.5 py-[5px] bg-white rounded-[50px] justify-center items-center gap-2.5 flex">
            <div className="w-5 h-5 relative origin-top-left rotate-180">
              <img src={dots} alt="" />
              </div>
        </div>
    </div>
    <div className="self-stretch justify-between items-center gap-5 inline-flex">
        <div className="justify-start items-start gap-3.5 flex">
            <div className="flex-col justify-start items-start inline-flex">
                <div className="text-blue-900 text-sm font-semibold leading-tight">00</div>
                <div className="text-blue-900 text-xs font-medium leading-none">Duration</div>
            </div>
            <div className="flex-col justify-start items-start inline-flex">
                <div className="text-blue-900 text-sm font-semibold leading-tight">00</div>
                <div className="text-blue-900 text-xs font-medium leading-none">Questions</div>
            </div>
        </div>
        <div className="justify-start items-center gap-2.5 flex">
            <div className="w-[77px] pl-1.5 pr-2 py-0.5 bg-white rounded-[50px] border border-blue-900 justify-center items-center gap-1 flex">
                <img src={link} alt="" />
                <div className="text-blue-900 text-sm font-medium leading-tight">Share</div>
            </div>
            <div className="justify-start items-center gap-1 flex">
                <div className="justify-center items-center flex">
                    <div className="w-[30px] h-[30px] px-1.5 py-[5px] bg-indigo-600 rounded-[32.73px] border border-white flex-col justify-center items-end gap-2.5 inline-flex">
                        <div className="text-center text-white text-sm font-bold">LP</div>
                    </div>
                    <div className="w-[30px] h-[30px] px-1.5 py-[5px] bg-blue-500 rounded-[32.73px] border border-white flex-col justify-center items-end gap-2.5 inline-flex">
                        <div className="text-center text-white text-sm font-bold">LP</div>
                    </div>
                    <div className="w-[30px] h-[30px] px-1.5 py-[5px] bg-pink-600 rounded-[32.73px] border border-white flex-col justify-center items-end gap-2.5 inline-flex">
                        <div className="text-center text-white text-sm font-bold">LP</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
      </div>
      
      </div>
    </div>
  );
}

export default Main;

