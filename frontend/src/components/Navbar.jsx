import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button as Buthrefn } from "@/components/ui/button";
import { GiExpense } from "react-icons/gi";
import { GoHomeFill } from "react-icons/go";
import { RxDashboard } from "react-icons/rx";
import LoginDialog from "./LoginDialog";
import RegisterDialog from "./RegisterDialog";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 ">
      <div className="flex h-20 lg:w-3/5 w-full m-auto shrink-0 items-center px-4 md:px-6 ">
        <Sheet>
          <SheetTrigger asChild>
            <div className="flex lg:hidden w-full justify-between">
              <div className="flex gap-4">
                <Buthrefn variant="outline" size="icon" className="lg:hidden">
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">hrefggle navigation menu</span>
                </Buthrefn>
                <a href="/" className="flex">
                  <span className="text-3xl font-bold">Expense</span>
                  <span>
                    <GiExpense className="text-orange-500" />
                  </span>
                </a>
              </div>
              <div className="flex gap-2 items-center">
                <Buthrefn className="bg-white text-black border">
                  Login
                </Buthrefn>
                <Buthrefn>Register</Buthrefn>
              </div>
            </div>
          </SheetTrigger>
          <SheetContent side="left">
            <a href="#" className="mr-6 hidden lg:flex">
              <MountainIcon className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </a>
            <div className="grid gap-2 py-6">
              <a
                href="#"
                className="flex w-full items-center py-2 text-lg font-semibold"
              >
                Home
              </a>
              <a
                href="#"
                className="flex w-full items-center py-2 text-lg font-semibold"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="flex w-full items-center py-2 text-lg font-semibold"
              >
                About us
              </a>
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-between">
          <a href="#" className="mr-6 hidden lg:flex">
            <span className="text-3xl font-bold text-white">Expense</span>
            <span>
              <GiExpense className="text-orange-500 text-2xl" />
            </span>
            <span className="sr-only">Acme Inc</span>
          </a>
          <div className="ml-auhref hidden lg:flex gap-6">
            <a
              href="#"
              className="group inline-flex h-9 w-max items-center justify-center  bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50 rounded-full"
            >
              <span>
                <GoHomeFill className="mr-2 h-4 w-4" />
              </span>
              Home
            </a>
            <a
              href="#"
              className="group inline-flex h-9 w-max items-center justify-center bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50 rounded-full"
            >
              <span>
                <RxDashboard className="mr-2 h-4 w-4" />
              </span>
              Dashboard
            </a>
            <a
              href="#"
              className="group inline-flex h-9 w-max items-center justify-center bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50 rounded-full"
            >
              About us
            </a>
          </div>
          <div className="hidden lg:flex gap-2 items-center">
            <LoginDialog />
            <RegisterDialog/>
          </div>
        </div>
      </div>
    </nav>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
