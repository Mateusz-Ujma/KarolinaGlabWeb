import { Link } from 'react-router-dom';
import cursor from 'assets/images/cursorbig.png';

import styled, { keyframes, css } from 'styled-components';

const SlideInFromRight = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0%);
  }
`;
export const Wrapper = styled.div`
  position: fixed;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  background-color: #feebd7;
  animation: ${SlideInFromRight} 0.3s ease-in-out;
  transform: translateX(${({ open }) => (open ? '0' : '100')}%);
  transition: all 0.3s;
  border-left: 2px solid #c97b84;
  cursor: url(${cursor}), auto;
  @media (min-width: 762px) {
    position: absolute;
    padding-top: 10px;
    top: 0;
    right: 500px;
    width: 500px;
    margin: 0;
    background-color: #feebd700;
    border: none;
    overflow: hidden;
  }
`;

export const NavWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  @media (min-width: 762px) {
    flex-direction: row;
  }
`;
export const ContactWrapper = styled.div`
  border-top: 2px solid #c97b84;
  margin-top: 50px;
  padding: 40px 0 0 0;
  position: relative;
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: center;
  @media (min-width: 762px) {
    visibility: hidden;
  }
`;
export const ContactWrapperSecond = styled.div`
  display: flex;
  margin: 100px auto 0 auto;
  font-size: 22px;
  @media (min-width: 762px) {
    visibility: hidden;
  }
`;
export const MenuLink = styled(Link)`
  text-decoration: none;
  font-size: 30px;
  margin-top: 22px;
  color: #000;
  cursor: url(${cursor}), auto;
  transition: all 0.2s;
  @media (min-width: 762px) {
    margin: 10px 20px 0 20px;
    :hover {
      color: #feebd7;
    }
  }
`;
export const ContactIcon = styled.img`
  width: 40px;
  height: 40px;
  margin: 0 20px 0 20px;
  cursor: url(${cursor}), auto;
`;
export const ContactLink = styled.a`
  text-decoration: none;
  cursor: url(${cursor}), auto;
`;
