import React from "react";
import Social from "./Social";
export default function Info() {
  const info = [
    {
      info_logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-home w-6 h-6"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      ),
      info_content: "Tirana, Albania",
    },
    {
      info_logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-phone w-6 h-6"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
      info_content: "355 688 030 642",
    },
    {
      info_logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-mail w-6 h-6"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
      info_content: "luciano.bicaku2307@gmail.com",
    },
  ];
  return (
    <div className="w-full md:w-5/12 lg:bg-primary ml-auto flex justify-center items-center">
      <div className="bg-black text-white w-full ">
        <div className="py-16 px-5 xl:px-20">
          <h4 className="font-bold text-3xl">Info</h4>
          <ul className="ml-3 mt-3">
            {info.map((item, index) => (
              <li key={index}>
                <div className="flex flex-row py-1">
                  {item.info_logo}
                  <span className="flex items-center ml-2">
                    {item.info_content}
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <div className="w-full">
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
}
