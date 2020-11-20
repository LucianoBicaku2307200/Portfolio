import React from "react";
import { Link } from "react-scroll";
export default function Button(props) {
  return (
    <Link
      to={props.link_url}
      className={
        `border-${props.color} text-${props.color} border rounded-md hover:bg-primary 
        hover:border-primary hover:text-white transition ease-in-out duration-300 cursor-pointer  ` +
        props.className
      }
      delay={0}
    >
      {props.content}
    </Link>
  );
}
