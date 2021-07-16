import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
    background: "transparent",
  },
  headerButton: {
    marginLeft: 20,
    marginRight: 20,
    background: "transparent",
    color: "inherit",
    padding: 0,
    border: "none",
    outline: "none",
    fontSize: "1.4rem",
    "&:hover": {
      transform: "scale(1.02) ",
      color: "#eef",
    },
  },
}));

const HeaderButtons = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.headerOptions}>
      {props.menuItems.map((menuItem) => {
        const { menuTitle, pageURL } = menuItem;
        return (
          <button
            key={menuTitle}
            onClick={() => props.handleButtonClick(pageURL)}
            className={classes.headerButton}
          >
            {menuTitle}
          </button>
        );
      })}
    </div>
  );
};

export default HeaderButtons;
