import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider, Box } from "@chakra-ui/react";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Box>
      <BrowserRouter>
        <ChakraProvider>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </ChakraProvider>
      </BrowserRouter>
    </Box>
  );
}

export default App;
