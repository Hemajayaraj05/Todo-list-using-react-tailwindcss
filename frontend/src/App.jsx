import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import CreateTask from "./component/CreateTask";

function App() {
  return (
    <BrowserRouter>
      <Routes>
    
        <Route path="/" element={<DashBoard />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/add-task" element={<CreateTask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
