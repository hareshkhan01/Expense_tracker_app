import { GiExpense } from "react-icons/gi";
import { GoHomeFill } from "react-icons/go";
import { RxDashboard } from "react-icons/rx";
import LoginDialog from "./LoginDialog";
import RegisterDialog from "./RegisterDialog";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function Navbar() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        isScrolled ? "bg-black shadow-md" : "bg-transparent"
      }`}>
      <div className="flex h-20 lg:w-3/5 w-full m-auto shrink-0 items-center px-4 md:px-6 ">
        
        <div className="flex flex-1 items-center justify-between">
          <Link to="/" className="mr-6  lg:flex">
            <span className="text-3xl font-bold text-white">Expense</span>
            <span>
              <GiExpense className="text-orange-500 text-2xl" />
            </span>
            <span className="sr-only">Acme Inc</span>
          </Link>
          <div className=" flex gap-6 justify-center items-center">
            {/*After Router Setup All the anchor tags will be replaced with Link Components from React Router */}
            <Link
              to="#"
              className="group inline-flex h-9 w-max items-center justify-center  bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50 rounded-full"
            >
              <span>
                <GoHomeFill className="mr-2 h-4 w-4" />
              </span>
              Home
            </Link>
            <Link
              to="/dashboard/home"
              className="group inline-flex h-9 w-max items-center justify-center bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50 rounded-full"
            >
              <span>
                <RxDashboard className="mr-2 h-4 w-4" />
              </span>
              Dashboard
            </Link>
          </div>
          <div className=" lg:flex gap-2 items-center">
            <LoginDialog />
            <RegisterDialog/>
          </div>
        </div>
      </div>
    </nav>
  );
}


