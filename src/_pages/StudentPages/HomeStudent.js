import React from "react";
import { Card, Container, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

export default function HomeStudent() {
  return (
    <Container style={{ marginTop: 150 }}>
      <Typography style={{ textAlign: "center", fontSize: 30 }}>
        ¡Hola RAMONA!
      </Typography>
      <Typography style={{ textAlign: "center", fontSize: 30 }}>
        Te damos la bienvenida al portar proyectos ITSC.
      </Typography>
      <Typography style={{ textAlign: "center", marginTop: 10 }}>
        <Button style={{ margin: "auto" }} variant="outlined" color="primary">
          <Link
            to="/proposedProjectsStudent"
            style={{ textDecoration: "none" }}
          >
            Proponer proyecto
          </Link>
        </Button>
      </Typography>
    </Container>
  );
}
