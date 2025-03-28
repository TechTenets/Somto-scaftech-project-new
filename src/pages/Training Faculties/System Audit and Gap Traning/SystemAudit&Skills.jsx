import React from 'react'
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import GraphicEqTwoToneIcon from "@mui/icons-material/GraphicEqTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";

const SystemAudit = () => {
  return (
    <div className='w-full mt-20'>
        <section>
        <img className='w-full h-80 px-5 bg-cover bg-center cursor-pointer'
             src="/App-3.jpeg" alt="" />

        <div className='text-center bg-gray-100 w-auto h-auto'>
            <h1 className='text-4xl text-gray-900 text-center font-bold pt-10 '>
            SYSTEM AUDIT AND SKILLS GAP ANALYSIS TRAINING
                </h1>

                <p className='text-sm text-gray-800 py-5'>
                Identify and close Skills Gaps. System Audit and Analysis.
                </p>
                     <button className="rounded-md border-2 text-base font-medium mb-10 text-gray-950 border-black border-solid p-3 mt-5 hover:text-white hover:bg-blue-900">
                         View Courses 
                    </button>
            </div>

            <article className="pl-15 text-sm text-gray-800 py-10">
              <p>
              Ensure optimal equipment performance and longevity with our comprehensive operation and maintenance training. Learn preventive maintenance techniques, <br /> troubleshooting procedures, and safe operating practices. Minimize downtime and maximize the lifespan of your valuable equipment.
              </p>

              <p className="pt-8">
              As a leading NDT training provider in Nigeria, Scaftech offers rigorous, hands-on instruction led by experienced professionals who prepare participants for excellence <br /> in the field. Our courses are tailored to meet industry demands, ensuring that candidates emerge with the proficiency required for successful careers in sectors such as Oil <br /> & Gas, Marine, and Construction. With Scaftech, you're gaining more than just certification; you're joining a trusted institution dedicated to quality training and <br /> advancing Nigeria's workforce in NDT expertise.
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

            {/* <div className="text-gray-400 pt-5 pb-2">
              <AccountCircleTwoToneIcon />
              JCI
            </div> */}
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

            {/* <div className="text-gray-400 pt-5 pb-2">
              <AccountCircleTwoToneIcon />
              JCI
            </div> */}
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

            {/* <div className="text-gray-400 pt-5 pb-2">
              <AccountCircleTwoToneIcon />
              JCI
            </div> */}
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

            {/* <div className="text-gray-400 pt-5 pb-2">
              <AccountCircleTwoToneIcon />
              JCI
            </div> */}
        </div> 

          </div>

          <div className='flex gap-5 pl-8 pt-8'>
                     <div className="flex-col rounded-lg p-2 ">
                     <div>
                       <img className='rounded-lg ease-in-out hover:scale-105 transform transition duration-75 w-80 h-48'
                        src="/pikaso_texttoimage.jpeg" alt="" />
                     </div>
                     <div className="text-blue-950 text-sm font-medium pt-5 ">
                       <h1>Authorized Gas Tester</h1>
                     </div>
                     <div className="text-gray-400 p-3">
                       <InfoTwoToneIcon />1 Days
                     </div>
         
                     <div className="text-gray-400 p-1">
                       <GraphicEqTwoToneIcon />
                        All levels
                     </div>
         
                     {/* <div className="text-gray-400 pt-5 pb-2">
                       <AccountCircleTwoToneIcon />
                       JCI
                     </div> */}
                   </div>
         
                   <div className="flex-col p-2 ">
                     <div>
                       <img className='rounded-lg  ease-in-out hover:scale-105 transform transition-all duration-75 w-80 h-48'
                        src="/images/PRA7572-scaled.jpg" alt="" />
                     </div>
                     <div className="text-blue-950 text-sm font-medium pt-5 ">
                       <h1>Working at Height (Rescue)</h1>
                     </div>
                     <div className="text-gray-400 p-3">
                       <InfoTwoToneIcon />2 Days
                     </div>
         
                     <div className="text-gray-400 p-1">
                       <GraphicEqTwoToneIcon />
                       All Levels
                     </div>
         
                     {/* <div className="text-gray-400 pt-5 pb-2">
                       <AccountCircleTwoToneIcon />
                       JCI
                     </div> */}
                   </div>
         
                   <div className="flex-col p-2 ease-in-out ">
                     <div>
                       <img className='rounded-lg hover:scale-105 transform transition duration-75 w-80 h-48'
                        src="/images/FALL-PROTECTION.jpg" alt="" />
                     </div>
                     <div className="text-blue-950 text-sm font-medium pt-5 ">
                       <h1>Fall Protection</h1>
                     </div>
                     <div className="text-gray-400 p-3">
                       <InfoTwoToneIcon />1 Days
                     </div>
         
                     <div className="text-gray-400 p-1">
                       <GraphicEqTwoToneIcon />
                       All Levels
                     </div>
         
                     {/* <div className="text-gray-400 pt-5 pb-2">
                       <AccountCircleTwoToneIcon />
                       JCI
                     </div> */}
                   </div>
         
                   <div className="flex-col  p-2 ">
                     <div>
                       <img className='rounded-lg ease-in-out hover:scale-105 transform transition duration-75 w-80 h-48' 
                       src="/images/jci-9-26.jpg" alt="" />
                     </div>
                     <div className="text-blue-950 text-sm font-medium pt-5 ">
                       <h1>Basic/Advanced Fire Fighting</h1>
                     </div>
                     <div className="text-gray-400 p-3">
                       <InfoTwoToneIcon />2 Days
                     </div>
                     <div className="text-gray-400 p-1">
                       <GraphicEqTwoToneIcon />
                       All Levels
                     </div>
         
                     {/* <div className="text-gray-400 pt-5 pb-2">
                       <AccountCircleTwoToneIcon />
                       JCI
                     </div> */}
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

export default SystemAudit