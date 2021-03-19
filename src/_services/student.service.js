import axios from "axios";
import { authHeader } from "../_helpers";
const apiUrl = "https://localhost:5001/api/";

export const studentService = {
  CreateProposedProject,
  GetProposedProject,
  GetFinalProyect,
  UpdateFinalProyect,
  GetAllProposedProject,
  UpdateProposedProject,
  CreateChapterProject,
  GetAllChapterProject,
  createFinalProject,
  updateUserForFinalProject,
};

function CreateProposedProject(proposedProject) {
  return axios
    .post(`${apiUrl}Student/CreateProposedProject`, proposedProject, {
      headers: authHeader(),
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
}

function GetProposedProject(StudentId) {
  return axios
    .get(`${apiUrl}Student/GetProposedProject/${StudentId}`, {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}
function updateUserForFinalProject(id, homeState) {
  return axios
    .get(`${apiUrl}Student/updateUserForFinalProject/${id}/${homeState}`, {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}
function GetFinalProyect(StudentId) {
  return axios
    .get(`${apiUrl}Student/GetFinalProyect/${StudentId}`, {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}
function UpdateFinalProyect(finalProyect) {
  return axios
    .put(`${apiUrl}Student/UpdateFinalProyect/`, finalProyect, {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}
function GetAllProposedProject(StudentId, GroupId) {
  return axios
    .get(`${apiUrl}Student/GetAllProposedProject/${StudentId}/${GroupId}`, {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}
function UpdateProposedProject(proposedProject) {
  return axios
    .put(`${apiUrl}Student/UpdateProposedProject/`, proposedProject, {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}
function CreateChapterProject(chapterProject) {
  axios
    .post(`${apiUrl}Student/CreateChapterProject`, chapterProject, {
      headers: authHeader(),
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
}
function createFinalProject(chapterProject) {
  axios
    .post(`${apiUrl}Student/CreateFinalProyect`, chapterProject, {
      headers: authHeader(),
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
}
function GetAllChapterProject(StudentId) {
  return axios
    .get(`${apiUrl}Student/GetAllChapterProject/${StudentId}`, {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}
