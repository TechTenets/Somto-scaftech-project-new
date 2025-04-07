import React from "react";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs";
import "./style.css";
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

const About_us = () => {
  return (
    <div className="">
    <section className="bg-[#0d182d] min-h-[300px] flex gap-20 items-stretch px-4 md:px-8 lg:px-16">
      
      <div className="text-center mt-20 text-white w-full h-full bg-linear-to-r from-slate-900 to-gray-200 parentDiv">
        <p className="font-bold text-3xl p-2 childDiv1">Our Mission</p>
        <p className="text-lg px-3 pb-3 font-serif childDiv2">
          We are established as a hub where competencies can be Developed,
          Assessed, and Monitored.
        </p>
      </div>
  
      
      <div className="text-center mt-20 rounded-lg text-white w-full h-auto bg-linear-to-r from-slate-900 to-gray-200 parentDiv">
        <p className="font-bold text-3xl p-2 childDiv1">Our Vision</p>
        <p className="text-lg px-3 pb-3 font-serif childDiv2">
          Our vision is to be the most preferred and referred training
          organization in Africa
        </p>
      </div>
    </section>
  
    <section className="bg-[#242e2a] h-auto pb-10 flex text-center justify-center gap-10 md:gap-20 xl:gap-32">
      
      <div className="flex-col">
        <p className="text-4xl text-gray-200 pt-20 font-sans font-bold">100+</p>
        <p className="text-xs text-gray-200 pt-3 font-serif font-bold">
          Accredited Courses
        </p>
      </div>
      <div className="flex-col">
        <p className="text-4xl text-gray-200 pt-20 font-sans font-bold">50,000+</p>
        <p className="text-xs text-gray-200 pt-3 font-serif font-bold">
          Students Trained
        </p>
      </div>
      <div className="flex-col">
        <p className="text-4xl text-gray-200 pt-20 font-sans font-bold">10,000+</p>
        <p className="text-xs text-gray-200 pt-3 font-serif font-bold">
          Positive reviews
        </p>
      </div>
    </section>
  
    <section className="bg-[#201134] h-auto flex gap-8 pl-8 pb-13 pt-20 justify-around md:justify-between">
      <div>
        <img className="w-full h-80 object-cover" src="/PH-Picture2.jpg" alt="" />
      </div>
  
      <div className="text-center lg:text-left">
        <h1 className="pb-4 text-blue-900 font-bold pl-40 text-2xl">WHO WE ARE</h1>
        <p className="pb-3 text-gray-200 text-base">
          "We are a leading provider of specialized industrial training, committed to empowering <br />
          individuals  and organizations with the skills and knowledge necessary for success."
        </p>
        <p className="pb-3 text-gray-200 text-base">
          "We are dedicated to maintaining the highest standards of quality and safety, adhering to <br />
          regulations set by OSHA, the Federal Ministry of Labour (FML), and other recognized bodies."
        </p>
        <p className="text-gray-200 text-base">
          "Our mission is to bridge the skills gap and contribute to a safer, more productive
          industrial workforce."
        </p>
      </div>
    </section>
  
    <div className="text-center py-10">
      <h2 className="text-2xl font-bold text-blue-950">
        Proudly ISO <span className="text-amber-400">9001:2015</span> <span className="text-amber-400">14001:2015</span> <span className="text-amber-400">45001:2018</span> Certified
      </h2>
    </div>
  
    <section className="flex w-full pb-5 gap-10 px-4 h-auto bg-linear-to-r from-[#0b1b2bcc] to-[#0b1b2bcc]">
      <div className="flex-col border text-center border-white rounded-sm border-solid hover:bg-white hover:text-[#0b1b2bcc]">
        <img className="w-1/2 p-7" src="/JC-International.jpg" alt="" />
        <h1 className="py-3 text-base pl-10">ISO <br /> 9001:2015</h1>
        <p className="text-base py-5 px-2">Commitment to consistent quality service delivery.</p>
      </div>
  
      <div className="flex-col border text-center border-white rounded-sm border-solid hover:bg-white hover:text-black">
        <img className="w-1/2 py-5" src="/INTERNATIONAL-LIMITED-CERTIFICATE.jpg" alt="" />
        <h1 className="py-3 text-base pl-10">ISO <br /> 14001:2015</h1>
        <p className="text-base py-5 px-2">Commitment to environmental sustainability.</p>
      </div>
  
      <div className="flex-col border text-center border-white rounded-sm border-solid hover:bg-white hover:text-black">
        <img className="w-1/2 px-4 py-5" src="/INTERNATIONAL-LIMITED-CERTIFICATE_2.jpg" alt="" />
        <h1 className="py-3 text-base pl-10">ISO <br /> 45001:2018</h1>
        <p className="text-base pb-5 px-2">Commitment to occupational safety and health.</p>
      </div>
    </section>
  
    
    <section className="bg-[#0b1b2bcc] text-center text-blue-950 h-auto py-10">
      <div>
        <h1 className="text-2xl font-bold text-gray-300">Frequently Asked Questions</h1>
        <p>Some of your common questions answered</p>
      </div>
  
      <div className="w-full sm:w-2/4 lg:w-1/3 h-auto mx-auto mt-10 px-5 rounded-md bg-gray-50">
        <h1 className="text-base py-5 font-medium">Are there any prerequisites for enrolling in training?</h1>
        <p className="text-xs pb-5">
          Some of our advanced training programs may have prerequisites, such as basic technical skills
          or prior certifications. These requirements will be clearly listed on the respective course pages.
        </p>
      </div>
  
      
  
    </section>
  
    
    <section className="bg-[#242e2a] h-auto pb-10">
      <div className="text-gray-300 font-semibold text-3xl text-center pb-10 pt-30">
        <h1>Our Training Centers</h1>
      </div>
  
      <div className="flex flex-wrap gap-5 justify-center px-4">

        <div className="flex px-4 gap-8 pb-10 text-gray-200">
          <div className="flex-col">
           <img className='h-96' src="/PH-Picture2.jpg" alt="" />

           <p className="text-gray-200 font-bold text-base py-5"> Port Harcourt</p>

           <HomeIcon />
           <p className="py-3">Plot 5, JC Street Off Peter Odili Road, Trans Amadi Industrial Layout,
           Port-Harcourt, Rivers State.</p>
           
           <CallIcon />
           <p className="py-3"> +234 805 700 7225</p>

           <EmailIcon/>
           <p>training@jcinternationalng.com</p>
          </div>

          <div className="flex-col pb-30">
           <img className='h-96' src="/Lagos-Picture2.png" alt="" />

           <p className="text-gray-200 font-bold text-base py-5">Lagos</p>

           <HomeIcon />
           <p className="py-3">56A, Bourdillon Road,
           Ikoyi, Lagos State.</p>
           
           <CallIcon />
           <p className="py-3">   +234 805 659 9659</p>

           <EmailIcon/>
           <p>info@jciservices.com</p>
          </div>
          </div>

          <div className="flex gap-8 px-4 text-gray-200">
          <div className="flex-col">
           <img src="/uganda-picture.jpeg" alt="" />

           <p className="text-gray-200 font-bold text-base py-5"> Uganda</p>

           <HomeIcon />
           <p className="py-3">7th Floor, Course View Towers, Plot 21, Yusuf Lule Road.
             Nakasero, Kampala, Uganda.</p>
           
           <CallIcon />
           <p className="py-3"> +256 757 778 444</p>

           <EmailIcon/>
           <p> info@jciservices.com</p>
          </div>

          <div className="flex-col">
           <img src="/tanzaian-picture.jpg" alt="" />

           <p className="text-gray-200 font-bold text-base py-5"> Tanzania</p>

           <HomeIcon />
           <p className="py-3">P.O. Box 38568 Dar ES Salaam,
             429 Mahando Street Tanzania Msasani Peninsula.</p>
           
           {/* <CallIcon />
           <p className="py-3">   +234 805 659 9659</p> */}

           <EmailIcon/>
           <p>info@jciservices.com</p>
          </div>
        </div>
  
        
  
      </div>
    </section>
  </div>
  
  );
};

export default About_us;
