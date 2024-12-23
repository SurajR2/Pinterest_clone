import React, { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";

const FormInput = ({ label, type, placeholder, name, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const getInputType = () => {
    if (type.toLowerCase() === "password")
      return showPassword ? "text" : "password";
    return type.toLowerCase();
  };
  return (
    <div className="w-full text-start">
      <label htmlFor={label.toLowerCase()} className="block">
        {label}
      </label>
      <div className="relative w-full flex justify-center items-center h-full">
        <input
          type={getInputType()}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full border-2 border-slate-400 p-3 rounded-xl text-gray-700"
        />
        {type.toLowerCase() === "password" && (
          <a
            className="absolute right-1 transform -translate-x-full cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <IoEyeOff /> : <IoEye />}
          </a>
        )}
      </div>
    </div>
  );
};

export default FormInput;
