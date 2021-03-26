import React, { useState, useEffect } from "react";
import { studentService } from "../../_services/student.service";
import { authenticationService } from "../../_services/authentication.service";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { CardMedia } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FinalProjectCompletedStudent() {
  const [item, setItem] = useState({});

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const student = authenticationService.currentUserValue();
  useEffect(() => {
    studentService
      .GetFinalProyect(student.studentId)
      .then((data) => {
        console.log(data);
        setItem(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Container style={{ width: 400, marginTop: 20, marginBottom: 5 }}>
        <Card>
          {item.state === "evaluate" && (
            <CardContent style={{ padding: 10 }}>
              <Typography style={{ fontSize: 25, textAlign: "center" }}>
                Tu proyecto está pendiente de aprobación.
              </Typography>
            </CardContent>
          )}
          {item.state === "denied" && (
            <CardContent style={{ padding: 10 }}>
              <Typography style={{ fontSize: 25, textAlign: "center" }}>
                Tu proyecto ha sido rechazado y reprobaste.
              </Typography>
              <Typography style={{ textAlign: "center" }}>
                <a
                  target="blank"
                  href="https://www.google.com/search?q=cutest+kitties&rlz=1C1ALOY_esDO933DO933&sxsrf=ALeKk02KlcjFPS5jvUKv8jRsLSSyUx7itw:1616031764618&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjG_5m627jvAhXxTDABHYp5BHAQ_AUoAXoECBoQAw&biw=1366&bih=667#imgrc=q471Wq-WtWdFJM"
                >
                  Presiona este link para sentirte mejor.
                </a>
              </Typography>
            </CardContent>
          )}
          {(item.state === "approved" || item.state === "approved and not") && (
            <CardContent>
              <Typography style={{ fontSize: 25, textAlign: "center" }}>
                Tu proyecto ha sido aprobado.
              </Typography>
            </CardContent>
          )}
        </Card>
      </Container>

      <Container style={{ width: 400 }}>
        <Card>
          <CardMedia
            style={{ height: 160 }}
            image={"https://localhost:5001/" + item.imageSRC}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {item.name}
            </Typography>
            <Typography
              className="lizardsStyle"
              style={{ overflowY: "scroll", height: 100 }}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {item.description}
            </Typography>
          </CardContent>
          <CardActions
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {item.examGrade !== null && (
              <Typography>Calificación {item.examGrade}</Typography>
            )}
            <Button onClick={handleClickOpen} size="small" color="primary">
              Ver documentación
            </Button>
          </CardActions>
        </Card>
      </Container>

      <div>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar
            style={{ backgroundColor: "#1976D2" }}
            className={classes.appBar}
          >
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Documentación
              </Typography>
            </Toolbar>
          </AppBar>
          <embed
            style={{ width: "100%" }}
            src={"https://localhost:5001/" + item.finalDocumentationSRC}
            width="800px"
            height="2100px"
          />
        </Dialog>
      </div>
    </div>
  );
}
