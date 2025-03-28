import React from 'react'
import "./style.css"
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import GraphicEqTwoToneIcon from "@mui/icons-material/GraphicEqTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";

const WeldingTraning = () => {
  return (
    <div className=' w-full mt-20'>
       <section>
            <img className='w-full h-80 px-5 object-fill bg-center  cursor-pointer'
             src="/jci-9-27.jpg" alt="" />

        <div className='text-center bg-gray-100 w-auto h-auto'>
            <h1 className='text-4xl text-gray-900 text-center font-bold pt-10 '>
                WELDING TRAINING
                </h1>

                <p className='text-sm text-gray-800 py-5'>
                Master the art of welding with our comprehensive training programs. We cover various welding processes,
                 including [list specific processes like SMAW, GMAW, GTAW], <br /> and provide hands-on experience in our state-of-the-art workshops."
                Our welding courses adhere to [mention specific standards like AWS D1.1, ISO 9606] and are designed to <br /> prepare you for industry certifications."
               Emphasis on safety procedures and best practices, ensuring compliance with OSHA regulations.
                     </p>

                     <button className="rounded-md border-2 text-base font-medium mb-10 text-gray-950 border-black border-solid p-3 mt-5 hover:text-white hover:bg-blue-900">
                         View Courses 
                    </button>
            </div>
                  
                  <div className='text-gray-800 text-sm text-center pt-5'>
                    <p>
                    Welding training is recognized for its excellence, accredited by LEEA, IADC, and OPITO accreditations, which highlight our commitment to delivering <br /> industry-approved standards. Our  accredited programs are developed to meet global benchmarks, ensuring that participants  receive up-to-date training that <br /> is both comprehensive and practical.
                    </p>

                    <p className='pt-5'>
                    Our courses cover every aspect of Welding, from initial equipment inspection and selection to advanced load handling and safety techniques. Our expert instructors, <br /> who possess extensive field experience, emphasize hands-on training, giving participants the skills they need to conduct lifting operations safely and effectively across the <br /> Oil & Gas, Marine, and Construction industries. With JC International's rigorous training, companies can enhance their workforce competence, and individuals can develop the <br /> critical skills necessary for career advancement in lifting operations.
                    </p>
                  </div>

         <div className='flex justify-around pt-10'>
            <div className="flex-col rounded-lg p-2 ">
            <div>
              <img className='rounded-lg ease-in-out hover:scale-105 transform transition duration-75' src="/JC-Training-Oil.jpg" alt="" />
            </div>
            <div className="text-blue-950 text-sm font-medium pt-5 ">
              <h1>OPITO Rigger Training</h1>
            </div>
          
          </div>

          <div className="flex-col p-2 ">
            <div>
              <img className='rounded-lg  ease-in-out hover:scale-105 transform transition-all duration-75'
               src="/WhatsApp-Image_2.jpeg" alt="" />
            </div>
            <div className="text-blue-950 text-sm font-medium pt-5 ">
              <h1>OPITO Banksman & Slinger Training</h1>
            </div>
        
          </div>

          <div className="flex-col p-2 ease-in-out ">
            <div>
              <img className='rounded-lg hover:scale-105 transform transition duration-75'
               src="/JC-Training-Oil.jpg" alt="" />
            </div>
            <div className="text-blue-950 text-sm font-medium pt-5 ">
              <h1>Lifting & Slinging</h1>
            </div>
          </div>

          <div className="flex-col  p-2 ">
            <div>
              <img className='rounded-lg ease-in-out hover:scale-105 transform transition duration-75' 
              src="/pikaso_enhance.png" alt="" />
            </div>
            <div className="text-blue-950 text-sm font-medium pt-5 ">
              <h1>Mobile Crane Operations</h1>
            </div>
        </div> 
          </div>
               
               
            <div className='flex justify-around pt-8'>
            <div className="flex-col rounded-lg p-2 ">
            <div>
              <img className='rounded-lg ease-in-out hover:scale-105 transform transition duration-75' src="/WhatsApp-Image-3.jpg" alt="" />
            </div>
            <div className="text-blue-950 text-sm font-medium pt-5 ">
              <h1>Plant Inspector - Thorough Examination N039</h1>
            </div>
            {/* <div className="text-gray-400 p-3">
              <InfoTwoToneIcon />2 Days
            </div>

            <div className="text-gray-400 p-1">
              <GraphicEqTwoToneIcon />
              Expert
            </div> */}

            {/* <div className="text-gray-400 pt-5 pb-2">
              <AccountCircleTwoToneIcon />
              JCI
            </div> */}
          </div>

          <div className="flex-col p-2 ">
            <div>
              <img className='rounded-lg  ease-in-out hover:scale-105 transform transition-all duration-75'
               src="/July-410.jpg" alt="" />
            </div>
            <div className="text-blue-950 text-sm font-medium pt-5 ">
              <h1>Offshore Crane Operations</h1>
            </div>
            {/* <div className="text-gray-400 p-3">
              <InfoTwoToneIcon />2 Days
            </div>

            <div className="text-gray-400 p-1">
              <GraphicEqTwoToneIcon />
              All Levels
            </div> */}

            {/* <div className="text-gray-400 pt-5 pb-2">
              <AccountCircleTwoToneIcon />
              JCI
            </div> */}
          </div>

          <div className="flex-col p-2 ease-in-out ">
            <div>
              <img className='rounded-lg hover:scale-105 transform transition duration-75'
               src="/images/IMG-scaled.jpg" alt="" />
            </div>
            <div className="text-blue-950 text-sm font-medium pt-5 ">
              <h1>Appointed Persons for Lifting Operations Training</h1>
            </div>
            {/* <div className="text-gray-400 p-3">
              <InfoTwoToneIcon />2 Days
            </div>

            <div className="text-gray-400 p-1">
              <GraphicEqTwoToneIcon />
              All Levels
            </div> */}

            {/* <div className="text-gray-400 pt-5 pb-2">
              <AccountCircleTwoToneIcon />
              JCI
            </div> */}
          </div>

          <div className="flex-col  p-2 ">
            <div>
              <img className='rounded-lg ease-in-out hover:scale-105 transform transition duration-75' 
              src="/Forklift-training.jpg" alt="" />
            </div>
            <div className="text-blue-950 text-sm font-medium pt-5 ">
              <h1>Safe use of Lifting Equipment</h1>
            </div>
            {/* <div className="text-gray-400 p-3">
              <InfoTwoToneIcon />2 Days
            </div>
            <div className="text-gray-400 p-1">
              <GraphicEqTwoToneIcon />
              All Levels
            </div> */}

            {/* <div className="text-gray-400 pt-5 pb-2">
              <AccountCircleTwoToneIcon />
              JCI
            </div> */}
        </div> 

          </div>

          
          <div className='flex justify-around'>
            <div className="flex-col rounded-lg p-2 ">
            <div>
              <img className='rounded-lg ease-in-out hover:scale-105 transform transition duration-75' src="/PRA7424-scaled.jpg" alt="" />
            </div>
            <div className="text-blue-950 text-sm font-medium pt-5 ">
              <h1>OPITO RIGGER</h1>
            </div>
            {/* <div className="text-gray-400 p-3">
              <InfoTwoToneIcon />2 Days
            </div>

            <div className="text-gray-400 p-1">
              <GraphicEqTwoToneIcon />
              Expert
            </div> */}

            {/* <div className="text-gray-400 pt-5 pb-2">
              <AccountCircleTwoToneIcon />
              JCI
            </div> */}
          </div>

          <div className="flex-col p-2 ">
            <div>
              <img className='rounded-lg  ease-in-out hover:scale-105 transform transition-all duration-75'
               src="/26-DSC.jpg" alt="" />
            </div>
            <div className="text-blue-950 text-sm font-medium pt-5 ">
              <h1>Rigging Loft Management</h1>
            </div>
            {/* <div className="text-gray-400 p-3">
              <InfoTwoToneIcon />2 Days
            </div>

            <div className="text-gray-400 p-1">
              <GraphicEqTwoToneIcon />
              All Levels
            </div> */}

            {/* <div className="text-gray-400 pt-5 pb-2">
              <AccountCircleTwoToneIcon />
              JCI
            </div> */}
          </div>

          <div className="flex-col p-2 ease-in-out ">
            <div>
              <img className='rounded-lg hover:scale-105 transform transition duration-75'
               src="/JC-Training-Oil-GAS.jpg" alt="" />
            </div>
            <div className="text-blue-950 text-sm font-medium pt-5 ">
              <h1>Mobile Elevated Work Platform (MEWP) Boom Lift N108</h1>
            </div>
            {/* <div className="text-gray-400 p-3">
              <InfoTwoToneIcon />2 Days
            </div>

            <div className="text-gray-400 p-1">
              <GraphicEqTwoToneIcon />
              All Levels
            </div> */}

            {/* <div className="text-gray-400 pt-5 pb-2">
              <AccountCircleTwoToneIcon />
              JCI
            </div> */}
          </div>

          <div className="flex-col  p-2 ">
            <div>
              <img className='rounded-lg ease-in-out hover:scale-105 transform transition duration-75' 
              src="/AmericanCrane.jpg" alt="" />
            </div>
            <div className="text-blue-950 text-sm font-medium pt-5 ">
              <h1>Overhead Crane N104</h1>
            </div>
            {/* <div className="text-gray-400 p-3">
              <InfoTwoToneIcon />2 Days
            </div>
            <div className="text-gray-400 p-1">
              <GraphicEqTwoToneIcon />
              All Levels
            </div> */}

            {/* <div className="text-gray-400 pt-5 pb-2">
              <AccountCircleTwoToneIcon />
              JCI
            </div> */}
        </div> 

          </div>

          
          <div className='flex justify-around'>
            <div className="flex-col rounded-lg p-2 ">
            <div>
              <img className='rounded-lg ease-in-out w-80 h-60 hover:scale-105 transform transition duration-75' src="/jci-drive.jpg" alt="" />
            </div>
            <div className="text-blue-950 text-sm font-medium pt-5 ">
              <h1>Forklift Operations</h1>
            </div>
            {/* <div className="text-gray-400 p-3">
              <InfoTwoToneIcon />2 Days
            </div>

            <div className="text-gray-400 p-1">
              <GraphicEqTwoToneIcon />
              Expert
            </div> */}

            {/* <div className="text-gray-400 pt-5 pb-2">
              <AccountCircleTwoToneIcon />
              JCI
            </div> */}
          </div>

          <div className="flex-col p-2 ">
            <div>
              <img className='rounded-lg  ease-in-out hover:scale-105 transform transition-all duration-75'
               src="/PRA7425.jpg" alt="" />
            </div>
            <div className="text-blue-950 text-sm font-medium pt-5 ">
              <h1>Rigger Training</h1>
            </div>
            {/* <div className="text-gray-400 p-3">
              <InfoTwoToneIcon />2 Days
            </div>

            <div className="text-gray-400 p-1">
              <GraphicEqTwoToneIcon />
              All Levels
            </div> */}

            {/* <div className="text-gray-400 pt-5 pb-2">
              <AccountCircleTwoToneIcon />
              JCI
            </div> */}
          </div>

          <div className="flex-col p-2 ease-in-out ">
            <div>
              <img className='rounded-lg w-96 h-60 hover:scale-105 transform transition duration-75'
               src="/jci-25.jpg" alt="" />
            </div>
            <div className="text-blue-950 text-sm font-medium pt-5 ">
              <h1>Management Of Lifting & Slinging</h1>
            </div>
            {/* <div className="text-gray-400 p-3">
              <InfoTwoToneIcon />5 Days
            </div>

            <div className="text-gray-400 p-1">
              <GraphicEqTwoToneIcon />
              All Levels
            </div> */}

            {/* <div className="text-gray-400 pt-5 pb-2">
              <AccountCircleTwoToneIcon />
              JCI
            </div> */}
          </div>

          <div className="flex-col  p-2 ">
            <div>
              <img className='rounded-lg ease-in-out hover:scale-105 transform transition duration-75' 
              src="/rigging-and-fleeting-loads.jpg" alt="" />
            </div>
            <div className="text-blue-950 text-sm font-medium pt-5 ">
              <h1>Rigging And Fleeting Of Loads N042</h1>
            </div>
            {/* <div className="text-gray-400 p-3">
              <InfoTwoToneIcon />5 Days
            </div>
            <div className="text-gray-400 p-1">
              <GraphicEqTwoToneIcon />
              All Levels
            </div> */}

            {/* <div className="text-gray-400 pt-5 pb-2">
              <AccountCircleTwoToneIcon />
              JCI
            </div> */}
        </div> 

          </div>
{/* 
          <section>
        <div className="font-bold text-2xl text-blue-950 pt-30 text-center">
          <h1>ACCREDITATIONS AND PROFESSIONAL MEMBERSHIPS</h1>
        </div>

        <div className="pl-45 pt-4">
          <img src="/images/gallery/Accreditation.jpg" alt="" />
        </div>
      </section> */}
       </section>
    </div>
  )
}

export default WeldingTraning