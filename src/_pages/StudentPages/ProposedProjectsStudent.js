import React from "react";
import { Card, Container, Button, Link } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

export default function ProposedProjectsStudent(props) {
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
          />
          <TextField
            style={{ marginBottom: 10 }}
            label="Descripción"
            multiline
            rows={4}
            defaultValue=""
            variant="filled"
          />{" "}
          <TextField
            label="Justificacion"
            multiline
            rows={4}
            defaultValue=""
            variant="filled"
          />
        </form>
      </Card>
    </Container>
  );
}
