import { BrowserRouter as Router } from "react-router-dom";
import Header from "../pages/Header/Header";
import GlobalStyle from "../GlobalStyled.styled";
import Carousel from "containers/Carousel/Carousel";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Carousel />
    </Router>
  );
}

export default App;
