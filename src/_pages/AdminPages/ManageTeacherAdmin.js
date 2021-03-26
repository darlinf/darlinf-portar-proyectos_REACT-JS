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
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

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

export default function ManageTeacherAdmin(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [items, setItems] = useState([]);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [idToDelete, setIdToDelete] = useState(0);
  const [itemsCopy, setItemsCopy] = useState([]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    props.history.push({ pathname: "/manageTeacherAdmin" });
    setOpenDialog(false);
  };

  const getApi = () => {
    adminService
      .getAllTeacher()
      .then((data) => {
        console.log(data);
        setItems(data);
        setItemsCopy(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getApi();
  }, []);

  const confirmDelete = () => {
    console.log(idToDelete);
    adminService
      .deleteTeacher(idToDelete)
      .then((data) => {
        getApi();
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

  return (
    <Container style={{ width: 750, marginTop: 50 }}>
      <Typography
        style={{ textAlign: "center", marginBottom: "10px", fontSize: 40 }}
      >
        Gestionar maestros
      </Typography>
      <Paper component="form" className={classes.root2}>
        <InputBase
          style={{ marginLeft: 10, width: "100%" }}
          className={classes.input}
          placeholder="Buscar maestro"
          inputProps={{ "aria-label": "search google maps" }}
          onChange={(e) => searchTo(e.target.value)}
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
                        variant="contained"
                        color="primary"
                        style={{ width: 80, height: 20, opacity: 0 }}
                      >
                        Editar
                      </Button>
                      <Button
                        size="small"
                        style={{ width: 80, height: 20 }}
                        variant="contained"
                        color="secondary"
                        onClick={() => {
                          handleClickOpenDialog();
                          setIdToDelete(x.id);
                        }}
                      >
                        Eliminar
                      </Button>
                    </Box>
                  </Box>
                </AccordionSummary>
              </Accordion>
            );
          })}
      </div>
      <div>
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Eliminar elemento"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Estas seguro que deseas eliminar este elemento permanentemente.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                handleCloseDialog();
                confirmDelete();
              }}
              color="primary"
              autoFocus
            >
              Aceptar
            </Button>
            <Button onClick={handleCloseDialog} color="primary" autoFocus>
              Cancelar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </Container>
  );
}
