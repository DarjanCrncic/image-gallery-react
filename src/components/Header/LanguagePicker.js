import { useState } from "react";
import { useTranslation } from "react-i18next";
import croFlag from "../../lang-icons/croatia-flag.png";
import ukFlag from "../../lang-icons/united-kingdom-flag.png";
import classes from "./LanguagePicker.module.css";

const LanguagePicker = () => {
  const [cro, setCro] = useState(true);
  const [eng, setEng] = useState(false);

  const { i18n } = useTranslation();

  const handleOnClickEng = () => {
    i18n.changeLanguage("en");
    setEng(true);
    setCro(false);
  };

  const handleOnClickCro = () => {
    i18n.changeLanguage("hr");
    setCro(true);
    setEng(false);
  };

  return (
    <div className={classes.picker}>
      <button onClick={handleOnClickCro}>
        {<img src={croFlag} alt="cro" className={cro ? classes["active-lang"] : classes["inactive-lang"]}/>}
      </button>
      <button onClick={handleOnClickEng}>
        {<img src={ukFlag} alt="uk" className={eng ? classes["active-lang"] : classes["inactive-lang"]}/>}
      </button>
    </div>
  );
};

export default LanguagePicker;
