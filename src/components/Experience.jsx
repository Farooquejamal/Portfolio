import React from "react";
import sql from "/sql.png";
import react from "/reactjs.png";
import django from "/django.webp";
import python from "/python.webp";
import javascript from "/javascript.png";
import html from "/html.png";
import css from "/css.jpg";

const Experience = () => {
  const cardItem = [
    {
      id: 1,
      logo: python,
      name: "Python",
    },
    {
      id: 2,
      logo: django,
      name: "DJango",
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: html,
      name: "Html",
    },
    {
      id: 5,
      logo: css,
      name: "CSS",
    },
    {
      id: 6,
      logo: react,
      name: "React",
    },
    {
      id: 7,
      logo: sql,
      name: "MYSQL",
    },
  ];
  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>
        <p className="font-semibold">
          I have 6 months of experience in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, name, logo }) => (
            <div
              className="flex flex-col items-center justify-center border-[2px]  rounded-full shadow-lg p-1 md:w-[200px] md:h-[200px] cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[150px] h-[150px] rounded-full"
                alt=""
              />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
