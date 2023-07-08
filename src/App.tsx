import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NativeBaseProvider, Box } from "native-base";

import Home from "./components/Home";

const App:React.FC = () => {
  return (
    <BrowserRouter>
      <NativeBaseProvider>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="hello" element={<Box>Hello world</Box>}/>
        </Routes>
      </NativeBaseProvider>
    </BrowserRouter>
  );
}

export default App;