import ChatHome from "./components/pages/ChatHome";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import "./style.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "./components/context/AuthContext";
import LandingPage from "./components/pages/LandingPage";
// import PostUpload from "./components/pages/PostUpload";
// import RetrivePosts from "./components/pages/RetrivePosts";

function App() {
  // const { currentUser } = useContext(AuthContext);

  // // const ProtectedRoute = ({ children }) => {
  // //   if (!currentUser) {
  // //     return <Navigate to="/login" />;
  // //   }

  // //   return children
  // // };

  return (
    <div>
  
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
      <Route path="/home" element={<ChatHome/>}/>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
      
      </Routes>
    </BrowserRouter> 
    </div>
  );
}

export default App;
