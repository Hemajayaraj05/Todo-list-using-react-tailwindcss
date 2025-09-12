import { useContext, useState } from "react";
import AuthContext from "./AuthContext";


function Login(){

  const [email, setName] = useState("");
  const [password, setPassword] = useState("");

  const {login} = useContext(AuthContext);

  const handleSubmit = (e) =>{
    e.preventDefault();
    login(email, password);
  }
 return(
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Login to Your Account
      </h2>
      <form className="space-y-5" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium text-grey-700">Username</label>
        <input className="w-full px-4 py-3 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" 
        placeholder="Enter your Name"
        type="text" value={email} onChange={(e) => setName(e.target.value)} required />
      </div>

      <div>
        <label className="block text-sm font-medium text-grey-700">Password</label>
        <input className="w-full px-4 py-3 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        placeholder="Enter your Password"
        type="text" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>

      <button type="submit" className="w-full px-4 py-3 text-white bg-blue-900 rounded-lg">
        Submit
      </button>
      </form>
    </div>
  </div>
 );
}

export default Login;