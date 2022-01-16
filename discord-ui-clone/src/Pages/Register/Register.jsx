import { Wrapper } from "./Register.styles";
import bg from "../../Assets/login_bg.png";
import LogoSvg from "../../Components/SVG/LogoSVG";
import { useNavigate } from "react-router-dom";
import { Date, Month, Year } from "../../Data/Data";

const Register = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <img src={bg} alt="bg" />
      <div className="main-container">
        <div className="logo">
          <LogoSvg withText={true} color="white" />
        </div>
        <div className="container">
          <div className="heading">
            <h2>Create an account</h2>
          </div>
          <div className="form">
            <div className="field">
              <label htmlFor="email">
                <strong>EMAIL</strong>
              </label>
              <input type="text" name="email" />
            </div>
            <div className="field">
              <label htmlFor="email">
                <strong>Username</strong>
              </label>
              <input type="text" name="email" />
            </div>
            <div className="field">
              <label htmlFor="email">
                <strong>PASSWORD</strong>
              </label>
              <input type="password" name="password" />
            </div>
            <div className="field">
              <label htmlFor="email">
                <strong>Date of birth</strong>
              </label>
              <div className="date-wrapper">
                <select className="month">
                  <option value="" disabled selected>
                    Select
                  </option>
                  {Month.map((item, key) => (
                    <option value={item} key={key}>
                      {item}
                    </option>
                  ))}
                </select>
                <select className="date">
                  <option value="" disabled selected>
                    Select
                  </option>
                  {Date.map((item, key) => (
                    <option value={item} key={key}>
                      {item}
                    </option>
                  ))}
                </select>
                <select className="year">
                  <option value="" disabled selected>
                    Select
                  </option>
                  {Year.map((item, key) => (
                    <option value={item} key={key}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button className="continue">Continue</button>
            <br />
            <span>
              <p onClick={() => navigate("/login")}>Already have an account?</p>
            </span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Register;
