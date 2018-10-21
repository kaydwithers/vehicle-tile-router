import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getPayload() {
    return apiClient.get("/payload");
  },
  getVehicle(id) {
    return apiClient.get("/payload/" + id);
  }
};
