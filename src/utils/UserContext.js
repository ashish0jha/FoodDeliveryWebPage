import { createContext } from "react";
const UserContext=createContext({
    LoggedIn:"Ashish",
    setUserName: () => {},
});
export default UserContext;