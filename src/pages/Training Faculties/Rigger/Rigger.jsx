import React from 'react'
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import GraphicEqTwoToneIcon from "@mui/icons-material/GraphicEqTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";

const Rigger = () => {
  return (
    <div className='w-full mt-20'>
      <section>
      <img className='w-full h-80 px-5 bg-cover bg-center '
             src="public/rigger-img.jpg" alt="" />

        <div className='text-center bg-gray-100 w-auto h-auto'>
            <h1 className='text-4xl text-gray-900 text-center font-bold pt-10 '>
            RIGGER TRAINING
                </h1>

                <p className='text-sm text-gray-800 py-5'>
                <span className="text-blue-950 font-bold text-base">Slogan:</span>  Trained to Deliver
                </p>
                     {/* <button className="rounded-md border-2 text-base font-medium mb-10 text-gray-950 border-black border-solid p-3 mt-5 hover:text-white hover:bg-blue-900">
                         View Courses 
                    </button> */}-
            </div>

             <div className='text-center'>
              <h1 className='text-2xl text-gray-900 text-center font-bold pt-7 '>
            Course Contents Overview
                </h1>
            </div>

            <article className="pl-15 text-sm text-gray-800 py-4">
               <p>
              Scaftech Engineering Services’ Rigger Training equips participants with the essential skills and
              safety awareness required to prepare, secure, and move heavy loads using <br /> advanced lifting
              equipment. Through our expertly designed program, participants will master rigging techniques,
              equipment selection, load estimation, signaling, and <br /> coordination, all aligned with international
              lifting and safety standards upheld by Scaftech Engineering Services.
               </p>

               <div className=''>
              <h1 className='text-xl text-gray-900 font-bold pt-7 '>
                      Pre-requisites
                </h1>
            </div>

            <p className='pt-3'>
                ●  Basic site safety awareness
                </p>
                <p className='pt-3'>
                ● Medically fit for lifting and field operations
                </p>
                <p className='pt-3'>
                ●  Prior lifting experience is an advantage (but not mandatory)
                </p>
               <p className='pt-3'>
                ●  PPE required for hands-on sessions conducted by Scaftech Engineering Services
                </p>

           <div className=''>
              <h1 className='text-xl text-gray-900 font-bold pt-7 '>
                      Course Objectives
                </h1>
                <p className='pt-4'>
                  Participants in Scaftech Engineering Services’ Rigger Training will:
                </p>
            </div>

            <p className='pt-5'>
                ●  Understand rigging roles, responsibilities, and load dynamics
                </p>
                <p className='pt-3'>
                ● Select and inspect slings, shackles, hooks, and rigging tools with guidance from Scaftech Engineering Services’ industry experts
                </p>
                <p className='pt-3'>
                ●  Estimate load weights and apply rigging methods safely
                </p>
                  <p className='pt-3'>
                ●  Communicate using standard hand and radio signals as per Scaftech Engineering Services’ protocols
                </p>
                  <p className='pt-3'>
                ●  Prevent accidents by identifying rigging hazards and failure risks
                </p>
                <p className='pt-3'>
                ●  Align practices with lifting regulations and site protocols endorsed by Scaftech Engineering Services
                </p>
                
                 

            <div className=''>
              <h1 className='text-xl text-gray-900 font-bold pt-7 '>
                      Target Audience
                </h1>
            </div>

            <p className='pt-3'>
                ●  Riggers (Entry to Advanced)
                </p>
                <p className='pt-3'>
                ● Lifting Crew Members
                </p>
                <p className='pt-3'>
                ●  Crane Operators & Signalers
                </p>
                <p className='pt-3'>
                ●  Site Engineers & Lifting Supervisors
                </p>
                <p className='pt-3'>
                ●  Warehouse & Industrial Handling Staff
                </p>
                <p className='pt-3'>
                ●  Safety and Compliance Officers
                </p>
               

                 <div className=''>
              <h1 className='text-xl text-gray-900 font-bold pt-7 '>
                      Target Industry
                </h1>
            </div>

            <p className='pt-3'>
                ●  Oil & Gas  (Onshore & Offshore)
                </p>
                <p className='pt-3'>
                ● Shipyards & Maritime
                </p>
                <p className='pt-3'>
                ●  Construction & Heavy Engineering
                </p>
                <p className='pt-3'>
                ●  Manufacturing & Logistics
                </p>
                <p className='pt-3'>
                ●  Power Generation & Utilities
                </p>
                <p className='pt-3'>
                ●  Mining, Cement & Infrastructure Projects
                </p>
            


             <div className=''>
              <h1 className='text-xl text-gray-900 font-bold pt-7 '>
                  List of Courses Under Scaftech Engineering Services Rigger Training
                </h1>
            </div>

            <p className='pt-3'>
                ●  Basic Rigger I Training
                </p>
                <p className='pt-3'>
                ● Intermediate Rigger II Training
                </p>
                <p className='pt-3'>
                ●  Advanced Rigger Training
                </p>
                 <p className='pt-3'>
                ● OPITO Rigger Training
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

export default Rigger