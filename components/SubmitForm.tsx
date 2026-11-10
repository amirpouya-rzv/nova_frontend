"use client";
import { ImSpinner9 } from "react-icons/im";
import React from "react";
import { useFormStatus } from "react-dom";

const SubmitForm = () => {
  const { pending } = useFormStatus();
  return (
    <div>
      <button
        type="submit"
        disabled={pending}
        className="group disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden w-full h-13 rounded-xl bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/20 transition-all duration-300 hover:bg-rose hover:shadow-rose/20 hover:-translate-y-1 active:translate-y-0"
      >
        {pending ? (
          <ImSpinner9 className="mx-auto animate-spin text-xl disabled:cursor-copy" />
        ) : (
          <span className="relative z-10">Sign In</span>
        )}
        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-linear-to-r from-transparent via-white/15 to-transparent transition-transform duration-700" />
      </button>
    </div>
  );
};

export default SubmitForm;
