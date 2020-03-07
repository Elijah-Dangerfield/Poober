import useUserStore from "../store/UserStore";
import {
  signup,
  getFriendsPosts,
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
    getFriendsPosts: getFriendsPosts,
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
