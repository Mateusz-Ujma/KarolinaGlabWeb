import styled from 'styled-components';
import cursor from 'assets/images/cursorbig.png';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: url(${cursor}), auto;
  @media (min-width: 762px) {
    overflow-x: hidden;
    width: 100vw;
  }
`;
export const MainText = styled.div`
  font-size: 50px;
  margin: 60px auto 0 auto;
  color: #feebd7;
  font-weight: 500;
  text-shadow: 1px 1px #000;
`;
export const ImageWrapper = styled.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
  flex-direction: column;
  width: 80vw;
  background-color: #feebd7;
  border-radius: 15px;
  -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 0.6);
  -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 0.6);
  box-shadow: 8px 8px 24px 3px rgba(66, 68, 90, 0.6);
  @media (min-width: 762px) {
    flex-direction: ${({ isLeft }) => (isLeft ? 'row' : 'row-reverse')};
    width: 80vw;
    margin: 30px 0 40px 0;
    overflow: hidden;
  }
`;
export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 3% 3% 0% 0%;
  @media (min-width: 762px) {
    width: 100%;
    border-radius: 0% 0% 0% 0%;
  }
`;
export const ImageText = styled.div`
  font-size: 15px;
  color: #131315;
  padding: 10px;
  @media (min-width: 762px) {
    padding: 30px;
    text-align: center;
    font-size: 20px;
    font-weight: 300;
  }
`;
export const SecondWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ImageSocialWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 0px 10px 0px;
  text-decoration: none;
  height: 50px;
`;
export const ImageSocialLink = styled.a`
  font-size: 15px;
  padding: 0 0 0 10px;
  color: #c97b84;
  transition: all 0.3s;
  @media (min-width: 762px) {
    text-align: center;
    font-size: 20px;
    font-weight: 300;
    :hover {
      color: #131315;
      cursor: url(${cursor}), auto;
    }
  }
`;
export const ImageIcon = styled.img`
  width: 30px;
  height: 30px;
`;
