import axios from "axios";
const apiUrl = "https://localhost:44342/api/";

export const studentService = {
  CreateProposedProject,
  GetProposedProject,
  GetFinalProyect,
  UpdateFinalProyect,
  GetAllProposedProject,
  UpdateProposedProject,
  CreateChapterProject,
  GetAllChapterProject,
};

function CreateProposedProject(proposedProject) {
  axios
    .post(`${apiUrl}Student/CreateProposedProject`, proposedProject)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
}

function GetProposedProject(StudentId) {
  return axios
    .get(`${apiUrl}Student/GetProposedProject/${StudentId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}
function GetFinalProyect(StudentId) {
  return axios
    .get(`${apiUrl}Student/GetFinalProyect/${StudentId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}
function UpdateFinalProyect(finalProyect) {
  return axios
    .put(`${apiUrl}Student/UpdateFinalProyect/`, finalProyect)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}
function GetAllProposedProject(GroupId) {
  return axios
    .get(`${apiUrl}Student/GetAllProposedProject/${GroupId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}
function UpdateProposedProject(proposedProject) {
  return axios
    .put(`${apiUrl}Student/UpdateProposedProject/`, proposedProject)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}
function CreateChapterProject(chapterProject) {
  axios
    .post(`${apiUrl}Student/CreateChapterProject`, chapterProject)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
}
function GetAllChapterProject(StudentId) {
  return axios
    .get(`${apiUrl}Student/GetAllChapterProject/${StudentId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}
