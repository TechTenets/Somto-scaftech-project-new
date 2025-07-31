import React from 'react'
import "./style.css"
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import GraphicEqTwoToneIcon from "@mui/icons-material/GraphicEqTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";

const NDT = () => {
  return (
    <div className=' w-full mt-20'>
       <section>
            <img className='w-full h-80 px-5 object-fill bg-center  cursor-pointer'
             src="public/NDT-img.jpg" alt="" />

        <div className='text-center bg-gray-100 w-auto h-auto'>
            <h1 className='text-4xl text-gray-900 text-center font-bold pt-10 '>
                NDT Certification Ensure Material Integrity Training. 
                </h1>

                <p className='text-sm text-gray-800 py-5'>
                <span className="text-blue-950 font-bold text-base">Slogan:</span>  See What Others Can’t. Detect Without Damage
                </p>

                     {/* <button className="rounded-md border-2 text-base font-medium mb-10 text-gray-950 border-black border-solid p-3 mt-5 hover:text-white hover:bg-blue-900">
                         View Courses 
                    </button> */}
            </div>

            <div className='text-center'>
              <h1 className='text-2xl text-gray-900 text-center font-bold pt-7 '>
                    Course Contents Overview
                </h1>
            </div>
                  
            <article className="pl-15 text-sm text-gray-800 py-4">
               <p>
             Scaftech Engineering Services’ NDT Training is designed to equip technicians with critical
             inspection techniques used to evaluate the integrity of materials, components, <br /> or structures
             without causing damage. The course covers methods such as Ultrasonic Testing (UT),
             Radiographic Testing (RT), Penetrant Testing (PT), Magnetic Particle <br /> Testing (MT), and Visual
             Testing (VT), helping participants identify flaws, ensure quality, and meet global standards in
             safety and reliability.
               </p>

               <div className=''>
              <h1 className='text-xl text-gray-900 font-bold pt-7 '>
                      Pre-requisites
                </h1>
            </div>

            <p className='pt-3'>
                ●  Basic understanding of science or engineering principles
                </p>
                <p className='pt-3'>
                ● Prior technical or field experience (preferred for advanced levels)
                </p>
                <p className='pt-3'>
                ●  Strong attention to detail and analytical mindset
                </p>
               <p className='pt-3'>
                ●  Medical clearance for visual acuity (especially for VT and PT)
                </p>
                <p className='pt-3'>
                ●  PPE and safety compliance for hands-on sessions
                </p>

           <div className=''>
              <h1 className='text-xl text-gray-900 font-bold pt-7 '>
                      Course Objectives
                </h1>
                <p className='pt-4'>
                  Participants in Scaftech Engineering Services’ NDT Training will:
                </p>
            </div>

            <p className='pt-5'>
                ●  Understand the principles and applications of NDT methods (VT, MT, PT, UT, RT)
                </p>
                <p className='pt-3'>
                ● Learn to detect surface and subsurface defects in materials and welds
                </p>
                <p className='pt-3'>
                ●  Gain hands-on practice in equipment setup, calibration, and test execution
                </p>
                  <p className='pt-3'>
                ●  Interpret results, generate inspection reports, and comply with codes
                </p>
                  <p className='pt-3'>
                ●  Meet the competency requirements for certification (ASNT, ISO, PCN)
                </p>
                <p className='pt-3'>
                ●  Promote zero-defect quality control in high-risk industries
                </p>
                
                 

            <div className=''>
              <h1 className='text-xl text-gray-900 font-bold pt-7 '>
                      Target Audience
                </h1>
            </div>

            <p className='pt-3'>
                ●  Aspiring NDT Technicians & Inspectors
                </p>
                <p className='pt-3'>
                ● QA/QC Personnel
                </p>
                <p className='pt-3'>
                ●  Mechanical & Welding Engineers
                </p>
                <p className='pt-3'>
                ●  Maintenance & Inspection Teams
                </p>
                <p className='pt-3'>
                ●  HSE Officers in asset integrity roles
                </p>
                <p className='pt-3'>
                ●  Shutdown & Turnaround Personnel
                </p>
               

                 <div className=''>
              <h1 className='text-xl text-gray-900 font-bold pt-7 '>
                      Target Industry
                </h1>
            </div>

            <p className='pt-3'>
                ●  Oil & Gas 
                </p>
                <p className='pt-3'>
                ● Power & Energy
                </p>
                <p className='pt-3'>
                ●  Aerospace & Aviation
                </p>
                <p className='pt-3'>
                ●  Manufacturing & Steel Fabrication
                </p>
                <p className='pt-3'>
                ●  Construction & Civil Engineering
                </p>
                <p className='pt-3'>
                ●  Marine, Shipbuilding & Offshore Structures
                </p>
                <p className='pt-3'>
                ●  Petrochemical & Refinery Operations
                </p>


             <div className=''>
              <h1 className='text-xl text-gray-900 font-bold pt-7 '>
                  LIST OF COURSES UNDER SCAFTECH ENGINEERING SERVICES’ NDT TRAINING:
                </h1>
            </div>

            <p className='pt-3'>
                ●  Radiographic Inspection Training
                </p>
                <p className='pt-3'>
                ● Dye Penetrant Inspection Training
                </p>
                <p className='pt-3'>
                ●  Visual & Ultrasonic Testing Training
                </p>
                 <p className='pt-3'>
                ● Inspection Engineer Training
                </p>
                 


            </article>


          
          {/* <div className='flex justify-around'>
            <div className="flex-col rounded-lg p-2 ">
            <div>
              <img className='rounded-lg ease-in-out w-80 h-60 hover:scale-105 transform transition duration-75' src="/jci-drive.jpg" alt="" />
            </div>
            <div className="text-blue-950 text-sm font-medium pt-5 ">
              <h1>Forklift Operations</h1>
            </div>
            <div className="text-gray-400 p-3">
              <InfoTwoToneIcon />2 Days
            </div>

            <div className="text-gray-400 p-1">
              <GraphicEqTwoToneIcon />
              Expert
            </div>

            <div className="text-gray-400 pt-5 pb-2">
              <AccountCircleTwoToneIcon />
              JCI
            </div>
          </div>

          <div className="flex-col p-2 ">
            <div>
              <img className='rounded-lg  ease-in-out hover:scale-105 transform transition-all duration-75'
               src="/PRA7425.jpg" alt="" />
            </div>
            <div className="text-blue-950 text-sm font-medium pt-5 ">
              <h1>Rigger Training</h1>
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

          <div className="flex-col p-2 ease-in-out ">
            <div>
              <img className='rounded-lg w-96 h-60 hover:scale-105 transform transition duration-75'
               src="/jci-25.jpg" alt="" />
            </div>
            <div className="text-blue-950 text-sm font-medium pt-5 ">
              <h1>Management Of Lifting & Slinging</h1>
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
              <img className='rounded-lg ease-in-out hover:scale-105 transform transition duration-75' 
              src="/rigging-and-fleeting-loads.jpg" alt="" />
            </div>
            <div className="text-blue-950 text-sm font-medium pt-5 ">
              <h1>Rigging And Fleeting Of Loads N042</h1>
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

          </div> */}

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

export default NDT