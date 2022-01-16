import { Content, Sidebar, Wrapper } from "./Dashboard.styles";
import FriendSVG from "../../Components/SVG/FriendSVG";
import NitroSVG from "../../Components/SVG/NitroSVG";
import AddSvg from "../../Components/SVG/AddSVG";
import PageSVG from "../../Components/SVG/PageSVG";

const ContentComponent = () => {
  return (
    <Content>
      <div className="top-bar">
        <div className="text-box">
          <input type="text" placeholder="Find or start a conversation" />
        </div>
        <ul>
          <li>
            <div className="friends">
              <div className="svg-container">
                <FriendSVG />
              </div>
              Friends
            </div>
          </li>
          <li className="selected">Online</li>
          <li>All</li>
          <li>Pending</li>
          <li>Blocked</li>
          <li>
            <button className="add-btn">Add Friend</button>
          </li>
        </ul>
      </div>
      <div className="body">
        <div className="left-container">
          <div className="first-container">
            <div className="friends">
              <div className="svg-container">
                <FriendSVG />
              </div>
              Friends
            </div>
            <div className="nitro">
              <div className="svg-container">
                <NitroSVG />
              </div>
              Nitro
            </div>
          </div>

          <div className="message-container">
            <div className="heading">
              <p>Direct messages</p>
              <AddSvg color="#5e6167" size="20" />
            </div>
          </div>
        </div>
        <div className="right-container">
          <div className="bg">
            <PageSVG />
            <p>No one's around to play with Wumpus.</p>
          </div>
          <div className="right-sidebar">
            <h3>Active Now</h3>
            <div className="sub-heading">
              <h5>It's quiet for now...</h5>
              <p>
                When a friend starts an activity—like playing a game or hanging
                out on voice—we’ll show it here!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
};
export default ContentComponent;
