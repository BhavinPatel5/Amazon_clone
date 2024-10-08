import React, { useState } from "react";
import { Link } from "react-router-dom";
import { darklogo } from "../Assets/index.js";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Registration = () => {
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rPassword, setRPassword] = useState("");

  //Error functions
  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errRPassword, setErrRPassword] = useState("");

  // Handle functions
  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };
  const handleRPassword = (e) => {
    setRPassword(e.target.value);
    setErrRPassword("");
  };
  // Email Validation
  const emailValidation = (email) => {
    return RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).exec(
      String(email).toLowerCase()
    );
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    if (!clientName) {
      setErrClientName("Enter your name");
    }
    if (!email) {
      setErrEmail("Enter your email");
    } else if (!emailValidation(email)) {
      setErrEmail("Enter valid Email");
    }
    if (!password) {
      setErrPassword("Enter your password");
    } else if (password.length < 6) {
      setErrPassword("Password must be at least 6 characters");
    }
    if (!rPassword) {
      setErrRPassword("Confirm your password");
    } else if (rPassword !== password) {
      setErrRPassword("Passwords do not match");
    }
    if (
      clientName &&
      email &&
      emailValidation(email) &&
      password &&
      password.length >= 6 &&
      rPassword &&
      rPassword === password
    ) {
      console.log(clientName, email, password, rPassword);
      setClientName("");
      setEmail("");
      setPassword("");
      setRPassword("");
    }
  };
  return (
    <div className="w-full ">
      <div className="w-full bg-gray-100 pb-10">
        <form className="w-[350px] mx-auto flex flex-col items-center">
          <img className="w-32 py-2" src={darklogo} alt="" />
          <div className="w-full border border-zinc-200 p-6">
            <h2 className="font-titleFont text-3xl font-medium mb-4">
              Create Account
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Your Name</p>
                <input
                  value={clientName}
                  onChange={handleName}
                  className="w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="text"
                />
                {errClientName && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>
                    {errClientName}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Email or Phone Number</p>
                <input
                  value={email}
                  onChange={handleEmail}
                  className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="email"
                />
                {errEmail && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>
                    {errEmail}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Password</p>
                <input
                  value={password}
                  onChange={handlePassword}
                  className="w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="password"
                />
                {errPassword && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>
                    {errPassword}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Re-enter Password</p>
                <input
                  value={rPassword}
                  onChange={handleRPassword}
                  className="w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="password"
                />
                {errRPassword && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>
                    {errRPassword}
                  </p>
                )}
                <p className="text-xs text-gray-600">
                  Passwords must be at least 6 characters.
                </p>
              </div>
              <button
                onClick={handleRegistration}
                className="w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput">
                Continue
              </button>
            </div>
            <p className="text-xs text-black leading-4 mt-4">
              By Creating Account, you agree to Amazon's{" "}
              <span className="text-blue-600">Conditions of Use</span> and{" "}
              <span className="text-blue-600">Privacy Notice.</span>
            </p>
            <div>
              <p className="text-xs text-black">
                Already have an account?
                <Link to="/signin">
                  <span className="text-xs text-blue-600 group-hover:text-orange-700 group-hover:underline-offset-1 cursor-pointer duration-100">
                    {" "}
                    Sign in
                    <span>
                      <ArrowRightIcon />
                    </span>
                  </span>
                </Link>
              </p>
              <p className="text-xs text-black -mt-2">
                <span className="text-xs text-blue-600 group-hover:text-orange-700 group-hover:underline-offset-1 cursor-pointer duration-100">
                  Buying for work?{""} Create a free business account
                </span>
              </p>
            </div>
          </div>
        </form>
      </div>
      <div className="w-full bg-gradient-to-t from-white via-white to-zinc-200 flex flex-col gap-4 justify-center items-center py-10">
        <div className="flex items-center gap-6 ">
          <p className="text-xs text-blue-600 group-hover:text-orange-700 group-hover:underline-offset-1 cursor-pointer duration-100">
            Conditions of Use
          </p>
          <p className="text-xs text-blue-600 group-hover:text-orange-700 group-hover:underline-offset-1 cursor-pointer duration-100">
            Privacy Notice
          </p>
          <p className="text-xs text-blue-600 group-hover:text-orange-700 group-hover:underline-offset-1 cursor-pointer duration-100">
            Help
          </p>
        </div>
        <p className="text-xs text-gray-600">
          © 1996-2024, Amazon.com,Inc. or its affiliates.
        </p>
      </div>
    </div>
  );
};

export default Registration;
