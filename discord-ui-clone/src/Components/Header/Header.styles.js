import styled from "styled-components";

export const Navbar = styled.nav`
  /* background: red; */
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 30px;
  z-index: 5;

  .menu {
    display: flex;
    justify-content: end;
    /* background: red; */
    width: 100%;
    align-items: center;
    .nav-links {
      min-width: 30rem;
      /* height: 100%; */

      margin: 2rem 20% 2rem 0;

      .nav-menu {
        display: flex;
        justify-content: space-around;
        align-items: center;
        list-style: none;
        font-weight: 400;
        font-size: 15px;

        li {
          padding: 2px 0;
          :hover {
            text-decoration: underline;
            /* border-bottom: solid 1px; */
            padding: 0px 0;
            cursor: pointer;
          }
        }
      }
      .hide {
        display: none;
      }
    }

    .login-container {
      .login-btn {
        border: none;
        padding: 10px 20px;
        font-weight: 400;
        border-radius: 20px;
        transition: all 0.1s;
        :hover {
          box-shadow: 0px 5px 5px rgba(15, 15, 15, 0.616);
          cursor: pointer;
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .menu {
      flex-direction: row-reverse;
      .nav-links {
        margin: 2rem 0;

        .hamburger {
          cursor: pointer;
          margin-left: 20px;
          display: flex;
          flex-direction: column;
          .bar {
            width: 30px;
            height: 5px;
            background-color: white;
            margin: 2px 0;
          }
        }

        min-width: 1rem;
        .nav-menu {
          display: none;
        }
      }
      .sidebar {
        background: #fff;
        position: fixed;
        top: 0;
        right: 0;
        width: 350px;
        height: 100%;
        padding: 25px 20px;
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;

        transition: all 0.5s ease;
        ul {
          list-style: none;
          color: black;
          border-top: 1px solid #e6e6e6;
          padding: 20px 0;
          /* margin: 10px 0; */
          width: 90%;
          font-weight: 100;
          li {
            padding: 12px 20px;
            transition: all 0.1s ease;

            :hover {
              background: #f5f5f5;
              border-radius: 5px;
              text-decoration: underline;
              cursor: pointer;
            }
          }
          /* background: red; */
        }
        .wrapper {
          /* background: red; */
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          .close {
            cursor: pointer;
          }
        }
      }
    }
  }

  @media screen and (max-width: 750px) {
    max-width: 50rem;
    /* background: red; */
    .nav-links {
      /* background: green; */
    }
  }
`;
