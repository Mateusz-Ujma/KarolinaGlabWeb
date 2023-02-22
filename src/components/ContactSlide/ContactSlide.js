import { useState, useEffect } from 'react';
import { MainText, Wrapper, ContactWrapper, ContactLink, ContactIcon, ContactWrapperSecond, AbsWrapper } from './ContactSlide.styles';
import fb from 'assets/images/facebook.png';
import insta from 'assets/images/instagram.png';

const ContactSlide = () => {
  const [isContactOpen, setIsContactOpen] = useState(true);
  const handleContactOpen = () => {
    setIsContactOpen(!isContactOpen);
    console.log(isContactOpen);
  };
  useEffect(() => {
    setIsContactOpen(true);
    console.log(isContactOpen);
  }, []);
  return (
    <AbsWrapper>
      <Wrapper onClick={handleContactOpen} open={isContactOpen}>
        <MainText>Kontakt</MainText>
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
    </AbsWrapper>
  );
};

export default ContactSlide;
