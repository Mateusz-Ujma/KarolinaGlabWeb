import styled, { keyframes, css } from 'styled-components';
import cursor from 'assets/images/cursorbig.png';

const SlideInFromRight = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-85%);
  }
`;
const SlideInFromLeft = keyframes`
  from {
    transform: translateX(-85%);
  }

  to {
    transform: translateX(0%);
  }
`;
export const AbsWrapper = styled.div`
  @media (min-width: 762px) {
    top: 0;
    position: fixed;
  }
`;
export const Wrapper = styled.div`
  @media (min-width: 762px) {
    top: 150px;
    z-index: 10;
    position: absolute;
    width: 250px;
    height: 150px;
    background-color: #c97b84;
    border-radius: 0 15px 15px 0;
    box-shadow: 1px 1px 10px 1px #00000050;
    animation: ${({ open }) =>
      open
        ? css`
            ${SlideInFromRight} 0.5s forwards;
          `
        : css`
            ${SlideInFromLeft} 0.5s forwards;
          `};
  }
`;
export const MainText = styled.div`
  @media (min-width: 762px) {
    position: absolute;
    top: 40px;
    right: 0;
    color: #feebd7;
    height: 40px;
    width: 40px;
    font-size: 21px;
    transform: rotate(90deg);
  }
`;
export const ContactWrapper = styled.div`
  @media (min-width: 762px) {
    border-top: 2px solid #c97b84;
    margin-top: 20px;
    padding: 5px 0 0 0;
    position: relative;
    display: flex;
    flex-direction: row;
    width: 80%;
    justify-content: center;
  }
`;
export const ContactWrapperSecond = styled.div`
  @media (min-width: 762px) {
    display: flex;
    padding: 10px 0 0 50px;
    width: 100%;
    font-size: 22px;
    color: #feebd7;
  }
`;
export const ContactIcon = styled.img`
  @media (min-width: 762px) {
    width: 40px;
    height: 40px;
    margin: 0 20px 0 20px;
    cursor: url(${cursor}), auto;
  }
`;
export const ContactLink = styled.a`
  @media (min-width: 762px) {
    text-decoration: none;
    cursor: url(${cursor}), auto;
  }
`;
