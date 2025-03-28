import React from 'react'
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import GraphicEqTwoToneIcon from "@mui/icons-material/GraphicEqTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";


const ClientTestimonials = () => {
  return (
    <div>
        <section>
            <div className="text-center font-semibold text-6xl text-blue-950 pt-20 pb-4">
                <h1>Client Testimonials</h1>
            </div>

            <p className="font-bold text-blue-600 text-lg pb-8 pl-10 text-center">
            Hear from our satified clients and see how our training programs have helped
            them achieve their goals.
            </p>

            
        {/* <div className="flex pl-10 justify-between">
          <div className=" p-2">
            <div>
              <img className='w-2/4 h-3/4' src="/images/opito-1.jpg" alt="" />
              <p className='text-gray-950 pt-10 font-bold text-base '>Verify OPITO Certificate</p>
            </div>
          </div>

          <div className=" p-2">
            <div>
              <img className='w-2/4 h-3/4' src="/images/IOSH-2.png" alt="" />
              <p className='text-gray-950 pt-10 font-bold text-base '>Verify iOSH Certificate</p>
            </div>
          </div>

          <div className=" p-2">
            <div>
              <img className='w-2/4 h-3/4' src="/images/NPORS-3.png" alt="" />
              <p className='text-gray-950 pt-10 font-bold text-base '>Verify NPORS Certificate</p>
            </div>
          </div>

          <div className=" p-2">
            <div>
              <img className='w-2/4 h-3/4' src="/images/IWCF-4.png" alt="" />
              <p className='text-gray-950 pt-10 font-bold text-base '>Verify IWCF Certificate</p>
            </div>
          </div>
          </div>

          
        <div className="flex pl-10 justify-between">
          <div className=" p-2">
            <div>
              <img className='w-2/4 h-3/4' src="/images/IADC-5.jpg" alt="" />
              <p className='text-gray-950 pt-10 font-bold text-base '>Verify IADC DIT Certificate</p>
            </div>
          </div>
       

          <div className=" p-2">
            <div>
              <img className='w-2/4 h-3/4' src="/images/leea-6.png" alt="" />
              <p className='text-gray-950 pt-10 font-bold text-base '>Verify LEEA Certificate</p>
            </div>
          </div>

          <div className=" p-2">
            <div>
              <img className='w-2/4 h-3/4' src="/images/nuprc-7.png" alt="" />
              <p className='text-gray-950 pt-10 font-bold text-base '>Verify JCI Certificate(NUPRC)</p>
            </div>
          </div>

          <div className=" p-2">
            <div>
              <img className='w-2/4 h-3/4' src="/images/IADC-8.jpg" alt="" />
              <p className='text-gray-950 pt-10 font-bold text-base '>Verify IADC DIT Certificate</p>
            </div>
          </div>
        </div>
         
        <div className="flex pl-10">
          <div className=" p-2">
            <div>
              <img className='w-2/4 h-3/4' src="/images/ASNT-9.jpg" alt="" />
              <p className='text-gray-950 pt-10 font-bold text-base '>Verify ASNT Certificate</p>
            </div>
          </div>
          <div className=" p-2">
            <div>
              <img className='w-2/4 h-3/4' src="public/images/IRATA-10.png" alt="" />
              <p className='text-gray-950 pt-10 font-bold text-base '>Verify IRATA Certificate</p>
            </div>
          </div>
        </div> */}

<section className="bg-[#0b1b2bcc] w-full pb-10  ">
        <div className="font-sans font-medium text-white text-2xl text-center pt-10">
          <h1>What our Clients have to say</h1>

          <p className="text-sm font-serif pt-2 pb-10 text-amber-100 font-normal">
            We have a track record of Excellence
          </p>
        </div>

        <div className="flex justify-around">
          <div className=" h-auto w-lg">
            <div className="text-black bg-white mb-5 flex flex-col">
              <div className=" text-amber-600 p-2 flex justify-center">
                <StarIcon />

                <StarIcon />

                <StarIcon />

                <StarIcon />

                <StarIcon />

                <StarHalfIcon />
              </div>

              <div className="pb-5 flex">
                <div>
                  <img
                    className="rounded-full w-md h-3/4 p-4"
                    src="/pikaso.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <p className="pt-5 pb-2 font-medium font-serif text-base">
                    Working with Scaftech for OPITO Riggers training has been a game
                    changer for us. Their commitment to safety is evident in
                    every session, and we feel confident knowing our team is
                    well- prepared
                  </p>

                  <h1 className="text-blue-950 font-mono text-sm">
                    Olawale Philip
                  </h1>

                  <div>Competence Development Manager</div>
                </div>
              </div>
            </div>
          </div>

          <div className=" h-auto w-lg">
            <div className="text-black bg-white mb-5 flex flex-col">
              <div className=" text-amber-600 p-2 flex justify-center">
                <StarIcon />

                <StarIcon />

                <StarIcon />

                <StarIcon />

                <StarIcon />

                <StarHalfIcon />
              </div>

              <div className="pb-5 flex">
                <div>
                  <img
                    className="rounded-full w-md h-3/4 p-4"
                    src="/pikaso_2.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <p className="pt-5 pb-2 font-medium font-serif text-base">
                    Thanks to JCI's NDT training, our inspection processes have
                    improved significantly. The practical exercises provided us
                    with the confidence to apply our knowledge effectively.
                  </p>

                  <h1 className="text-blue-950 font-mono text-sm">
                    Effiong Bassey
                  </h1>

                  <div>QAQC Manager</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-around">
          <div className=" h-auto w-lg">
            <div className="text-black bg-white mb-5 flex flex-col">
              <div className=" text-amber-600 p-2 flex justify-center">
                <StarIcon />

                <StarIcon />

                <StarIcon />

                <StarIcon />

                <StarIcon />

                <StarHalfIcon />
              </div>

              <div className="pb-5 flex">
                <div>
                  <img
                    className="rounded-full w-md h-3/4 p-4"
                    src="/pikaso_3.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <p className="pt-5 pb-2 font-medium font-serif text-base">
                    Completing the IWCF course at JCI was a pivotal moment for
                    our team. The knowledge gained about well control is
                    invaluable, and the training environment was both supportive
                    and professional.
                  </p>

                  <h1 className="text-blue-950 font-mono text-sm">
                    Emmanuel Bode
                  </h1>

                  <div>Drilling Manager</div>
                </div>
              </div>
            </div>
          </div>

          <div className=" h-auto w-lg">
            <div className="text-black bg-white mb-5 flex flex-col">
              <div className=" text-amber-600 p-2 flex justify-center">
                <StarIcon />

                <StarIcon />

                <StarIcon />

                <StarIcon />

                <StarIcon />

                <StarHalfIcon />
              </div>

              <div className="pb-5 flex">
                <div>
                  <img
                    className="rounded-full w-md h-3/4 p-4"
                    src="/istockphoto-woman3.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <p className="pt-5 pb-2 font-medium font-serif text-base">
                    I had a wonderful experience completing my OPITO trainings
                    (Rigger Stage 1 and Banksman Stage 3) and obtaining a
                    Forklift Competence certificate. I extend my sincere thanks
                    to all the JCI staff.
                  </p>

                  <h1 className="text-blue-950 font-mono text-sm">
                    Inna 
                  </h1>

                  <div>Rigger Manager</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0b1b2bcc] w-full pb-10  ">
        {/* <div className="font-sans font-medium text-white text-2xl text-center pt-10">
          <h1>What our Clients have to say</h1>

          <p className="text-sm font-serif pt-2 pb-10 text-amber-100 font-normal">
            We have a track record of Excellence
          </p>
        </div> */}

        <div className="flex justify-around">
          <div className=" h-auto w-lg">
            <div className="text-black bg-white mb-5 flex flex-col">
              <div className=" text-amber-600 p-2 flex justify-center">
                <StarIcon />

                <StarIcon />

                <StarIcon />

                <StarIcon />

                <StarIcon />

                <StarHalfIcon />
              </div>

              <div className="pb-5 flex">
                <div>
                  <img
                    className="rounded-full w-md h-3/4 p-4"
                    src="/istockphoto-woman.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <p className="pt-5 pb-2 font-medium font-serif text-base">
                    Working with Scaftech for OPITO Riggers training has been a game
                    changer for us. Their commitment to safety is evident in
                    every session, and we feel confident knowing our team is
                    well- prepared
                  </p>

                  <h1 className="text-blue-950 font-mono text-sm">
                    Juliet Stella
                  </h1>

                  <div>Developmental Manager</div>
                </div>
              </div>
            </div>
          </div>

          <div className=" h-auto w-lg">
            <div className="text-black bg-white mb-5 flex flex-col">
              <div className=" text-amber-600 p-2 flex justify-center">
                <StarIcon />

                <StarIcon />

                <StarIcon />

                <StarIcon />

                <StarIcon />

                <StarHalfIcon />
              </div>

              <div className="pb-5 flex">
                <div>
                  <img
                    className="rounded-full w-md h-3/4 p-4"
                    src="/african-american.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <p className="pt-5 pb-2 font-medium font-serif text-base">
                    Thanks to JCI's NDT training, our inspection processes have
                    improved significantly. The practical exercises provided us
                    with the confidence to apply our knowledge effectively.
                  </p>

                  <h1 className="text-blue-950 font-mono text-sm">
                    Lilian Ani
                  </h1>

                  <div>Client</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-around">
          <div className=" h-auto w-lg">
            <div className="text-black bg-white mb-5 flex flex-col">
              <div className=" text-amber-600 p-2 flex justify-center">
                <StarIcon />

                <StarIcon />

                <StarIcon />

                <StarIcon />

                <StarIcon />

                <StarHalfIcon />
              </div>

              <div className="pb-5 flex">
                <div>
                  <img
                    className="rounded-full w-md h-3/4 p-4"
                    src="/istockphoto.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <p className="pt-5 pb-2 font-medium font-serif text-base">
                    Completing the IWCF course at JCI was a pivotal moment for
                    our team. The knowledge gained about well control is
                    invaluable, and the training environment was both supportive
                    and professional.
                  </p>

                  <h1 className="text-blue-950 font-mono text-sm">
                    Rebecca Fortune
                  </h1>

                  <div>co-owner & Engineer</div>
                </div>
              </div>
            </div>
          </div>

          <div className=" h-auto w-lg">
            <div className="text-black bg-white mb-5 flex flex-col">
              <div className=" text-amber-600 p-2 flex justify-center">
                <StarIcon />

                <StarIcon />

                <StarIcon />

                <StarIcon />

                <StarIcon />

                <StarHalfIcon />
              </div>

              <div className="pb-5 flex">
                <div>
                  <img
                    className="rounded-full w-md h-3/4 p-4"
                    src="/womantumps.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <p className="pt-5 pb-2 font-medium font-serif text-base">
                    I had a wonderful experience completing my OPITO trainings
                    (Rigger Stage 1 and Banksman Stage 3) and obtaining a
                    Forklift Competence certificate. I extend my sincere thanks
                    to all the JCI staff.
                  </p>

                  <h1 className="text-blue-950 font-mono text-sm">
                    Suzan Iweta
                  </h1>

                  <div>Client</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        <div className='font-extrabold text-blue-600 text-lg pb-8 pt-15 font-mono pl-10 text-center'>
            If you encounter any issues during verification, please contact our support team 
            on verify@scaftechtraining.com for assistance.
            </div>

            <div className='w-full border border-solid border-black'></div>

            <div className='w-full rounded-lg bg-indigo-200 text-gray-950 mt-15 text-center p-5 text-2xl font-bold'>
                Find A Course
            </div>

            <div className='flex justify-around'>
            <div className="flex-col rounded-lg p-2 ">
            <div>
              <img className='rounded-lg ease-in-out hover:scale-105 transform transition duration-75' src="/arc-welding-steel.jpg" alt="" />
            </div>
            <div className="text-blue-950 text-sm font-medium pt-5 ">
              <h1>Appointed Persons for Lifting...</h1>
            </div>
            <div className="text-gray-400 p-3">
              <InfoTwoToneIcon />2 Days
            </div>

            <div className="text-gray-400 p-1">
              <GraphicEqTwoToneIcon />
              Expert
            </div>

            {/* <div className="text-gray-400 pt-5 pb-2">
              <AccountCircleTwoToneIcon />
              JCI
            </div> */}
          </div>

          <div className="flex-col p-2 ">
            <div>
              <img className='rounded-lg  ease-in-out hover:scale-105 transform transition-all duration-75'
               src="/Accident-Investigation.jpg" alt="" />
            </div>
            <div className="text-blue-950 text-sm font-medium pt-5 ">
              <h1>Banksman & Slinger</h1>
            </div>
            <div className="text-gray-400 p-3">
              <InfoTwoToneIcon />2 Days
            </div>

            <div className="text-gray-400 p-1">
              <GraphicEqTwoToneIcon />
              All Levels
            </div>

            {/* <div className="text-gray-400 pt-5 pb-2">
              <AccountCircleTwoToneIcon />
              JCI
            </div> */}
          </div>

          <div className="flex-col p-2 ease-in-out ">
            <div>
              <img className='rounded-lg hover:scale-105 transform transition duration-75'
               src="/images/IMG-scaled.jpg" alt="" />
            </div>
            <div className="text-blue-950 text-sm font-medium pt-5 ">
              <h1>Banksman & Slinger</h1>
            </div>
            <div className="text-gray-400 p-3">
              <InfoTwoToneIcon />2 Days
            </div>

            <div className="text-gray-400 p-1">
              <GraphicEqTwoToneIcon />
              All Levels
            </div>

            {/* <div className="text-gray-400 pt-5 pb-2">
              <AccountCircleTwoToneIcon />
              JCI
            </div> */}
          </div>

          <div className="flex-col  p-2 ">
            <div>
              <img className='rounded-lg ease-in-out hover:scale-105 transform transition duration-75' 
              src="/pikaso_texttoimage.jpeg" alt="" />
            </div>
            <div className="text-blue-950 text-sm font-medium pt-5 ">
              <h1>Banksman & Slinger</h1>
            </div>
            <div className="text-gray-400 p-3">
              <InfoTwoToneIcon />2 Days
            </div>
            <div className="text-gray-400 p-1">
              <GraphicEqTwoToneIcon />
              All Levels
            </div>

            {/* <div className="text-gray-400 pt-5 pb-2">
              <AccountCircleTwoToneIcon />
              JCI
            </div> */}
        </div> 

          </div>

          <div className="flex-col p-2 ">
            <div>
              <img  className='w-80 h-48 rounded-lg ease-in-out hover:scale-105 transform transition duration-75' 
              src="/OPERATOR.jpg" alt="" />
            </div>
            <div className="text-blue-950 text-sm font-medium pt-5 ">
              <h1>Banksman & Slinger</h1>
            </div>
            <div className="text-gray-400 p-3">
              <InfoTwoToneIcon />2 Days
            </div>

            <div className="text-gray-400 p-1">
              <GraphicEqTwoToneIcon />
              All Levels
            </div>

            {/* <div className="text-gray-400 pt-5 pb-2">
              <AccountCircleTwoToneIcon />
              JCI
            </div> */}
          </div>

          
            
            </section>
    </div>
  );
};

export default ClientTestimonials;