import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { useSubmit } from 'react-router-dom';

const CalltoAction = () => {


  return (
    <div>
       <section className='bg-[#242e2a] h-auto pb-10 pt-30'>
      {/* Heading */}
       <div className="text-center font-sans font-bold text-2xl text-gray-200 pb-20">
         <h1>Contact us today to learn more about our training</h1>
       </div>
       
       {/* Buttons */}
       <div className="flex flex-col md:flex-row justify-around gap-4 px-4 pt-4 pb-15">
         <div className="text-black font-semibold text-sm rounded-full bg-gray-200 p-4 hover:bg-[#2b9766] hover:text-white cursor-pointer text-center">
           <a href="https://calendly.com/consult-scaftechservices/30-minute-consultation-with-a-scaftech-representative"><button>Request a free Consultation</button></a>
         </div>
         <div className="text-black font-semibold text-sm rounded-full bg-gray-200 p-4 hover:bg-[#2b9766] hover:text-white cursor-pointer text-center">
           <button>Download our training brochure</button>
         </div>
         <div className="text-black font-semibold text-sm rounded-full bg-gray-200 p-4 hover:bg-[#2b9766] hover:text-white cursor-pointer text-center">
           <button>Register for an upcoming course</button>
         </div>
       </div>

{/* Office Cards */}
<div className="flex flex-col lg:flex-row gap-5 justify-center px-4">
  {/* Lagos */}
  <div
    className="relative w-full lg:w-1/3 h-96 bg-cover bg-center flex items-center justify-start px-8"
    style={{ backgroundImage: `url('/Lagos-Picture2.png')` }}
  >
    <div className="bg-white bg-opacity-25 p-6 rounded-lg shadow-lg max-w-sm">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Lagos Office</h2>
      <p className="text-sm text-gray-700 mb-1">
        Office 27, Ringback mall, <br />
        Beside Mobil Filling Station, Oribanwa <br />
        Bus-stop, Ibeju-Lekki Lagos
      </p>
      <a href="tel:+2348161637797">
        <p className="text-sm hover:text-red-400 text-gray-700 mt-4">
          +234 816 163 7797
        </p>
      </a>
      <a href="mailto:info@scaftechservices.com">
        <p className="text-sm hover:text-green-500 text-blue-600">
          info@scaftechservices.com
        </p>
      </a>
    </div>
  </div>

  {/* Port Harcourt */}
  <div
    className="relative w-full lg:w-1/3 h-96 bg-cover bg-center flex items-center justify-start px-8"
    style={{ backgroundImage: `url('/PH-Picture2.jpg')` }}
  >
    <div className="bg-white bg-opacity-25 p-6 rounded-lg shadow-lg max-w-sm">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Port Harcourt Office</h2>
      <p className="text-sm text-gray-700 mb-1">
        Block6, 3rd Avenue Elekahia Housing Estate, Port Harcourt
      </p>
      <a href="tel:+2347086419457">
        <p className="text-sm hover:text-red-400 text-gray-700 mt-4">
          +234 708 641 9457
        </p>
      </a>
      <a href="mailto:info@scaftechservices.com">
        <p className="text-sm hover:text-green-500 text-blue-600">
          info@scaftechservices.com
        </p>
      </a>
    </div>
  </div>

  {/* Abuja */}
  <div
    className="relative w-full lg:w-1/3 h-96 bg-cover bg-center flex items-center justify-start px-8"
    style={{ backgroundImage: `url('/uganda-picture.jpeg')` }}
  >
    <div className="bg-white bg-opacity-25 p-6 rounded-lg shadow-xl max-w-sm">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Abuja Office</h2>
      <p className="text-sm text-gray-700 mb-1">
        No 29, Ndola Crescent, Wuse Zone6.
      </p>
      <a href="tel:+2347086419457">
        <p className="text-sm hover:text-red-400 text-gray-700 mt-4">
          +234 708 641 9457
        </p>
      </a>
      <a href="mailto:info@scaftechservices.com">
        <p className="text-sm hover:text-green-500 text-blue-600">
          info@scaftechservices.com
        </p>
      </a>
    </div>
  </div>
</div>


        <div className="text-center font-semibold text-5xl text-gray-200 pt-30">
                <h1>Leave Us a Message</h1>
            </div>


            <form className='self-center' action="">
            <div class="mt-10 grid grid-cols-1 justify-items-center gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-4">
          <label for="name" class="block text-sm/6 font-medium text-gray-400">Name</label>
          <div class="mt-2">
            <div class="flex w-96 items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
              <div class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6"></div>
              <input type="text" name="name" id="name" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-400 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="Name"></input>
            </div>
          </div>
        </div>
        </div>

        <div class="mt-5 grid grid-cols-1 justify-items-center gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-4">
          <label for="email" class="block text-sm/6 font-medium text-gray-400">Email</label>
          <div class="mt-2">
            <div class="flex w-96 items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
              <div class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6"></div>
              <input type="text" name="email" id="email" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-400 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="Email"></input>
            </div>
          </div>
        </div>
        </div>

        <div class="mt-5 grid grid-cols-1 justify-items-center gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-4">
          <label for="name of company" class="block text-sm/6 font-medium text-gray-400">Name of Company</label>
          <div class="mt-2">
            <div class="flex w-96 items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
              <div class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6"></div>
              <input type="text" name="name of company" id="name of company" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-400 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="company name"></input>
            </div>
          </div>
        </div>
        </div>

        <div class="mt-5 grid grid-cols-1 justify-items-center gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-4">
          <label for="location" class="block text-sm/6 font-medium text-gray-400">Location</label>
          <div class="mt-2">
            <div class="flex w-96 items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
              <div class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6"></div>
              <input type="text" name="location" id="location" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-400 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="location"></input>
            </div>
          </div>
        </div>
        </div>

        <div class="mt-5 grid grid-cols-1 ml-68 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="col-span-full">
          <label for="about" class="block text-sm/6 font-medium text-gray-400">Message</label>
          <div class="mt-2">
            <textarea name="about" id="about" rows="3" class="block w-96 rounded-md bg-white px-3 py-1.5 text-base text-gray-400 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"></textarea>
          </div>
        </div>
        </div>
          
          <div className='mt-6 ml-68 mb-10 flex items-center gap-x-6'>
          <button type="submit" class="rounded  w-96 bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Send
            </button>
          </div>
            </form>
        </section>

        {/* <section className="mt-3  bg-gray-100 text-center text-blue-950  h-auto py-10">
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
      </section>  */}
    </div>
  )
}

export default CalltoAction