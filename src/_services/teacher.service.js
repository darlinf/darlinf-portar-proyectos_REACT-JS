import axios from "axios";
import { authHeader } from "../_helpers";

const apiUrl = "http://darlinf-001-site1.dtempurl.com/api/";

export const teacherService = {
  getAllStudentForCredentials,
  updateStudentForCredentials,
  getAllProjectForEvaluate,
  updateProjectForEvaluate,
  getAllFinalProjectForEvaluate,
  updateFinalProject,
  getAllChapterProject,
  updateChapterProject,
  GetAllSection,
  updateUserForFinalProject,
};

function getAllStudentForCredentials(TeacherId, estudentState, section) {
  return axios
    .get(
      `${apiUrl}Teacher/getAllStudentForCredentials/${TeacherId}/${estudentState}/${section}`,
      { headers: authHeader() }
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}
function updateStudentForCredentials(student) {
  return axios
    .put(`${apiUrl}Teacher/updateStudentForCredentials/`, student, {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}
function getAllProjectForEvaluate(TeacherId, projectState, section) {
  return axios
    .get(
      `${apiUrl}Teacher/getAllProjectForEvaluate/${TeacherId}/${projectState}/${section}`,
      { headers: authHeader() }
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}
function GetAllSection(TeacherId) {
  return axios
    .get(`${apiUrl}Teacher/GetAllSection/${TeacherId}`, {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}
function updateProjectForEvaluate(proposedProject) {
  return axios
    .put(`${apiUrl}Teacher/updateProjectForEvaluate/`, proposedProject, {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}
function getAllFinalProjectForEvaluate(TeacherId, section, projectState) {
  return axios
    .get(
      `${apiUrl}Teacher/getAllFinalProjectForEvaluate/${TeacherId}/${section}/${projectState}`,
      { headers: authHeader() }
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}
function updateFinalProject(finalProject) {
  return axios
    .put(`${apiUrl}Teacher/updateFinalProject/`, finalProject, {
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
    .get(`${apiUrl}Teacher/updateUserForFinalProject/${id}/${homeState}`, {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}
function getAllChapterProject(TeacherId) {
  return axios
    .get(`${apiUrl}Teacher/getAllChapterProject/${TeacherId}`, {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}
function updateChapterProject(chapterProject) {
  return axios
    .put(`${apiUrl}Teacher/updateChapterProject/`, chapterProject, {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}
