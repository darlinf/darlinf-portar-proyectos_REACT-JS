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
import LinearProgress from "@material-ui/core/LinearProgress";

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
  hr: {
    margin: 0,
    marginBottom: 13,
  },
}));

export default function ManageStudentsTeacher() {
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
  const teacher = authenticationService.currentUserValue();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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

  const handleSetValue = (stateUpdate, item) => {
    let data = {
      id: item.studentId,
      enrollment: item.enrollment,
      homeState: item.homeState,
      belongGroup: item.belongGroup,
      career: item.career,
      state: stateUpdate,
    };
    updateApi(data);
  };

  const updateApi = (elem) => {
    setShowLinearProgress(true);
    teacherService
      .updateStudentForCredentials(elem)
      .then(() => {
        getApi();
        setShowLinearProgress(false);
      })
      .catch((error) => {
        console.error(error);
      });
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

  const getApi = (studentState = "all", section = "all") => {
    teacherService
      .getAllStudentForCredentials(teacher.teacherId, section, studentState)
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
        (el) => el.enrollment.toLowerCase().indexOf(value.toLowerCase()) !== -1
      )
    );
  };

  const ShowData = () => {
    if (items[0])
      return items.map((item) => {
        return (
          <Accordion
            key={item.studentId}
            expanded={expanded === "panel1" + item.studentId}
            onChange={handleChange("panel1" + item.studentId)}
          >
            <AccordionSummary>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                }}
              >
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "60%",
                  }}
                >
                  <Typography>
                    Estudiante:{" "}
                    <Typography component="span" style={{ fontWeight: "bold" }}>
                      {item.name}
                    </Typography>
                  </Typography>
                  <Typography>
                    Matricula:{" "}
                    <Typography component="span" style={{ fontWeight: "bold" }}>
                      {item.enrollment}
                    </Typography>
                  </Typography>
                </Box>
                <Box
                  onClick={(event) => event.stopPropagation()}
                  onFocus={(event) => event.stopPropagation()}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "300px",
                  }}
                >
                  {item.state !== "denied" && (
                    <Button
                      size="small"
                      style={{ width: 80, height: 20, marginLeft: 5 }}
                      variant="contained"
                      color="secondary"
                      onClick={() => handleSetValue("denied", item)}
                    >
                      Negar
                    </Button>
                  )}

                  {item.state !== "approved" && (
                    <Button
                      size="small"
                      variant="contained"
                      color="primary"
                      style={{ width: 80, height: 20, marginLeft: 5 }}
                      onClick={() => handleSetValue("approved", item)}
                    >
                      Aprobar
                    </Button>
                  )}
                </Box>
              </Box>
            </AccordionSummary>
          </Accordion>
        );
      });
    else
      return (
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            width: 750,
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
        Gestionar estudiantes
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
          placeholder="Buscar por matricula"
          inputProps={{ "aria-label": "Buscar por matricula" }}
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
