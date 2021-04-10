import React from "react";
import heroImg from "../assets/brydon-hero.jpg";
import HomeStyled from "../styled-components/HomeStyle";
export default function Home() {
  return (
    <HomeStyled>
      <div className="img-container">
        <img
          style={{ maxHeight: "100%" }}
          src={heroImg}
          alt="Big Beautiful Windsor"
        />
      </div>
      <div className="content">
        <h1>Pop a Squat</h1>
        <p>The home your butt's been looking for</p>
      </div>
    </HomeStyled>
  );
}
