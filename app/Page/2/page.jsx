"use client"
import React from 'react'
import Lottie from 'lottie-react'
import { Typewriter } from 'react-simple-typewriter'
import { useLottie } from "lottie-react";
import * as animation1 from '../../../public/lottieeJSON/anim1.json';
// import * as animation2 from '../../../public/lottieeJSON/anim2.json';
import * as animation3 from '../../../public/lottieeJSON/anim3.json';
import * as animation4 from '../../../public/lottieeJSON/anim4.json';
import * as animation5 from '../../../public/lottieeJSON/anim5.json';
import * as animation6 from '../../../public/lottieeJSON/anim6.json';

function page() {

  // const options = {
  //     animationData: animation1,
  //     loop: true
  //   };

  const styleLottie = {
    height: "300px",
    width: "300px",
    backgroundSize: "cover"
  }
  const styleLottie2 = {
    height: "500px",
    width: "500px",
    backgroundSize: "cover"
  }

  return (
    <>
      <div id='page1' className="w-full h-[100vh] text-center bg-[#010228] pb-1">
        <div className="text-[#040478] text-4xl font-bold font-mono rounded-2xl py-4 bg-[#D2F220] ">HYPERSPACE</div>
        <div className='flex justify-between px-[10%] items-center mt-16'>
          <div className='flex items-center justify-center'>
            <div className='text-5xl font-bold font-mono absolute z-40'>HYPERSPACE</div>
            <Lottie animationData={animation1} style={styleLottie2} />
          </div>
          <div className="text-slate-200 flex flex-col justify-center ">
            <div className="w-[600px] h-[220px] text-5xl font-mono font-medium text-left">
              <Typewriter
                words={["We invent, build, and operate next-gen attractions connected to digital lifestyles."]}
                loop={1} // Set to 0 for infinite loop
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </div>
            <div className="w-[400px] text-xl font-mono font-medium text-left mt-20">
              Our parks adapt the best ingredients of video games, social media, and Web3 culture; translating them into future forward entertainment attractions.
            </div>
          </div>
        </div>
      </div>

      <div id='page2' className="w-full h-[100vh] text-center bg-black bg-opacity-70 backdrop-blur-lg pb-1">
        <div className='flex items-center justify-center'>
          <Lottie className='' animationData={animation4} style={ {
            height: "600px",
            width: "600px",
            backgroundSize: "cover"
          }} />
        </div>
          <div className='text-6xl font-semibold font-mono text-white'>
          <Typewriter
                words={["PHYSICAL PARK FOR DIGITAL WORD"]}
                loop={1} 
                cursor
                cursorStyle="#"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              /></div>

      </div>


      <div id='page3' className="w-full text-center bg-[#010228] pb-1">
        <div className='flex items-center justify-between px-[10%]'>

        <Lottie animationData={animation5} style={styleLottie2} />
        <div className="w-[600px] h-[220px] text-5xl font-mono font-medium text-left text-[#D2F220]">
              <Typewriter
                words={["We’re building next-level experiences beamed from tomorrow to blow minds today."]}
                loop={0} 
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </div>
        </div>
        <div className='flex items-center justify-center flex-col'>
          <div className='text-white text-xl font-mono font-medium my-10 m'>Click on Rocket to Move Upward!</div>

        <Lottie onClick={()=>{
           window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }} className='transform rotate-[318deg] flex items-center justify-center cursor-pointer' animationData={animation6} style={styleLottie} />
        </div>

      </div>
          <div className='text-center text-xl text-white py-12'>
            Created By @Aditya_Pandey
          </div>
    </>
  )
}

export default page