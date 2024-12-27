import React from "react";
import Email from "/EnvelopeSimple.svg";

function InputEmail() {
  return (
    <div class="flex justify-center items-center font-montserrat text-xs bg-white h-[50px] w-[24rem] rounded-3xl shadow-md px-4 focus-within:outline focus-within:outline-2 focus-within:outline-PrimePurple">
      <img src={Email} alt="email-icon" class="h-6 w-6 mr-2" />
      <input
        type="email"
        placeholder="Email Address"
        class="flex-grow bg-white outline-none text-sm placeholder:transparent"
        required
        autoComplete="off"
      />
    </div>
  );
}

export default InputEmail;