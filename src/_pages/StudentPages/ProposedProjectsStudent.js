import React, { useState, useEffect } from "react";
import { Card, Container, Button, Link } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

import { authenticationService } from "../../_services/authentication.service";
import { studentService } from "../../_services/student.service";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function ProposedProjectsStudent(props) {
  const initalState = {
    name: "",
    description: "",
    justification: "",
    state: "evaluate",
    studentId: "",
  };
  const [open, setOpen] = React.useState(false);
  const [state, setState] = useState(initalState);
  const [status, setStatus] = useState(false);

  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value });
  };

  const sendRequest = () => {
    let student = authenticationService.currentUserValue();
    handleChangeText(student.studentId, "studentId");
    console.log(state);

    studentService
      .CreateProposedProject(state)
      .then((data) => {
        console.log("dddddd");
        setStatus(true);
      })
      .catch((error) => {
        console.error(error);
        setStatus(true);
      });
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Container style={{ width: 500, marginTop: 50 }}>
      <Card variant="outlined">
        <form
          noValidate
          autoComplete="off"
          style={{ display: "flex", flexDirection: "column", margin: 20 }}
        >
          <Typography
            style={{ textAlign: "center", fontSize: 30, marginBottom: 10 }}
          >
            Crear proyecto propuesto
          </Typography>
          <TextField
            id="outlined-basic"
            label="Nombre"
            style={{ marginBottom: 10 }}
            variant="filled"
            onChange={(e) => {
              handleChangeText(e.target.value, "name");
            }}
          />
          <TextField
            style={{ marginBottom: 10 }}
            label="Descripción"
            multiline
            rows={4}
            defaultValue=""
            variant="filled"
            onChange={(e) => {
              handleChangeText(e.target.value, "description");
            }}
          />{" "}
          <TextField
            label="Justificacion"
            multiline
            rows={4}
            defaultValue=""
            variant="filled"
            onChange={(e) => {
              handleChangeText(e.target.value, "justification");
            }}
          />
          <Box style={{ display: "flex", flexDirection: "row-reverse" }}>
            <Button
              variant="contained"
              color="primary"
              style={{ width: 50, marginTop: 10 }}
              onClick={sendRequest}
            >
              Crear
            </Button>
          </Box>
        </form>
      </Card>
      {status && (
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            {status}
          </Alert>
        </Snackbar>
      )}
    </Container>
  );
}
