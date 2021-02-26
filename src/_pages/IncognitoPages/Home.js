import React from "react";
import { Card, Container, Button, Link } from "@material-ui/core";
import styles from "./style/styleLogin";

export default function Home() {
  const classes = styles();

  return (
    <Container className={classes.container}>
      <Card variant="outlined" className={classes.cardContainer}>
        <h1>Proyecto propuesto</h1>
        <Container style={{ display: "flex" }}>
          <Button>
            <Link to="/finalProyect" style={{ textDecoration: "none" }}>
              Ver proyectos
            </Link>
          </Button>
          <Button>
            <Link to="/proposedProject" style={{ textDecoration: "none" }}>
              Ver proyectos propuestos
            </Link>
          </Button>
        </Container>
      </Card>
    </Container>
  );
}
