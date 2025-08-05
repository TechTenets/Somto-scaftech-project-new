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
             src="/welding-2-img.jpg" alt="" />

        <div className='text-center bg-gray-100 w-auto h-auto'>
            <h1 className='text-4xl text-gray-900 text-center font-bold pt-10 '>
                WELDING TRAINING
                </h1>

               <p className='text-sm text-gray-800 py-5'>
                <span className="text-blue-950 font-bold text-base">Slogan:</span>  Turn Heat into Craft. Turn Skill into Career
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
              Scaftech Engineering Services’ Fabrication/Welding Training offers hands-on, technical
              instruction on metal joining, cutting, shaping, and structural fabrication <br /> using industry-standard
              equipment and techniques. From blueprint reading to safety protocols, this comprehensive
              course, designed by Scaftech Engineering <br /> Services, builds skilled, job-ready welders and
              fabricators with strong safety and precision awareness, ensuring alignment with Scaftech
              Engineering Services’ <br /> commitment to excellence and safety.

               </p>

               <div className=''>
              <h1 className='text-xl text-gray-900 font-bold pt-7 '>
                      Pre-requisites
                </h1>
            </div>

            <p className='pt-3'>
                ●  Basic knowledge of technical drawing is a plus
                </p>
                <p className='pt-3'>
                ● Must be physically fit for workshop activities
                </p>
                <p className='pt-3'>
                ●  Previous shop-floor or metalwork exposure is helpful  but not required
                </p>
                 <p className='pt-3'>
                ●  Safety gear (PPE) required for hands-on sessions conducted by Scaftech Engineering Services
                </p>

           <div className=''>
              <h1 className='text-xl text-gray-900 font-bold pt-7 '>
                      Course Objectives
                </h1>
                <p className='pt-4'>
                  Participants in Scaftech Engineering Services’ Fabrication/Welding Training will:
                </p>
            </div>

            <p className='pt-5'>
                ●  Understand different welding techniques (SMAW, MIG, TIG, etc.)
                </p>
                <p className='pt-3'>
                ● Learn metal cutting, joining, and forming processes with guidance from Scaftech Engineering Services
                </p>
                <p className='pt-3'>
                ●  Interpret fabrication drawings and symbols
                </p>
                  <p className='pt-3'>
                ●  Master safety procedures and proper PPE use as taught by Scaftech Engineering Services
                </p>
                  <p className='pt-3'>
                ●  Gain hands-on experience with welding tools and equipment
                </p>
                <p className='pt-3'>
                ●  Prepare for certification and real-world applications aligned with Scaftech Engineering Services’ standards
                </p>

            <div className=''>
              <h1 className='text-xl text-gray-900 font-bold pt-7 '>
                      Target Audience
                </h1>
            </div>

            <p className='pt-3'>
                ●  Aspiring Welders & Fabricators
                </p>
                <p className='pt-3'>
                ● Technical Students & Trade Apprentices
                </p>
                <p className='pt-3'>
                ●  Maintenance & Workshop Technicians
                </p>
                <p className='pt-3'>
                ●  Construction Site Personnel
                </p>
                <p className='pt-3'>
                ●  Oil & Gas Field Workers
                </p>
                 <p className='pt-3'>
                ●  Skilled Trades Professionals seeking upskilling
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
                ● Construction & Steel Fabrication
                </p>
                <p className='pt-3'>
                ●  Manufacturing & Industrial Production
                </p>
                <p className='pt-3'>
                ●  Shipbuilding & Marine Engineering
                </p>
                <p className='pt-3'>
                ●  Automotive & Heavy Equipment 
                </p>
                <p className='pt-3'>
                ●  Power Plants & Energy Infrastructure
                </p>


             <div className=''>
              <h1 className='text-xl text-gray-900 font-bold pt-7 '>
                      List of Courses Under Scaftech Engineering Services Fabrication/Welding Training
                </h1>
            </div>

            <p className='pt-3'>
                ●  Welding & Cutting General Industry
                </p>
                <p className='pt-3'>
                ● Welding Safety & Hot Work Training
                </p>
                <p className='pt-3'>
                ●  Shielded Metal Arc Welding (SMAW) Training
                </p>
                 <p className='pt-3'>
                ● Pipe & Structural Welding Training
                </p>
                 <p className='pt-3'>
                ● Weld Inspection & Quality Control Training
                </p>
                 <p className='pt-3'>
                ● Weld Repair & Maintenance Training
                </p>
                 <p className='pt-3'>
                ● Fabrication Skill Workshop Training
                </p>
                 <p className='pt-3'>
                ● Gas Metal/Flux-Cored Arc Welding (GMAW/FCAW) Training
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

export default WeldingTraning