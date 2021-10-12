import React from "react";
import Routes from "./routes/routes";
import ContextProvider from "./context/context";
import './App.css'
import Signup from "./screens/signup";

function App() {
  return (
    <ContextProvider>
      <Routes>
        {/* <Signup /> */}
      </Routes>
    </ContextProvider>
  );
}

export default App;