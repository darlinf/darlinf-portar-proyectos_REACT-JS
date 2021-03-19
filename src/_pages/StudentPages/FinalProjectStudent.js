import React from "react";
import { Card, Container, Button, Link } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { makeStyles } from "@material-ui/core/styles";
import { authenticationService } from "../../_services/authentication.service";
import { studentService } from "../../_services/student.service";
import { teacherService } from "../../_services/teacher.service";

const axios = require("axios");
const student = authenticationService.currentUserValue();

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
  myStyles: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
  },
  magi: {
    marginTop: 15,
    marginBottom: 4,
  },
}));

export default function FinalProjectStudent({ match: { params } }) {
  const classes = useStyles();
  const [state, setState] = React.useState({ file: null });
  const [state2, setState2] = React.useState({ file: null });
  const [description, setDescription] = React.useState({ file: null });
  let imgUrl, pdfUrl;

  //send image
  const onFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", state.file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios
      .post("https://localhost:5001/api/Upload/upload", formData, config)
      .then((response) => {
        console.log(response);
        imgUrl = response.data;
        if (imgUrl && pdfUrl) createFinalProject();
      })
      .catch((error) => {});
  };
  const onChange = (e) => {
    setState({ file: e.target.files[0] });
  };
  //send pdf
  const onFormSubmit2 = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", state2.file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios
      .post("https://localhost:5001/api/Upload/upload", formData, config)
      .then((response) => {
        console.log(response);
        pdfUrl = response.data;
        if (imgUrl && pdfUrl) createFinalProject();
      })
      .catch((error) => {});
  };
  const onChange2 = (e) => {
    setState2({ file: e.target.files[0] });
  };

  const createFinalProject = () => {
    console.log("dddddd");
    let data = {
      ImageSRC: imgUrl,
      FinalDocumentationSRC: pdfUrl,
      Description: description,
      name: params.id,
      studentId: student.studentId,
      state: "evaluate",
    };
    console.log(data);

    studentService
      .createFinalProject(data)
      .then((response) => {
        console.log(response);
        studentService
          .updateUserForFinalProject(student.studentId, "completed")
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {});
  };

  return (
    <div>
      <Typography style={{ textAlign: "center", marginTop: 50, fontSize: 30 }}>
        Completar información del proyecto final:
      </Typography>
      <Typography
        style={{ textAlign: "center", fontSize: 30, fontWeight: "500" }}
      >
        {params.id}
      </Typography>
      <Container style={{ width: 500, marginTop: 20 }}>
        <Card variant="outlined">
          <form
            className={classes.myStyles}
            onSubmit={(e) => {
              onFormSubmit(e);
              onFormSubmit2(e);
            }}
          >
            <h1>Imagen de portada</h1>
            <input
              className="btn btn-light"
              type="file"
              name="myImage"
              onChange={onChange}
            />
            <h1 className={classes.magi}>Documentación final</h1>
            <input
              className="btn btn-light"
              type="file"
              name="myImage"
              onChange={onChange2}
            />
            <TextField
              style={{ marginButton: 10 }}
              className={classes.magi}
              label="Descripción"
              multiline
              rows={4}
              defaultValue=""
              variant="filled"
              onChange={(e) => setDescription(e.target.value)}
            />
            <button className="btn btn-primary" type="submit">
              Crear
            </button>
          </form>
        </Card>
      </Container>
    </div>
  );
}
