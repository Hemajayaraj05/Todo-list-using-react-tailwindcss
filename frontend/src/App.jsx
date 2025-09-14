import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import CreateTask from "./component/CreateTask";
import Login from "./pages/Login";
import { AuthProvider } from "./component/AuthContext";

function App() {
  return (
     <AuthProvider>
    <BrowserRouter>
      <Routes>
    
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/add-task" element={<CreateTask />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
