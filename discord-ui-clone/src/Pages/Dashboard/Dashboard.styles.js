import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 5rem 1fr;
`;

export const Content = styled.div`
  background: #36393f;
  height: 100vh;
  overflow: hidden;
  .top-bar {
    width: 100%;
    /* height: 8vh; */
    background: #36393f;
    border-bottom: 3px solid #32353b;
    display: flex;
    .text-box {
      width: 15%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px 0;
      background: #2f3136;
      input {
        background: #202225;
        color: #fff;
        border: none;
        padding: 10px 10px;
        width: 90%;
        border-radius: 5px;
      }
    }
    ul {
      /* background: red; */
      width: 40rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      /* width: 100%; */
      padding: 0;
      margin: 0;
      list-style: none;
      .selected {
        color: #fff;
      }
      li {
        color: #a3a6a9;
        .add-btn {
          background: #3ba55d;
          color: #fff;
          border: none;
          padding: 5px 10px;
          border-radius: 5px;
        }
      }
      .friends {
        padding: 5px 10px;
        display: flex;
        align-items: center;
        color: #fff;
        border-right: 1px solid #5e6167;
        cursor: pointer;
        .svg-container {
          width: 30px;
          height: 30px;
          margin-right: 20px;
        }
      }
    }
  }
  .body {
    display: grid;
    grid-template-columns: 15% 85%;
    .left-container {
      width: 100%;
      height: 95vh;
      background: #2f3136;
      padding: 10px 10px;
      .first-container {
        .friends {
          background: #393c42;
          padding: 5px 10px;
          border-radius: 5px;
          display: flex;
          align-items: center;
          color: #fff;
          cursor: pointer;
          .svg-container {
            width: 30px;
            height: 30px;
            margin-right: 20px;
          }
        }
        .nitro {
          /* background: #393c42; */
          padding: 5px 10px;
          border-radius: 5px;
          display: flex;
          align-items: center;
          color: #5e6167;
          cursor: pointer;
          margin-top: 5px;
          .svg-container {
            width: 30px;
            height: 30px;
            margin-right: 20px;
          }
        }
      }
      .message-container {
        margin-top: 20px;
        .heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 10px;
          p {
            text-transform: uppercase;
            font-size: 12px;
            color: #5e6167;
            font-weight: 600;
          }
        }
      }
    }
    .right-container {
      width: 100%;
      height: 95vh;

      background: #36393f;
      display: grid;
      grid-template-columns: 1fr 25%;
      .bg {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        p {
          color: #5e6167;
        }
      }
      .right-sidebar {
        border-left: 0.1px solid #5e6167;
        height: 100%;
        width: 20vw;
        color: #fff;
        padding: 20px;
        h3 {
          width: 100%;
        }
        .sub-heading {
          width: 100%;
          padding: 30px 10px;
          /* background: red; */
          text-align: center;
          h5 {
          }
          p {
            color: #a3a6a9;
            font-size: 12px;
            padding: 5px 0;
          }
        }
      }
    }
  }
`;
