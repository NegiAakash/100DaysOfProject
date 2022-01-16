import styled from "styled-components";

export const Wrapper = styled.div`
  background: #36393f;
  display: flex;
  .main {
    overflow: hidden;
    display: grid;
    grid-template-columns: 15% 1fr 20%;
  }
`;

export const LeftContainer = styled.div`
  background: #2f3136;
  color: #fff;
  padding: 20px 10px;
  display: grid;
  /* flex-direction: column; */
  grid-template-rows: 5vh 85vh 10vh;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
    }
  }
  .content-container {
    padding: 25px 0;
    .item {
      padding: 10px 0;
      display: flex;
      color: #75797e;
      p {
        margin-left: 10px;
      }
    }
    .sub-heading {
      color: #696c71;
    }
    .channels-list {
      margin-left: 15px;
      overflow-y: scroll;
      overflow-x: hidden;
      margin-top: 10px;
      height: calc(100vh - 250px);
      .item {
        padding: 10px 0;
        display: flex;
        color: #75797e;
        :hover {
          cursor: pointer;
          background: #3f4c6b;
        }
        p {
          margin-left: 10px;
          color: whitesmoke;
        }
      }
    }
  }
  .voice-call-container {
    /* overflow: auto; */
    width: 110%;
    margin: 0 0 0 -10px;
    height: 80px;
    background: #202225;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .user {
      display: flex;
      align-items: center;
      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: tomato;

        .logo {
          width: 32px;
          height: 32px;
          display: flex;
        }
      }
      .name {
        margin-left: 5px;
        font-size: 13px;
        font-weight: 600;
        color: whitesmoke;
        span {
          color: #75797e;
          font-weight: 300;
        }
      }
    }
    .controls {
      /* background: red; */
      margin-right: 20px;
      display: flex;
      .mic {
        margin: 0 15px;
        :hover {
          cursor: pointer;
        }
      }
      .headphone {
        margin: 0 0px;
        :hover {
          cursor: pointer;
        }
      }
      .cog {
        margin: 0 15px;
        :hover {
          cursor: pointer;
        }
      }
    }
  }
`;

export const ChatContainer = styled.div`
  background: #36393f;
  display: grid;
  grid-template-rows: 5vh 85vh 5vh;

  .top-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 10px;

    .channel-title {
      /* width: 10%; */
      text-transform: capitalize;
      color: whitesmoke;
      display: flex;
      justify-content: flex-start;
    }
    .icons {
      display: flex;
      justify-content: space-between;
      color: whitesmoke;
      /* background: red; */
      width: 6rem;

      :hover {
        cursor: pointer;
      }
    }
  }

  .text-box {
    /* background: red; */
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .box {
      width: 98%;
      display: grid;
      grid-template-columns: 3rem 1fr 8rem;

      .add-icon {
        background: #40444b;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        height: 3rem;
        border-right: 1px solid #2f3136;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        .svg {
          background: #b9bbbe;
          width: 25px;
          height: 25px;
          border-radius: 50%;
        }
      }

      input {
        background: #40444b;
        width: 100%;
        height: 3rem;
        padding: 0.5rem;
        border: none;
        color: whitesmoke;
      }

      .icon-set {
        background: #40444b;
        /* background: blue; */
        color: #b9bbbe;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
    }
  }
`;

export const OnlineContainer = styled.div`
  background: #2f3136;
  .top-bar {
    background: #36393f;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 5px;

    .search-bar {
      display: flex;
      flex-direction: row;
      background: #202225;
      width: fit-content;
      padding: 5px 10px;
      input {
        background: #202225;
        border: none;
        color: whitesmoke;
        outline: none;
      }
    }
    .icon-set {
      display: flex;
      .inbox {
        padding: 0 5px;
      }
      .question {
        padding: 0 5px;
      }
    }
  }

  .online-list {
    color: #8a8e93;
    padding: 30px 10px;
    h3 {
      font-weight: 500;
      font-size: 15px;
    }
    .users-list {
      padding: 10px 5px;
      .user {
        /* background: red; */
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 20px 0;
        p {
          margin-left: 10px;
        }
        .icon {
          background: red;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          .svg {
            width: 32px;
            height: 32px;
          }
        }
      }
    }
  }
`;
