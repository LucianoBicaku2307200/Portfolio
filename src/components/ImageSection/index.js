import React from "react";

export default function ImageSection(props) {
  return (
    <div className="w-full bg-gray-300">
      <div
        style={{
          Height: "500px",
        }}
      >
        <img
          src={props.img_url}
          alt=""
          className="w-full object-cover bg-fixed bg-center"
        />
        <div className="w-full h-full bg-black opacity-50"></div>
      </div>
    </div>
  );
}
