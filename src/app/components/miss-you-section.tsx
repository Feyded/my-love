import React from 'react';

const MissYouSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-rose-300 to-fuchsia-400 px-6">
      <div className="bg-white/50 backdrop-blur-md p-10 md:p-16 rounded-3xl shadow-2xl max-w-2xl text-center animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-extrabold text-rose-600 drop-shadow-md mb-6 leading-tight tracking-wide">
          Loveeeeeee 💖
        </h1>
        <h2 className="text-4xl md:text-5xl font-semibold text-pink-700 mb-4">
          I miss youuuuuuu! 😭💕
        </h2>
        <p className="text-xl md:text-2xl text-gray-700 italic mt-4">
          Every second, every heartbeat, you re on my mind. 💘
        </p>
      </div>
    </section>
  );
};

export default MissYouSection;
