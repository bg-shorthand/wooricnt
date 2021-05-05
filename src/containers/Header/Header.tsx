import StyledLink from "../../components/Link/Link";
import Title from "../../components/Title/Title";

const Header = () => {
  return (
    <>
      <Title level={"h1"}>제목</Title>
      <StyledLink to={"/"}>링크</StyledLink>
    </>
  );
};

export default Header;
