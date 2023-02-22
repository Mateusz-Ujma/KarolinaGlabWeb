import { Wrapper, MainText, ImageWrapper, Image, ImagesWrapper, ImageWrapper2, Image2 } from './Certificate.styles';
import { cert } from 'assets/images/cert';
const Certificate = () => {
  return (
    <Wrapper>
      <MainText>Certyfikaty</MainText>
      <ImagesWrapper>
        <ImageWrapper2>
          <Image2 src={cert.cert2} />
        </ImageWrapper2>
        <ImageWrapper>
          <Image src={cert.cert1} />
        </ImageWrapper>
        <ImageWrapper>
          <Image src={cert.cert3} />
        </ImageWrapper>
        <ImageWrapper>
          <Image src={cert.cert4} />
        </ImageWrapper>
      </ImagesWrapper>
    </Wrapper>
  );
};

export default Certificate;
