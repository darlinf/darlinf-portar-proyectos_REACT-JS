import { makeStyles } from "@material-ui/styles";

const centeredStyleObj = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default makeStyles({
  container: {
    height: "600px",
    flexDirection: "column",
    ...centeredStyleObj,
  },
  cardContainer: {
    flexDirection: "column",
    width: 400,
    height: 580,
    paddingTop: "2rem",
    paddingBottom: "2rem",
    ...centeredStyleObj,
  },
  title: {
    fontFamily: "Dosis, sans-serif",
    fontSize: "4rem",
  },
  titleGridContainer: {
    ...centeredStyleObj,
  },
  textFieldSearch: {
    width: "90%",
  },
  moviesIcon: {
    fontSize: 70,
  },
  searchButton: {
    marginLeft: ".5rem",
  },
  progressContainer: {
    marginLeft: ".5rem",
  },
  buttonsContainer: {
    marginTop: ".5rem",
  },
});
