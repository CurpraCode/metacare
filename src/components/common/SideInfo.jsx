import React from "react";
import { Box, Text } from "@chakra-ui/react";
const SideInfo = ({ sidetext }) => {
  return (
    <Box width="100%">
      <Box
        bg="#FAFAFA"
        border="1px solid #ECEBF5"
        p="2.5rem 1rem"
        borderRadius="0.5rem"
        mb="1rem"
      >
        <Text color="#696D8C" fontSize="1.1rem">{sidetext}</Text>
        <Text fontWeight="bold" fontSize="1.2rem">30 Mins</Text>
      </Box>
      <Box
        bg="#FAFAFA"
        border="1px solid #ECEBF5"
        p="2.5rem 1rem"
        borderRadius="0.5rem"
      >
        <Text color="#696D8C" fontSize="1.1rem"> Response Time</Text>
        <Text fontWeight="bold" fontSize="1.2rem">1Hour 30 Mins</Text>
      </Box>
    </Box>
  );
};

export default SideInfo;
