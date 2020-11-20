import React from "react";

const Card = ({ data }) => {
  console.log(data);
  return (
    <div className="w-full md:w-1/2 lg:w-1/4 p-2">
      <img
        style={{ height: "250px" }}
        className="w-full object-cover object-center rounded"
        src={data.Image_url}
        alt=""
      />
      <div>
        <h1 className="font-bold text-lg text-center mt-2">{data.name}</h1>
        <div className="text-bold w-8/12 mx-auto flex justify-between py-4">
          <a
            href={data.demo_url_link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              data.demo_url_link ? "" : "text-red-500"
            } font-bold cursor-pointer`}
          >
            Demo
          </a>
          <a
            href={data.git_url_link}
            className={`${
              data.git_url_link ? "" : "text-red-500"
            } font-bold cursor-pointer`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
