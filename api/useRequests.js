import useUserStore from "../store/UserStore";
import {
  signup,
  getFriendsPosts,
  signin,
  signout,
  deleteAccount,
  getUser,
  submitPost,
  searchForUser,
  submitFriendRequest
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
    searchForUser: searchForUser,
    submitFriendRequest: submitFriendRequest,
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
