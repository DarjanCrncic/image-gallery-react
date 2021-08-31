import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withRouter } from "react-router-dom";
import { menuItemsEn, menuItemsHr } from "./menu-items";
import HeaderButtons from "./HeaderButtons";
import MobileMenu from "./MobileMenu";
import { useTranslation } from "react-i18next";
import LanguagePicker from "./LanguagePicker";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: "#fff",
    color: "white",
    background: "linear-gradient(90deg, #159015, #26ac29, #3cc453)",
  },
  title: {
    [theme.breakpoints.down("sm")]: {
      flexGrow: 1,
    },
    fontSize: "2rem",
    "&:hover": {
      cursor: "pointer",
    },
    //fontFamily: "Dancing Script",
    fontFamily: "Raleway",
    fontWeight: 300,
    marginLeft: 10,
  },
}));

const Header = (props) => {
  const { history } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { t, i18n } = useTranslation();

  const handleButtonClick = (pageURL) => {
    history.push(pageURL);
  };

  const menuItems = i18n.language === "en" ? menuItemsEn : menuItemsHr;

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <Typography
            variant="h6"
            className={classes.title}
            onClick={() => history.push("/")}
          >
            {t("page-title")}
          </Typography>
          {isMobile ? (
            <MobileMenu history={history} />
          ) : (
            <HeaderButtons
              menuItems={menuItems}
              handleButtonClick={handleButtonClick}
            />
          )}
          <LanguagePicker />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Header);
