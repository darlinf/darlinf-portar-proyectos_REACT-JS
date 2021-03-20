import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CardActions from "@material-ui/core/CardActions";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import { studentService } from "../../_services/student.service";
import { authenticationService } from "../../_services/authentication.service";

const ProposedProjectsShowStudent = () => {
  const [items, setItems] = useState([]);
  const [proposedProjectState, setProposedProjectState] = useState(false);
  const [studentId] = useState(
    authenticationService.currentUserValue().studentId
  );
  const student = authenticationService.currentUserValue();
  console.log(student);

  useEffect(() => {
    studentService
      .GetAllProposedProject(student.id, "" + student.belongGroup)
      .then((data) => {
        setItems(data);
        if (data[0])
          data.forEach((x) => {
            if (x.state === "approved") {
              setProposedProjectState(true);
            }
          });
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const ShowData = () => {
    if (items[0])
      return items.map((item) => {
        return (
          <Card key={item.id}>
            <CardContent>
              <Typography
                style={{ textAlign: "center" }}
                gutterBottom
                variant="h5"
                component="h2"
              >
                {item.name}
              </Typography>
              <Box style={{ display: "flex" }}>
                <Box style={{ width: "50%" }}>
                  <Typography>Descripción</Typography>
                  <Typography
                    className="lizardsStyle"
                    style={{ overflowY: "scroll", height: 100 }}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {item.description}
                  </Typography>
                </Box>
                <Box style={{ width: "50%", marginLeft: 20 }}>
                  <Typography>Justificación</Typography>
                  <Typography
                    className="lizardsStyle"
                    style={{ overflowY: "scroll", height: 100 }}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {item.justification}
                  </Typography>
                </Box>
              </Box>
              <Box>
                <CardActions
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: 7,
                  }}
                >
                  <Typography>
                    Estado:{" "}
                    <Typography component="span" style={{ fontWeight: "bold" }}>
                      {item.state}
                    </Typography>
                  </Typography>
                </CardActions>
                {item.studentId === studentId && !proposedProjectState && (
                  <Box
                    style={{ display: "flex", flexDirection: "row-reverse" }}
                  >
                    <Button variant="outlined" color="primary" size="small">
                      Editar
                    </Button>
                  </Box>
                )}
                {item.studentId === studentId && item.state === "approved" && (
                  <Box
                    style={{ display: "flex", flexDirection: "row-reverse" }}
                  >
                    <Button variant="outlined" color="primary" size="small">
                      <Link
                        to={"/finalProjectStudent/" + item.name}
                        style={{ textDecoration: "none" }}
                      >
                        Completar
                      </Link>
                    </Button>
                  </Box>
                )}
              </Box>
            </CardContent>
          </Card>
        );
      });
    else
      return (
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            width: 940,
            padding: 0,
          }}
        >
          <CircularProgress />
        </Container>
      );
  };

  return (
    <Container style={{ marginTop: "50px" }}>
      <Typography
        style={{ textAlign: "center", marginBottom: "20px", fontSize: 40 }}
      >
        Proyectos propuestos
      </Typography>
      <Container
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridGap: "5px",
          width: 940,
          padding: 0,
        }}
      >
        <ShowData />
      </Container>
    </Container>
  );
};

export default ProposedProjectsShowStudent;
