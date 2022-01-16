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
    z-index: 10;
    .logo {
      display: none;
    }
    background: #363940;
    border-radius: 10px;
    .container {
      color: #fff;
      /* width: 480px; */
      display: flex;
      flex-direction: column;
      padding: 30px;
      .heading {
        text-align: center;
        color: #f6f7f9;
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

          padding-top: 20px;
          label {
            margin-bottom: 10px;
            font-size: 12px;
            font-weight: 400;
            text-transform: uppercase;
          }
          input {
            background: #303338;
            border: 1px solid #4a4e56;
            padding: 10px;
            border-radius: 5px;
            color: #f6f7f9;
            width: 25rem;
            height: 40px;
          }
          .date-wrapper {
            display: flex;
            justify-content: space-between;
            select {
              background: #303338;
              border: 1px solid #4a4e56;
              color: #f6f7f9;
              padding: 10px;
              border-radius: 5px;
            }
            .month {
              width: 150px;
              /* color: red; */
            }
            .year {
              width: 120px;
            }
            .date {
              width: 110px;
            }
          }
        }
        .continue {
          display: block;
          background: #5865f2;
          border: none;
          width: 25rem;
          padding: 10px 0;
          color: #f6f7f9;
          font-weight: 600;
          border-radius: 5px;
          margin-top: 20px;
        }
      }
    }
  }

  @media screen and (max-width: 485px) {
    .main-container {
      /* grid-template-columns: 30rem; */
      width: 100%;
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
      .container {
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
            .date-wrapper {
              .date {
                /* color: red; */
                width: 80px;
              }
            }
          }
          .continue {
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
          }
        }
      }
    }
  }
`;
