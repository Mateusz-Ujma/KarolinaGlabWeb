import Menu from 'components/Menu/Menu';
import { useState, useEffect } from 'react';
import { Wrapper, ButtonWrapper, MenuButtonMid, MenuButtonTop, MenuButtonBottom } from './Navigation.styles';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };
  useEffect(() => {
    setIsMenuOpen(false);
  }, []);
  return (
    <Wrapper>
      <Menu open={isMenuOpen} menuClose={handleMenuClose} />
      <ButtonWrapper onClick={handleMenuOpen}>
        <MenuButtonMid open={isMenuOpen} />
        <MenuButtonTop open={isMenuOpen} />
        <MenuButtonBottom open={isMenuOpen} />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Navigation;
