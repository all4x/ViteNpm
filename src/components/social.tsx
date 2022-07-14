import { useState } from "react";
import { Repos } from "../components/repos";

export function SideBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <div className="flex items-center bg-purple-400 p-5 justify-between">
        <div className="flex justify-center items-center p-2">
          <img
            src="https://avatars.githubusercontent.com/u/54729143?v=4"
            className="rounded-full xl:h-24 h-16 "
          />
          <a href="/" className="pl-5 font-roboto text-xl xl:text-2xl text-white">
            Alex | Rodrigues
          </a>
        </div>
        <nav>
          <section className="MOBILE-MENU flex lg:hidden">
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => {
                setIsNavOpen((prev) => !prev);
              }}
            >
              <span className="block h-1 w-8 animate-pulse bg-white"></span>
              <span className="block h-1 w-8 animate-pulse bg-white"></span>
              <span className="block h-1 w-8 animate-pulse bg-white"></span>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="absolute top-0 right-0 px-8 py-8"
                onClick={() => {
                  setIsNavOpen(false);
                }}
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 18 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <div className="bg-black">
                <Repos />
              </div>
            </div>
          </section>

          <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/portfolio">Portfolio</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: black;
        z-index: 10;
        display: gap;
        flex-direction: column;
        justify-content: center;
        align-items: center;justify
      }
    `}</style>
    </>
  );
}
