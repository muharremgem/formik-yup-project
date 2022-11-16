import axios from "axios";
import { fetchFail, fetchStart, loginSuccess } from "../features/authSlice";

const BASE_URL = "https://clarusway.pythonanywhere.com/";

export const login = async (userInfo) => {
  try {
    dispatchEvent(fetchStart());
    const { data } = await axios.post(
      `${BASE_URL}account/auth/login/`,
      userInfo
    );
    dispatchEvent(loginSuccess());
    return data;
  } catch (error) {
    console.log(error);
    dispatchEvent(fetchFail());
  }
};
