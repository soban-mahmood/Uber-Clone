import React, { createContext } from "react";
export const userDatacontext = createContext();
const UserContext = ({children}) => {
  const [user, setUser] = React.useState({
    fullName: {
      firstName: '',
      lastName: ""
    },
    email: "",
  });
  return (
    <div>
      <userDatacontext.Provider value={[user, setUser]}>{children}</userDatacontext.Provider>;
    </div>
  );
};

export default UserContext;
