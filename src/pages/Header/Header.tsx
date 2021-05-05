import styled from "styled-components";
import StyledLink from "components/Link/Link";
import Nav from "components/Nav/Nav";
import Title from "components/Title/Title";

const StyledHeader = styled.header`
  position: relative;
  padding-top: 50px;

  & > a:first-child {
    margin: 0 auto;
  }

  & a:nth-child(2) {
    position: absolute;
    top: 20px;
    right: 0;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledLink to="/">
        <Title level={"h1"}>우리교육컨설팅</Title>
      </StyledLink>
      <StyledLink to={"/introduce"}>회사 소개</StyledLink>
      <Nav
        list={[
          ["요양원", "/nursing-home"],
          ["유치원", "/kindergarden"],
          ["어린이집", "/day-care-center"],
          ["매물등록", "/for-sale"],
          ["매수등록", "/for-buy"],
        ]}
      />
    </StyledHeader>
  );
};

export default Header;
