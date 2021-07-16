import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withRouter } from "react-router-dom";
import { menuItems } from "./menu-items";
import HeaderButtons from "./HeaderButtons";
import MobileMenu from "./MobileMenu";

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
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1,
    },
    fontSize: "1.6rem",
  },
}));

const Header = (props) => {
  const { history } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleButtonClick = (pageURL) => {
    history.push(pageURL);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Jadrankine Slike
          </Typography>
          {isMobile ? (
            <MobileMenu history={history} />
          ) : (
            <HeaderButtons
              menuItems={menuItems}
              handleButtonClick={handleButtonClick}
            />
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Header);
