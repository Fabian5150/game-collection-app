import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NativeBaseProvider, extendTheme } from "native-base";

import Home from "./components/Home";

const App: React.FC = () => {
  const myTheme = extendTheme({
    config: {
      useSystemColorMode: false,
      initialColorMode: 'dark',
    }
  });

  return (
    <BrowserRouter>
      <NativeBaseProvider theme={myTheme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/start" element={<Home />} />
        </Routes>
      </NativeBaseProvider>
    </BrowserRouter>
  );
}

export default App;