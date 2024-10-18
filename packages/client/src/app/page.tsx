"use client";
import React from "react";
import { Button } from "@/components/atom/shad/button";
import Image from "next/image";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-7xl px-6 py-16 flex flex-col md:flex-row items-center">
        {/* Left Side: Text */}
        <div className="md:w-1/2">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Pokesample</h1>
          <p className="text-xl text-gray-600 mb-8">
            전 세계의 트레이너들과 함께 전략을 공유하고, 배틀에서 승리하세요.
          </p>
          <Button
            className="px-6 py-3 text-lg"
            onClick={() => {
              window.location.href = "/sample/list";
            }}
          >
            지금 시작하기
          </Button>
        </div>
        {/* Right Side: Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <div className="w-[500px] h-500px"></div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
