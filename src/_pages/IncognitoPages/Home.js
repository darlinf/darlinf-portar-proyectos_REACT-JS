import React from "react";
import { Card, Container, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "./style/styleLogin";
import Typography from "@material-ui/core/Typography";

export default function Home() {
  const classes = styles();

  return (
    <Container style={{ width: 500, marginTop: 150 }}>
      <Card
        variant="contained"
        style={{ paddingTop: 30, paddingBottom: 30, borderRadius: 30 }}
      >
        <Typography style={{ fontSize: 40, textAlign: "center" }}>
          Bienvenido al portal
        </Typography>
        <Typography style={{ fontSize: 40, textAlign: "center" }}>
          proyectos ITSC
        </Typography>
        <Container
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <Button variant="outlined" color="primary">
            <Link to="/finalProyect" style={{ textDecoration: "none" }}>
              Ver proyectos
            </Link>
          </Button>
          <Button variant="outlined" color="primary">
            <Link to="/proposedProject" style={{ textDecoration: "none" }}>
              Ver proyectos propuestos
            </Link>
          </Button>
        </Container>
      </Card>
    </Container>
  );
}
