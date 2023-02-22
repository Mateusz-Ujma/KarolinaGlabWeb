import styled from 'styled-components';
import cursor from 'assets/images/cursorbig.png';
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: url(${cursor}), auto;
  @media (min-width: 762px) {
  }
`;
export const MainText = styled.div`
  font-size: 50px;
  margin: 60px auto 0 auto;
  color: #feebd7;
  font-weight: 500;
  text-shadow: 1px 1px #000;
`;
export const ImagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 762px) {
    flex-direction: row;
    width: 80vw;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;
export const ImageWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  flex-direction: column;
  width: 80vw;
  border-radius: 15px;
  -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 0.6);
  -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 0.6);
  box-shadow: 3px 0px 18px 2px rgba(66, 68, 90, 0.6);
  overflow: hidden;
  justify-content: center;
  align-items: center;
  @media (min-width: 762px) {
    width: 320px;
    height: auto;
    margin: 20px 60px 50px 60px;
    overflow: hidden;
  }
`;
export const ImageWrapper2 = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  flex-direction: column;
  width: 80vw;
  border-radius: 15px;
  overflow: hidden;
  -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 0.6);
  -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 0.6);
  box-shadow: 3px 0px 18px 2px rgba(66, 68, 90, 0.6);
  @media (min-width: 762px) {
    width: 380px;
    height: auto;
    margin: 20px 30px 50px 30px;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
`;
export const Image = styled.img`
  width: 110%;
  height: auto;
  border-radius: 15px;
  @media (min-width: 762px) {
    width: 110%;
    height: auto;
    border-radius: 15px;
  }
`;
export const Image2 = styled.img`
  width: 100%;
  height: auto;
  border-radius: 15px;

  @media (min-width: 762px) {
    width: 100%;
    height: auto;
    border-radius: 15px;
  }
`;
