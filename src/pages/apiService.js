import axios from "axios";

// Create an Axios instance with default settings
const apiClient = axios.create({
  baseURL: "https://your-server-url.com/api", // Replace with your actual server URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to send temperature data
export function send(data) {
  return apiClient.post("/temperature", data);
}
