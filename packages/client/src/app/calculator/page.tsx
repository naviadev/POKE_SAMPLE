"use client";
import React, { useState } from "react";

const ProfileCard = () => {
  const [pokedexNumber, setPokedexNumber] = useState(1); // 기본값을 1번 포켓몬으로 설정

  const handleInputChange = (e: any) => {
    const value = e.target.value ? parseInt(e.target.value, 10) : 1;
    if (value >= 1 && value <= 1025) {
      setPokedexNumber(value);
    }
  };

  const setPokemonImagePosition = (pokedexNumber: any) => {
    const spriteWidth = 64; // 각 포켓몬 이미지의 가로 크기
    const spriteHeight = 64; // 각 포켓몬 이미지의 세로 크기
    const columns = 32; // 스프라이트 이미지에서 한 줄에 있는 포켓몬 이미지의 개수
    const index = pokedexNumber - 1;
    const x = -(index % columns) * spriteWidth;
    const y = -Math.floor(index / columns) * spriteHeight;
    return { backgroundPosition: `${x}px ${y}px` };
  };

  return (
    <div>
      {/* 포켓몬 도감번호를 입력받는 input */}
      <input
        type="number"
        value={pokedexNumber}
        onChange={handleInputChange}
        min="1"
        max="1025"
        placeholder="Enter Pokédex number"
        style={{ marginBottom: "10px", padding: "5px" }}
      />

      {/* 스프라이트 이미지에서 해당 포켓몬 이미지를 배경으로 설정한 span */}
      <span
        style={{
          ...setPokemonImagePosition(pokedexNumber),
          width: "64px", // 포켓몬 이미지의 가로 크기
          height: "64px", // 포켓몬 이미지의 세로 크기
          backgroundImage: `url('/sprite_merge/spriyte_image.webp')`, // 스프라이트 이미지 경로
          backgroundSize: "2048px 2112px", // 전체 스프라이트 이미지의 크기
          display: "inline-block", // 블록 요소로 표시하여 크기 지정
        }}
      ></span>
    </div>
  );
};

export default ProfileCard;
