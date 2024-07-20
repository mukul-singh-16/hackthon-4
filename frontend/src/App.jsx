import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Chat from "./Components/ChatApp/Chat";
import Mainpanel from "./Components/Sidebar/Mainpanel";
import Wrongurl from "./Components/Wrongurl/Wrongurl";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchuserinfo = async () => {
      try {
        const response = await fetch("http://localhost:8080/login/sucess", {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
    
        if (!response.ok) {
          throw new Error("Failed to fetch user information");
        }
    
        const data = await response.json();
        console.log(data); 
        setUser(data.user);  
      } catch (error) {
        console.error("Error fetching user information:", error);
      }
    };
    
    fetchuserinfo();
  }, []);
  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/news" element={user ? <news/> : <Login/>} />
          <Route path="/community" element={ user?<Chat/>:<Login/> }/>
          <Route path="*" element={<Wrongurl />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
