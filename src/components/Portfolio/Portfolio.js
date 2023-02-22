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
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
            five centuries,
          </ImageText>
          <ImageSocialWrapper>
            <ImageIcon src={insta} />
            <ImageSocialLink href="https://www.google.com/" target="_blank">
              Brajan Florek -- Fotograf
            </ImageSocialLink>
          </ImageSocialWrapper>
          <ImageSocialWrapper>
            <ImageIcon src={insta} />
            <ImageSocialLink href="https://www.google.com/" target="_blank">
              Natalia Konarska -- Modelka
            </ImageSocialLink>
          </ImageSocialWrapper>
        </SecondWrapper>
      </ImageWrapper>
      <ImageWrapper isLeft={false}>
        <Image src={zdj.zdj2} />
        <SecondWrapper>
          <ImageText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
            five centuries,
          </ImageText>
          <ImageSocialWrapper>
            <ImageIcon src={insta} />
            <ImageSocialLink href="https://www.google.com/" target="_blank">
              Brajan Florek -- Fotograf
            </ImageSocialLink>
          </ImageSocialWrapper>
          <ImageSocialWrapper>
            <ImageIcon src={insta} />
            <ImageSocialLink href="https://www.google.com/" target="_blank">
              Natalia Konarska -- Modelka
            </ImageSocialLink>
          </ImageSocialWrapper>
        </SecondWrapper>
      </ImageWrapper>
      <ImageWrapper isLeft={true}>
        <Image src={zdj.zdj3} />
        <SecondWrapper>
          <ImageText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
            five centuries,
          </ImageText>
          <ImageSocialWrapper>
            <ImageIcon src={insta} />
            <ImageSocialLink href="https://www.google.com/" target="_blank">
              Brajan Florek -- Fotograf
            </ImageSocialLink>
          </ImageSocialWrapper>
          <ImageSocialWrapper>
            <ImageIcon src={insta} />
            <ImageSocialLink href="https://www.google.com/" target="_blank">
              Natalia Konarska -- Modelka
            </ImageSocialLink>
          </ImageSocialWrapper>
        </SecondWrapper>
      </ImageWrapper>
      <ImageWrapper isLeft={false}>
        <Image src={zdj.zdj4} />
        <SecondWrapper>
          <ImageText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
            five centuries,
          </ImageText>
          <ImageSocialWrapper>
            <ImageIcon src={insta} />
            <ImageSocialLink href="https://www.google.com/" target="_blank">
              Brajan Florek -- Fotograf
            </ImageSocialLink>
          </ImageSocialWrapper>
          <ImageSocialWrapper>
            <ImageIcon src={insta} />
            <ImageSocialLink href="https://www.google.com/" target="_blank">
              Natalia Konarska -- Modelka
            </ImageSocialLink>
          </ImageSocialWrapper>
        </SecondWrapper>
      </ImageWrapper>
    </Wrapper>
  );
};

export default Portfolio;
