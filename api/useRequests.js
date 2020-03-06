import useUserStore from "../store/UserStore";
import {
  signup,
  watchUserData,
  signin,
  signout,
  deleteAccount
} from "./requests";

const useRequests = () => {
  const userStore = useUserStore();

  let useRequests = {
    signup: signup,
    watchUserData: () => {
      return watchUserData(userStore);
    },
    signin: signin,
    signout: signout,
    deleteAccount: deleteAccount
  };

  return useRequests;
};

export default useRequests;
