import styled from "styled-components";
import StyledLink from "../Link/Link";

const StyledNav = styled.nav`
  margin: 20px auto;

  & > ul {
    display: flex;
    width: 100%;
    justify-content: space-between;

    & > li {
      margin-left: 2px;
      width: 100%;

      &::after {
        content: "";
        display: block;
        transform: scaleX(0);
        border-top: 2px solid black;
        transition: all 300ms;
      }

      &:hover::after {
        content: "";
        display: block;
        transform: scaleX(1);
      }
    }
  }
`;

type NavProps = {
  list: string[][];
};

const Nav = ({ list }: NavProps) => {
  return (
    <StyledNav>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <StyledLink to={item[1]}>{item[0]}</StyledLink>
          </li>
        ))}
      </ul>
    </StyledNav>
  );
};

export default Nav;
