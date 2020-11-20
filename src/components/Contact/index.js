import React from "react";
import Form from "./Components/Form";
import Info from "./Components/Info";
export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-12" id="contact_section">
      <div className="flex flex-wrap">
        <Form />
        <Info />
      </div>
    </div>
  );
}
