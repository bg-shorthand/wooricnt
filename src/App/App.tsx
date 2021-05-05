import { BrowserRouter as Router } from "react-router-dom";
import Header from "../containers/Header/Header";
import GlobalStyle from "../GlobalStyled.styled";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
    </Router>
  );
}

export default App;
