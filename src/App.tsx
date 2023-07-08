import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NativeBaseProvider, extendTheme } from "native-base";

import Home from "./components/Home";

const App:React.FC = () => {
  // TODO: proper dark mode
  /* const theme = extendTheme({
    components: {
      Heading: {
        baseStyle: (props: any) => {
          return {
            _light: { color: 'red.300' },
            _dark: { color: 'blue.300' },
          };
        },
      },
    },
  }); */


  return (
    <BrowserRouter>
      <NativeBaseProvider /* theme={theme} */>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/start" element={<Home/>}/>
        </Routes>
      </NativeBaseProvider>
    </BrowserRouter>
  );
}

export default App;