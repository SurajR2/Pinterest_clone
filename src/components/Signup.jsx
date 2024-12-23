import React, { useState } from "react";
import logo from "/pinterest.png";
import GooogleLogo from "/google.png";
import FormInput from "./FormInput";
import { IoEye } from "react-icons/io5";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    birthDate: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // API call or form submission logic goes here
    console.log(formData);
  };
  return (
    <div className="flex flex-col items-center justify-center text-center box-border w-fit m-auto">
      <div className="bg-white w-fit h-fit px-20 py-10 rounded-t-[2rem]">
        <div className="flex flex-col justify-center items-center mb-6">
          <img src={logo} alt="logo" className="w-10 h-10 mb-6" />
          <h1 className="font-bold text-3xl pb-0">Welcome to pinterest</h1>
          <p>Find new ideas to try</p>
        </div>
        <form
          className="flex flex-col justify-center items-center gap-2"
          action="submit"
          onSubmit={handleSubmit}
        >
          <FormInput
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email"
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="password"
          />
          <FormInput
            label="BirthDate"
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
          />
          <button className="w-full p-3 bg-primary rounded-3xl m-auto">
            Continue
          </button>
        </form>
        <p className="font-bold py-4">OR</p>

        <div className="relative flex justify-center items-center">
          <button
            className="w-full border border-slate-500 p-2  rounded-3xl m-auto"
            type="submit"
          >
            Continue with Google
          </button>
          <img
            src={GooogleLogo}
            alt="google"
            className="absolute w-4 h-4 right-2 transform -translate-x-1/2"
          />
        </div>
      </div>
      <div className="w-full bg-slate-300 py-4 rounded-b-[2rem] flex justify-center items-center">
        <a className="font-bold text-[16px] cursor-pointer">
          Create a free business account
        </a>
      </div>
    </div>
  );
};

export default Signup;
