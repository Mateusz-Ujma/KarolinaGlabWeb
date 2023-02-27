import styled from 'styled-components';
import cursor from 'assets/images/cursorbig.png';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  cursor: url(${cursor}), auto;
  @media (min-width: 762px) {
    overflow: hidden;
  }
`;
export const MainText = styled.img`
  width: 200px;
  height: auto;
  margin: 0 0 0 5px;
  @media (min-width: 762px) {
    width: 280px;
    margin: 0 0 0 10px;
  }
  @media (min-width: 1300px) {
    width: 280px;
    margin: 0 0 0 10px;
  }
`;
export const MainImage = styled.img`
  width: 89vw;
  height: auto;
  position: absolute;
  bottom: -120px;
  left: 50%;
  transform: translateX(-50%);
  @media (min-width: 762px) {
    width: 350px;
    bottom: 0;
    left: 85%;
  }
  @media (min-width: 1300px) {
    width: 500px;
    bottom: 0;
    left: 80%;
  }
`;
export const SecondWrapper = styled.div`
  margin: 20px auto 0 auto;
  color: #feebd7;
  height: 90vh;
  @media (min-width: 762px) {
    margin: 50px 0 0 0;
  }
  @media (min-width: 1300px) {
    margin: 100px 0 0 50px;
  }
`;
export const FirstText = styled.div`
  font-size: 96px;
  font-weight: 700;
  text-align: center;
  margin-bottom: -15px;
  text-shadow: 1px 1px #000;
  @media (min-width: 762px) {
    text-align: left;
    margin-left: 100px;
    font-size: 80px;
  }
  @media (min-width: 1300px) {
    text-align: left;
    margin-left: 250px;
    font-size: 85px;
  }
`;
export const SecondText = styled.div`
  font-size: 45px;
  font-weight: 700;
  text-align: center;
  text-shadow: 1px 1px #000;
`;
export const ThirdText = styled.div`
  font-size: 36px;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 1px #000;
  @media (min-width: 762px) {
    font-size: 50px;
    text-align: left;
    margin-left: 380px;
  }
  @media (min-width: 1300px) {
    text-align: left;
    margin-left: 470px;
    font-size: 60px;
  }
`;
export const QRCode = styled.img`
  width: 110px;
  height: 110px;
  margin: 30px 0 0 515px;
  @media (min-width: 1300px) {
    width: 110px;
    height: 110px;
    margin: 30px 0 0 620px;
  }
`;
export const QRText = styled.div`
  font-size: 35px;
  font-weight: 400;
  text-shadow: 1px 1px #000;
  padding-left: 440px;
  @media (min-width: 1300px) {
    text-align: left;
    padding-left: 530px;
    font-size: 40px;
  }
`;
