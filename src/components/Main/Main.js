import Image from 'assets/images/karolinaMain.png';
import TextMain from 'assets/images/MainText.png';
import { MainImage, MainText, Wrapper, FirstText, SecondText, ThirdText, SecondWrapper, ImageWrapper } from './Main.styles';

const Main = () => {
  const windowWidth = window.innerWidth;
  return (
    <Wrapper>
      <MainImage src={Image} />
      <MainText src={TextMain} />
      <SecondWrapper>
        <FirstText>MAKIJAŻ{windowWidth > 762 ? ' NA KAŻDĄ OKAZJĘ' : null}</FirstText>
        {windowWidth > 762 ? null : <SecondText>NA KAŻDĄ OKAZJĘ</SecondText>}
        <ThirdText>PRZEKUWANIE USZU</ThirdText>
      </SecondWrapper>
    </Wrapper>
  );
};

export default Main;
