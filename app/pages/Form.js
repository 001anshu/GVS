"use client"
import React from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleData = (e) => {
    const formEle = document.querySelector(".form");
    const formDatab = new FormData(formEle);

    fetch(
      "https://script.google.com/macros/s/AKfycbyBch8VSDbJ_HBNb6DTc69EScvfS27swXny5XXzZNtChOk2l1DgJ4HeJD98J590wc9FGw/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSubmit = (data, e) => {
    handleData(e);
    reset();
    alert("Your Form is submitted ")
  };

  return (

    <div id='contact' >
      <div className="font-mono  text-slate-900 p-5 text-3xl  flex justify-center items-center">contact</div>
      <div className="bg-gradient-to-bl from-red-400 flex items-center justify-center">
      
      <form
        className="form  flex justify-center items-center md:ml-52 ml-10 opacity-80 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='form    shadow-xl grid-rows-4  opacity-80' >
        <input
          className="border border-solid shadow-xl p-5 m-3 w-1/3  rounded-lg items-center  "
          type="text"
          name="firstName"
          placeholder="Your Name"
          {...register("Name", { required: true, maxLength: 80 })}
        />

        <input
          className="border border-solid shadow-xl p-5 m-3 w-1/3 rounded-lg items-center "
          type="text"
          name="email"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          className="border border-solid shadow-xl p-5 m-3 w-1/3 rounded-lg items-center "
          type="tel"
          name="mobileNumber"
          placeholder="Mobile number"
          {...register("Number", {
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
        />
        <select
          {...register("Year")}
          className="border border-solid shadow-xl p-5 m-3 w-1/3 rounded-lg items-center "
        >
          <option value="1st Year">1st Year</option>
          <option value="2nd Year">2nd Year</option>
          <option value="3rd Year">3rd Year</option>
          <option value="4th Year">4th Year</option>
        </select>
        <input
          className="border border-solid shadow-xl p-5 m-3 w-1/3 rounded-lg items-center "
          type="text"
          placeholder="Branch"
          {...register("Branch", { required: true })}
        />
        <input
          className="border border-solid shadow-xl p-5 m-3 w-1/3 rounded-lg items-center "
          type="text"
          placeholder="Hostel"
          {...register("Hostel", { required: true })}
        />
        <input
          className="border border-solid shadow-xl p-5 m-3 w-1/3 rounded-lg items-center "
          type="text"
          placeholder="Connected To"
          {...register("ConnectedTo", { required: true })}
        />
        <input
          type="text"
          className="border border-solid shadow-xl p-5 m-3 w-1/3 rounded-lg items-center "
          placeholder="Message"
          {...register("Message", {})}
        />

      
        <input className="border shadow-xl border-solid p-5 m-3 w-1/3 cursor-pointer font-bold text-xl  rounded-lg items-center bg-gradient-to-br from bg-red-300  "   type="submit"  />
        </div>
      </form>
      </div>
    </div>
  );
}

export default Form