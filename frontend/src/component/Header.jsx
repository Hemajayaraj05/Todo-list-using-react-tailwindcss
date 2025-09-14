import { useContext } from "react";
import AuthContext from "./AuthContext";
import ReactIcon from "../assets/boy.png";

function Header() {
  const { user } = useContext(AuthContext);

  return (
    <header className="shadow-md p-6 flex justify-between items-center">
    
      <div className="flex items-center space-x-4">
        <img src={ReactIcon} alt="react-icon" className="w-12 h-12" />
        <div>
          <h1 className="text-2xl font-bold text-blue-800">Productive Task Manager</h1>
          <p className="text-sm text-gray-600">Manage your tasks efficiently</p>
        </div>
      </div>

     
      <div className="flex items-center space-x-4">
        <div className="text-right">
          <p className="text-lg font-semibold">
            {user ? `Welcome, ${user.email}` : "Welcome, Guest"}
          </p>
          <p className="text-sm text-gray-500">Have a productive day!</p>
        </div>
        <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center text-white font-bold">
          {user ? user.email.charAt(0).toUpperCase() : "G"}
        </div>
      </div>
    </header>
  );
}

export default Header;
