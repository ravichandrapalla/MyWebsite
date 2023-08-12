import { useEffect } from "react";
import "./Homepage.css";
const HomePage = () => {
  useEffect(() => {});

  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          Logo
        </a>
        <nav className="navbar">
          <a href="#">Home</a>
          <a href="#" className="navanc">
            Portfolio
          </a>
          <a href="#" className="navanc">
            Skills
          </a>
          <a href="#" className="navanc">
            About Me
          </a>
          <a href="#" className="navanc">
            Contact me
          </a>
        </nav>
      </header>
    </>
  );
};

export default HomePage;
