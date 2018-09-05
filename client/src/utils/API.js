import axios from "axios";


export default {
    // HANDLE REPORD
  savePic: function (pic) {
    return axios.post("/upload/"+ pic)
    .then(res =>console.log(res))
    .catch(err=>console.log(err))
  },
 
  getReport: function() {
    return axios.get("/api/reports");
  },
  // Gets the report with the given id
  getReportId: function(id) {
    return axios.get("/api/reports/" + id);
  },
  // Deletes the report with the given id
  deleteReport: function(id) {
    return axios.delete("/api/reports/" + id);
  },
  // Saves a report to the database
  saveReport: function (reportData) {
    return axios.post("/api/reports", reportData);
  },

// to handle USER
    getUser: function () {
    return axios.get("/api/users");
  },
  // Gets the USER with the given id
  getUserId: function (id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the USER with the given id
  deleteUser: function (id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a USER to the database
  saveUser: function (userData) {
    return axios.post("/api/users", userData);
  },
  updateUser: function (id, userData) {
    return axios.put("/api/users/"+id, userData);
  }
};
