import React from 'react';

const DecorativeBackground = () => {
    return (
        <div>
            {/* Decorative Background */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/15 blur-[110px]" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-rose/15 blur-[110px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-accent/40 blur-[120px]" />
        </div>
    );
};

export default DecorativeBackground;