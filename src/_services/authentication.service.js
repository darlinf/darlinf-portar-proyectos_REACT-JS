import { BehaviorSubject } from "rxjs";

//import config from 'config';
import { handleResponse } from "../_helpers/handle-response";

const currentUserSubject = new BehaviorSubject(
  JSON.parse(localStorage.getItem("currentUser"))
);

export const authenticationService = {
  login,
  logout,
  register,
  currentUser: currentUserSubject.asObservable(),
  get currentUserValue() {
    return currentUserSubject.value;
  },
};

function login(Mail, password) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ Mail, password }),
  };

  //return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
  return fetch(
    `https://localhost:44342/api/Incognito/authenticate`,
    requestOptions
  )
    .then(handleResponse)
    .then((user) => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem("currentUser", JSON.stringify(user));
      currentUserSubject.next(user);
      console.log(user);
      return user;
    });
}

function register(values) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  };

  //return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
  return fetch(
    `https://portar-proyectos-itsc-api.azurewebsites.net/users/register`,
    requestOptions
  )
    .then(handleResponse)
    .then((response) => {
      // currentUserSubject.next(user);
      console.log("response");
      return response;
    });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("currentUser");
  currentUserSubject.next(null);
}
