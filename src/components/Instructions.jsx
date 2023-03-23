import React from "react";
import IconBaner from "./IconBaner";
import classes from "@/styles/Instructions.module.css";

const instructionsContent = [
  {
    id: 1,
    src: "/assets/ticket.png",
    alt: "ticket",
    content:
      "Enter your park ticket #PIN number, then select the desired ride while noting the stated return time",
  },
  {
    id: 2,
    src: "/assets/submitArrow.png",
    alt: "submit arrow",
    content: 'Press "submit" to confirm and retrieve your access code',
  },
  {
    id: 3,
    src: "/assets/clock.png",
    alt: "clock",
    content:
      "When the time comes, use the special fastRider line to cut out a considerable wait time",
  },
];

const Instructions = () => {
  return (
    <div className={classes.container}>
      {instructionsContent.map((instruction) => (
        <IconBaner
          key={instruction.id}
          src={instruction.src}
          alt={instruction.alt}
          content={instruction.content}
        />
      ))}
    </div>
  );
};

export default Instructions;
