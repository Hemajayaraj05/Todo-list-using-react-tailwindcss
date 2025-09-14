import { useContext } from "react";
import AuthContext from "./AuthContext";
import ReactIcon from "../assets/react.svg"; 

function Header() {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex justify-between border-2 p-4 items-center">
      <img src={ReactIcon} alt="react-icon" className="w-10 h-10" />
      <p className="text-lg font-semibold">
        Welcome {user ? user.email : "Guest"}..
      </p>
    </div>
  );
}

export default Header;
