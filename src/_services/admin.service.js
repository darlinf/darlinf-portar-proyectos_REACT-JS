import axios from "axios";
import { authHeader } from "../_helpers";
const apiUrl = "https://localhost:5001/api/";

export const adminService = {
  getAllTeacher,
  deleteTeacher,
  editTeacher,
  registerTeacher,
};

function getAllTeacher() {
  console.log(authHeader());
  return axios
    .get(`${apiUrl}Admin/GetAllTeacher`, { headers: authHeader() })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}
function deleteTeacher(id) {
  return axios
    .delete(`${apiUrl}Admin/DeleteTeacher/${id}`, { headers: authHeader() })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}
function editTeacher(teacher) {
  return axios
    .put(`${apiUrl}Admin/EditTeacher/`, teacher, { headers: authHeader() })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}
function registerTeacher(teacher) {
  return axios
    .post(`${apiUrl}Admin/registerTeacher`, teacher, { headers: authHeader() })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
}
