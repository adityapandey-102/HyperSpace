
import Popup from '@/components/Popup'
import React from 'react'

function page() {
  return (
    <>
    <div className="w-full h-full text-center bg-[#010228] pb-1">
    <div className="text-[#040478] text-4xl font-semibold font-mono rounded-2xl py-4 bg-[#D2F220] ">HYPERSPACE</div>
    <div className="text-slate-200 text-4xl font-mono py-5 --px-28 flex justify-center items-center mt-10 flex-col gap-y-10"><div className="w-[500px]">
      We invent, build, and operate next-gen attractions connected to digital lifestyles.
      </div>
    <Popup/>
      
      </div>

    </div>


    </>
  )
}

export default page