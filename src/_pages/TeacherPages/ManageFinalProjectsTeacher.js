import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Button, Container } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Box from "@material-ui/core/Box";
import CardMedia from "@material-ui/core/CardMedia";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },

  root2: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 700,
    margin: "auto",
    marginBottom: "10px",
  },
  divider: {
    height: 28,
    margin: 4,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  hr: {
    margin: 0,
    marginBottom: 13,
  },
}));

export default function ManageFinalProjectsTeacher() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [age, setAge] = React.useState("");

  const handleChange2 = (event) => {
    setAge(event.target.value);
  };

  return (
    <Container style={{ width: 750, marginTop: 50 }}>
      <Typography
        style={{ textAlign: "center", marginBottom: "10px", fontSize: 40 }}
      >
        Gestionar proyectos finales
      </Typography>
      <Paper component="form" className={classes.root2}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">
            Seleccionar por estado
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange2}
            style={{ border: "none", width: 200 }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">
            Seleccionar por seccion
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange2}
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
          placeholder="Buscar por matricula"
          inputProps={{ "aria-label": "search google maps" }}
        />
      </Paper>
      <div className={classes.root}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Typography>
                  Estudiante:{" "}
                  <Typography component="span" style={{ fontWeight: "bold" }}>
                    Carlos Gomez
                  </Typography>
                </Typography>
                <Typography>
                  Matricula:{" "}
                  <Typography component="span" style={{ fontWeight: "bold" }}>
                    2018-2012
                  </Typography>
                </Typography>
                <Typography>
                  Proyecto:{" "}
                  <Typography component="span" style={{ fontWeight: "bold" }}>
                    Tendedor de ropa
                  </Typography>
                </Typography>
              </Box>
              <Box
                onClick={(event) => event.stopPropagation()}
                onFocus={(event) => event.stopPropagation()}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Box></Box>
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "57%",
                    marginTop: "13px",
                  }}
                >
                  <Button
                    size="small"
                    style={{ width: 85, height: 20 }}
                    variant="contained"
                    color="secondary"
                  >
                    Reeprobar
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    style={{ width: 180, height: 20 }}
                  >
                    Aprobar sin publicar
                  </Button>
                  <Button
                    size="small"
                    style={{ width: 73, height: 20 }}
                    variant="contained"
                    color="primary"
                  >
                    Aprobar
                  </Button>
                </Box>
              </Box>
            </Box>
          </AccordionSummary>
          <hr className={classes.hr}></hr>
          <AccordionDetails>
            <Box
              style={{ display: "flex", flexDirection: "row", width: "100%" }}
            >
              <CardMedia
                style={{ height: 170, width: "40%" }}
                image="https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_960,f_auto/10140482_den8mp.png"
                title="Contemplative Reptile"
              />
              <CardContent style={{ height: 170, width: "60%" }}>
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
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                  6,000 species, ranging across all continents except Antarctica
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Box>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography className={classes.heading}>Users</Typography>
            <Typography className={classes.secondaryHeading}>
              You are currently not an owner
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Donec placerat, lectus sed mattis semper, neque lectus feugiat
              lectus, varius pulvinar diam eros in elit. Pellentesque convallis
              laoreet laoreet.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography className={classes.heading}>
              Advanced settings
            </Typography>
            <Typography className={classes.secondaryHeading}>
              Filtering has been entirely disabled for whole web server
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography className={classes.heading}>Personal data</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </Container>
  );
}
