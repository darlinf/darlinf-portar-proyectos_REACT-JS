import React from "react";
import { Card, Container, Button, Link } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

export default function ProjectChapterStudent(props) {
  const classes = useStyles();
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
            Crear capitulo de proyecto
          </Typography>

          <TextField
            id="outlined-basic"
            label="Numero de capitulo"
            style={{ marginBottom: 10 }}
            variant="filled"
          />

          <TextField
            id="outlined-basic"
            label="Nombre"
            style={{ marginBottom: 10 }}
            variant="filled"
          />

          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 10,
              border: "solid #E8E8E8 1px",
              backgroundColor: "#E8E8E8",
              borderRadius: 5,
            }}
          >
            <Typography style={{ marginLeft: 7, lineHeight: 3 }}>
              Documentacion final
            </Typography>
            <div className={classes.root}>
              <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
              />
              <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span">
                  Seleccionar PDF
                </Button>
              </label>
            </div>
          </Box>

          <Box style={{ display: "flex", flexDirection: "row-reverse" }}>
            <Button
              variant="contained"
              color="primary"
              style={{ width: 50, marginTop: 10 }}
            >
              Crear
            </Button>
          </Box>
        </form>
      </Card>
    </Container>
  );
}
