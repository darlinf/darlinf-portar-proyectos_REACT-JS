import React from "react";
import { Card, Container } from "@material-ui/core";
import styles from "./style/styleLogin";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { authenticationService } from "../../_services/authentication.service";
import Typography from "@material-ui/core/Typography";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Login(props) {
  const classes = styles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleRouteRole = (role) => {
    if (role === "Admin") props.history.push({ pathname: "/homeAdmin" });

    if (role === "Student") props.history.push({ pathname: "/homeStudent" });

    if (role === "Teacher") props.history.push({ pathname: "/homeTeacher" });
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
            Inicial seccion
          </Typography>
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            validationSchema={Yup.object().shape({
              username: Yup.string().required("El email es requerido"),
              password: Yup.string().required("La contraseña es requerida"),
            })}
            onSubmit={(
              { username, password },
              { setStatus, setSubmitting }
            ) => {
              setStatus();
              authenticationService.login(username, password).then(
                (user) => {
                  handleRouteRole(user.role);
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
                <div className="form-group">
                  <label htmlFor="username">Correo ITSC</label>
                  <Field
                    name="username"
                    type="text"
                    className={
                      "form-control" +
                      (errors.username && touched.username ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Contraseña</label>
                  <Field
                    name="password"
                    type="password"
                    className={
                      "form-control" +
                      (errors.password && touched.password ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>

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
                      Inicial seccion
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
