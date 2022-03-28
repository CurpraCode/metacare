import React from "react";
import {
  Box,
  HStack,
  Input,
  Text,
  InputGroup,
  InputLeftElement,
  Button,
  Menu,
  MenuButton,
} from "@chakra-ui/react";
import { SearchIcon} from "@chakra-ui/icons";
import { ReactComponent as Chevron } from "assets/Chevrondown.svg";

const Header = () => {
  return (
    <HStack justifyContent="space-between" alignItems="center">
      <Text fontWeight="bold" fontSize="1.5rem">Efficiency Analytics</Text>
      <HStack justifyContent="space-between" alignItems="center" zIndex="-1">
        <HStack
          borderRight="2px solid #ECEBF5"
          justifyContent="space-between"
          alignItems="center"
          mr="3rem"
          pr="3rem"
        >
          <HStack mr="2rem" alignItems="center">
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="#A3A3C2" />}
              />
              <Input
                placeholder={`Search`}
                size="md"
                width="400px"
                borderRadius="0.5rem"
                bg="transparent"
                color="#757886"
                border="1px solid #E1E1EB"
                fontSize="0.8rem"
                _focus={{
                  outline: 0,
                }}
                _placeholder={{
                  color: "#757886",
                }}
              />
            </InputGroup>
          </HStack>
          <Menu
            _hover={{ outline: "none" }}
            _active={{ outline: "none", bg: "none" }}
            pr="3rem"
          >
            <MenuButton
              backgroundColor="white"
              as={Button}
              border="1px solid #ECEBF5"
              borderRadius="0.5rem"
              padding="1.3rem 1rem"
              rightIcon={<Chevron />}
              _hover={{ outline: "none" }}
              _active={{ outline: "none", bg: "none" }}
            >
              <Text
                fontWeight="bold"
                padding="0.9rem 0.9rem"
                _hover={{ border: "none", outline: "none" }}
                _active={{ border: "none", outline: "none", bg: "none" }}
              >
                Filter Options
              </Text>
            </MenuButton>
          </Menu>
        </HStack>
        <Button
          bg="#25BB87"
          color="#fff"
          fontWeight="bold"
          borderRadius="10px"
          _focus={{
            outline: 0,
          }}
          _hover={{ bg: "#25BB87", outline: "none" }}
          _active={{ bg: "#25BB87", outline: "none" }}
        >
          Export
        </Button>
      </HStack>
    </HStack>
  );
};

export default Header;
