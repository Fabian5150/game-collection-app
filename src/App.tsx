import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ColorMode, NativeBaseProvider, extendTheme } from "native-base";

import Home from "./components/Home";

const App: React.FC = () => {
  const myTheme = extendTheme({
    config: {
      useSystemColorMode: false,
      initialColorMode: 'dark',
    }
  });

  const colorModeManager: StorageManager = {
    get: async () => {
      let val = localStorage.getItem('@color-mode');
      return val === 'dark' ? 'dark' : 'light';
    },
    set: async (value: ColorMode) => {
      let strValue = value ? value.toString() : '';
      localStorage.setItem('@color-mode', strValue);
    },
  };

  return (
    <BrowserRouter>
      <NativeBaseProvider theme={myTheme} colorModeManager={colorModeManager}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/start" element={<Home />} />
        </Routes>
      </NativeBaseProvider>
    </BrowserRouter>
  );
}

export default App;