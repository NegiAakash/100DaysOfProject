import React from "react";
import { serverList } from "../../Data/Data";
import NewLine from "../../Assets/new_line_logo.png";
import ExploreSvg from "../SVG/ExploreSVG";
import DownloadSvg from "../SVG/DownloadSVG";
import LogoSvg from "../SVG/LogoSVG";
import AddSvg from "../SVG/AddSVG";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "./Sidebar.styles";
export const SidebarComponent = () => {
  const navigate = useNavigate();

  return (
    <Sidebar>
      <div className="left-container">
        <div className="home">
          <div className="logo-container">
            <div className="logo" onClick={() => navigate("/dashboard")}>
              <LogoSvg withText={false} color="white" />
            </div>
          </div>
        </div>
        <div className="server-list">
          {serverList.map((item, key) => (
            <div
              className="server"
              key={key}
              onClick={() => navigate(`/server/newLine`)}
            >
              <img src={NewLine} alt={item.name} />
            </div>
          ))}
        </div>
        <div className="controls">
          <div className=" icon">
            <AddSvg color="#3BA55D" size="30" />
          </div>
          <div className=" icon">
            <ExploreSvg />
          </div>
          <div className=" icon">
            <DownloadSvg />
          </div>
        </div>
      </div>
    </Sidebar>
  );
};
