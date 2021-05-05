import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: none;
  width: fit-content;
  padding: 10px;
  text-align: center;

  &:visited {
    color: inherit;
  }
`;

export default StyledLink;
