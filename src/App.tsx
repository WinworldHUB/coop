import React from "react";
import CalendarComp from "./lib/component/CalendarCom";
import Sidebar from "./lib/component/Sidebar";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContextProvider } from "./lib/context/UserContext";

const App: React.FC = () => {
  return (
    <>
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </>
  );
};

export default App;
