import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import { Container } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CardActions from "@material-ui/core/CardActions";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";

import { studentService } from "../../_services/student.service";
import { authenticationService } from "../../_services/authentication.service";
//import "./style/styleFinalProyect.css";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 940,
    margin: "auto",
    marginBottom: "10px",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  rootCard: {
    marginLeft: "5px",
    marginRight: "5px",
    marginBottom: "10px",
    width: "50%",
  },
  media: {
    height: 160,
  },
}));

const ProposedProjectsShowStudent = () => {
  const classes = useStyles();
  const [items, setItems] = useState([]);
  const [studentId] = useState(
    authenticationService.currentUserValue().studentId
  );

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  console.log(studentId);

  useEffect(() => {
    studentService
      .GetAllProposedProject(9, "3")
      .then((data) => {
        setItems(data);
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
                  <Typography>Descricion</Typography>
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
                  <Typography>Justificacion</Typography>
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
                {item.studentId === studentId && (
                  <Box
                    style={{ display: "flex", flexDirection: "row-reverse" }}
                  >
                    <Button variant="outlined" color="primary" size="small">
                      Editar
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
        Proyecto propuestos
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
