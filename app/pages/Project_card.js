import React from "react";

const Project_card = ({ props }) => {
  // console.log(props)
  return (
    <div>
      {props.switch == 1 ? (
        <>
          <div className="md:flex md:justify-center md:items-center p-4 bg-slate-100 m-4">
          <div className="flex justify-center items-center h-1/2 w-1/2 m-8 relative overflow-hidden">
              <img
                className="w-1/2 object-contain"
                src={props.img.src}
                alt="prabhupada"
              />
            </div>
            <div className="mb-4 md:w-1/2">
              <h1 className="text-5xl m-6 text-orange-400 lg:m-8">
                {props.header}
              </h1>
              <p className="text-2xl m-4 lg:m-10">{props.discription}</p>
              <button className="bg-red-500 p-4 m-4 text-white">
                KNOW MORE →{" "}
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="md:flex md:justify-center md:items-center p-4 bg-red-100 m-4">
            <div className="mb-4 md:w-1/2">
              <h1 className="text-5xl m-6 text-orange-400 lg:m-8">
                {props.header}
              </h1>
              <p className="text-2xl m-4 lg:m-10">{props.discription}</p>
              <button className="bg-red-500 p-4 m-4 text-white">
                KNOW MORE →{" "}
              </button>
            </div>
            <div className="flex justify-center items-center h-1/2 w-1/2 m-8 relative overflow-hidden">
              <img
                className="w-1/2 object-contain"
                src={props.img.src}
                alt="prabhupada"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Project_card;
