import { createContext } from "react";

export const UserDataContext = createContext();

const userContext = ({ children }) => {

   

  return (
    <div>
      <UserDataContext.Provider value={""}>
        {children}
    </UserDataContext.Provider>
    </div>
  );
};

export default userContext;
