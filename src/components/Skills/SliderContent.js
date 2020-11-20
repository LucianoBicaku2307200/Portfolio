import React from "react";
import Slider from "react-slick";
import Arrow from "../other/Arrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PDF from "../../assets/CV-Luciano Bicaku.pdf";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

export default function SliderContent() {
  let SliderItems = [
    {
      ImgUrl: require("../../assets/css.png"),
      Title: "Css3",
    },
    {
      ImgUrl: require("../../assets/HTML5.png"),
      Title: "HTML5",
    },
    {
      ImgUrl: require("../../assets/JS.png"),
      Title: "Js",
    },
    {
      ImgUrl: require("../../assets/Gsap.png"),
      Title: "Gsap",
    },
    {
      ImgUrl: require("../../assets/ReactJs.png"),
      Title: "React Js",
    },
    {
      ImgUrl: require("../../assets/sass.png"),
      Title: "Sass",
    },
    {
      ImgUrl: require("../../assets/TailWind.png"),
      Title: "Tailwind CSS",
    },
  ];

  let settings = {
    dots: true,
    infinite: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };

  return (
    <div className="my-4 md:my-10 relative">
      <Slider {...settings}>
        {SliderItems.map((item, index) => {
          return (
            <div key={index} className="h-48">
              <div className="flex justify-center flex-wrap h-full">
                <img src={item.ImgUrl} alt={item.Title} className="my-auto" />
              </div>
              <h4 className="text-center my-2 mt-auto">{item.Title}</h4>
            </div>
          );
        })}
        <div>
          <div className="h-48 flex justify-center items-center mb-4">
            <a
              href={PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto my-5 pt-5 px-8 transition ease-in-out duration-500 transform hover:scale-125 text-xl"
            >
              More
              <span
                className="inline-block ml-3"
                style={{ transform: "translateY(-25%)" }}
              >
                <Arrow />
              </span>
            </a>
          </div>
        </div>
      </Slider>
    </div>
  );
}
