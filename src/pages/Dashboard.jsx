import React from "react";
import { Box } from "@chakra-ui/react";
import HeaderSidebar from "common/HeaderSidebar";
import Taber from "components/Tab";
const Dashboard = () => {
  return (
    <Box>
      <HeaderSidebar />
      <Taber />
    </Box>
  );
};

export default Dashboard;
