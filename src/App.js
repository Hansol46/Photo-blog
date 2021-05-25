import { styled } from "@material-ui/core";
import { Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import MainPage from "./pages/MainPage";
import PortfolioPage from "./pages/PortfolioPage";

const Wrapper = styled("div")({
  width: "1170px",
  margin: "0 auto",
  "@media (max-width:1200px)": {
    width: "970px",
  },
  "@media (max-width:985px)": {
    width: "700px",
  },
  "@media (max-width:720px)": {
    width: "auto",
    padding: "0px 15px",
  },
});

function App() {

  return (
    <Wrapper>
      <Header />
      <Route path="/" exact component={MainPage} />
      <Route
        path="/portfolio"
        render={() => <PortfolioPage />}
      />
      <Route path="/about" component={AboutPage} />
      <Footer />
    </Wrapper>
  );
}

export default App;
