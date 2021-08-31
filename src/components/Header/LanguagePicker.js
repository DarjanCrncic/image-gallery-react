import { Menu, MenuItem, Typography } from "@material-ui/core";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import croFlag from "../../lang-icons/croatia-flag.png";
import ukFlag from "../../lang-icons/united-kingdom-flag.png";
import classes from "./LanguagePicker.module.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const LanguagePicker = () => {
  const [lang, setLang] = useState({ eng: false, cro: true });
  const [anchorEl, setAnchorEl] = useState(null);

  const { t, i18n } = useTranslation();

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOnClickEng = () => {
    if (lang.eng === false && lang.cro === true) {
      i18n.changeLanguage("en");
      setLang({ eng: true, cro: false });
    }
  };

  const handleOnClickCro = () => {
    if (lang.eng === true && lang.cro === false) {
      i18n.changeLanguage("hr");
      setLang({ eng: false, cro: true });
    }
  };

  return (
    <>
      <button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.picker}
      >
        <Typography variant="h6" component="span">
          {t("select-language")}
        </Typography>
        <ArrowDropDownIcon />
      </button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleOnClickCro}>
          <img
            src={croFlag}
            alt="cro"
            className={lang.cro ? classes["active-lang"] : classes["inactive-lang"]}
          />
        </MenuItem>
        <MenuItem onClick={handleOnClickEng}>
          <img
            src={ukFlag}
            alt="uk"
            className={lang.eng ? classes["active-lang"] : classes["inactive-lang"]}
          />
        </MenuItem>
      </Menu>
    </>
  );
};

export default LanguagePicker;
