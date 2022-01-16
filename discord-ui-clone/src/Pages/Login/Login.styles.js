import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  img {
    position: absolute;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;

    /* z-index: ; */
  }
  .main-container {
    background: #363940;
    color: #fff;
    min-width: 50rem;
    display: grid;
    grid-template-columns: 30rem 20rem;
    padding: 2rem 2rem;
    border-radius: 10px;
    z-index: 10;
    .logo {
      display: none;
    }
    .left-container {
      width: 100%;
      /* background: red; */
      .heading {
        text-align: center;
        color: #f6f7f9;

        p {
          padding-top: 10px;
          color: #86898c;
        }
      }
      .form {
        color: #86898c;
        padding-top: 15px;
        p {
          font-size: 12px;
          color: #2196f3;
          display: inline;
          cursor: pointer;
          :hover {
            text-decoration: underline;
          }
        }
        span {
          color: #86898c;
          font-size: 12px;
          margin-top: 20px;
        }
        .field {
          /* margin-bottom: 1rem; */
          display: flex;
          flex-direction: column;
          padding-right: 10px;
          padding-top: 20px;
          label {
            margin-bottom: 10px;
            font-size: 12px;
            font-weight: 600;
          }
          input {
            background: #303338;
            border: 1px solid #4a4e56;
            padding: 15px 10px;
            border-radius: 5px;
            color: #f6f7f9;
            width: 28rem;
          }
        }

        .login {
          background: #5865f2;
          border: none;
          width: 28rem;
          padding: 10px 0;
          color: #f6f7f9;
          font-weight: 600;
          border-radius: 5px;
          margin-top: 20px;
          :hover {
            background: #2196f3;
            cursor: pointer;
          }
        }
      }
    }
    .right-container {
      width: 100%;
      /* background: blue; */
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .top-container {
        padding: 10px;
        background: white;
        border-radius: 5px;
        img {
          position: relative;
          width: 150px;
          height: 150px;
        }
      }
      .bottom-container {
        padding-top: 20px;
        /* background: red; */
        .heading {
          text-align: center;
          color: #86898c;
          font-size: 14px;
          max-width: 80%;
          margin: 0 auto;
          /* background: red; */
          p {
            font-size: 1.4rem;
            font-weight: 500;
            color: #ffff;
            padding-bottom: 20px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 880px) {
    .main-container {
      /* grid-template-columns: 30rem; */
      max-width: 30rem;
      min-width: 0;
      padding: 1rem;
      .left-container {
        /* background: red; */
        padding: 0;
      }

      .right-container {
        display: none;
        width: 0;
        height: 0;
      }
    }
  }

  @media screen and (max-width: 485px) {
    .main-container {
      /* grid-template-columns: 30rem; */
      max-width: 100%;
      height: 100%;
      min-width: 0;
      padding: 1rem 0;
      border-radius: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      .logo {
        display: flex;
      }
      .left-container {
        /* background: red; */
        margin: auto 0;
        padding: 0;
        .form {
          padding: 0;
          p {
            /* background: red; */
            margin: 0 1rem;
          }
          .field {
            padding: 10px;
            input {
              margin: 0;
              width: 99%;
            }
          }
          .login {
            background: #5865f2;
            border: none;
            max-width: 94%;
            padding: 15px 0;
            margin: 10px 3%;
            color: #f6f7f9;
            font-weight: 600;
            border-radius: 5px;
            margin-top: 20px;
          }
          span {
            margin: 1rem 0 0 1rem;
          }
        }
      }

      .right-container {
        display: none;
        width: 0;
        height: 0;
      }
    }
  }
`;
