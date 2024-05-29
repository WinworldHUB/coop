import { useState } from "react";

const useUser = (): UserState => {
  const [user, setUser] = useState<UserModel>(
    {
      name:'',
      email:'',
      password:'',
      phone:'',
      address:'',
      role:0,
      societyId: 0
    }
  );
  // console.log(object)
  const updateUserState = (newUser: UserModel) => {
    setUser(newUser);
  };
  return { user, updateUserState };
};

export default useUser;