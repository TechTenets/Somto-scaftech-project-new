import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

const Slidder = () => {
  return (
    <div> 
       
        <div className="mx-[1rem] ">
                             <Swiper
                             
                               slidesPerView={3}
                               spaceBetween={30}
                              //  effect={"fade"}
                               pagination={{
                                 dynamicBullets: true,
                                 clickable: true,
                                 
                               }}
                               breakpoints={{
                                 50: {
                                     slidesPerView: 1,
                                   spaceBetween: 10,
                                 },
                                 500: {
                                   slidesPerView: 1,
                                   spaceBetween: 10,
                                 },
                                       // 768: {
                                 //   slidesPerView: 2,
                                 //   spaceBetween: 40,
                                 // },
                                 768: {
                                   slidesPerView: 2,
                                   spaceBetween: 10,
                                 },
                                 1024: {
                                   slidesPerView: 2,
                                   spaceBetween: 10,
                                 },
                                 1200: {
                                   slidesPerView: 3,
                                   spaceBetween: 10,
                                 },
                                 1400: {
                                   slidesPerView: 3,
                                   spaceBetween: 10,
                                 },
                                  1800: {
                                   slidesPerView: 4,
                                   spaceBetween: 10,
                                 },
                               }}
                               loop={true}
                               autoplay={{
                                 delay: 2500,
                                 disableOnInteraction: false,
                               }}
                               modules={[Autoplay, Pagination, Navigation]}
                               navigation={true}
                               // onSlideChange={handleSlideChange}
                               className=""
                             >
                               
                                
                          <SwiperSlide className="mt-[2rem] ml-[0.2rem] relative ">
                                   <a
                                     href="/inspector"
                                     // href={/services/${data.id}/${data.title} [#7c9289]}       
                                   >
                                     <div className=" border-[0.1px] border-[#7c9289] w-[26rem] rounded-lg h-auto
                                      md:w-[24rem] md:ml-[2rem] ml-[1.5rem] android ">
                                       <img
                                         src="/inspect-3.jpg"
                                         alt=""
                                                        className="w-[26rem] h-[13.5rem] rounded-lg rounded-b-none object-cover 
                                         md:w-[24rem] z-10"
                                       />
       
                                       <p className='text-2xl text-white p-3 ml-[1rem] mt-[1rem]
                                       font-extrabold'>Inspection Services</p>
       
                            <div className="-mt-[0.5rem]  ">
                           <p className="text-sm text-gray-200 p-3 ml-[1rem]">
                   Scaftech Engineering Services provides specialized inspection 
                   services for tanks and vessels across various industrial sectors in 
                   Nigeria. <a href="/inspector" className='text-blue-500'>read more</a>
                            </p>
                             </div>
                               </div>
                                     
                                   </a>
                                 </SwiperSlide>

                                        <SwiperSlide className="mt-[2rem] ml-[0.5rem] relative ">
                                   <a
                                     href="/lifthing&basicrigger"
                                     // href={/services/${data.id}/${data.title} [#7c9289]}       
                                   >
                                     <div className=" border-[0.1px] border-[#7c9289] w-[26rem] rounded-lg h-auto 
                                       md:w-[24rem] md:ml-[1.5rem] ml-[1.5rem] android">
                                       <img
                                         src="/Scaftechfork.-3.jpg"
                                         alt=""
                                         className="w-[26rem] h-[13.5rem] rounded-lg object-cover rounded-b-none
                                          md:w-[24rem] "
                                       />

                                         <p className='text-2xl text-white p-3 ml-[1rem] mt-[1rem]
                                       font-extrabold'>Lifting Machine</p>
       
                            <div className="-mt-[0.5rem]  ">
                           <p className="text-sm text-gray-200 p-3 ml-[1rem]">
                   Scaftech carries out lifting equipment inspection in accordance with
                   industry standards and applicable legislations. <a href="/lifthing&basicrigger" className='text-blue-500'>read more</a>
                     </p>
                             </div>
      
                                     </div>
                                     
                                   </a>
                                 </SwiperSlide>

                                       <SwiperSlide className="mt-[2rem] -ml-[0.5rem] relative ">
                                   <a
                                     href="/EquipmentOperation&Maintenace"
                                     // href={/services/${data.id}/${data.title} [#7c9289]}       
                                   >
                        <div className=" border-[0.1px] border-[#7c9289] w-[26rem] rounded-lg h-auto
                                   md:w-[24rem] md:ml-[2rem] ml-[1.5rem] android">
                                       <img
                                         src="/side-lifting-2.jpg"
                                         alt=""
                                         className="w-[26rem] h-[13.5rem] rounded-lg object-cover rounded-b-none md:w-[24rem]"
                                       />

                                    <p className='text-2xl text-white p-3 ml-[1rem] mt-[1rem]
                                       font-extrabold'>Maintenance </p>
       
                            <div className="-mt-[0.5rem]  ">
                           <p className="text-sm text-gray-200 p-3 ml-[1rem]">
                           At Scaftech Engineering Services, we provide comprehensive LOLER (Lifting Operations and Lifting
                           Equipment Regulations 1998) &nbsp;

                                        <a href="/EquipmentOperation&Maintenace" className='text-blue-500'>read more</a>
                            </p>
                             </div>

                                     </div>
                                     
                                   </a>
                                 </SwiperSlide>

                                 <SwiperSlide className="mt-[2rem] -ml-[0.5rem] relative ">
                                   <a
                                     href="/leadership&Accountability"
                                     // href={/services/${data.id}/${data.title} [#7c9289]}       
                                   >
                                     <div className=" border-[0.1px] border-[#7c9289] w-[26rem] rounded-lg h-auto
                                       md:w-[24rem] md:ml-[2rem] ml-[1.5rem] android">
                                       <img
                                         src="/inspector-1.jpg"
                                         alt=""
                                         className="w-[26rem] h-[13.5rem] rounded-lg rounded-b-none md:w-[24rem]"
                                       />

                                                                    <p className='text-2xl text-white p-3 ml-[1rem] mt-[1rem]
                                       font-extrabold'>Leadership and Accountability</p>
       
                            <div className="-mt-[0.5rem]  ">
                           <p className="text-sm text-gray-200 p-3 ml-[1rem]">
                          LOLER (Lifting Operations and Lifting Equipment Regulations) inspections apply 
                               to a wide range of lifting appliances and accessories, &nbsp;
                                <a href="/leadership&Accountability" className='text-blue-500'>read more</a>
                            </p>
                             </div>

                                     </div>
                                     
                                   </a>
                                 </SwiperSlide>
       
                             
                             </Swiper>
                           </div>
                        
                          </div>

  )
}

export default Slidder









