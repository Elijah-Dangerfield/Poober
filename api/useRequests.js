import useUserStore from "../store/UserStore";
import {
  signup,
  getFriendsPosts,
  signin,
  signout,
  deleteAccount,
  listenToUserData,
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
    getFriendsPosts: () => {
      console.log("Keys: " + Object.keys(userStore.user.friends));
      return getFriendsPosts(Object.keys(userStore.user.friends));
    },
    searchForUser: searchForUser,
    submitFriendRequest: submitFriendRequest,
    listenToUserData: () => {
      return listenToUserData(userStore);
    }
  };

  return useRequests;
};

export default useRequests;
