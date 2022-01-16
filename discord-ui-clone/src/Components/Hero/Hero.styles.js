const { default: styled } = require("styled-components");

export const HeroContainer = styled.div`
  /* background: #404eed; */
  margin: 0 auto;
  max-width: 60rem;
  height: 65vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  /* background: red; */
  .main-heading {
    font-size: 4rem;
    font-weight: 600;
    color: white;
    text-align: center;
  }

  .sub-text {
    font-size: 1.5rem;
    line-height: 1.5;
    font-weight: 400;
    color: white;
    text-align: center;
    margin-top: 2rem;
  }

  .button-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    /* background: red; */
    width: 100vw;

    button {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      padding: 0px 20px;
      height: 50px;
      border: none;
      font-size: 1rem;
      font-weight: 500;
      border-radius: 25px;
    }

    button + button {
      margin-left: 1rem;
    }
    .open-browser {
      background: rgb(30, 30, 30);
      color: white;
    }
  }

  @media screen and (max-width: 1024px) {
    margin: 0 30px;
    /* background: red; */
    /* width: 50vw; */
    height: 65vh;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;

    .main-heading {
      font-size: 4rem;
      text-align: left;
      font-weight: 900;
      /* width: 100%; */
      /* line-height: 2rem; */
    }

    .sub-text {
      line-height: 1.5rem;
      text-align: left;
      font-size: 1rem;
    }
    .button-bar {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: start;
      max-width: 100%;
      /* background: red; */

      button + button {
        margin-left: 0rem;
      }

      .open-browser {
        margin-top: 1rem;
      }
    }
  }

  @media screen and (max-width: 768px) {
    /* width: 80%; */
    .main-heading {
      font-weight: 800;
      line-height: 80%;
      font-size: clamp(24px, 5vw, 44px);
      width: max-content;
      /* background: red; */
    }
    .sub-text {
      font-size: clamp(16px, 2vw, 20px);
      width: 100%;
      line-height: 1.625;
      margin-top: 24px;
    }

    .button-bar {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      max-width: 100%;
      padding: 0 0;
      /* background: red; */

      button {
        /* width: 80rem; */
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        padding: 0px 20px;
        height: 50px;
        border: none;
        font-size: 1rem;
        font-weight: 500;
        border-radius: 25px;
      }

      button + button {
        margin-left: 0rem;
      }

      .open-browser {
        margin-top: 0rem;
        margin-left: 1rem;
        max-width: fit-content;
      }
    }
  }

  @media screen and (max-width: 640px) {
    .button-bar {
      /* background: red; */

      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: start;
      padding: 1rem 0;

      .open-browser {
        margin-top: 1rem;
        margin-left: 0rem;
        max-width: fit-content;
      }
    }
  }
`;
