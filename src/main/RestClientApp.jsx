import "./RestClientApp.scss";
import { HashRouter } from "react-router-dom";
import { Navbar } from "./app/Navbar";
import { Container } from "./app/Container";

function RestClientApp() {
  return (
    <HashRouter>
      <Navbar />
      <Container />
    </HashRouter>
  );
}

export default RestClientApp;
