import styled from "styled-components";

const TitleStyle = styled.div`
  font-size: 2rem;
  font-weight: 700;
`;

type TitleProps = {
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: string;
};

const Title = ({ level, children }: TitleProps) => {
  return <TitleStyle as={level}>{children}</TitleStyle>;
};

export default Title;
