type UserModel = {
    name:string | undefined
    email:string
    password:string
    phone: string
    address: string
    role:number
    societyId: number | null;
  };
  
  interface UserState {
    user: UserModel;
    updateUserState: (user: UserModel) => void;
  };
  
  interface userProvideProps {
    children: React.ReactNode;
  }