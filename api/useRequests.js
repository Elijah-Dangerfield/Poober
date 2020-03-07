import useUserStore from "../store/UserStore";
import {
  signup,
  watchUserData,
  signin,
  signout,
  deleteAccount,
  getUser,
  submitPost
} from "./requests";

const useRequests = () => {
  const userStore = useUserStore();

  let useRequests = {
    signup: signup,
    signin: signin,
    signout: signout,
    deleteAccount: deleteAccount,
    submitPost: submitPost,
    updateUser: () => {
      getUser()
        .then(user => {
          userStore.setUser({ ...useUserStore.user, ...user });
        })
        .catch(e => {
          console.log(e);
        });
    }
  };

  return useRequests;
};

export default useRequests;
