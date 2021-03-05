import React from "react";
import { Card, Container, Button, Link } from "@material-ui/core";
import styles from "../IncognitoPages/style/styleRegister";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { adminService } from "../../_services/admin.service";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import TagFacesIcon from "@material-ui/icons/TagFaces";
import Box from "@material-ui/core/Box";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function InputCustoms({ errors, touched, name, keyObj, type = "text" }) {
  return (
    <div className="form-group">
      <Field
        name={keyObj}
        type={type}
        render={({ field, form: { isSubmitting } }) => (
          <input
            className={
              "form-control" +
              (errors[keyObj] && touched[keyObj] ? " is-invalid" : "")
            }
            {...field}
            disabled={isSubmitting}
            type={type}
            placeholder={name}
          />
        )}
      />
      <ErrorMessage
        name={keyObj}
        component="div"
        className="invalid-feedback "
        style={{ display: "none" }}
      />
    </div>
  );
}

export default function RegisterTeacher(props) {
  const classes = styles();
  const [open, setOpen] = React.useState(false);
  const [section, setSection] = React.useState("");

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const [chipData, setChipData] = React.useState([]);

  const handleAddSection = () => {
    setChipData([
      { key: Math.floor(Math.random() * 100000), label: section },
      ...chipData,
    ]);
  };

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  return (
    <Container style={{ width: 400 }}>
      <Card variant="outlined" style={{ padding: 30 }}>
        <div>
          <Typography
            style={{
              textAlign: "center",
              fontSize: "40px",
              marginTop: "20px",
              marginBottom: "10px",
            }}
          >
            Registrarse
          </Typography>
          <Formik
            initialValues={{
              mail: "",
              name: "",
              teacherCode: "",
              password: "",
              paswordC: "",
            }}
            validationSchema={Yup.object().shape({
              mail: Yup.string().required("o"),
              name: Yup.string().required("o"),
              teacherCode: Yup.string().required("o"),
              password: Yup.string().required("o"),
              passwordC: Yup.string().required("o"),
            })}
            onSubmit={(initialValues, { setStatus, setSubmitting }) => {
              console.log(initialValues);
              console.log(chipData);

              let teacher = {
                mail: initialValues.mail,
                name: initialValues.name,
                teacherCode: initialValues.teacherCode,
                password: initialValues.password,
                sections: chipData.map((x) => x.label),
              };

              setStatus();
              adminService.registerTeacher(teacher).then(
                (response) => {
                  /*const { from } = props.location.state || {
                    from: { pathname: "/registerSuccess" },
                  };
                  props.history.push(from);*/
                  console.log(response);
                },
                (error) => {
                  setSubmitting(false);
                  setStatus(error);
                  handleClick();
                }
              );
            }}
            render={({ errors, status, touched, isSubmitting }) => (
              <Form>
                <InputCustoms
                  errors={errors}
                  touched={touched}
                  keyObj="teacherCode"
                  name="Codigo"
                />

                <InputCustoms
                  errors={errors}
                  touched={touched}
                  keyObj="name"
                  name="Nombre y Apellido"
                />

                <InputCustoms
                  errors={errors}
                  touched={touched}
                  keyObj="mail"
                  name="Correo ITSC"
                />

                <Paper component="div" style={{ display: "flex" }}>
                  {chipData.map((data) => {
                    let icon;

                    if (data.label === "React") {
                      icon = <TagFacesIcon />;
                    }

                    return (
                      <Box key={data.key}>
                        <Chip
                          icon={icon}
                          label={data.label}
                          onDelete={
                            data.label === "React"
                              ? undefined
                              : handleDelete(data)
                          }
                          className={classes.chip}
                        />
                      </Box>
                    );
                  })}
                </Paper>

                <Box style={{ display: "flex" }}>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Anadir secciones"
                      onChange={(e) => {
                        setSection(e.target.value);
                      }}
                    />
                  </div>

                  <Button
                    color="primary"
                    variant="outlined"
                    style={{ height: 38, width: 80 }}
                    onClick={() => {
                      handleAddSection();
                    }}
                  >
                    <AddToPhotosIcon></AddToPhotosIcon>
                  </Button>
                </Box>

                <InputCustoms
                  errors={errors}
                  touched={touched}
                  keyObj="password"
                  name="Contraseña"
                  type="password"
                />

                <InputCustoms
                  errors={errors}
                  touched={touched}
                  keyObj="passwordC"
                  name="Repetir contraseña"
                  type="password"
                />

                <Container
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: "10px",
                  }}
                >
                  <div className="form-group">
                    {isSubmitting && (
                      <img
                        alt="ddd"
                        src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                      />
                    )}
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={isSubmitting}
                    >
                      Hacer solicitud
                    </button>
                  </div>
                </Container>

                {status && (
                  <Snackbar
                    open={open}
                    autoHideDuration={2000}
                    onClose={handleClose}
                  >
                    <Alert onClose={handleClose} severity="error">
                      {status}
                    </Alert>
                  </Snackbar>
                )}
              </Form>
            )}
          />
        </div>
      </Card>
    </Container>
  );
}
