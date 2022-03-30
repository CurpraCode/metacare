import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { ReactComponent as Period } from "assets/period.svg";
const ChartHead = ({valtext, showColor}) => {
  return (
    <Flex justifyContent="space-between" alignItems="center" m="1rem">
      <Flex alignItems="center">
        <Text fontWeight="bold" mr="1rem" fontSize="1rem">
           {valtext}
        </Text>
        <Text
          fontWeight="bold"
          bg="rgba(37, 187, 135, 0.1)"
          p="0.3rem 0.6rem"
          borderRadius="0.5rem"
          color="#25BB87"
        >
          +4.14%
        </Text>
      </Flex>

      <Flex justifyContent="space-between" alignItems="center">
        <Flex
          borderRight="1px solid #E1E1EB"
          mr="1rem"
          pr="1rem"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box bg={showColor} p="0.4rem 0.4rem" borderRadius="2px" mr="0.5rem"></Box>
          <Text fontWeight="bold">High Priority</Text>
        </Flex>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          border="1px solid #E1E1EB"
          borderRadius="0.6rem"
          p="0.5rem 1.2rem"
        >
          <Text mr="1rem" fontWeight="bold">This Month</Text>
          <Period />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ChartHead;
