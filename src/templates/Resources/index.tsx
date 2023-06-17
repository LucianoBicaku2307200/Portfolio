import { type FC } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
// import {BsArrowRight} from "react-icons/bs";

import { Header } from "@/src/components/Header";
import { Card } from "@/src/components/Card";
import { RiPagesFill } from "react-icons/ri";
import { resourcesData } from "./data";

export const Resources: FC = () => {
  return (
    <>
      <Header />
      <main className="container">
        <div className="border-b border-zinc-800 mt-20">
          <h1 className="text-5xl font-bold">Projects</h1>
          <p className="text-gray mt-6 pb-10">
            These are some of the project I have worked, they may be build with
            different technologies such as react js, stencil js, next js, etc.
          </p>
        </div>
        <section className="grid md:grid-cols-3 gap-8 md:gap-16 py-10">
          {resourcesData.map((item) => (
            <Card className={item.className} key={item.label}>
              <div className="p-8 relative flex flex-col justify-between h-full gap-4 duration-700 group md:gap-8">
                <div className="z-10 flex flex-col">
                  <span className="text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                    {item.label}
                  </span>
                  <span className="mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    {item.description}
                  </span>
                  <p className="mt-4 text-xs duration-1000 text-zinc-400 group-hover:text-zinc-200  flex gap-1 flex-wrap">
                    Tags:{" "}
                    {item.tags?.map((el, index) => (
                      <span key={index} className="capitalize">
                        {el},
                      </span>
                    ))}
                  </p>

                  <p className="mt-4 text-xs duration-1000 text-zinc-400 group-hover:text-zinc-200  flex gap-1 flex-wrap">
                    Platforms:{" "}
                    {item.platforms?.map((el, index) => (
                      <span key={index} className="capitalize">
                        {el},
                      </span>
                    ))}
                  </p>
                  <p className="mt-4 text-xs duration-1000 text-zinc-400 group-hover:text-zinc-200 flex gap-1 flex-wrap">
                    Technologies:{" "}
                    {item.technologies?.map((el, index) => (
                      <span key={index} className="capitalize">
                        {el},
                      </span>
                    ))}
                  </p>
                </div>
                <div className="flex gap-6 flex-wrap flex-row ">
                  <Link
                    href={item.href}
                    target="_blank"
                    className="flex items-center gap-3 hover:gap-6 duration-300 border border-transparent border-solid hover:border-white transition-all ease-in-out hover:pl-4 py-2 pr-4 rounded-lg"
                  >
                    <RiPagesFill />
                    View
                  </Link>
                  {item.repoUrl && (
                    <Link
                      href={item.href}
                      target="_blank"
                      className="flex items-center gap-3 hover:gap-6 duration-300 border border-transparent border-solid hover:border-white transition-all ease-in-out hover:pl-4 py-2 pr-4 rounded-lg"
                    >
                      <FaGithub />
                      Github
                    </Link>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </section>
      </main>
    </>
  );
};
