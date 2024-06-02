"use client"

import { useRouter } from "next/navigation";


export default function Home() {
  const router=useRouter()

  return (
    <>
    <div className="w-full h-full text-center bg-[#010228] pb-1">
    <div className="text-[#040478] text-4xl font-semibold font-mono rounded-2xl py-4 bg-[#D2F220] ">HYPERSPACE</div>
    <div className="text-slate-200 text-4xl font-mono font-semibold py-5 --px-28 flex justify-center mt-10 "><div className="w-[500px]">
      Welcome to the home Page folk! Below are the navigation button for both the pages.
      </div></div>
    <div className="flex justify-center mt-10">
      <button onClick={()=>{
        router.push("/Page/1")
      }} className="bg-black border-2 border-solid border-black text-center rounded-2xl py-5 px-9 mx-10 flex items-center justify-center text-3xl font-medium text-[#D2F220]">Navigation To Page 1</button>
      <button onClick={()=>{
        router.push("/Page/2")
      }} className="bg-[#D2F220]  border border-2 border-solid border-black text-center rounded-2xl py-5 px-9 mx-10 flex items-center justify-center text-3xl font-medium text-[#040478]">Navigation To Page 2</button>
    </div>

    </div>
    </>
  );
}
