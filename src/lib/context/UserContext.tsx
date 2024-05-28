import  { createContext, useEffect } from "react";
import useUser from "../hook/useUser";

// Define the default state
const defaultState: UserState = {
    user: {
        name: "",
        email: '',
        password: '',
        phone:'',
        address:'',
        role:1,
        societyId: null,
    },
    updateUserState: (user: UserModel) => {}
};

const UserContext = createContext<UserState>(defaultState);

const UserContextProvider = ({ children}: userProvideProps) => {
    return (
        <UserContext.Provider value={useUser()}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContextProvider, UserContext };