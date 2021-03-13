import React from "react";
import { Card, Container, Button, Link } from "@material-ui/core";
import styles from "./style/styleRegister";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { authenticationService } from "../../_services/authentication.service";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

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

export default function Login(props) {
  const classes = styles();
  const [open, setOpen] = React.useState(false);

  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    props.history.push({ pathname: "/" });
    setOpenDialog(false);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Container className={classes.container}>
      <Card variant="outlined" className={classes.cardContainer}>
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
              Enrollment: "",
              Mail: "",
              Career: "",
              MatterCode: "",
              MailITSCTeacher: "",
              name: "",
              password: "",
            }}
            validationSchema={Yup.object().shape({
              Enrollment: Yup.string().required("o"),
              Mail: Yup.string().required("o"),
              Career: Yup.string().required("o"),
              MatterCode: Yup.string().required("o"),
              MailITSCTeacher: Yup.string().required("o"),
              name: Yup.string().required("o"),
              password: Yup.string().required("o"),
            })}
            onSubmit={(initialValues, { setStatus, setSubmitting }) => {
              setStatus();
              authenticationService.register(initialValues).then(
                (response) => {
                  handleClickOpenDialog();
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
                  keyObj="Enrollment"
                  name="Matricula"
                />

                <InputCustoms
                  errors={errors}
                  touched={touched}
                  keyObj="Mail"
                  name="Correo ITSC"
                />

                <InputCustoms
                  errors={errors}
                  touched={touched}
                  keyObj="Career"
                  name="Carrera"
                />

                <InputCustoms
                  errors={errors}
                  touched={touched}
                  keyObj="MatterCode"
                  name="Código de materia"
                />

                <InputCustoms
                  errors={errors}
                  touched={touched}
                  keyObj="MailITSCTeacher"
                  name="Correo ITSC maestro "
                />

                <InputCustoms
                  errors={errors}
                  touched={touched}
                  keyObj="name"
                  name="Nombre y apellido"
                />

                <InputCustoms
                  errors={errors}
                  touched={touched}
                  keyObj="password"
                  name="Contraseña"
                />

                <InputCustoms
                  errors={errors}
                  touched={touched}
                  keyObj="name"
                  name="Repetir contraseña"
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
      <div>
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"¡Registro éxito!"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Solicitud de registro hecha exitosamente. Tu maestro será
              notificado y el habilitará tu acceso.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary" autoFocus>
              Aceptar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </Container>
  );
}
