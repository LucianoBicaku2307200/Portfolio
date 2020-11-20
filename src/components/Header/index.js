import React from "react";
import Logo from "../other/Logo";
import { Link } from "react-scroll";

export default function Header() {
  const items = [
    { content: "Portfolio", link_url: "projects_section" },
    { content: "About me", link_url: "about_section" },
    { content: "Skills", link_url: "skills_section" },
    { content: "Contact", link_url: "contact_section" },
  ];

  return (
    <section className="flex flex-row justify-between container mx-auto h-16 py-3 items-center">
      <div className="mx-auto sm:mx-0 flex flex-row">
        <Logo />
        <div className="sm:hidden">
          <p className="py-2 mx-2 font-bold">Portfolio</p>
        </div>
      </div>
      <div className="fixed z-10 sm:relative bottom-0 left-0 bg-white w-full sm:w-auto sm:h-auto">
        <ul className="flex flex-row justify-center items-center py-6 sm:py-0">
          {items.map((value, index) => {
            return (
              <li
                className="px-3 hover:text-primary transition duration-300 ease-in-out text-sm  md:text-xl cursor-pointer"
                key={index}
              >
                <Link to={value.link_url} delay={0}>
                  {value.content}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
