import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NativeBaseProvider } from "native-base";

import Home from "./components/Home";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NativeBaseProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/start" element={<Home />} />
        </Routes>
      </NativeBaseProvider>
    </BrowserRouter>
  );
}

export default App;