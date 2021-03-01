import axios from "axios";
const apiUrl = "https://localhost:44342/api/";

export const incognitoService = {
  getAllProposedProject,
  getAllProposedProjectByCareer,
  getAllFinalProject,
  getAllFinalProjectByCareer,
};

function getAllProposedProject() {
  return axios
    .get(`${apiUrl}Incognito/GetAllProposedProject`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}
function getAllProposedProjectByCareer(career) {}
function getAllFinalProject() {}
function getAllFinalProjectByCareer(career) {}
