import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  display: inline-block;
  color: inherit;
  text-decoration: none;
  display: inline-block;
  width: 100%;
  padding: 10px 0;
  text-align: center;

  &:visited {
    color: inherit;
  }
`;

export default StyledLink;
