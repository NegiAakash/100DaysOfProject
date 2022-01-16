import styled from "styled-components";

export const Wrapper = styled.div`
  background: #23272a;
  color: #edeeee;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  .top-container {
    margin: 0 auto;
    max-width: 90vw;
    display: flex;
    flex-direction: row;
    .left-container {
      width: 25vw;
      /* background: red; */
      padding: 50px;
      h1 {
        color: #5865f2;
        font-size: 2.5rem;
        text-transform: uppercase;
        line-height: 2.5rem;
      }
      .social-icons {
        display: flex;
        justify-content: space-between;
        max-width: 60%;

        a {
          margin-top: 20px;
          color: #edeeee;
        }
      }
    }
    .right-container {
      width: 75rem;
      /* background: green; */
      display: flex;
      flex-direction: row;
      max-width: 75%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      padding: 50px;
      grid-gap: 20px;

      .footer-links {
        /* max-width: 15rem; */
        /* background: red; */
        p {
          margin-bottom: 10px;
          color: #5865f2;
        }
        ul {
          list-style: none;
          li {
            margin-bottom: 10px;
            :hover {
              cursor: pointer;
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
  .bottom-container {
    /* margin: 0 auto; */
    max-width: 100vw;
    padding: 0 100px;
    .wrapper {
      /* background: red; */
      padding: 50px 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-top: 1px solid #5865f2;
      .signup {
        font-size: clamp(10px, 1vw, 15px);
        display: flex;
        justify-content: center;
        align-items: center;
        background: #404eed;
        color: #ffffff;
        padding: 10px 20px;
        border: none;
        border-radius: 20px;
        font-weight: 300;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .top-container {
      .right-container {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }

  @media screen and (max-width: 768px) {
    .top-container {
      flex-direction: column;
      .left-container {
        width: 100%;
        h1 {
          /* background: red; */
          max-width: 100vw;
        }
        .social-icons {
          max-width: 30vw;
        }
      }
      .right-container {
        max-width: 100vw;
      }
    }
    .bottom-container {
      padding: 0 50px;
      .wrapper {
        max-width: 100%;
        padding: 20px 0;
      }
    }
  }
`;
