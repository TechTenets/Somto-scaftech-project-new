import React from "react";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs";
import "./style.css";
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

const About_us = () => {
  return (
    <div className="mt-30">
      <section className="flex gap-20 items-stretch ">
        <div className="text-center  text-white w-full h-full bg-linear-to-r from-slate-900 to-gray-200 parentDiv">
          <p className="font-bold text-3xl  p-2 childDiv1 ">Our Mission</p>

          <p className="text-lg px-3 pb-3 font-serif childDiv2">
            We are established as a hub where competencies can be Developed,{" "}
            Assessed, and Monitored.
          </p>
        </div>

        <div className="text-center rounded-lg text-white w-full h-auto bg-linear-to-r from-slate-900 to-gray-200 parentDiv  ">
          <p className="font-bold text-3xl  p-2 childDiv1 ">Our Vision</p>

          <p className="text-lg px-3 pb-3 font-serif childDiv2">
            Our vision is to be the most preferred and referred training <br />
            organization in Africa
          </p>
        </div>
      </section>

      <section className=" flex text-center justify-center gap-20 ">
        <div className="flex-col ">
          <p className="text-4xl text-blue-950 pt-20 font-sans font-bold">
            100+
          </p>
          <p className="text-xs text-blue-950 pt-3 font-serif font-bold">
          Accredited Courses
          </p>
        </div>
        <div className="flex-col ">
          <p className="text-4xl text-blue-950 pt-20 font-sans font-bold">
            50,000+
          </p>
          <p className="text-xs text-blue-950 pt-3 font-serif font-bold">
          Students Trained
          </p>
        </div>
        <div className="flex-col ">
          <p className="text-4xl text-blue-950 pt-20 font-sans font-bold">
            10,000+
          </p>
          <p className="text-xs text-blue-950 pt-3 font-serif font-bold">
          Positive reviews
          </p>
        </div>
      </section>

      <section className="flex pt-20 justify-around">
        <div>
          <img className="w-full h-80" src="/PH-Picture2.jpg" alt="" />
        </div>

        <div className="">
          <h1 className="pb-4 text-blue-900 font-bold pl-40 text-2xl">WHO WE ARE</h1>
          <p className="pb-3 text-black text-sm">
            JC International is an ISO 9001:2015, 14001:2015, 45001:2018 certified company
             that provides <br /> Training, Inspection, Asset Integrity Maintenance, Pipeline and 
             Process service and Rope <br /> Access services to the Oil and Gas, Marine and
              Construction industries.
              </p>

              <p className="pb-3 text-black text-sm">
              Our strength and continued growth lie in the quality of our people and 
              in our commitment <br /> to offer statutory inspections and trainings that meet
               national and international standards. With <br /> over 20 years experience in
                the field, we have attained numerous professional qualifications <br /> and
                 accreditations which utilize the highest skilled technical and Instructional 
                 staff.
              </p>

              <p className="text-black text-sm">
              Our Training centres and onsite interventions come with the most desirable 
              global <br /> accreditations and awards including IRATA, NPORS, LEEA, IWCF, IADC, ,
               IOSH, AWRF, ASNT, BSC, <br /> and NUPRC which consistently enable us to be the
                “company of choice” for Inspection, <br /> Rope Access and Training.
              </p>
        </div>
      </section>

      <div>
        <h2 className="text-2xl font-bold text-blue-950 text-center pt-30 mb-15 ">
          <span className="inline-block p-2">Proudly IOS</span>
          <span className="animate-[wiggle_1s_ease-in-out_infinite] text-amber-400">9001:2015</span>
          <span className="animate-[wiggle_1s_ease-in-out_infinite] text-amber-400">14001: &nbsp; 2015</span>
          <span className="animate-[wiggle_1s_ease-in-out_infinite] text-amber-400">45001: &nbsp; 2018</span>
          <span className="inline-block p-2">Certified</span>
        </h2>
      </div>

      <section className="inline-flex items-center justify-center w-full gap-10 px-10 h-96 bg-linear-to-r from-gray-900 to-blue-950">
        <div className="flex-col border text-center border-white rounded-sm border-solid hover:bg-white hover:text-black">
          <img className="w-1/2 p-7 " src="/JC-International.jpg" alt="" />

          <h1 className="py-3 text-base pl-10">ISO <br /> 9001:2015</h1>
          <p className="text-base py-5 px-2">
            Commitment <br /> to <br /> consistent <br /> quality <br /> service <br /> delivery.
          </p>
        </div>

        <div className="flex-col border text-center border-white rounded-sm border-solid hover:bg-white hover:text-black">
          <img className="w-1/2 py-5 " src="/INTERNATIONAL-LIMITED-CERTIFICATE.jpg" alt="" />

          <h1 className="py-3 text-base pl-10">ISO <br /> 14001:2015</h1>
          <p className="text-base py-5 px-2">
            Commitment <br /> to <br /> environmental <br /> sustability.
          </p>
        </div>

        <div  className="flex-col border text-center border-white rounded-sm border-solid hover:bg-white hover:text-black">
          <img className="w-1/2 px-4 py-5" src="/INTERNATIONAL-LIMITED-CERTIFICATE_2.jpg" alt="" />

          <h1 className="py-3 text-base pl-10">ISO <br /> 45001:2018</h1>
          <p className="text-base pb-5 px-2">
            Commitment <br /> to <br /> occupational <br /> safety <br /> and <br /> health.
          </p>
        </div>
      </section>

      <section className="text-gray-950 ">
        <h1 className="font-semibold font-serif text-4xl pt-30 pb-5 text-center ">
        Our QHS & E Policy
        </h1>
        <article className="text-wrap px-5">
        <div className="text-sm">
        We will work to sustain our market leadership and increase our
         market share by striving for the highest QHSE standards in our
         endeavours namely Pipeline & Process Services (PPS), Inspections,
          Training, and Assets Integrity Maintenance Services (AIMS).
        </div>

        <h3 className="text-sm py-10">We are committed to:</h3>

        <p className="text-sm p-3 ">1. Customer satisfaction through quality service delivery 
          through the adoption of innovative and cutting-edge technolo
          gies in our industry.
          </p>

          <p className="text-sm p-3">2. Prevention of injuries, ill-health and accident by providing a safe and healthy 
            workplace by conducting our business activities in a manner that protects the environment through the 
            prevention of pollution.
          </p>

          <p className="text-sm p-3">3. Consultation and participation of our workers for the
             continual improvement of our QHSE Management system.
          </p>

          <p className="text-sm p-3">4. Promoting partnership and collaboration with interested
             stakeholders where appropriate QHSE processes and procedures deliver
              sustainable success
          </p>

          <p className="text-sm p-3 ">5. Conducting our business responsibly within communities 
            where we operate.
          </p>

          <p className="text-sm p-3 ">6. Complying with the applicable laws of the Federal Republic of Nigeria and
             acting in accordance with the regulatory requirements in the countries where we operate,
              supported by internal and external audits while working in compliance to ISO 9001:2015,
               14001:2015, and ISO 45001:2018 standards.
          </p>
          
          <p className="text-sm p-3">7. Assigning prime importance to the health and safety of our employees, contractors, 
            visitors and to protect our equipment and assets through constant QHSE improvement.
          </p>

          <p className="text-sm pt-8 ">
              
            This policy statement provides a framework for the establishment and reviewing of our corporate and departmental Integrated Management System (IMS).
            Management shall visibly uphold these principles and regularly review our QHSE performance.
          </p>
          </article>
      </section>


      <section className="mt-20 bg-gray-100 text-center text-blue-950  h-auto py-10">
        <div>
          <div className="text-center text-blue-950">
            <h1 className="text-lg font-bold">
            Frequently Asked Questions.
            </h1>

            <p>
            Some of your common questions answered
            </p>
          </div>

          <div className="w-2/4 h-48 ml-30 mt-20 rounded-md px-5  bg-gray-50">
            <h1 className="text-base py-5 pr-10 font-medium ">
            Are there any prerequisites for enrolling in training?
            </h1>

            <p className="text-xs">
            Some of our advanced training programs may have prerequisites, such as basic technical skills
             or prior <br /> certifications. These requirements will be clearly listed on the respective course pages. For beginners, we offer
             entry-level courses with no prior experience required.
            </p>
          </div>

          <div className="w-2/4 h-48 ml-30 mt-20 rounded-md px-5  bg-gray-50">
            <h1 className="text-base py-5 pr-10 font-medium ">
            Does JC International offer job placement after training?
            </h1>

            <p className="text-xs">
            While we do not guarantee job placements, we do provide our trainees with industry connections, networking 
            opportunities, and a robust certification that can significantly enhance their employability in the oil and gas,
             marine, and construction sectors.
            </p>
          </div>
          <div className="w-2/4 h-48 ml-30 mt-20 rounded-md px-5  bg-gray-50">
            <h1 className="text-base py-5 pr-10 font-medium ">
            What industries do JC International's training programs serve?
            </h1>

            <p className="text-xs">
            Our training programs are designed for professionals in the oil and gas, marine, construction, and 
            related industries. We focus on safety, operational efficiency, and industry compliance to ensure our trainees meet global
             standards.
            </p>
          </div>

          <div className="w-2/4 h-48 ml-30 mt-20 rounded-md px-5  bg-gray-50">
            <h1 className="text-base py-5 pr-10 font-medium ">
            Can I book a custom training for my company?
            </h1>

            <p className="text-xs">
            Absolutely. JC International offers customized corporate training programs tailored to the specific needs of your company.
             Our team will work with you to create a course schedule and content that aligns with your operational requirements and certificates will be issued
              upon completion.
            </p>
          </div>
          <div className="w-2/4 h-48 ml-30 mt-20 rounded-md px-5  bg-gray-50">
            <h1 className="text-base py-5 pr-10 font-medium ">
            What qualifications do JC International instructors hold?
            </h1>

            <p className="text-xs">
            All our instructors hold relevant certifications from globally recognized institutions, such as ASNT, IWCF, OPITO, IRATA, IADC,
             and NPORS. Many of them have also worked extensively in their respective fields, providing real-world insights during the training.
            </p>
          </div>
        </div>
      </section>

      <section>
          <div className="text-blue-950 font-semibold text-2xl text-center pb-10 pt-30">
            <h1>Our Training Centers</h1>
          </div>
           
           <div className="flex justify-between px-4 gap-3 pb-10 text-blue-950">
          <div className="flex-col">
           <img className="h-96" src="/PH-Picture2.jpg" alt="" />

           <p className="text-blue-950 font-bold text-base py-5"> Port Harcourt</p>

           <HomeIcon />
           <p className="py-3">Plot 5, JC Street Off Peter Odili Road, Trans Amadi Industrial Layout,
           Port-Harcourt, Rivers State.</p>
           
           <CallIcon />
           <p className="py-3"> +234 805 700 7225</p>

           <EmailIcon/>
           <p>training@jcinternationalng.com</p>
          </div>

          <div className="flex-col">
           <img className="h-96" src="/Lagos-Picture2.png" alt="" />

           <p className="text-blue-950 font-bold text-base py-5">Lagos</p>

           <HomeIcon />
           <p className="py-3">56A, Bourdillon Road,
           Ikoyi, Lagos State.</p>
           
           <CallIcon />
           <p className="py-3">   +234 805 659 9659</p>

           <EmailIcon/>
           <p>info@jciservices.com</p>
          </div>
          </div>

          <div className="flex gap-5 px-4 text-blue-950">
          <div className="flex-col">
           <img className="" src="/uganda-picture.jpeg" alt="" />

           <p className="text-blue-950 font-bold text-base py-5"> Uganda</p>

           <HomeIcon />
           <p className="py-3">7th Floor, Course View Towers, Plot 21, Yusuf Lule Road.
             Nakasero, Kampala, Uganda.</p>
           
           <CallIcon />
           <p className="py-3"> +256 757 778 444</p>

           <EmailIcon/>
           <p> info@jciservices.com</p>
          </div>

          <div className="flex-col">
           <img className="" src="/tanzaian-picture.jpg" alt="" />

           <p className="text-blue-950 font-bold text-base py-5"> Tanzania</p>

           <HomeIcon />
           <p className="py-3">P.O. Box 38568 Dar ES Salaam,
             429 Mahando Street Tanzania Msasani Peninsula.</p>
           
           {/* <CallIcon />
           <p className="py-3">   +234 805 659 9659</p> */}

           <EmailIcon/>
           <p>info@jciservices.com</p>
          </div>
          </div>
      </section>


      <section>
        <div className="text-center pt-20 text-black text-sm font-serif">
          <p>Trusted by the world's best</p>
        </div>

        <div className="flex pl-10 pt-5 pb-5 justify-between ">
          <img src="/images/gallery/saipem.jpg" alt="Saipem logo" />

          <img src="/images/gallery/exxonmobil.jpg" alt="exxonmobil logo" />

          <img
            src="/images/gallery/total-energies.jpg"
            alt="total-energies logo"
          />

          <img src="/images/gallery/chevron.jpg" alt="chevron logo" />

          <img src="/images/gallery/sep.jpg" alt="Seplat logo" />

          <img src="/images/gallery/odenl.jpg" alt="Odenl logo" />
        </div>
      </section>

      <section>
        <div className="font-bold text-2xl text-blue-950 pt-30 text-center">
          <h1>ACCREDITATIONS AND PROFESSIONAL MEMBERSHIPS</h1>
        </div>

        <div className="pl-45 pt-4">
          <img src="/images/gallery/Accreditation.jpg" alt="" />
        </div>
      </section>
    </div>
  );
};

export default About_us;
