import React from "react";
import Project_card from "./Project_card";

const Projects = () => {
  const props = [
    {
      switch: 0,
      header: "Youth Center",
      discription:
        "Mission :-   ISKCON Youth Centers aim to empower young individuals by providing a supportive environment where they can explore their spirituality, develop life skills, and engage in meaningful service. The centers strive to help youth lead purposeful and fulfilling lives grounded in the principles of Krishna consciousness",
      img: {
        src: "/5ISKCON-pictures.jpg",
        alt: "iskcon image",
      },
    },
    {
      switch: 1,
      header: "Gurukuls",
      discription:
        "Mission :-   ISKCON Youth Centers aim to empower young individuals by providing a supportive environment where they can explore their spirituality, develop life skills, and engage in meaningful service. The centers strive to help youth lead purposeful and fulfilling lives grounded in the principles of Krishna consciousness ",
      img: {
        src: "/5ISKCON-pictures.jpg",
        alt: "iskcon image",
      },
    },
    {
      switch: 0,
      header: "Gowsala",
      discription:
        "Mission :-   ISKCON Youth Centers aim to empower young individuals by providing a supportive environment where they can explore their spirituality, develop life skills, and engage in meaningful service. The centers strive to help youth lead purposeful and fulfilling lives grounded in the principles of Krishna consciousness",
      img: {
        src: "/5ISKCON-pictures.jpg",
        alt: "iskcon image",
      }
    }
  ];
  return (
    <div id="projects">
      <h1 className="flex justify-center font-bold text-3xl">Our Projects</h1>
      {
        props.map((m)=>(
          
            <Project_card props={m} key={m.header} />
          
        ))
      }
      {/* <Project_card/> */}
    </div>
  );
};

export default Projects;
