import axios from "axios";
const apiUrl = "https://localhost:44342/api/";

export const adminService = {
  getAllTeacher,
  deleteTeacher,
  editTeacher,
  registerTeacher,
};

function getAllTeacher() {
  return axios
    .get(`${apiUrl}Admin/GetAllTeacher`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}
function deleteTeacher(id) {
  return axios
    .delete(`${apiUrl}Admin/DeleteTeacher/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}
function editTeacher(teacher) {
  return axios
    .put(`${apiUrl}Admin/EditTeacher/`, teacher)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}
function registerTeacher(teacher) {
  axios
    .post(`${apiUrl}Admin/registerTeacher`, teacher)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
}
