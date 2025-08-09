import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer className=" bg-[#0b1b2bcc] m-0">
      <div className="footer text-white bg-[#0b1b2bcc] " data-script="footer">
        <section className="footer--bottom  text-black">
          <article className="container " aria-label="Brands">
           <div className="footer--brands">
                 
                   <img
                     src="/images/Scarftech-logo.webp"
                     alt="Scarftech logo"
                     className="
                       max-w-[150px]    /* mobile size */
                       sm:max-w-[200px] /* tablet size */
                       lg:max-w-[300px] /* desktop/PC size */
                       pb-4 pl-4 sm:pl-6 lg:pl-8 pt-4 sm:pt-8
                     "
                   />
                 
         </div>


      <section className="flex flex-col md:flex-row md:justify-around p-4">
       <div className="flex-col text-amber-50 p-4">
         <div className="font-sans font-medium text-2xl">
           <h1>ABOUT</h1>
         </div>
         <div className="font-sans p-6 font-medium text-sm">
           <ul>
             <li className="pt-2 pb-1 hover:text-green-500">
               <a href="/about_us"> About</a>
             </li>
             <li className="pt-2 pb-1 hover:text-green-500">
               <a href="/Accredition"> Accreditations</a>
             </li>
             <li className="pt-2 pb-1 hover:text-green-500">
               <a href="/health&Safety"> Find a Course</a>
             </li>
             <li className="pt-2 pb-1 hover:text-green-500">
               <a href="/Blog"> Blog</a>
             </li>
             <li className="pt-2 pb-1 hover:text-green-500">
               <a href="/">Home</a>
             </li>
           </ul>
         </div>
       </div>
     
       <div className="flex-col text-amber-50 p-4">
         <div className="font-sans font-medium text-2xl">
           <h1> OUR FACULTIES</h1>
         </div>
         <div className="font-sans p-6 font-medium text-sm">
           <ul>
             <li className="pt-2 pb-1 hover:text-green-500">
               <a href="/health&Safety"> Health & Safety</a>
             </li>
             <li className="pt-2 pb-1 hover:text-green-500">
               <a href="/NDT"> ASNT NDT INSPECTION</a>
             </li>
             <li className="pt-2 pb-1 hover:text-green-500">
               <a href="/lifthing&basicrigger"> Lifting Operations</a>
             </li>
             <li className="pt-2 pb-1 hover:text-green-500">
               <a href="/Defensive&Hazard">Defensive Driving</a>
             </li>
             <li className="pt-2 pb-1 hover:text-green-500">
               <a href="/EquipmentOperation&Maintenace"> Equipment Operation</a>
             </li>
             <li className="pt-2 pb-1 hover:text-green-500">
               <a href="/SkilledOperation&Leadership">Skills Operation</a>
             </li>
           </ul>
         </div>
       </div>
     
       <div className="flex-col text-amber-50 p-4">
         <div className="font-sans font-medium text-2xl">
           <h1>FIND US</h1>
         </div>
         <div className="font-sans p-6 font-medium text-sm">
           <ul>
             <li className="pt-2 pb-1 hover:text-green-500">
               <a href="/about_us">Lagos</a>
             </li>
             <li className="pt-2 pb-1 hover:text-green-500">
               <a href="/about_us">Port Harcourt</a>
             </li>
             <li className="pt-2 pb-1 hover:text-green-500">
               <a href="/about_us">Abuja</a>
             </li>
           </ul>
         </div>
       </div>
     
       <div className="flex-col text-amber-50 p-4">
         <div className="font-sans font-medium text-2xl">
           <h1>SUPPORT</h1>
         </div>
         <div className="font-sans font-medium text-sm">
           <ul>
             <li className="pt-2 pb-1">
               <a href="">. Help</a>
             </li>
             <li className="pt-2 pb-1">
               <a href="">. Term Conditions</a>
             </li>
             <li className="pt-2 pb-1">
               <a href="">. Privacy Policy</a>
             </li>
           </ul>
         </div>
       </div>
     
       <div className="flex-col text-amber-50 p-4">
         <div className="font-sans font-medium text-2xl">
           <h1>Contact</h1>
         </div>
         <div className="font-sans p-6 font-medium text-sm">
           <ul>
             <li className="pt-2 pb-1">
               <p>
                 Office 27, Ringback mall, <br /> Beside Mobil Filling Station,{" "}
                 <br /> Oribanwa Bus-stop,Ibeju-Lekki Lagos
               </p>
             </li>
             <li className="pt-2 pb-1 hover:text-green-500">
               <a href="tel:+2347086419457">
                 <p>+234-816-163-7797 ,+234-811-262-7647</p>
               </a>
             </li>
             <li className="pt-2 pb-1 hover:text-green-500">
               <a href="https%3A%2F%2Fmail.google.com%2Fmail%2Fu">
                 <p>consult@scaftechservices.com</p>
               </a>
             </li>
           </ul>
           <div className="font-sans font-bold p-4 text-sm text-center">
             <h1>Follow Us On Social Media</h1>
             <div className="p-2 flex gap-4 justify-center">
               <InstagramIcon className="bg-red-900 py-1 rounded-md w-8 h-8" />
               <XIcon className="bg-black rounded-md py-1 w-8 h-8" />
               <FacebookIcon className="bg-blue-600 py-1 rounded-md w-8 h-8" />
             </div>
           </div>
         </div>
       </div>
     </section>


                <div className="footer--privacy flex flex-col md:flex-row justify-between text-amber-50 items-center md:items-start text-center md:text-left gap-3 md:gap-0">
             <div>
               <p
                 className="footer--copyright text-xs md:text-sm pb-3 md:pb-0"
                 tabIndex={0}
                 aria-label="copyright"
               >
                 &copy; 2025 Scaftech. All Rights Reserved.
               </p>
             </div>
           
             <div className="flex flex-col md:flex-row gap-3 md:gap-5">
               <p className="text-xs md:text-sm footer--policyWrapper">
                 <a
                   className="footer--policy optanon-toggle-display"
                   tabIndex={0}
                 >
                   Help
                 </a>
               </p>
               <p className="text-xs md:text-sm footer--policyWrapper">
                 <a href="#" target="|Custom" className="footer--policy">
                   Privacy Policy
                 </a>
               </p>
               <p className="text-xs md:text-sm footer--policyWrapper">
                 <a href="#" target="|Custom" className="footer--policy">
                   Terms & Conditions
                 </a>
               </p>
             </div>
           </div>

          </article>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
