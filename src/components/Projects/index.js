import React from "react";
import Arrow from "../other/Arrow";
import Card from "./Card";
export default function Projects() {
  const projects = [
    {
      name: "La Cassa",
      git_url_link: "https://github.com/LucianoBicaku2307200/la-cassa-project",
      demo_url_link: "https://lucianobicaku2307200.github.io/la-cassa-project/",
      Image_url: "https://i.ibb.co/72CnH3d/la-cassa.jpg",
    },
    {
      name: "Lock-Al",
      git_url_link: "https://github.com/LucianoBicaku/react-rentHouse",
      demo_url_link: null,
      Image_url: "https://i.ibb.co/Ydd3JHs/lock-al.png",
    },
    {
      name: "Infinite Scroll",
      git_url_link: "https://github.com/LucianoBicaku2307200/infiniteScroll",
      demo_url_link: "https://infinite-scroll-f04bf.web.app",
      Image_url: "https://i.ibb.co/Yd2H2SP/infinity-Scroll.png",
    },
    {
      name: "Game Tag",
      git_url_link: "https://github.com/LucianoBicaku2307200/GameTag",
      demo_url_link: "https://game-tag.web.app/",
      Image_url: "https://i.ibb.co/jvdGQ75/gametag.jpg",
    },
  ];

  return (
    <div
      className="container mx-auto px-4 py-16 md:py-12"
      id="projects_section"
    >
      <div className="inline-flex justify-between w-full">
        <h1 className="md:mb-7 mb-5 text-4xl font-bold">Portfolio</h1>
        <a
          href="https://github.com/LucianoBicaku2307200"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex transition ease-in-out duration-500 transform hover:scale-105 text-xl"
        >
          More Projects
          <span
            className="ml-3 mt-3"
            // style={{ transform: "translateY(10%)" }}
          >
            <Arrow />
          </span>
        </a>
      </div>

      <div className="flex flex-wrap -m-2">
        {projects.map((value, index) => (
          <Card data={value} key={index} />
        ))}
      </div>
    </div>
  );
}
