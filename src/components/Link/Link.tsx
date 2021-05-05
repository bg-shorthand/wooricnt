import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  display: inline-block;
  color: inherit;
  text-decoration: none;

  &:visited {
    color: inherit;
  }
`;

export default StyledLink;
