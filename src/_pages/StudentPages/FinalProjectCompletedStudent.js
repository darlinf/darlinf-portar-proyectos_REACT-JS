import React, { useState, useEffect } from "react";
import { studentService } from "../../_services/student.service";
import { authenticationService } from "../../_services/authentication.service";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { CardMedia } from "@material-ui/core";

export default function FinalProjectCompletedStudent() {
  const [item, setItem] = useState({});

  const student = authenticationService.currentUserValue();
  useEffect(() => {
    studentService
      .GetFinalProyect(student.studentId)
      .then((data) => {
        console.log(data);
        setItem(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Container style={{ width: 400, marginTop: 20, marginBottom: 5 }}>
        <Card>
          {item.state === "evaluate" && (
            <CardContent style={{ padding: 10 }}>
              <Typography style={{ fontSize: 25, textAlign: "center" }}>
                Tu proyecto está pendiente de aprobación.
              </Typography>
            </CardContent>
          )}
          {item.state === "denied" && (
            <CardContent style={{ padding: 10 }}>
              <Typography style={{ fontSize: 25, textAlign: "center" }}>
                Tu proyecto ha sido rechazado y reprobaste.
              </Typography>
              <Typography style={{ textAlign: "center" }}>
                <a
                  target="blank"
                  href="https://www.google.com/search?q=cutest+kitties&rlz=1C1ALOY_esDO933DO933&sxsrf=ALeKk02KlcjFPS5jvUKv8jRsLSSyUx7itw:1616031764618&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjG_5m627jvAhXxTDABHYp5BHAQ_AUoAXoECBoQAw&biw=1366&bih=667#imgrc=q471Wq-WtWdFJM"
                >
                  Presiona este link para sentirte mejor.
                </a>
              </Typography>
            </CardContent>
          )}
          {item.state === "approved" && item.state === "approved and not" && (
            <CardContent>
              <Typography style={{ fontSize: 25, textAlign: "center" }}>
                Tu proyecto ha sido aprobado.
              </Typography>
            </CardContent>
          )}
        </Card>
      </Container>

      <Container style={{ width: 400 }}>
        <Card>
          <CardMedia
            style={{ height: 160 }}
            image={"https://localhost:5001/" + item.imageSRC}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {item.name}
            </Typography>
            <Typography
              className="lizardsStyle"
              style={{ overflowY: "scroll", height: 100 }}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {item.description}
            </Typography>
          </CardContent>
          <CardActions
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography>Calificación {item.examGrade}</Typography>
            <a
              target="blank"
              href={"https://localhost:5001/" + item.finalDocumentationSRC}
            >
              <Button size="small" color="primary">
                Ver documentación
              </Button>
            </a>
          </CardActions>
        </Card>
      </Container>
    </div>
  );
}
