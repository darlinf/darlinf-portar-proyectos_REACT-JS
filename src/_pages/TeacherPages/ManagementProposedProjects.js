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
import LinearProgress from "@material-ui/core/LinearProgress";

import CircularProgress from "@material-ui/core/CircularProgress";
import { teacherService } from "../../_services/teacher.service";
import { authenticationService } from "../../_services/authentication.service";

const teacher = authenticationService.currentUserValue();

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
  animate: {
    transition: "opacity 0.10s ease-in-out",
  },
}));

export default function ManagementProposedProjects() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [items, setItems] = useState([]);
  const [showLinearProgress, setShowLinearProgress] = useState(false);
  const [itemsCopy, setItemsCopy] = useState([]);
  const [sections, setSections] = useState([]);
  const [ageSection, setAgeSection] = React.useState("");
  const [ageState, setAgeState] = React.useState("");
  let sectionG = "all",
    stateG = "all";

  const handleChangeSection = (event) => {
    setAgeSection(event.target.value);
    sectionG = event.target.value;
    getApi(sectionG, stateG);
  };

  const handleChangeState = (event) => {
    setAgeState(event.target.value);
    stateG = event.target.value;
    getApi(sectionG, stateG);
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleStateProject = (state, item) => {
    item.state = state;
    var itemUpdate = {
      id: item.proposedProjectsId,
      name: item.name,
      description: item.description,
      justification: item.justification,
      state: state,
      studentId: item.studentId,
    };
    updateApi(itemUpdate);
  };

  const updateApi = (elem) => {
    setShowLinearProgress(true);
    teacherService
      .updateProjectForEvaluate(elem)
      .then(() => {
        getApi();
        setShowLinearProgress(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getApi = (section = "all", state = "all") => {
    teacherService
      .getAllProjectForEvaluate(teacher.teacherId, section, state)
      .then((data) => {
        setItems(data);
        setItemsCopy(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const searchTo = (value) => {
    setItems(
      itemsCopy.filter(
        (el) => el.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
      )
    );
  };

  const getApiSection = () => {
    teacherService
      .GetAllSection(teacher.teacherId)
      .then((data) => {
        console.log(data);
        setSections(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getApiSection();
    getApi();
  }, []);

  const ShowData = () => {
    if (items[0])
      return items.map((item) => {
        return (
          <div key={item.proposedProjectsId}>
            <Accordion
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
                      <Typography
                        component="span"
                        style={{ fontWeight: "bold" }}
                      >
                        {item.studenName}
                      </Typography>
                    </Typography>
                    <Typography>
                      Matricula:{" "}
                      <Typography
                        component="span"
                        style={{ fontWeight: "bold" }}
                      >
                        {item.enrollment}
                      </Typography>
                    </Typography>
                    <Typography>
                      Proyecto:{" "}
                      <Typography
                        component="span"
                        style={{ fontWeight: "bold" }}
                      >
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

                        marginTop: "13px",
                      }}
                    >
                      {item && (
                        <div>
                          {item.state !== "denied" && (
                            <Button
                              size="small"
                              style={{ width: 60, height: 20, marginRight: 4 }}
                              variant="contained"
                              color="secondary"
                              onClick={() => handleStateProject("denied", item)}
                            >
                              Negar
                            </Button>
                          )}
                        </div>
                      )}
                      {item && (
                        <div>
                          {item.state !== "potential" && (
                            <Button
                              size="small"
                              variant="contained"
                              style={{ width: 73, height: 20, marginRight: 4 }}
                              onClick={() =>
                                handleStateProject("potential", item)
                              }
                            >
                              Guardar
                            </Button>
                          )}
                        </div>
                      )}
                      {item && (
                        <div>
                          {item.state !== "approved" && (
                            <Button
                              size="small"
                              style={{ width: 73, height: 20, marginRight: 5 }}
                              variant="contained"
                              color="primary"
                              onClick={() =>
                                handleStateProject("approved", item)
                              }
                            >
                              Aprobar
                            </Button>
                          )}
                        </div>
                      )}
                    </Box>
                  </Box>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box className={classes.rootCard}>
                  <Box>
                    <Box style={{ display: "flex" }}>
                      <Box style={{ width: "325px" }}>
                        <Typography>Descripción</Typography>
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
                        <Typography>Justificación</Typography>
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
          </div>
        );
      });
    else
      return (
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            width: 700,
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
            value={ageState}
            onChange={handleChangeState}
            style={{ border: "none", width: 200 }}
          >
            <MenuItem value="evaluate">Evaluar</MenuItem>
            <MenuItem value="approved">Aprobado</MenuItem>
            <MenuItem value="potential">Potenciar</MenuItem>
            <MenuItem value="denied">Negado</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">
            Seleccionar por sección
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={ageSection}
            onChange={handleChangeSection}
            style={{ border: "none", width: 200 }}
          >
            {sections.map((x) => (
              <MenuItem value={x.sectionNumber}>{x.sectionNumber}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <Divider className={classes.divider} orientation="vertical" />
        <InputBase
          className={classes.input}
          placeholder="Buscar proyecto"
          inputProps={{ "aria-label": "Buscar proyecto" }}
          onChange={(e) => searchTo(e.target.value)}
        />
      </Paper>
      <div className={classes.root}>
        <LinearProgress
          className={classes.animate}
          style={{ opacity: showLinearProgress ? 1 : 0 }}
        />
        <ShowData></ShowData>
      </div>
    </Container>
  );
}
