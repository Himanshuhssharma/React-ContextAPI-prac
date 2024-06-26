import React, { useContext } from "react";
import userContext from "../context/userContext";

const Profile = () => {
  const { user } = useContext(userContext);

  if (!user) return <div>Please Login</div>;
  else
    return (
      <div>
        Welcome {user.username}, your password is {user.password}
      </div>
    );
};

export default Profile;
