import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';

const AppProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      {children}
    </BrowserRouter>
  );
};

export default AppProviders;
