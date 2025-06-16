"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [showMessage, setShowMessage] = useState(false);
  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center px-4">
      <div className="relative bg-white shadow-lg rounded-xl p-8 max-w-md text-center space-y-6">
        <h1 className="text-2xl font-semibold text-pink-600">Hi love 💖</h1>
        <p className="text-gray-700">
          I want you to know that Im always thinking of you.
          <br />
          Im always here for you, and my love for you is eternity. 💘
          <br />
        </p>
        <div className="absolute top-38 right-12 text-sm text-gray-500 italic text-right">
          ~ bal
        </div>
        <div className="flex items-center justify-center mt-12 ">
          <Image
            width={150}
            height={390}
            src="/my-love.png"
            alt="Us together"
            className="rounded-lg shadow-md border border-pink-300 "
          />
        </div>
        {!showMessage && (
          <button
            onClick={() => setShowMessage(true)}
            className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full shadow transition duration-300 ease-in-out"
          >
            Tap me 💕
          </button>
        )}
        {showMessage && (
          <p className="text-lg text-pink-600 font-medium animate-fadeIn">
            I miss you 😢
          </p>
        )}
        <p className="text-sm text-pink-500">Forever yours 💌</p>
      </div>
    </div>
  );
}
