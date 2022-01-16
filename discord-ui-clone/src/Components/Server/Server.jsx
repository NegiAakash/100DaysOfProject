import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { channels, users } from "../../Data/Data";

import { SidebarComponent } from "../Sidebar/SidebarComponent";
import HashSVG from "../SVG/HashSVG";
import HeadphonesSVG from "../SVG/HeadphonesSVG";
import LogoSVG from "../SVG/LogoSVG";
import MicSVG from "../SVG/MicSVG";
import CogSVG from "../SVG/CogSVG";
import UsersSVG from "../SVG/UsersSVG";
import GiftSVG from "../SVG/GiftSVG";
import GifSVG from "../SVG/GifSVG";
import SearchSVG from "../SVG/SearchSVG";

import NotificationSVG from "../SVG/NotificationSVG";

import {
  ChatContainer,
  LeftContainer,
  OnlineContainer,
  Wrapper,
} from "./Server.styles";
import PinSVG from "../SVG/PinSVG";
import AddSVG from "../SVG/AddSVG";
import EmojiSVG from "../SVG/EmojiSVG";
import InboxSVG from "../SVG/InboxSVG";
import QuestionSVG from "../SVG/QuestionSVG";

const Server = () => {
  const { name } = useParams();
  const [channel, setChannel] = useState(channels[0]);

  return (
    <Wrapper>
      <SidebarComponent />
      <div className="main">
        <LeftContainer>
          <div className="title">
            <h3>{name}</h3>
            <div className="close">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className="content-container">
            <div className="item">
              <HashSVG />
              <p>rules</p>
            </div>
            <div className="sub-heading">Text channels</div>
            <div className="channels-list">
              {channels.map((item, key) => (
                <div
                  className="item "
                  key={key}
                  onClick={() => setChannel(item)}
                >
                  <HashSVG />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="voice-call-container">
            <div className="user">
              <div className="icon">
                <div className="logo">
                  <LogoSVG withText={false} color="white" />
                </div>
              </div>
              <div className="name">
                <p>EvilPotato</p>
                <span>#1742</span>
              </div>
            </div>
            <div className="controls">
              <div className="mic">
                <MicSVG />
              </div>
              <div className="headphone">
                <HeadphonesSVG />
              </div>
              <div className="cog">
                <CogSVG />
              </div>
            </div>
          </div>
        </LeftContainer>
        <ChatContainer>
          <div className="top-container">
            <div className="channel-title">
              <HashSVG />
              {channel}
            </div>
            <div className="icons">
              <NotificationSVG />
              <UsersSVG />
              <PinSVG />
            </div>
          </div>
          <div className="messages"></div>
          <div className="text-box">
            <div className="box">
              <div className="add-icon">
                <div className="svg">
                  <AddSVG color="#40444B" size="25" />
                </div>
              </div>
              <input type="text" placeholder={`Message #${channel}`} />
              <div className="icon-set">
                <GiftSVG />
                <GifSVG />
                <EmojiSVG size="20" color="#b9bbbe" />
              </div>
            </div>
          </div>
        </ChatContainer>
        <OnlineContainer>
          <div className="top-bar">
            <div className="search-bar">
              <input type="text" placeholder="Search" />
              <div className="icon">
                <SearchSVG />
              </div>
            </div>
            <div className="icon-set">
              <div className="inbox">
                <InboxSVG />
              </div>
              <div className="question">
                <QuestionSVG />
              </div>
            </div>
          </div>
          <div className="online-list">
            <h3>Online-{users.length}</h3>
            <div className="users-list">
              {users.map((user, key) => (
                <div className="user">
                  <div className="icon">
                    <div className="svg">
                      <LogoSVG withText={false} color="whitesmoke" />
                    </div>
                  </div>
                  <p>{user}</p>
                </div>
              ))}
            </div>
          </div>
        </OnlineContainer>
      </div>
    </Wrapper>
  );
};

export default Server;
