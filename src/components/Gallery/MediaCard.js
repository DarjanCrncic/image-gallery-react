import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Fade from "react-reveal/Fade";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    display: "inline-block",
    margin: "auto",
    marginTop: 30,
    minWidth: 300,
    "&:hover": {
      transform: "scale(1.02) ",
    },
  },
  media: {
    height: 200,
    width: "100%",
  },
  success: {
    light: "#81c784",
    main: "#4caf50",
    dark: "#388e3c",
  },
  circular: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  const { t } = useTranslation();
  const history = useHistory();
  const [loaded, setLoaded] = useState(false);

  const showImageInfoHandler = () => {
    props.onClickInfo({
      title: props.title,
      description: props.description,
      path: props.path,
    });
  };

  const handleButtonClick = (event) => {
    history.push("/paintings/" + event.currentTarget.value);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={showImageInfoHandler}>
        <Fade duration={2000}>
          <>
            <img
              style={loaded ? {} : { display: "none" }}
              src={props.path}
              className={classes.media}
              onLoad={() => setLoaded(true)}
              alt="preview"
            />
            {!loaded && (
              <div className={classes.media}>
                <CircularProgress className={classes.circular} />
              </div>
            )}
          </>
        </Fade>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.shortendDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          value={props.index}
          onClick={handleButtonClick}
        >
          {t("learn-more")}
        </Button>
      </CardActions>
    </Card>
  );
}
