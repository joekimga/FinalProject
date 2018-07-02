import axios from "axios";

export default {
  // Gets all parking
  getParkings: function() {
    return axios.get("/api/parking");
  },
  // Gets the parking with the given id
  getParking: function(id) {
    return axios.get("/api/parking/" + id);
  },
  // Deletes the parking with the given id
  deleteParking: function(id) {
    return axios.delete("/api/parking/" + id);
  },
  // Saves a parking to the database
  saveParking: function(parkingData) {
    return axios.post("/api/parking", parkingData);
  }
};
