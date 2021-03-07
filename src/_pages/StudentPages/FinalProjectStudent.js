import React from "react";
import { Card, Container, Button, Link } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { makeStyles } from "@material-ui/core/styles";

import ReactUploadImage from "../../_components/ReactUploadImage";
const axios = require("axios");

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

export default function FinalProjectStudent(props) {
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
    let data = {
      ImageSRC: imgUrl,
      FinalDocumentationSRC: pdfUrl,
      Description: description,
    };

    console.log(data);
  };

  return (
    <Container style={{ width: 500, marginTop: 50 }}>
      <Card variant="outlined">
        <form
          onSubmit={(e) => {
            onFormSubmit(e);
            onFormSubmit2(e);
          }}
        >
          <h1>Imagen de portada</h1>
          <input
            className="btn"
            type="file"
            name="myImage"
            onChange={onChange}
          />
          <input
            className="btn"
            type="file"
            name="myImage"
            onChange={onChange2}
          />
          <TextField
            style={{ marginBottom: 10 }}
            label="Descripción"
            multiline
            rows={4}
            defaultValue=""
            variant="filled"
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="btn btn-primary" type="submit">
            Upload
          </button>
        </form>
      </Card>
    </Container>
  );
}
