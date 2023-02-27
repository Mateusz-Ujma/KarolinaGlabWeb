import Image from 'assets/images/karolinaMain.png';
import TextMain from 'assets/images/MainText.png';
import qr from 'assets/svg/karolinaqrcode.svg';
import { MainImage, MainText, Wrapper, FirstText, SecondText, ThirdText, SecondWrapper, ImageWrapper, QRCode, QRText } from './Main.styles';

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
        {windowWidth > 762 ? <QRText>Sprawdź na telefonie!</QRText> : null}
        {windowWidth > 762 ? <QRCode src={qr} /> : null}
      </SecondWrapper>
    </Wrapper>
  );
};

export default Main;
