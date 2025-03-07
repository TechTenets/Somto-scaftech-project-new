import React from 'react'
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import GraphicEqTwoToneIcon from "@mui/icons-material/GraphicEqTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";

const Scaffolding = () => {
  return (
    <div className='w-full mt-20'>
        <section>
        <img className='w-full h-80 px-5 cursor-pointer'
             src="/jci-10.jpg" alt="" />

        <div className='text-center bg-gray-100 w-auto h-auto'>
            <h1 className='text-5xl text-gray-900 text-center font-bold pt-10 '>
            ROPE ACCESS/ SCAFFOLDING TRAINING
                </h1>

                <p className='text-sm text-gray-800 py-5'>
                Our NDT training is fully accredited by The American Society for Non Destructive Testing (ASNT)
                </p>
                     <button className="rounded-md border-2 text-base font-medium mb-10 text-gray-950 border-black border-solid p-3 mt-5 hover:text-white hover:bg-blue-900">
                         View Courses 
                    </button>
            </div>

            <article className="pl-15 text-sm text-gray-800 py-10">
              <p>
              At JC International, we deliver NDT training techniques designed to certify candidates in compliance with SNT-TC-1A and BS EN ISO 9712 standards. Our mission is to develop <br /> highly competent NDT Technicians at multiple levels, equipping them with specialized skills across a range of Non-Destructive Testing (NDT) methods.
              </p>

              <p className="pt-8">
              As a leading NDT training provider in Nigeria, JC International offers rigorous, hands-on instruction led by experienced professionals who prepare participants for excellence <br /> in the field. Our courses are tailored to meet industry demands, ensuring that candidates emerge with the proficiency required for successful careers in sectors such as Oil <br /> & Gas, Marine, and Construction. With JC International, you're gaining more than just certification; you're joining a trusted institution dedicated to quality training and <br /> advancing Nigeria's workforce in NDT expertise.
              </p>
            </article>

            <div className='flex gap-5 pl-8 pt-8'>
            <div className="flex-col rounded-lg p-2 ">
            <div>
              <img className='rounded-lg ease-in-out hover:scale-105 transform transition duration-75 w-80 h-48'
               src="/IMG_E9.jpg" alt="" />
            </div>
            <div className="text-blue-950 text-sm font-medium pt-5 ">
              <h1>Dye Penetrant Inspection</h1>
            </div>
            <div className="text-gray-400 p-3">
              <InfoTwoToneIcon />5 Days
            </div>

            <div className="text-gray-400 p-1">
              <GraphicEqTwoToneIcon />
               All levels
            </div>

            <div className="text-gray-400 pt-5 pb-2">
              <AccountCircleTwoToneIcon />
              JCI
            </div>
          </div>

          <div className="flex-col p-2 ">
            <div>
              <img className='rounded-lg  ease-in-out hover:scale-105 transform transition-all duration-75 w-80 h-48'
               src="/Ultrasonic-Testing.jpg" alt="" />
            </div>
            <div className="text-blue-950 text-sm font-medium pt-5 ">
              <h1>Eddy Current Testing2</h1>
            </div>
            <div className="text-gray-400 p-3">
              <InfoTwoToneIcon />5 Days
            </div>

            <div className="text-gray-400 p-1">
              <GraphicEqTwoToneIcon />
              All Levels
            </div>

            <div className="text-gray-400 pt-5 pb-2">
              <AccountCircleTwoToneIcon />
              JCI
            </div>
          </div>

          <div className="flex-col p-2 ease-in-out ">
            <div>
              <img className='rounded-lg hover:scale-105 transform transition duration-75 w-80 h-48'
               src="/jc-img6.jpg" alt="" />
            </div>
            <div className="text-blue-950 text-sm font-medium pt-5 ">
              <h1>Radiographic Testing (RT) </h1>
            </div>
            <div className="text-gray-400 p-3">
              <InfoTwoToneIcon />5 Days
            </div>

            <div className="text-gray-400 p-1">
              <GraphicEqTwoToneIcon />
              All Levels
            </div>

            <div className="text-gray-400 pt-5 pb-2">
              <AccountCircleTwoToneIcon />
              JCI
            </div>
          </div>

          <div className="flex-col  p-2 ">
            <div>
              <img className='rounded-lg ease-in-out hover:scale-105 transform transition duration-75 w-80 h-48' 
              src="/images/Radiographic.jpg" alt="" />
            </div>
            <div className="text-blue-950 text-sm font-medium pt-5 ">
              <h1>Ultrasonic Inspection</h1>
            </div>
            <div className="text-gray-400 p-3">
              <InfoTwoToneIcon />2 Days
            </div>
            <div className="text-gray-400 p-1">
              <GraphicEqTwoToneIcon />
              All Levels
            </div>

            <div className="text-gray-400 pt-5 pb-2">
              <AccountCircleTwoToneIcon />
              JCI
            </div>
        </div> 

          </div>

          <div className="flex-col rounded-lg pl-8 p-2 ">
            <div>
              <img className='rounded-lg ease-in-out w-80 h-60 hover:scale-105 transform transition duration-75'
               src="/images/gallery/UT-Flaw-Inspection.jpg" alt="" />
            </div>
            <div className="text-blue-950 text-sm font-medium pt-5 ">
              <h1>Scaffold Inspector Training</h1>
            </div>
            <div className="text-gray-400 p-3">
              <InfoTwoToneIcon />3 Days
            </div>

            <div className="text-gray-400 p-1">
              <GraphicEqTwoToneIcon />
              All Levels
            </div>

            <div className="text-gray-400 pt-5 pb-2">
              <AccountCircleTwoToneIcon />
              JCI
            </div>
          </div>

          
          <section>
        <div className="font-bold text-2xl text-blue-950 pt-30 text-center">
          <h1>ACCREDITATIONS AND PROFESSIONAL MEMBERSHIPS</h1>
        </div>

        <div className="pl-45 pt-4">
          <img src="/images/gallery/Accreditation.jpg" alt="" />
        </div>
      </section>

        </section>
    </div>
  )
}

export default Scaffolding