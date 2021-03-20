import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

import { authenticationService } from "../_services/authentication.service";
import MenuNav from "./MenuNav";
import { studentService } from "../_services/student.service";

const student = authenticationService.currentUserValue();

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [user, setUser] = useState({});
  const [proposedProject, setProposedProject] = useState(null);

  useEffect(() => {
    authenticationService.currentUser.subscribe((x) => {
      setUser(x);
      console.log(x);
      if (x) if (x.homeState) setProposedProject(x.homeState);
    });
  }, []);

  const history = useHistory();
  return (
    <div className={classes.root}>
      <AppBar style={{ backgroundColor: "#1976D2" }} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {user && (
              <div>
                {user.role === "Admin" && (
                  <Link
                    to="/homeAdmin"
                    style={{ color: "#FFFFFF", textDecoration: "none" }}
                  >
                    Portal proyectos ITSC
                  </Link>
                )}
                {user.role === "Student" && (
                  <Link
                    to="/homeStudent"
                    style={{ color: "#FFFFFF", textDecoration: "none" }}
                  >
                    Portal proyectos ITSC
                  </Link>
                )}
                {user.role === "Teacher" && (
                  <Link
                    to="/homeTeacher"
                    style={{ color: "#FFFFFF", textDecoration: "none" }}
                  >
                    Portal proyectos ITSC
                  </Link>
                )}
              </div>
            )}
            {!user && (
              <Link to="/" style={{ color: "#FFFFFF", textDecoration: "none" }}>
                Portal proyectos ITSC
              </Link>
            )}
          </Typography>
          {user && (
            <div>
              {user.role === "Teacher" && (
                <div>
                  <Button>
                    <Link
                      to="/manageStudentsTeacher"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Estudiante
                    </Link>
                  </Button>
                  <Button>
                    <Link
                      to="/managementProposedProjects"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Propuestos
                    </Link>
                  </Button>

                  <Button>
                    <Link
                      to="/manageFinalProjectsTeacher"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Final
                    </Link>
                  </Button>
                </div>
              )}
              {user.role === "Admin" && (
                <div>
                  <Button>
                    <Link
                      to="/manageTeacherAdmin"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Docentes
                    </Link>
                  </Button>
                  <Button>
                    <Link
                      to="/registerTeacher"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Registrar
                    </Link>
                  </Button>
                </div>
              )}
              {user.role === "Student" && (
                <div>
                  <Button>
                    {proposedProject !== "completed" &&
                      proposedProject !== null && (
                        <Link
                          to={"/finalProjectStudent/" + proposedProject}
                          style={{ color: "white", textDecoration: "none" }}
                        >
                          Final
                        </Link>
                      )}
                    {proposedProject === "completed" && (
                      <Link
                        to={"/finalProjectCompletedStudent"}
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Final
                      </Link>
                    )}
                  </Button>
                  <Button>
                    <Link
                      to="/proposedProjectsStudent"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Crear propuesto
                    </Link>
                  </Button>
                  <Button>
                    <Link
                      to="/ProposedProjectsShowStudent"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Propuestos
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          )}
          {!user && <MenuNav></MenuNav>}
          {user && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={() => {
                    handleClose();
                    history.push({ pathname: "/" });
                    authenticationService.logout();
                  }}
                >
                  Cerrar sesión
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

/* <Button>
                    <Link
                      to="/projectChapterShowStudent"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Capitulo
                    </Link>
                  </Button>
                  <Button>
                    <Link
                      to="/projectChapterStudent"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Crear Capitulo
                    </Link>
                  </Button>
                  
                   <Button>
                    <Link
                      to="/rateChaptersTeacher"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Capitulo
                    </Link>
                  </Button>
                  
                  */
