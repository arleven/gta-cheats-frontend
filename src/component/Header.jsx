import { IoReorderThreeOutline } from "react-icons/io5";

function Header() {
  return (
    <nav className="bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

        {/* Right: Buttons */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

        </div>

        {/* Center: Nav items */}

      </div>
      <div
        className="items-center justify-center hidden w-full mb-4 md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-700 
                         rounded-lg bg-gray-800 md:space-x-8 rtl:space-x-reverse 
                         md:flex-row md:mt-0 md:border-0 md:bg-gray-900">
          <li className="text-2xl text-white">
            GTA San Andreas Cheat Codes 
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
