import styled from "styled-components";

const HeaderSpace = styled.div`
  height: 80px;
  @media screen and (max-width: 768px) {
    height: 48px;
  }
`;

const Header = styled.header`
  position: fixed;
  z-index: 1200;
  width: 100%;
  top: 0;
  height: 80px;
  background-color: #fff;
  box-shadow: rgba(10, 10, 10, 0.1) 0px 1px 2px 0px;
  @media screen and (max-width: 768px) {
    height: 48px;
  }
`;

const Nav = styled.nav`
  position: relative;
  padding: 12px 30px;
  max-width: 1140px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    padding: 8px;
    padding-right: 15px;
    img {
      height: 30px;
    }
  }
`;

const ButtonGroup = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    justify-content: flex-end;
  }

  font-size: 20px;
  line-height: 30px;
  font-weight: 500;

  .menu {
    position: absolute;
    z-index: 1010;
    background-color: #fff;
    padding: 10px 20px;
    min-width: 130px;
    border: 1px solid #e8e8e8;
    border-radius: 4px;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    font-size: 16px;
  }

  a.market,
  button.text,
  .menu {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .mobile {
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
`;

const MobileMenuContainer = styled.aside`
  z-index: 9999;
  width: 100%;
  position: fixed;
  display: none;
  left: 0px;
  top: 0px;

  @media screen and (max-width: 768px) {
    &.active {
      display: flex;
    }
  }
`;

const Backdrop = styled.div`
  width: calc(100% - 320px);
  height: 100vh;
  animation: fade 0.5s;
  animation-direction: alternate;
  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const MenuList = styled.section`
  width: 320px;
  height: 100vh;
  background-color: #fff;
  margin-left: auto;
  animation: open 0.3s;
  animation-direction: alternate;
  @keyframes open {
    0% {
      transform: translateX(320px);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

const MenuItem = styled.div`
  padding: 16px 18px;
  padding-right: 25px;
  display: flex;
  flex-wrap: wrap;
  flex-wrap: 100%;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e8e8e8;

  font-size: 20px;
  font-weight: 500;

  &.size-large {
    padding: 30px 18px;
    padding-right: 25px;
    font-size: 16px;
    font-weight: normal;
  }

  &.active {
    color: #b41118;
  }

  a.sub-menu {
    width: 100%;
    color: #000;
    display: block;
    font-size: 16px;
    font-weight: normal;
    margin-top: 30px;
    margin-left: 20px;
    &:last-child {
      margin-bottom: 10px;
    }
  }
`;

export {
  Header,
  HeaderSpace,
  Nav,
  ButtonGroup,
  MobileMenuContainer,
  Backdrop,
  MenuList,
  MenuItem,
};
