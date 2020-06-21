import React, { useState, MouseEvent } from "react";
import { Link } from "react-router-dom";

import useRouter from "../hooks/useRouter";
import * as S from "./HeaderStyle";
import * as Icon from "../icon";

const Header = () => {
  // data
  const menuList: any = {
    팔복: [
      { label: "회사소개", link: "/" },
      { label: "진국스토리", link: "/" },
      { label: "매장안내", link: "/" },
    ],
    제품: [
      { label: "제품", link: "/" },
      { label: "진국플랜트", link: "/" },
    ],
    소식: [
      { label: "공지사항", link: "/" },
      { label: "이벤트", link: "/" },
      { label: "고객문의", link: "/" },
    ],
  };

  // hooks
  const { linkTo } = useRouter();
  const [target, setTarget] = useState("");
  const [anchorOffset, setAnchorOffset] = useState<{
    left?: number;
    top?: number;
  }>({});
  const [isOpen, setIsOpen] = useState(false);

  // functions
  const handleClick = (
    event: MouseEvent<HTMLButtonElement>,
    target: string
  ) => {
    setAnchorOffset({
      left: event.currentTarget.offsetLeft,
      top: event.currentTarget.offsetTop + 30,
    });
    setTarget(target);
  };

  const handleClose = () => {
    setAnchorOffset({});
    setTarget("");
  };

  // components
  const NavMenu = () => (
    <React.Fragment>
      {Object.keys(menuList).map((item) => (
        <button
          className="text"
          onClick={(e) => handleClick(e, item)}
          key={item}
        >
          {item}
        </button>
      ))}

      <a
        className="market"
        href="https://www.palbok.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        팔복몰 <Icon.ArrowRight />
      </a>
    </React.Fragment>
  );

  const DropdownMenu = () => {
    if (!anchorOffset.left || !anchorOffset.top || !target || isOpen)
      return null;

    return (
      <div
        className="menu"
        style={{ left: anchorOffset.left, top: anchorOffset.top }}
        onMouseLeave={handleClose}
      >
        {menuList[target].map(
          (item: { label: string; link: string }, index: number) => (
            <Link to={item.link} key={index}>
              {item.label}
            </Link>
          )
        )}
      </div>
    );
  };

  const ExpandMenuItems = () => {
    const menuListKeys = Object.keys(menuList);

    return (
      <React.Fragment>
        {menuListKeys.map((key) => {
          const isActive = key === target;
          const className = isActive ? "active" : "";
          const onClick = () => (isActive ? setTarget("") : setTarget(key));
          const ExpandIcon = () =>
            isActive ? <Icon.ExpandLess /> : <Icon.ExpandMore />;
          return (
            <S.MenuItem key={key} className={className} onClick={onClick}>
              <p>{key}</p>
              <ExpandIcon />
              {isActive &&
                menuList[target].map(
                  (item: { label: string; link: string }, index: number) => (
                    <Link className="sub-menu" to={item.link} key={index}>
                      {item.label}
                    </Link>
                  )
                )}
            </S.MenuItem>
          );
        })}
      </React.Fragment>
    );
  };

  // render
  return (
    <S.Header>
      <S.Nav>
        <img
          src={require("../img/brand-logo-black.png")}
          alt="팔복"
          onClick={() => linkTo("/")}
        />

        <S.ButtonGroup>
          <NavMenu />
          <DropdownMenu />
          <Icon.Menu className="mobile" onClick={() => setIsOpen(true)} />
        </S.ButtonGroup>
      </S.Nav>

      <S.MobileMenuContainer className={isOpen ? "active" : ""}>
        <S.Backdrop className="mask" />

        <S.MenuList>
          <S.MenuItem className="size-large">
            <p>메뉴</p>
            <Icon.Close onClick={() => setIsOpen(false)} />
          </S.MenuItem>
          <ExpandMenuItems />
          <S.MenuItem>
            <a
              className="market"
              href="https://www.palbok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              팔복몰 <Icon.ArrowRight />
            </a>
          </S.MenuItem>
        </S.MenuList>
      </S.MobileMenuContainer>
    </S.Header>
  );
};

export default Header;
