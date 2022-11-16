import axios from "axios";
import { fetchFail, fetchStart, loginSuccess } from "../features/authSlice";
import { useDispatch } from "react-redux";

const BASE_URL = "https://clarusway.pythonanywhere.com/";

const useAuthCall = () => {
  const dispatch = useDispatch();

  const login = async (userInfo) => {
    try {
      dispatchEvent(fetchStart());
      const { data } = await axios.post(
        `${BASE_URL}account/auth/login/`,
        userInfo
      );
      dispatchEvent(loginSuccess());
        
    } catch (error) {
      console.log(error);
      dispatchEvent(fetchFail());
    }
  };
  return { login };
};

export default useAuthCall;
