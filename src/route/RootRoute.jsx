import { Outlet } from "react-router-dom";
import Nav from "../components/Header/Nav";
import Footer from "../components/Footer/Footer";
// import {
//   Bars3Icon,
//   MoonIcon,
//   PaperAirplaneIcon,
//   SunIcon,
// } from "@heroicons/react/16/solid";

const RootRoute = () => {
  // const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div>
      <Nav />

      {/* <nav> 

<ul className="flex z-[1000] gap-20 absolute top-0">

        <li className="">jj</li>
        <li className="">jjjj</li>
        <li className="">jjjj</li>
        <li className="">jjjjj</li>
        <li className="">jj</li>
</ul>
      </nav> */}
      <div className="min-h-screen">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default RootRoute;