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
import CircularProgress from "@material-ui/core/CircularProgress";

import "./style/styleFinalProyect.css";
import { incognitoService } from "../../_services/incognito.service";
import { Search } from "@material-ui/icons";

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

const ProposedProject = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [items, setItems] = useState([]);
  const [itemsCopy, setItemsCopy] = useState([]);

  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(event.target.value);
    setItems([]);
    incognitoService
      .getAllProposedProjectByCareer(event.target.value)
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
    incognitoService
      .getAllProposedProject()
      .then((data) => {
        setItems(data);
        setItemsCopy(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const searchTo = (value) => {
    setItems(
      itemsCopy.filter(
        (el) => el.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
      )
    );
  };

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
                <Box style={{ marginLeft: 20, width: "50%" }}>
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
    <Container>
      <Typography
        style={{ textAlign: "center", marginBottom: "10px", fontSize: 40 }}
      >
        Proyecto propuestos
      </Typography>
      <Paper component="form" className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Carrera</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
            style={{ border: "none", width: 200 }}
          >
            <MenuItem value={"gastronomia"}>gastronomia</MenuItem>
            <MenuItem value={"software"}>software</MenuItem>
            <MenuItem value={"software2"}>software2</MenuItem>
          </Select>
        </FormControl>

        <Divider className={classes.divider} orientation="vertical" />
        <InputBase
          className={classes.input}
          onChange={(e) => searchTo(e.target.value)}
          placeholder="Buscar"
          inputProps={{ "aria-label": "Buscar" }}
        />
      </Paper>
      <Container
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridGap: "5px",
          width: 940,
          padding: 0,
        }}
      >
        <ShowData></ShowData>
      </Container>
    </Container>
  );
};

export default ProposedProject;
