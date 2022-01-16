import styled from "styled-components";

export const Sidebar = styled.div`
  height: 100vh;
  display: flex;
  /* width: ; */
  .left-container {
    min-width: 5rem;
    height: 100vh;
    background: #202225;
    transition: all 0.1s ease-in-out;
    .home {
      border-bottom: 1px solid #2f3136;
      .logo-container {
        display: flex;
        background: #5865f2;
        display: flex;
        justify-content: center;
        align-items: center;
        width: fit-content;
        padding: 10px;
        border-radius: 50%;
        margin: 20px auto;
        transition: all 0.1s ease-in-out;
        overflow: hidden;
        .logo {
          width: 33px;
          height: 33px;
          /* background: red; */
        }

        :hover {
          border-radius: 30%;
          cursor: pointer;
        }
      }
    }
    .server-list {
      /* background: red; */
      padding: 10px 0;
      border-bottom: 1px solid #2f3136;

      .server {
        display: flex;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin: 10px auto;
        overflow: hidden;
        :hover {
          border-radius: 30%;
          cursor: pointer;
        }
      }
    }
    .controls {
      padding: 10px 0;
      .icon {
        background: #36393f;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin: 10px auto;
        overflow: hidden;
        :hover {
          border-radius: 30%;
          cursor: pointer;
        }
      }
    }
  }
`;
