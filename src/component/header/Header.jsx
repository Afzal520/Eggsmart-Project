import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaQuestion } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

const Header = () => {
  let [toggle, settoggle] = useState(false);
  let [scroll, setScrolled] = useState(true);

  function toggleBtn() {
    settoggle(!toggle);
    console.log("hello");
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let DesktopMenu = [
    {
      id: 1,
      Name: "Entries",
      Link: "/flock",
    },
    {
      id: 2,
      Name: "Eggs Register",
      Link: "/",
    },
    {
      id: 3,
      Name: "Manage Flocks",
      Link: "/",
    },
    {
      id: 4,
      Name: "Reports",
      Link: "/",
    },
    {
      id: 5,
      Name: "Reminders",
      Link: "/",
    },
  ];
  let MobileMenu = [
    {
      id: 1,
      Name: "Entries",
      Link: "/",
    },
    {
      id: 2,
      Name: "Eggs Register",
      Link: "/",
    },
    {
      id: 3,
      Name: "Manage Flocks",
      Link: "/",
    },
    {
      id: 4,
      Name: "Reports",
      Link: "/",
    },
    {
      id: 5,
      Name: "Reminders",
      Link: "/",
    },
  ];

  return (
    <nav
      className={` bg-slate-700 ${scroll ? "shadow-lg " : ""}  w-full top-0`}
      // style={{ position: "fixed" }}
    >
      <div className="mx-auto px-4 ">
        <div className="flex justify-between">
          <div>
            <Link
              to="/"
              className="flex items-center py-5 px-2 text-gray-700"
            >
              {/* main logo  */}
              <span className="font-bold text-white text-[22px]">EggsMart</span>
            </Link>
          </div>
          <div className="flex space-x-4">
            <div className="hidden lg:flex items-center space-x-9">
              {DesktopMenu.map((item, key) => (
                <Link
                  key={item.id}
                  to={item.Link}
                  className="py-5 px-3 text-white hover:text-black text-[18px] font-semibold  "
                >
                  {item.Name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center">
            <div className="border-solid border-2 text-white  hover:text-black border-white  p-2 mx-1 rounded hover:bg-white">
              <Link>
                <FaQuestion />
              </Link>
            </div>
            <div className="border-solid text-white  hover:text-black border-2 border-white p-2 mx-2 rounded hover:bg-white">
              <Link>
                <FaRegUser />
              </Link>
            </div>
            <div className="text-white hover:text-black border-solid border-2 border-white hover:font-semibold p-1 rounded hover:bg-white">
              <p>Log Out</p>
            </div>
          </div>

          <div className="lg:hidden  flex items-center">
            <button className="mobile-menu-button" onClick={toggleBtn}>
              <svg
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`mobile-menu bg-slate-700  w-full absolute grid justify-start ${
          toggle ? "" : "hidden"
        } lg:hidden`}
      >
        {MobileMenu.map((item, key) => (
          <Link
            to={item.Link}
            key={item.id}
            className="block py-5 text-white text-[18px]  hover:text-indigo-800 font-semibold  px-4 text-sm "
          >
            {item.Name}
          </Link>
        ))}

        <div className="flex mx-4 text-white">
          <Link className="border-solid border-2 rounded border-white p-1 mb-2 items-center mx-1 ">
            <FaQuestion className="mt-1 " />
          </Link>

          <Link className="border-solid border-2 rounded border-white text-center p-1 mb-2 mx-1">
            <FaRegUser className="mt-1" />
          </Link>

          <Link className="border-solid border-2 rounded border-white p-1 mb-2 mx-1 font-semibold">
            logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
