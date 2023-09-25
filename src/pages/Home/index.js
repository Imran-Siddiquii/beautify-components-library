import React, { useEffect, useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [height, setHeight] = useState("auto");
  const navigate = useNavigate();
  useEffect(() => {
    // Calculate the available height
    const windowHeight = window.innerHeight;
    const headerHeight = document.querySelector("header").offsetHeight;
    const contentHeight = windowHeight - headerHeight - 40;

    // Set the height to the content
    setHeight(contentHeight + "px");
  }, []);

  return (
    <div className="home-page">
      <div className="content-container" style={{ height }}>
        <h1 className="heading">Beautify Components Library</h1>
        <p className="description">
          A collection of innovative components of modern web development
        </p>
        <div className="button-container">
          <button className="button" onClick={() => navigate("/components")}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
