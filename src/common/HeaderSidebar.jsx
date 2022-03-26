import { useState } from "react";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import Header from "./Header";
import SideBar from "./Sidebar";

const smVariant = { navigation: "drawer", navigationButton: true };
const xlVariant = { navigation: "sidebar", navigationButton: false };
export default function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const variants = useBreakpointValue({ base: smVariant, xl: xlVariant });
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  return (
    <>
      <SideBar
        variant={variants?.navigation}
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
      />
      <Box ml={!variants?.navigationButton && 200}>
        <Header
          showSidebarButton={variants?.navigationButton}
          onShowSidebar={toggleSidebar}
        />
      </Box>
    </>
  );
}
