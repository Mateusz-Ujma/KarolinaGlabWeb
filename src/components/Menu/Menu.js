import { MenuLink, NavWrapper, ContactWrapper, Wrapper, ContactLink, ContactIcon, ContactWrapperSecond } from './Menu.styles';
import fb from 'assets/images/facebook.png';
import insta from 'assets/images/instagram.png';
const Menu = ({ open, menuClose }) => {
  return (
    <Wrapper open={open} onClick={menuClose}>
      <NavWrapper>
        <MenuLink to="">Start</MenuLink>
        <MenuLink to="portfolio">Portfolio</MenuLink>
        <MenuLink to="certyfikaty">Certyfikaty</MenuLink>
      </NavWrapper>
      <ContactWrapper>
        <ContactLink href="https://www.facebook.com/profile.php?id=100005188962941" target="_blank">
          <ContactIcon src={fb} />
        </ContactLink>
        <ContactLink
          href="https://www.instagram.com/karolinaglab_makeup/?igshid=ZDdkNTZiNTM%3D&fbclid=IwAR0ea_0zdjs6tEUjztd5Yu0uhjgPMgvd-9rN5rmVQue1CLUn0jlt4n2dKbY"
          target="_blank"
        >
          <ContactIcon src={insta} />
        </ContactLink>
      </ContactWrapper>
      <ContactWrapperSecond open={open}>785 296 649</ContactWrapperSecond>
    </Wrapper>
  );
};

export default Menu;
