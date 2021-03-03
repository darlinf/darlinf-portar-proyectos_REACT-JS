import React, { useState, useEffect } from "react";
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

import CircularProgress from "@material-ui/core/CircularProgress";
import { teacherService } from "../../_services/teacher.service";
import { authenticationService } from "../../_services/authentication.service";

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
}));

export default function ManagementProposedProjects() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [items, setItems] = useState([]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [age, setAge] = React.useState("");

  const handleChange2 = (event) => {
    setAge(event.target.value);
  };

  useEffect(() => {
    teacherService
      .getAllProjectForEvaluate(1, "all", "all")
      .then((data) => {
        setItems(data);

        var iii = authenticationService.currentUserValue();
        console.log(iii);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const ShowData = () => {
    if (items[0])
      return items.map((item) => {
        return (
          <Accordion
            key={item.proposedProjectsId}
            expanded={expanded === "panel1" + item.proposedProjectsId}
            onChange={handleChange("panel1" + item.proposedProjectsId)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={"panel1bh-content"}
              id={"panel1bh-header"}
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
                      {item.studenName}
                    </Typography>
                  </Typography>
                  <Typography>
                    Matricula:{" "}
                    <Typography component="span" style={{ fontWeight: "bold" }}>
                      {item.enrollment}
                    </Typography>
                  </Typography>
                  <Typography>
                    Proyecto:{" "}
                    <Typography component="span" style={{ fontWeight: "bold" }}>
                      {item.name}
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
                  <Box style={{ display: "flex" }}>
                    <Box style={{ width: "325px" }}>
                      <Typography>Descricion</Typography>
                      <Typography
                        className="lizardsStyle"
                        style={{
                          overflowY: "scroll",

                          height: 100,
                        }}
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {item.description}
                      </Typography>
                    </Box>
                    <Box style={{ marginLeft: 20, width: "325px" }}>
                      <Typography>Justificacion</Typography>
                      <Typography
                        className="lizardsStyle"
                        style={{
                          overflowY: "scroll",

                          height: 100,
                        }}
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {item.justification}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
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
    <Container style={{ width: 750, marginTop: 50 }}>
      <Typography
        style={{ textAlign: "center", marginBottom: "10px", fontSize: 40 }}
      >
        Gestionar proyectos propuestos
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
          placeholder="Search Google Maps"
          inputProps={{ "aria-label": "search google maps" }}
        />
      </Paper>
      <div className={classes.root}>
        <ShowData></ShowData>
      </div>
    </Container>
  );
}
