import React from "react";
import { HeroContainer } from "./Hero.styles";

const Hero = () => {
  return (
    <HeroContainer>
      <div className="main-heading">IMAGINE A PLACE...</div>
      <div className="sub-text">
        ...where you can belong to a school club, a gaming group, or a worldwide
        art community. Where just you and a handful of friends can spend time
        together. A place that makes it easy to talk every day and hang out more
        often.
      </div>
      <div className="button-bar">
        <button className="dowload">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5V12.1578L16.2428 8.91501L17.657 10.3292L12.0001 15.9861L6.34326 10.3292L7.75748 8.91501L11 12.1575V5Z"
              fill="currentColor"
            />
            <path
              d="M4 14H6V18H18V14H20V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V14Z"
              fill="currentColor"
            />
          </svg>
          Download for Windows
        </button>

        <button className="open-browser">Open Discord in your Browser</button>
      </div>
    </HeroContainer>
  );
};

export default Hero;
