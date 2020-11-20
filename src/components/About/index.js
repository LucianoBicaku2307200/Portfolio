import React from "react";
import Img from "../../assets/about me.png";
import PDF from "../../assets/CV-Luciano Bicaku.pdf";
export default function About() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-12" id="about_section">
      <h1 className="md:mb-7 mb-5 text-4xl font-bold">About Me</h1>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 relative p-4">
          <img src={Img} alt="my Img" className="z-50" />
        </div>
        <div className="w-full md:w-1/2 p-4 flex justify-center flex-col text-left">
          <h1 className="text-2xl">Who am I ?</h1>
          <p className="font-light my-8">
            I am a self-taught programmer and prefer to learn new things,
            challenge myself, and do interesting things that matter. My energy
            fuels me in the pursuit of many interests, hobbies, areas of study
            and coding skills. I’m a fast learner, able to pick up new skills
            and juggle different projects and roles with relative ease...
          </p>
          <div>
            <a
              href={PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-0 px-8 py-2 border-black border rounded-md hover:bg-primary 
            hover:border-primary hover:text-white transition ease-in-out duration-300 cursor-pointer "
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
