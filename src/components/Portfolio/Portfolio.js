import React from 'react';
import { ImageWrapper, MainText, Wrapper, Image, ImageText, ImageSocialWrapper, ImageIcon, ImageSocialLink, SecondWrapper } from './Portfolio.styles';
import { zdj } from 'assets/images/zdj';
import insta from 'assets/images/instagram.png';

const Portfolio = () => {
  return (
    <Wrapper>
      <MainText>Moje projekty</MainText>
      <ImageWrapper isLeft={true}>
        <Image src={zdj.zdj1} />
        <SecondWrapper>
          <ImageText>
            Cześć! 👋☺️ Miło mi widzieć Cię na moim profilu, jeżeli interesuje Cię poznanie mojej pasji zostań ze mną na dłużej! Już niebawem pojawi
            się tu coś więcej ... 🤭
          </ImageText>
          <ImageSocialWrapper>
            <ImageIcon src={insta} />
            <ImageSocialLink href="https://www.instagram.com/tresc_migawki/" target="_blank">
              Treść Migawki -- Fotograf
            </ImageSocialLink>
          </ImageSocialWrapper>
        </SecondWrapper>
      </ImageWrapper>

      <ImageWrapper isLeft={false}>
        <Image src={zdj.zdj3} />
        <SecondWrapper>
          <ImageText>Makijaż podkreślający urodę pięknej Jolanty 😍🔥📸</ImageText>
          <ImageSocialWrapper>
            <ImageIcon src={insta} />
            <ImageSocialLink href="https://www.instagram.com/uchwycic_emocje/" target="_blank">
              uchwycic_emocje -- Fotograf
            </ImageSocialLink>
          </ImageSocialWrapper>
          <ImageSocialWrapper>
            <ImageIcon src={insta} />
            <ImageSocialLink href="https://www.instagram.com/jolantaaw_beautymanager/" target="_blank">
              Jolanta -- Modelka
            </ImageSocialLink>
          </ImageSocialWrapper>
        </SecondWrapper>
      </ImageWrapper>
      <ImageWrapper isLeft={false}>
        <Image src={zdj.zdj4} />
        <SecondWrapper>
          <ImageText>Przepiękna modelka i super fotograf brzmi jak sesja idealna ? 🤭 Taką sesję stworzyliśmy z Natalią i Brajanem 😍☝️</ImageText>
          <ImageSocialWrapper>
            <ImageIcon src={insta} />
            <ImageSocialLink href="https://www.instagram.com/tresc_migawki/" target="_blank">
              Treść Migawki -- Fotograf
            </ImageSocialLink>
          </ImageSocialWrapper>
          <ImageSocialWrapper>
            <ImageIcon src={insta} />
            <ImageSocialLink href="https://www.instagram.com/n_konarska/" target="_blank">
              Natalia Konarska -- Modelka
            </ImageSocialLink>
          </ImageSocialWrapper>
        </SecondWrapper>
      </ImageWrapper>
    </Wrapper>
  );
};

export default Portfolio;
