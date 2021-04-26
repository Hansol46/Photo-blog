import { styled } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import MainPage from "./pages/MainPage";
import PortfolioPage from "./pages/PortfolioPage";

const Wrapper = styled("div")({
  width: "1170px",
  margin: "0 auto",
  ["@media (max-width:1200px)"]: {
    width: "970px",
  },
  ["@media (max-width:985px)"]: {
    width: "700px",
  },
  ["@media (max-width:720px)"]: {
    width: "auto",
    padding: "0px 15px",
  },
});

function App() {
  const [albums, setAlbums] = useState([]);
const [photos, setPhotos] = useState([]);
// Albums
useEffect(() => {
  async function fetchAlbums() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/albums?_limit=5" //?_limit=5
    );
    const data = await response.json();
    setAlbums(data);
  }
  fetchAlbums();
}, []);
// Photos
useEffect(() => {
  async function fetchPhotos() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/photos" //?_limit=40
    );
    const data = await response.json();
    setPhotos(data);
  }
  fetchPhotos();
}, []);
  return (
    <Wrapper>
      <Header />
      <Route path="/" exact component={MainPage} />
      <Route
        path="/portfolio"
        render={() => <PortfolioPage albums={albums} photos={photos} />}
      />
      <Route path="/about" component={AboutPage} />
      <Footer />
    </Wrapper>
  );
}

export default App;
