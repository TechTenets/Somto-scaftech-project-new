import React from 'react'
import "./style.css"
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import GraphicEqTwoToneIcon from "@mui/icons-material/GraphicEqTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";

const Scaffold = () => {
  return (
    <div className=' w-full mt-20'>
       <section>
            <img className='w-full h-80 px-5 object-fill bg-center  cursor-pointer'
             src="public/scaffold-img.jpg" alt="" />

        <div className='text-center bg-gray-100 w-auto h-auto'>
            <h1 className='text-4xl text-gray-900 text-center font-bold pt-10 '>
                Scaffold Training 
                </h1>

                <p className='text-sm text-gray-800 py-5'>
                <span className="text-blue-950 font-bold text-base">Slogan:</span>  Building with Trust and Unity
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

                  
                  <article className="pl-15 text-sm text-gray-800 py-10">
              <p>
             Scaftech Engineering Services’ Scaffold Training equips workers with the knowledge and
             practical skills to safely erect, inspect, and dismantle scaffolding in line with <br /> industry standards.
             This comprehensive program, designed by Scaftech Engineering Services, emphasizes stability,
             load capacity, fall protection, and hazard prevention, <br /> ensuring zero compromise on safety when
             working at height, reflecting Scaftech Engineering Services’ commitment to excellence and
             safety.
              </p>
               
               
               <div className=''>
              <h1 className='text-xl text-gray-900 font-bold pt-7 '>
                      Pre-requisites
                </h1>
            </div>

            <p className='pt-3'>
                ●  Basic physical fitness and safety awareness
                </p>
                <p className='pt-3'>
                ● Prior construction or site experience (recommended)
                </p>
                <p className='pt-3'>
                ●  Must have or be provided with appropriate PPE for Scaftech Engineering Services’ training sessions
                </p>
                 <p className='pt-3'>
                ● Medical clearance for height work (where applicable)
                </p>


                 <div className=''>
              <h1 className='text-xl text-gray-900 font-bold pt-7 '>
                      Course Objectives
                </h1>
                <p className='pt-4'>
                  Participants in Scaftech Engineering Services’ Scaffold Training will:
                </p>
            </div>

             <p className='pt-5'>
                ●  Understand types of scaffolding systems and their applications
                </p>
                <p className='pt-3'>
                ● Learn safe assembly, modification, and dismantling procedures with guidance from Scaftech Engineering Services
                </p>
                <p className='pt-3'>
                ●  Conduct scaffold safety inspections and identify hazards
                </p>
                  <p className='pt-3'>
                ●  Master fall prevention, load limits, and tagging protocols as taught by Scaftech Engineering Services
                </p>
                  <p className='pt-3'>
                ●  Ensure compliance with local and international scaffold standards
                </p>
                

                <div className=''>
              <h1 className='text-xl text-gray-900 font-bold pt-7 '>
                      Target Audience
                </h1>
            </div>

               <p className='pt-3'>
                ●  Scaffolders & Riggers
                </p>
                <p className='pt-3'>
                ●  Construction & Site Workers
                </p>
                <p className='pt-3'>
                ●  Safety Officers & Site Engineers
                </p>
                <p className='pt-3'>
                ●  Maintenance & Utility Crews
                </p>
                <p className='pt-3'>
                ●  Supervisors overseeing elevated work
                </p>

             <div className=''>
              <h1 className='text-xl text-gray-900 font-bold pt-7 '>
                      Target Industry
                </h1>
            </div>

              <p className='pt-3'>
                ●  Construction & Civil Engineering
                </p>
                <p className='pt-3'>
                ●  Oil & Gas
                </p>
                <p className='pt-3'>
                ●  Power & Energy Projects
                </p>
                <p className='pt-3'>
                ●  Manufacturing & Industrial Services
                </p>
                <p className='pt-3'>
                ●  Shipyards & Marine Operations
                </p>
                <p className='pt-3'>
                ●  Facility Maintenance & Infrastructure Projects
                </p>
                
                
                

            <div className=''>
              <h1 className='text-xl text-gray-900 font-bold pt-7 '>
                      List of Courses Under Scaftech Engineering Services Scaffold Training
                </h1>
            </div>

          <p className='pt-3'>
                ●  Scaffold Erector Training
                </p>
                <p className='pt-3'>
                ●  Scaffold Inspector Training
                </p>
                <p className='pt-3'>
                ●  Scaffold Safety & Emergency Response Training
                </p>
                 <p className='pt-3'>
                ● Excavator Operations Training
                </p>
                  <p className='pt-3'>
                ● Scaffold User & Builder Training
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

export default Scaffold