import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import { Container } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";

import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

import "./style/styleFinalProyect.css";
import { incognitoService } from "../../_services/incognito.service";
const apiUrl = "http://darlinf-001-site1.dtempurl.com/";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  root: {
    display: "flex",
    alignItems: "center",
    width: 940,
    margin: "auto",
    marginBottom: "10px",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  rootCard: {
    maxWidth: 345,
    marginLeft: "5px",
    marginRight: "5px",
    marginBottom: "10px",
    width: "33%",
  },
  media: {
    height: 160,
  },

  rootCard2: {
    width: "100%",
  },
  media2: {
    height: 160,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FinalProyect = () => {
  const classes = useStyles();
  const [items, setItems] = useState([]);
  const [age, setAge] = React.useState("");
  const [itemsCopy, setItemsCopy] = useState([]);

  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(event.target.value);
    setItems([]);
    incognitoService
      .getAllFinalProjectByCareer(event.target.value)
      .then((data) => {
        setItems(data);
        setItemsCopy(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    incognitoService
      .getAllFinalProject()
      .then((data) => {
        setItems(data);
        setItemsCopy(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const searchTo = (value) => {
    setItems(
      itemsCopy.filter(
        (el) => el.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
      )
    );
  };

  const [open, setOpen] = React.useState(false);
  const [finalDocumentationSRC, setFinalDocumentationSRC] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const ShowData = () => {
    if (items[0])
      return items.map((item) => {
        return (
          <Card className={classes.rootCard2}>
            <CardMedia
              className={classes.media2}
              image={apiUrl + item.imageSRC}
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
              <Typography>Calificación {item.examGrade}</Typography>
              <Button
                onClick={() => {
                  handleClickOpen();
                  setFinalDocumentationSRC(item.finalDocumentationSRC);
                }}
                size="small"
                color="primary"
              >
                Ver documentación
              </Button>
            </CardActions>
          </Card>
        );
      });
    else
      return (
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            width: 940,
            padding: 0,
          }}
        >
          <CircularProgress />
        </Container>
      );
  };

  return (
    <Container style={{ marginTop: "50px" }}>
      <Typography
        style={{ textAlign: "center", marginBottom: "10px", fontSize: 40 }}
      >
        Proyectos finales
      </Typography>
      <Paper component="form" className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Carrera</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
            style={{ border: "none", width: 200 }}
          >
            <MenuItem value={"gastronomia"}>gastronomia</MenuItem>
            <MenuItem value={"software"}>software</MenuItem>
            <MenuItem value={"software2"}>software2</MenuItem>
          </Select>
        </FormControl>

        <Divider className={classes.divider} orientation="vertical" />
        <InputBase
          className={classes.input}
          placeholder="Buscar"
          inputProps={{ "aria-label": "Buscar" }}
          onChange={(e) => searchTo(e.target.value)}
        />
      </Paper>
      <Container
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridGap: "5px",
          width: 940,
          padding: 0,
        }}
      >
        <ShowData></ShowData>
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
            src={apiUrl + finalDocumentationSRC}
            width="800px"
            height="2100px"
          />
        </Dialog>
      </div>
    </Container>
  );
};

export default FinalProyect;
