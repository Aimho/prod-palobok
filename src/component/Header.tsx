import React, { useState, Fragment, MouseEvent } from "react";
import styled from "styled-components";

import { AppBar, Toolbar, Button, Menu, MenuItem } from "@material-ui/core";
import { ChevronRight } from "@material-ui/icons";

import useRouter from "../hooks/useRouter";
import { filterSameValue } from "../utils/filters";

const StyledToolbar = styled(Toolbar)`
  max-width: 1018px;
  width: 100%;
  margin: auto;
  .brand-logo {
    cursor: pointer;
    width: 115px;
    height: 55px;
    margin-right: auto;
  }
  a,
  button {
    margin-left: 100px;
    font-size: 20px;
    font-weight: 500;
  }
`;

const Header = () => {
  const { linkTo } = useRouter();

  const headerHeight = 80;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [key, setTargetKey] = useState("");

  const handleClick = (event: MouseEvent<HTMLButtonElement>, key: string) => {
    setTargetKey(key);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setTargetKey("");
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <div style={{ height: headerHeight }} />
      <AppBar
        position="fixed"
        style={{ height: headerHeight, backgroundColor: "#fff" }}
      >
        <StyledToolbar className="toolbar">
          <img
            onClick={() => linkTo("/")}
            className="brand-logo"
            src={require("../img/brand-logo-black.png")}
            alt="팔복"
          />

          {MenuBtn("팔복", (e) => handleClick(e, "palbok"))}
          {MenuBtn("제품", (e) => handleClick(e, "product"))}
          {MenuBtn("소식", (e) => handleClick(e, "news"))}
          <Button
            color="primary"
            className="nav-btn"
            href="https://www.palbok.com"
            target="_blank"
            endIcon={<ChevronRight />}
            variant="text"
          >
            팔복몰
          </Button>

          <Menu
            id="menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            style={{ marginTop: "45px" }}
          >
            {MenuItems(key, handleClose)}
          </Menu>
        </StyledToolbar>
      </AppBar>
    </Fragment>
  );
};

export default Header;

const MenuBtn = (
  label: string,
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void
) => (
  <Button
    aria-controls="menu"
    aria-haspopup="true"
    className="nav-btn"
    onClick={handleClick}
    variant="text"
  >
    {label}
  </Button>
);

const MenuItems = (key: string, handleClose: () => void) => {
  const { linkTo } = useRouter();

  const onClick = (path: string) => {
    linkTo(path);
    handleClose();
  };

  const items = [
    { key: "palbok", label: "회사소개", path: "/" },
    { key: "palbok", label: "진국스토리", path: "/" },
    { key: "palbok", label: "매장안내", path: "/" },
    { key: "product", label: "제품", path: "/" },
    { key: "product", label: "진국플랜트", path: "/" },
    { key: "news", label: "공지사항", path: "/" },
    { key: "news", label: "이벤트", path: "/" },
    { key: "news", label: "고객문의", path: "/" },
  ];

  const filterItems = filterSameValue(items, "key", key);

  return filterItems.map((item, index) => (
    <MenuItem key={index} onClick={() => onClick(item.path)}>
      {item.label}
    </MenuItem>
  ));
};
