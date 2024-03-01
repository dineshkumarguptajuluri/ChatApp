import ChatHome from "./components/pages/ChatHome";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import "./style.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./components/context/AuthContext";
import LandingPage from "./components/pages/LandingPage";

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children
  };

  return (
    <div>
 
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="home" element={<ProtectedRoute><ChatHome /></ProtectedRoute>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
      
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
