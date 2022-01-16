import styled from "styled-components";

export const Wrapper = styled.div`
  main {
    background: #ffffff;
  }
`;

export const FirstContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 50px;
  max-width: 90rem;
  margin: 0 auto;
  padding: 5rem 0;

  .left-container {
    max-width: 40rem;
    display: flex;
    align-items: center;
  }

  .right-container {
    max-width: 40rem;
  }

  @media screen and (max-width: 1024px) {
    max-width: 100%;
    padding: 2rem 0;

    .right-container {
      /* background: red; */
      max-width: 30rem;
    }
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    .right-container {
      max-width: 100%;
    }
  }
`;

export const SecondContainer = styled.div`
  background: #f6f6f6;

  .second {
    max-width: 90rem;
    margin: 0 auto;
    display: flex;
    flex-direction: row-reverse;
    gap: 50px;
    padding: 5rem 0;

    .left-container {
      /* background: red; */
      max-width: 40rem;
      display: flex;
      align-items: center;
    }
    .right-container {
      /* background: blue; */
      max-width: 40rem;
      padding-left: 20px;
    }
  }

  @media screen and (max-width: 1024px) {
    .second {
      max-width: 100%;
      padding: 2rem 0;

      .right-container {
        /* background: red; */
        max-width: 30rem;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .second {
      max-width: 100%;
      display: flex;
      flex-direction: column;
      .right-container {
        padding-left: 0px;
        max-width: 100%;
      }
    }
  }
`;

export const ThirdContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 50px;
  max-width: 90rem;
  margin: 0 auto;
  padding: 5rem 0;

  .left-container {
    max-width: 40rem;
    display: flex;
    align-items: center;
  }

  .right-container {
    max-width: 40rem;
  }

  @media screen and (max-width: 1024px) {
    max-width: 100%;
    padding: 2rem 0;

    .right-container {
      /* background: red; */
      max-width: 30rem;
    }
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    .right-container {
      max-width: 100%;
    }
  }
`;

export const FourthContainer = styled.div`
  background: #f6f6f6;

  .fourth {
    max-width: 90rem;
    /* background: red; */
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5rem 0;
    .heading {
      font-size: clamp(20px, 4vw, 40px);
      font-weight: 600;
      color: #1c1b29;
      margin-bottom: 20px;
      max-width: 80%;
      text-transform: uppercase;
    }
    .sub-heading {
      font-size: clamp(16px, 2vw, 20px);
      font-weight: 300;
      max-width: 80%;
      text-align: center;
    }
  }
`;

export const FifthContainer = styled.div`
  background: #f6f6f6;
  .download-container {
    /* background: red; */
    max-width: 90rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;
    .download-text {
      font-size: clamp(20px, 4vw, 40px);
      font-weight: 500;
    }
    .download-btn {
      padding: 40px 0;
      button {
        font-size: clamp(16px, 2vw, 20px);
        display: flex;
        justify-content: center;
        align-items: center;
        background: #404eed;
        color: #ffffff;
        padding: 10px 20px;
        border: none;
        border-radius: 20px;
        font-weight: 300;
        p {
          padding-left: 10px;
        }
      }
    }
  }
`;

export const Heading = styled.div`
  .heading {
    font-size: 3rem;
    font-weight: 600;
    color: #1c1b29;
    margin-bottom: 50px;
    max-width: 80%;
  }
  .sub-heading {
    font-size: 1.5rem;
    font-weight: 300;
    max-width: 80%;
  }

  @media screen and (max-width: 1024px) {
    .heading {
      font-size: 40px;
      font-weight: 120%;
      max-width: 90%;
      /* background: red; */
      margin-bottom: 10px;
    }

    .sub-heading {
      font-size: 24px;
      line-height: 1.625;
    }
  }

  @media screen and (max-width: 768px) {
    .heading {
      /* background: red; */
      max-width: 100%;
      margin: 0;
      text-align: center;
      padding: 0 20px;
      font-size: clamp(20px, 4vw, 40px);
      font-weight: 120%;
    }

    .sub-heading {
      text-align: left;
      max-width: 100%;
      padding: 20px 20px;

      font-size: clamp(12px, 2vw, 24px);
    }
  }
`;
