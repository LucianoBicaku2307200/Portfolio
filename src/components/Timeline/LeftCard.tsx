"use client";
import { Timeline } from ".";
const LeftCard = () => {
  return (
    <div className={`flex flex-row-reverse md:contents`}>
      <Timeline
        className={"w-full col-start-1 col-end-5 ml-auto p-8 cursor-pointer"}
      >
        <div className="z-10 flex flex-col">
          <span className="text-md font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
            test
          </span>
          <span className="mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            nesciunt maiores ipsa molestiae magnam libero dolorem explicabo.
            Nobis veniam incidunt at, alias ipsam est suscipit maxime sunt quia.
            Consectetur, aut.
          </span>
        </div>
        <button className=" gap-3 hover:gap-6 duration-300">test</button>
      </Timeline>
      <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
        <div className="h-full w-4 flex items-center justify-center">
          <div className="h-full w-0.5 bg-gray-500 pointer-events-none"></div>
        </div>

        <div className="w-4 h-4 absolute top-1/2 -mt-3 rounded-full bg-zinc-400 shadow"></div>
      </div>
    </div>
  );
};

export default LeftCard;
