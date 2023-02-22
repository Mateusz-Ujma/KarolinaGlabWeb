import styled, { css } from 'styled-components';
import brush from 'assets/images/brush.png';
import {
  MenuTopButtonOpenAnim,
  MenuTopButtonCloseAnim,
  MenuBottomButtonOpenAnim,
  MenuBottomButtonCloseAnim,
  MenuButtonOpenAnim,
  MenuButtonCloseAnim,
} from 'assets/animations/MenuAnim';
import cursor from 'assets/images/cursorbig.png';

export const Wrapper = styled.div`
  position: absolute;
  width: 300px;
  height: 100vh;
  right: 0;
  z-index: 20;
  cursor: url(${cursor}), auto;
  @media (min-width: 762px) {
    overflow: hidden;
    width: 600px;
    height: 80px;
  }
`;
export const ButtonWrapper = styled.div`
  position: absolute;
  margin-top: 20px;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  cursor: url(${cursor}), auto;
  @media (min-width: 762px) {
    visibility: hidden;
  }
`;
export const MenuButtonMid = styled.div`
  position: absolute;
  background: url(${brush});
  background-size: cover;
  background-position: center;
  width: 35px;
  height: 35px;
  cursor: url(${cursor}), auto;
  animation: ${({ open }) =>
    open
      ? css`
          ${MenuButtonOpenAnim} 0.5s ease-in-out forwards
        `
      : css`
          ${MenuButtonCloseAnim} 0.5s ease-in-out forwards
        `};
`;
export const MenuButtonTop = styled.div`
  position: absolute;
  top: 10px;
  width: 35px;
  height: 35px;
  background: url(${brush});
  background-size: cover;
  background-position: center;
  transform: rotate(180deg);
  cursor: url(${cursor}), auto;
  animation: ${({ open }) =>
    open
      ? css`
          ${MenuTopButtonOpenAnim} 0.5s ease-in-out forwards
        `
      : css`
          ${MenuTopButtonCloseAnim} 0.5s ease-in-out forwards
        `};
`;
export const MenuButtonBottom = styled.div`
  position: absolute;
  top: -10px;
  width: 35px;
  height: 35px;
  background: url(${brush});
  background-size: cover;
  background-position: center;
  transform: rotate(180deg);
  cursor: url(${cursor}), auto;
  animation: ${({ open }) =>
    open
      ? css`
          ${MenuBottomButtonOpenAnim} 0.5s ease-in-out forwards
        `
      : css`
          ${MenuBottomButtonCloseAnim} 0.5s ease-in-out forwards
        `};
`;
