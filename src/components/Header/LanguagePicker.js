import { useState } from "react";
import { useTranslation } from "react-i18next";
import croFlag from "../../lang-icons/croatia-flag.png";
import ukFlag from "../../lang-icons/united-kingdom-flag.png";
import classes from "./LanguagePicker.module.css";

const LanguagePicker = () => {
  const [cro, setCro] = useState(true);
  const [eng, setEng] = useState(false);

  const { t, i18n } = useTranslation();

  const handleOnClickEng = () => {
    i18n.changeLanguage("en");
  };

  const handleOnClickCro = () => {
    i18n.changeLanguage("hr");
  };

  return (
    <div className={classes.picker}>
      <button onClick={handleOnClickCro}>
        {<img src={croFlag} alt="cro" />}
      </button>
      <button onClick={handleOnClickEng}>
        {<img src={ukFlag} alt="uk" />}
      </button>
    </div>
  );
};

export default LanguagePicker;
