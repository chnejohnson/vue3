import axios from "axios";

// http
let http = axios.create({
  baseURL: "http://localhost:2222"
});

//  Request
http.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

// Response
http.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default http;
