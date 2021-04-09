import './RestClientApp.scss';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './app/Navbar';
import { Container } from './app/Container';

function RestClientApp() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Container />
    </BrowserRouter>
  );
}

export default RestClientApp;
