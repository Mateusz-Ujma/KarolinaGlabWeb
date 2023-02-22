import Certificate from 'components/Certificate/Certificate';
import ContactSlide from 'components/ContactSlide/ContactSlide';
import Main from 'components/Main/Main';
import Navigation from 'components/Navigation/Navigation';
import Portfolio from 'components/Portfolio/Portfolio';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Wrapper } from './Root.styles';

function Root() {
  const windowWidth = window.innerWidth;
  return (
    <Wrapper>
      {windowWidth > 762 ? <ContactSlide /> : null}
      <Navigation />
      <Routes>
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/" element={<Main />} />
        <Route path="/certyfikaty" element={<Certificate />} />
      </Routes>
    </Wrapper>
  );
}

export default Root;
