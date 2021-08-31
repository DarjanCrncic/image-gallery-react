import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { menuItemsEn, menuItemsHr } from "./menu-items";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    //marginRight: theme.spacing(2),
  },
}));

const MobileMenu = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    props.history.push(pageURL);
    setAnchorEl(null);
  };
  const { i18n } = useTranslation();
  const menuItems = (i18n.language === "en") ? menuItemsEn : menuItemsHr;

  return (
    <>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
        onClick={handleMenu}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        onClose={() => setAnchorEl(null)}
      >
        {menuItems.map((menuItem) => {
          const { menuTitle, pageURL } = menuItem;
          return (
            <MenuItem key={menuTitle} onClick={() => handleMenuClick(pageURL)}>
              {menuTitle}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default MobileMenu;
