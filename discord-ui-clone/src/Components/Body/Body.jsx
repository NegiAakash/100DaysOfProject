import React from "react";
import {
  FifthContainer,
  FirstContainer,
  FourthContainer,
  Heading,
  SecondContainer,
  ThirdContainer,
  Wrapper,
} from "./Body.styles";
import FirstSvg from "../SVG/BodySVG_1";
import SecondSvg from "../SVG/BodySVG_2";
import ThirdSvg from "../SVG/BodySVG_3";
import FourthSvg from "../SVG/BodySVG_4";

const Body = () => {
  return (
    <Wrapper>
      <main className="">
        <FirstContainer>
          <div className="left-container">
            <FirstSvg width="500" height="400" />
          </div>
          <div className="right-container">
            <Heading>
              <div className="heading">
                Create an invite-only place where you belong
              </div>
              <div className="sub-heading">
                Discord servers are organized into topic-based channels where
                you can collaborate, share, and just talk about your day without
                clogging up a group chat.
              </div>
            </Heading>
          </div>
        </FirstContainer>
        <SecondContainer>
          <div className="second">
            <div className="left-container">
              <SecondSvg />
            </div>
            <div className="right-container">
              <Heading>
                <div className="heading">Where hanging out is easy</div>
                <div className="sub-heading">
                  Grab a seat in a voice channel when you’re free. Friends in
                  your server can see you’re around and instantly pop in to talk
                  without having to call.
                </div>
              </Heading>
            </div>
          </div>
        </SecondContainer>
        <ThirdContainer>
          <div className="left-container">
            <ThirdSvg width="500" height="400" />
          </div>
          <div className="right-container">
            <Heading>
              <div className="heading">From few to a fandom</div>
              <div className="sub-heading">
                Get any community running with moderation tools and custom
                member access. Give members special powers, set up private
                channels, and more.
              </div>
            </Heading>
          </div>
        </ThirdContainer>
        <FourthContainer>
          <div className="fourth">
            <div className="heading">Reliable tech for staying close</div>
            <div className="sub-heading">
              Low-latency voice and video feels like you’re in the same room.
              Wave hello over video, watch friends stream their games, or gather
              up and have a drawing session with screen share.
            </div>
            <div className="svg-container">
              <FourthSvg />
            </div>
          </div>
        </FourthContainer>
        <FifthContainer>
          <div className="download-container">
            <div className="download-text">Ready to start your journey?</div>
            <div className="download-btn">
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
                <p>Download for Windows</p>
              </button>
            </div>
          </div>
        </FifthContainer>
      </main>
    </Wrapper>
  );
};

export default Body;
