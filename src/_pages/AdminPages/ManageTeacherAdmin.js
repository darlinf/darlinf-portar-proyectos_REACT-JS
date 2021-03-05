import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Button, Container } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import { adminService } from "../../_services/admin.service";

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

export default function ManageTeacherAdmin() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [items, setItems] = useState([]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [age, setAge] = React.useState("");

  const getApi = () => {
    adminService
      .getAllTeacher()
      .then((data) => {
        console.log(data);
        setItems(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <Container style={{ width: 750, marginTop: 50 }}>
      <Typography
        style={{ textAlign: "center", marginBottom: "10px", fontSize: 40 }}
      >
        Gestionar maestros
      </Typography>
      <Paper component="form" className={classes.root2}>
        <Divider className={classes.divider} orientation="vertical" />
        <InputBase
          className={classes.input}
          placeholder="Buscar maestro"
          inputProps={{ "aria-label": "search google maps" }}
        />
      </Paper>
      <div className={classes.root}>
        {items[0] &&
          items.map((x) => {
            return (
              <Accordion
                key={x.id}
                expanded={expanded === "panel1" + x.id}
                onChange={handleChange("panel1" + x.id)}
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
                        Maestro:{" "}
                        <Typography
                          component="span"
                          style={{ fontWeight: "bold" }}
                        >
                          {x.name}
                        </Typography>
                      </Typography>
                    </Box>
                    <Box
                      onClick={(event) => event.stopPropagation()}
                      onFocus={(event) => event.stopPropagation()}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "25%",
                        marginLeft: "15%",
                      }}
                    >
                      <Button
                        size="small"
                        style={{ width: 80, height: 20 }}
                        variant="contained"
                        color="secondary"
                      >
                        Eliminar
                      </Button>
                      <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        style={{ width: 80, height: 20 }}
                      >
                        Editar
                      </Button>
                    </Box>
                  </Box>
                </AccordionSummary>
              </Accordion>
            );
          })}
      </div>
    </Container>
  );
}
