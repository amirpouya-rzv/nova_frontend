"use client";

import DecorativeBackground from "./DecorativeBackground";
import Form from "./Form";
import LoginContainer from "./LoginContainer";

export default function LoginForm() {
  return (
    <main className="relative min-h-screen overflow-hidden flex items-center justify-center bg-background text-foreground px-5 py-12">
      <DecorativeBackground />

      <div className="relative z-10 w-full max-w-md">
        <div className="relative overflow-hidden rounded-[2rem] border border-border/80 bg-card/65 backdrop-blur-2xl shadow-[0_20px_80px_rgba(48,35,40,0.12)] p-7 sm:p-10">
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary via-rose to-accent" />
          <LoginContainer />
          <Form />
        </div>
      </div>
    </main>
  );
}
