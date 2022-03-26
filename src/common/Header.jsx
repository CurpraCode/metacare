/* eslint-disable no-unused-vars */
import React from "react";
import {
  Box,
  IconButton,
  Button,
  Text,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { ReactComponent as Notify } from "../assets/notify.svg";
import Search from "./Search";
const Header = ({ showSidebarButton = true, onShowSidebar }) => {
  return (
    <Flex
      position="fixed"
      top={0}
      right={0}
      width="100%"
      zIndex="3"
      p={4}
      alignitems="center"
      justifyContent="center"
      borderBottom="1px solid  #e5e9f2"
    >
      <Box ml={showSidebarButton ? null : "17rem"}>
        {showSidebarButton ? null : <Search />}
      </Box>

      <Box>
        {showSidebarButton && (
          <Flex alignitems="center">
            <IconButton
              icon={<HamburgerIcon w={8} h={8} />}
              colorScheme="blackAlpha"
              variant="none"
              onClick={onShowSidebar}
            />
            <Search />
          </Flex>
        )}
      </Box>

      <HStack flex="1" h="40px" ml="1rem" justifyContent="space-between">
        <HStack justifyContent="space-between"></HStack>
        <HStack opacity="0.9">
          <Menu
            _hover={{ outline: "none" }}
            _active={{ outline: "none", bg: "none" }}
          >
            <MenuButton
              backgroundColor="white"
              as={Button}
              border="1px solid #ECEBF5"
              borderRadius="0.5rem"
              padding="1.5rem 1rem"
              rightIcon={<ChevronDownIcon />}
              _hover={{ outline: "none" }}
              _active={{ outline: "none", bg: "none" }}
            >
              <Flex align="center" justifyContent="space-between" mr="0.5rem">
                <Flex borderRight="2px solid #ECEBF5" mr="1rem">
                  <Notify />
                  <Text
                    bg="#F25A68"
                    p="0.2rem 0.3rem"
                    fontSize="0.6rem"
                    borderRadius="0.3rem"
                    color="#fff"
                    ml="0.5rem"
                    mr="0.5rem"
                  >
                    3
                  </Text>
                </Flex>
                <Box
                  borderRadius="5rem"
                  padding="0.9rem 0.9rem"
                  border="1px solid #6837EF"
                  _hover={{ border: "none", outline: "none" }}
                  _active={{ border: "none", outline: "none", bg: "none" }}
                ></Box>
              </Flex>
            </MenuButton>
          </Menu>
        </HStack>
      </HStack>
    </Flex>
  );
};

export default Header;
