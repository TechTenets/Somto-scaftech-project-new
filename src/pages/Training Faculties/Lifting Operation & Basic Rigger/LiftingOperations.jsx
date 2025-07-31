import React from 'react'
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import GraphicEqTwoToneIcon from "@mui/icons-material/GraphicEqTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";

const LiftingOperation = () => {
  return (
    <div className='w-full mt-20'>
        <section>
        <img className='w-full h-80 px-5 bg-cover bg-center cursor-pointer'
             src="public/lifting-operation-img.jpg" alt="" />

        <div className='text-center bg-gray-100 w-auto h-auto'>
            <h1 className='text-4xl text-gray-900 text-center font-bold pt-10 '>
           LIFTING OPERATION TRAINING & BASIC RIGGER
                </h1>

                 <p className='text-sm text-gray-800 py-5'>
                <span className="text-blue-950 font-bold text-base">Slogan:</span>  Lift Safe. Lift Smart. Lift Right
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
               Scaftech Engineering Services’ Lifting Operations Training equips personnel with the skills,
               knowledge, and awareness to plan, supervise, and execute lifting tasks safely <br /> and efficiently.
               This comprehensive program, designed by Scaftech Engineering Services, focuses on lifting
               gear inspection, load calculation, communication signals, <br /> and legal compliance, minimizing the
               risk of accidents and equipment failure in high-risk environments while upholding Scaftech
               Engineering Services’ commitment <br /> to safety and excellence.
               </p>

               <div className=''>
              <h1 className='text-xl text-gray-900 font-bold pt-7 '>
                      Pre-requisites
                </h1>
            </div>

            <p className='pt-3'>
                ●  Basic understanding of site safety practices
                </p>
                <p className='pt-3'>
                ● Physically fit and medically cleared for fieldwork
                </p>
                <p className='pt-3'>
                ●  Prior experience in rigging/lifting is a plus (for advanced levels)
                </p>
               <p className='pt-3'>
                ●  PPE required for practical sessions conducted by Scaftech Engineering Services
                </p>

           <div className=''>
              <h1 className='text-xl text-gray-900 font-bold pt-7 '>
                      Course Objectives
                </h1>
                <p className='pt-4'>
                  Participants in Scaftech Engineering Services’ Lifting Operations Training will:
                </p>
            </div>

            <p className='pt-5'>
                ●  Understand lifting principles, load dynamics, and safe lifting procedures
                </p>
                <p className='pt-3'>
                ● Identify and inspect lifting equipment (slings, shackles, cranes, etc.) with guidance from Scaftech Engineering Services
                </p>
                <p className='pt-3'>
                ●  Learn proper use of lifting accessories and safety precautions
                </p>
                  <p className='pt-3'>
                ●  Interpret lifting plans, risk assessments, and signaling techniques as taught by Scaftech Engineering Services
                </p>
                  <p className='pt-3'>
                ●  Ensure compliance with local and international lifting regulations
                </p>
               
                 

            <div className=''>
              <h1 className='text-xl text-gray-900 font-bold pt-7 '>
                      Target Audience
                </h1>
            </div>

            <p className='pt-3'>
                ●  Riggers & Signalers
                </p>
                <p className='pt-3'>
                ● Crane & Forklift Operators
                </p>
                <p className='pt-3'>
                ●  Lifting Supervisors & Coordinators
                </p>
                <p className='pt-3'>
                ●  Site Engineers & Safety Officers
                </p>
                <p className='pt-3'>
                ●  Oilfield & Construction Workers
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
                ● Logistics & Material Handling
                </p>
                <p className='pt-3'>
                ●  Construction & Infrastructure
                </p>
                <p className='pt-3'>
                ●  Power Plants & Heavy Manufacturing
                </p>
                <p className='pt-3'>
                ●  Warehousing & Equipment Rental Companies
                </p>
                <p className='pt-3'>
                ●  Logistics & Material Handling
                </p>
            


             <div className=''>
              <h1 className='text-xl text-gray-900 font-bold pt-7 '>
                     List of Courses Under Scaftech Engineering Services Lifting Operations Training
                </h1>
            </div>

            <p className='pt-3'>
                ●  Lifting Operators Training
                </p>
                <p className='pt-3'>
                ● Lifting & Slinging Training
                </p>
                <p className='pt-3'>
                ●  Banksman & Slinger Training
                </p>
                 <p className='pt-3'>
                ● Cargo Carrying Unit Inspection Training
                </p>


            </article>

           
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

export default LiftingOperation