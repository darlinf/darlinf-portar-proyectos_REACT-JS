import React, { useState } from "react";
import { Container, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { authenticationService } from "../../_services/authentication.service";

export default function HomeStudent() {
  var user = authenticationService.currentUserValue();

  const [items] = useState(user);

  return (
    <Container style={{ marginTop: 150 }}>
      <Typography style={{ textAlign: "center", fontSize: 30 }}>
        ¡Hola {items.name}!
      </Typography>
      <Typography style={{ textAlign: "center", fontSize: 30 }}>
        Te damos la bienvenida al portal proyectos ITSC.
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
