import React from "react";
import Img_url from "../../assets/home-background-img.jpg";
import Button from "../other/Button";
export default function HeroSection() {
  //styles
  const center_hero_text = {
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  };

  return (
    <div className="w-full relative">
      <div className="relative">
        <img
          src={Img_url}
          alt=""
          className="min-h-screen w-full object-cover bg-fixed bg-center"
        />

        <div
          className="absolute text-center text-white w-full md:w-auto"
          style={center_hero_text}
        >
          <h1 className="text-3xl my-3">
            Hi I am{" "}
            <span className="font-bold text-primary">Luciano Bicaku</span>
          </h1>
          <p className="text-center text-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="flex flex-row text-base text-white justify-center my-8">
            <Button
              content="My Projects"
              link_url="projects_section"
              color="white"
              className="py-2 px-4 ml-5"
            />
            <Button
              content="About me"
              link_url="about_section"
              color="white"
              className="py-2 px-4 ml-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
