import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Fade from "react-reveal/Fade";
import { useTranslation } from "react-i18next";
import { useHistory, withRouter } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    display: "inline-block",
    margin: "auto",
    marginTop: 30,
    minWidth: 300,
    "&:hover": {
      transform: "scale(1.02) ",
    },
  },
  media: {
    height: 180,
  },
  fadeDiv: {
    display: "inline-block !important",
    margin: "auto",
    marginTop: 30,
  },
  success: {
    light: '#81c784',
    main: '#4caf50',
    dark: '#388e3c'
  }
});

export default function MediaCard(props) {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const history  = useHistory();

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
      <Fade duration={2000} className={classes.fadeDiv}>
        <CardActionArea onClick={showImageInfoHandler}>
          <CardMedia
            className={classes.media}
            image={props.path}
            title={props.title}
          />
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
          <Button size="small" color="primary" value={props.id} onClick={handleButtonClick} >
            {t("learn-more")}
          </Button>
        </CardActions>
      </Fade>
    </Card>
  );
}
