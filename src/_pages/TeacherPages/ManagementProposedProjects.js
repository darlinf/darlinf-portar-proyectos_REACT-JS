import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Button, Container } from "@material-ui/core";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";

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
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container style={{ width: 700, marginTop: 50 }}>
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
                    width: "40%",
                    marginTop: "13px",
                  }}
                >
                  <Button
                    size="small"
                    style={{ width: 60, height: 20 }}
                    variant="contained"
                    color="secondary"
                  >
                    Negar
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    style={{ width: 73, height: 20 }}
                  >
                    Guardar
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
          <AccordionDetails>
            <Box className={classes.rootCard}>
              <Box>
                <Typography
                  style={{ textAlign: "center" }}
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  Lizard
                </Typography>
                <Box style={{ display: "flex" }}>
                  <Box>
                    <Typography>Descricion</Typography>
                    <Typography
                      className="lizardsStyle"
                      style={{ overflowY: "scroll", height: 100 }}
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica Lizards are a widespread group of squamate
                      reptiles, with over 6,000 species, ranging across all
                      continents except Antarctica
                    </Typography>
                  </Box>
                  <Box style={{ marginLeft: 20 }}>
                    <Typography>Justificacion</Typography>
                    <Typography
                      className="lizardsStyle"
                      style={{ overflowY: "scroll", height: 100 }}
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica Lizards are a widespread group of squamate
                      reptiles, with over 6,000 species, ranging across all
                      continents except Antarctica
                    </Typography>
                  </Box>
                </Box>
              </Box>
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
