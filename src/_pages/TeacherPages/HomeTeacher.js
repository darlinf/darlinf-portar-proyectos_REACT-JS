import React, { useState, useEffect } from "react";
import { Card, Container, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { authenticationService } from "../../_services/authentication.service";

export default function HomeTeacher() {
  const [items, setItems] = useState({});

  useEffect(() => {
    var user = authenticationService.currentUserValue();
    setItems(user);
  }, []);

  return (
    <Container style={{ marginTop: 150 }}>
      <Typography style={{ textAlign: "center", fontSize: 30 }}>
        ¡Hola maestr@ {items.name}!
      </Typography>
      <Typography style={{ textAlign: "center", fontSize: 30 }}>
        Te damos la bienvenida a la gestión del portal proyectos ITSC.
      </Typography>
    </Container>
  );
}
