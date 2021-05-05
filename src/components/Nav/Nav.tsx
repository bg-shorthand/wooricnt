import styled from "styled-components";
import StyledLink from "../Link/Link";

const StyledNav = styled.nav`
  margin: 30px auto;

  & > ul {
    display: flex;
    width: 100%;
    justify-content: space-between;

    & > li {
      margin-left: 2px;
      width: 100%;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center;

      &::after {
        content: "";
        display: block;
        width: 100%;
        transform: scaleX(0);
        border-top: 2px solid black;
        transition: all 300ms;
      }

      &:hover::after {
        content: "";
        display: block;
        transform: scaleX(1);
      }

      & > a {
        width: 100%;
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
