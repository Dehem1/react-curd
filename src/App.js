import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import CreateUser from "./Components/CreateUser";
import Header from "./Components/Header";
import ShowUser from "./Components/ShowUser";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header/>
     <Routes>
     <Route path="/" element={<CreateUser/>}/>
     <Route path="/showuser" element={<ShowUser/>}/>
     </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
