import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const localIP = "http://192.168.0.103";
const testURL = "https://test-lis.precipiodx.com/api";

let NodeBaseURL =
  process.env.NODE_ENV === "production" ? testURL : `${localIP}:3003`;

const http = axios.create({
  baseURL: testURL,
});

// Fetch the token from AsyncStorage
const fetchAccessToken = async () => {
  const userData = await AsyncStorage.getItem("user");

  if (userData) {
    const parsedUserData = JSON.parse(userData);

    const access_token = parsedUserData?.accessToken;

    if (access_token) {
      updateToken(access_token);
      console.log("Access token updated:", access_token);
    } else {
      console.warn("No access token found in user data.");
    }
  }
};
// Function to update the token in the Axios instance
export const updateToken = (token: string) => {
  http.defaults.headers.common.Authorization = `Bearer ${token}`;
  http.defaults.headers[`Access-Control-Allow-Origin`] = "*";
};

fetchAccessToken();

export { NodeBaseURL };
export default http;
