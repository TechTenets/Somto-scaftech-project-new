import { Outlet } from "react-router-dom";
import Nav from "../components/Header/Nav";
import Footer from "../components/Footer/Footer";
import About_us from "../pages/About_us/About_us";
import Dropdown from "../components/dropdown";
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

      {/* <Dropdown /> */}

      <div className="min-h-screen flex  mt-5 flex-col ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootRoute;
