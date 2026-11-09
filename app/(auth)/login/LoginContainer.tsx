import React from 'react';

const LoginContainer = () => {
    return (
        <div>
             {/* Logo */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 mb-5 rotate-3">
              <span className="text-3xl font-black">N</span>
            </div>

            <h1 className="text-4xl font-black tracking-[0.25em] text-primary">
              NOVA
            </h1>

            <p className="text-sm text-muted-foreground mt-3">
              A beautiful experience starts here.
            </p>
          </div>

          {/* Heading */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold">
              Welcome Back!
            </h2>

            <p className="text-sm text-muted-foreground mt-2">
              Sign in to continue your journey with us.
            </p>
          </div>
        </div>
    );
};

export default LoginContainer;