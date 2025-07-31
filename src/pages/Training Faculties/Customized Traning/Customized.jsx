import React from 'react'
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import GraphicEqTwoToneIcon from "@mui/icons-material/GraphicEqTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";

const Customized= () => {
  return (
    <div className='w-full mt-20'>
      <section>
      <img className='w-full h-80 px-5 bg-cover bg-center cursor-pointer'
             src="public/customised-img.jpg" alt="" />

        <div className='text-center bg-gray-100 w-auto h-auto'>
            <h1 className='text-4xl text-gray-900 text-center font-bold pt-10 '>
            CUSTOMIZED TRAINING (According to Client Specification)
                </h1>

                <p className='text-sm text-gray-800 py-5'>
                Tailored Training Solutions. Customized Programs for Your Needs.
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
              Scaftech Engineering Services’ Customized Training is a fully adaptable program designed to
              meet specific client goals, worksite conditions, compliance standards, <br /> and workforce gaps. From
              safety and technical skills to leadership and compliance, this solution-based training, crafted by
              Scaftech Engineering Services, is built around <br /> your company’s real needs, ensuring maximum
              relevance, engagement, and ROI with Scaftech Engineering Services’ commitment to
              excellence.

              </p>
               
               
               <div className=''>
              <h1 className='text-xl text-gray-900 font-bold pt-7 '>
                      Pre-requisites
                </h1>
            </div>

            <p className='pt-3'>
                ●  Clearly defined training objectives and outcomes (from client)
                </p>
                <p className='pt-3'>
                ● Willingness to collaborate with Scaftech Engineering Services on content scoping and customization
                </p>
                <p className='pt-3'>
                ●  Access to existing operational procedures, job roles, or compliance gaps
                </p>
                <p className='pt-3'>
                ●  Target workforce or department ready for engagement with Scaftech Engineering Services’ tailored training
                </p>


                 <div className=''>
              <h1 className='text-xl text-gray-900 font-bold pt-7 '>
                      Course Objectives (Tailored per client, but generally to):
                </h1>
                {/* <p className='pt-4'>
                  Participants in Scaftech Engineering Services’ Mental Readiness & Ergonomics Training will:
                </p> */}
            </div>

             <p className='pt-5'>
                ●  Address site-specific operational, safety, or performance challenges with Scaftech Engineering Services’ expertise
                </p>
                <p className='pt-3'>
                ● Upskill employees based on current industry standards or new regulations
                </p>
                <p className='pt-3'>
                ●  Bridge identified knowledge or competency gaps through Scaftech Engineering Services’ targeted approach
                </p>
                  <p className='pt-3'>
                ●  Improve job-specific execution, safety, and team communication
                </p>
                  <p className='pt-3'>
                ●  Provide measurable impact in productivity, safety, or compliance aligned with Scaftech Engineering Services’ standards
                </p>
              

                <div className=''>
              <h1 className='text-xl text-gray-900 font-bold pt-7 '>
                      Target Audience
                </h1>
            </div>

             <p className='pt-3'>
                ●  Companies with unique operational needs
                </p>
                <p className='pt-3'>
                ● Project-specific teams or site-based workgroups
                </p>
                <p className='pt-3'>
                ●  HR, HSE, and Learning & Development Managers
                </p>
                <p className='pt-3'>
                ●  Compliance units or technical departments
                </p>
                <p className='pt-3'>
                ●  Multidisciplinary or multi-level workforce
                </p>
                

             <div className=''>
              <h1 className='text-xl text-gray-900 font-bold pt-7 '>
                      Target Industry
                </h1>
            </div>

              <p className='pt-3'>
                ●  Oil & Gas / Marine / Power & Utilities
                </p>
                <p className='pt-3'>
                ●  Engineering & Construction
                </p>
                <p className='pt-3'>
                ●  Manufacturing / FMCG / Mining
                </p>
                <p className='pt-3'>
                ●  Agro-Processing & Industrial Services
                </p>
                <p className='pt-3'>
                ●  Government Agencies, NGOs & Multinational Projects
                </p>
                <p className='pt-3'>
                ●  Any industry with project-based or technical workforce requiring tailored instruction from Scaftech Engineering Services
                </p>

            {/* <div className=''>
              <h1 className='text-xl text-gray-900 font-bold pt-7 '>
                      List of Courses Under Scaftech Engineering Services Mental Readiness and Ergonomics Training
                </h1>
            </div>

              <p className='pt-3'>
                ●  Corporate Ergonomics Program
                </p>
                <p className='pt-3'>
                ●  Basic Workplace Ergonomics Training
                </p>
                <p className='pt-3'>
                ●  Participatory Ergonomics Team Training
                </p> */}
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

export default Customized