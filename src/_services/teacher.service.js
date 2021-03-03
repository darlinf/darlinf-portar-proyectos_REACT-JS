import axios from "axios";
const apiUrl = "https://localhost:5001/api/";

export const teacherService = {
  getAllStudentForCredentials,
  updateStudentForCredentials,
  getAllProjectForEvaluate,
  updateProjectForEvaluate,
  getAllFinalProjectForEvaluate,
  updateFinalProject,
  getAllChapterProject,
  updateChapterProject,
};

function getAllStudentForCredentials(TeacherId, estudentState, section) {
  return axios
    .get(
      `${apiUrl}Teacher/getAllStudentForCredentials/${TeacherId}/${estudentState}/${section}`
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
    .put(`${apiUrl}Teacher/updateStudentForCredentials/`, student)
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
      `${apiUrl}Teacher/getAllProjectForEvaluate/${TeacherId}/${projectState}/${section}`
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}
function updateProjectForEvaluate(proposedProject) {
  return axios
    .put(`${apiUrl}Teacher/updateProjectForEvaluate/`, proposedProject)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}
function getAllFinalProjectForEvaluate(TeacherId, projectState, section) {
  return axios
    .get(
      `${apiUrl}Teacher/getAllFinalProjectForEvaluate/${TeacherId}/${projectState}/${section}`
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
    .put(`${apiUrl}Teacher/updateFinalProject/`, finalProject)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}
function getAllChapterProject(TeacherId) {
  return axios
    .get(`${apiUrl}Teacher/getAllChapterProject/${TeacherId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}
function updateChapterProject(chapterProject) {
  return axios
    .put(`${apiUrl}Teacher/updateChapterProject/`, chapterProject)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}
