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

export default function ProjectChapterShowStudent(props) {
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
            Capitulo de documentacion
          </Typography>

          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              border: "solid #E8E8E8 1px",
              marginBottom: 8,
              backgroundColor: "#E8E8E8",
              borderRadius: 5,
            }}
          >
            <Typography
              style={{
                lineHeight: 3,
                marginLeft: 7,
              }}
            >
              Calificacion:{" "}
              <Typography component="span" style={{ fontWeight: "bold" }}>
                A
              </Typography>
            </Typography>
            <Typography
              style={{
                lineHeight: 3,
                marginLeft: 7,
              }}
            >
              Capitulo{" "}
              <Typography component="span" style={{ fontWeight: "bold" }}>
                1
              </Typography>
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
                  Ver Pdf
                </Button>
              </label>
            </div>
          </Box>
        </form>
      </Card>
    </Container>
  );
}
