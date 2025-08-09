import React from "react";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumbs";
import "./style.css";
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

const About_us = () => {

const offices = [
  {
    city: "Lagos Office",
    address:
      "Office 27, Ringback mall, Beside Mobil Filling Station, Oribanwa Bus-stop, Ibeju-Lekki Lagos",
    phone: "+234 816 163 7797",
    email: "info@scaftechservices.com",
  },
  {
    city: "Port Harcourt Office",
    address: "Block6, 3rd Avenue Elekahia Housing Estate, Port Harcourt.",
    phone: "+234 708 641 9457",
    email: "info@scaftechservices.com",
  },
  {
    city: "Abuja Office",
    address: "No 29, Ndola Crescent, Wuse Zone6.",
    phone: "+234 708 641 9457",
    email: "info@scaftechservices.com",
  },
];


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

     {/* <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-6 bg-gray-50 min-h-screen">
      {offices.map((office, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-xl shadow-md p-6 h-80 w-full max-w-sm hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {office.city}
          </h2>
          <p className="text-gray-600 mb-2">{office.address}</p>
          <a
            href={`tel:${office.phone}`}
            className="block text-blue-600 mb-1 hover:underline"
          >
            {office.phone}
          </a>
          <a
            href={`mailto:${office.email}`}
            className="block text-blue-600 hover:underline"
          >
            {office.email}
          </a>
        </div>
      ))}
    </div> */}
  
    {/* <div className="text-center py-10">
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
  
      
  
    </section> */}
  
    
    <section className="bg-[#242e2a] h-auto pb-10">
  {/* Title */}
  <div className="text-gray-300 font-semibold text-2xl sm:text-3xl text-center pb-10 pt-10">
    <h1>Our Training Centers</h1>
  </div>

  {/* Wrapper */}
  <div className="flex flex-col md:flex-row gap-5 justify-center px-4">
    
    {/* Lagos Office */}
    <div
      className="
        relative w-full md:w-2/3 h-72 sm:h-96 bg-cover bg-center 
        flex items-center justify-start px-4 sm:px-8
        bg-[url('/Lagos-mobile.jpg')] sm:bg-[url('/Lagos-Picture2.png')]
      "
    >
      <div className="bg-white bg-opacity-25 p-4 sm:p-6 rounded-lg shadow-lg max-w-sm">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">Lagos Office</h2>
        <p className="text-xs sm:text-sm text-gray-700 mb-1">
          Office 27, Ringback mall, <br />
          Beside Mobil Filling Station, Oribanwa <br />
          Bus-stop, Ibeju-Lekki Lagos
        </p>
        <a href="tel:+2348161637797">
          <p className="text-xs sm:text-sm hover:text-red-400 text-gray-700 mt-4">
            +234 816 163 7797
          </p>
        </a>
        <a href="mailto:info@scaftechservices.com">
          <p className="text-xs sm:text-sm hover:text-green-500 text-blue-600">
            info@scaftechservices.com
          </p>
        </a>
      </div>
    </div>

    {/* Port Harcourt Office */}
    <div
      className="
        relative w-full md:w-2/3 h-72 sm:h-96 bg-cover bg-center 
        flex items-center justify-start px-4 sm:px-8
        bg-[url('/PH-mobile.jpg')] sm:bg-[url('/PH-Picture2.jpg')]
      "
    >
      <div className="bg-white bg-opacity-25 p-4 sm:p-6 rounded-lg shadow-lg max-w-sm">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">Port Harcourt Office</h2>
        <p className="text-xs sm:text-sm text-gray-700 mb-1">
          Block6, 3rd Avenue Elekahia Housing Estate, Port Harcourt
        </p>
        <a href="tel:+2347086419457">
          <p className="text-xs sm:text-sm hover:text-red-400 text-gray-700 mt-4">
            +234 708 641 9457
          </p>
        </a>
        <a href="mailto:info@scaftechservices.com">
          <p className="text-xs sm:text-sm hover:text-green-500 text-blue-600">
            info@scaftechservices.com
          </p>
        </a>
      </div>
    </div>

    {/* Abuja Office */}
    <div
      className="
        relative w-full md:w-2/3 h-72 sm:h-96 bg-cover bg-center 
        flex items-center justify-start px-4 sm:px-8
        bg-[url('/Abuja-mobile.jpg')] sm:bg-[url('/uganda-picture.jpeg')]
      "
    >
      <div className="bg-white bg-opacity-25 p-4 sm:p-6 rounded-lg shadow-xl max-w-sm">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">Abuja Office</h2>
        <p className="text-xs sm:text-sm text-gray-700 mb-1">
          No 29, Ndola Crescent, Wuse Zone6.
        </p>
        <a href="tel:+2347086419457">
          <p className="text-xs sm:text-sm hover:text-red-400 text-gray-700 mt-4">
            +234 708 641 9457
          </p>
        </a>
        <a href="mailto:info@scaftechservices.com">
          <p className="text-xs sm:text-sm hover:text-green-500 text-blue-600">
            info@scaftechservices.com
          </p>
        </a>
      </div>
    </div>

  </div>
</section>

  </div>
  
  );
};

export default About_us;
