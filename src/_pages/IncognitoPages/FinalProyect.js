import React from "react";
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
import Typography from "@material-ui/core/Typography";

import "./style/styleFinalProyect.css";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
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
}));

const FinalProyect = () => {
  const classes = useStyles();

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Container style={{ marginTop: "50px" }}>
      <Typography
        style={{ textAlign: "center", marginBottom: "10px", fontSize: 40 }}
      >
        Proyecto finales
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
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <Divider className={classes.divider} orientation="vertical" />
        <InputBase
          className={classes.input}
          placeholder="Search Google Maps"
          inputProps={{ "aria-label": "search google maps" }}
        />
      </Paper>

      <Container style={{ display: "flex", maxWidth: 1000 }}>
        <Card className={classes.rootCard}>
          <CardMedia
            className={classes.media}
            image="https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_960,f_auto/10140482_den8mp.png"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography
              className="lizardsStyle"
              style={{ overflowY: "scroll", height: 100 }}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography>Calificacion A</Typography>
            <Button size="small" color="primary">
              Ver documentacion
            </Button>
          </CardActions>
        </Card>

        <Card className={classes.rootCard}>
          <CardMedia
            className={classes.media}
            image="https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_960,f_auto/10140482_den8mp.png"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography
              className="lizardsStyle"
              style={{ overflowY: "scroll", height: 100 }}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography>Calificacion A</Typography>
            <Button size="small" color="primary">
              Ver documentacion
            </Button>
          </CardActions>
        </Card>

        <Card className={classes.rootCard}>
          <CardMedia
            className={classes.media}
            image="https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_960,f_auto/10140482_den8mp.png"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography
              className="lizardsStyle"
              style={{ overflowY: "scroll", height: 100 }}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography>Calificacion A</Typography>
            <Button size="small" color="primary">
              Ver documentacion
            </Button>
          </CardActions>
        </Card>
      </Container>
      <Container style={{ display: "flex", maxWidth: 1000 }}>
        <Card className={classes.rootCard}>
          <CardMedia
            className={classes.media}
            image="https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_960,f_auto/10140482_den8mp.png"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography
              className="lizardsStyle"
              style={{ overflowY: "scroll", height: 100 }}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography>Calificacion A</Typography>
            <Button size="small" color="primary">
              Ver documentacion
            </Button>
          </CardActions>
        </Card>

        <Card className={classes.rootCard}>
          <CardMedia
            className={classes.media}
            image="https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_960,f_auto/10140482_den8mp.png"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography
              className="lizardsStyle"
              style={{ overflowY: "scroll", height: 100 }}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography>Calificacion A</Typography>
            <Button size="small" color="primary">
              Ver documentacion
            </Button>
          </CardActions>
        </Card>

        <Card className={classes.rootCard}>
          <CardMedia
            className={classes.media}
            image="https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_960,f_auto/10140482_den8mp.png"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography
              className="lizardsStyle"
              style={{ overflowY: "scroll", height: 100 }}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography>Calificacion A</Typography>
            <Button size="small" color="primary">
              Ver documentacion
            </Button>
          </CardActions>
        </Card>
      </Container>
    </Container>
  );
};

export default FinalProyect;
