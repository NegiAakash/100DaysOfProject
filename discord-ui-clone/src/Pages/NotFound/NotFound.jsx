import React from "react";
import { Wrapper } from "./Notfound.styles";
import bg from "../../Assets/404.png";
const NotFound = () => {
  return (
    <Wrapper>
      <img src={bg} alt="bg" />
    </Wrapper>
  );
};

export default NotFound;
