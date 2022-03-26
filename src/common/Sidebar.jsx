import React from "react";
import {
  Box,
  VStack,
  HStack,
  Text,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ReactComponent as Admin } from "../assets/adminicon.svg";
import { ReactComponent as Know } from "../assets/knowledgeicon.svg";
import { ReactComponent as Agent } from "../assets/agenticon.svg";
import { ReactComponent as Analytic } from "../assets/analyticicon.svg";
import { ReactComponent as Train } from "../assets/trainicon.svg";
import { ReactComponent as Help } from "../assets/helpicon.svg";

const SidebarContent = ({ onClick }) => {
  return (
    <VStack color="#8094ae">
      <Box width="100%">
        <HStack mb="0.5rem" p="0.4rem">
          <Accordion allowMultiple>
            <AccordionItem border="0px" cursor="pointer">
              <AccordionButton
                bg="none"
                p="0.1rem"
                _hover={{
                  background: "rgb(254,215,226, 0.15)",
                  color: "#DD1D5E",
                  borderRadius: "10px",
                }}
                _active={{
                  background: "transparent",
                  color: "#DD1D5E",
                  borderRadius: "10px",
                }}
              >
                <Button
                  bg="none"
                  fontSize="0.8rem"
                  fontWeight="bold"
                  _hover={{
                    background: "transparent",
                  }}
                  _active={{
                    background: "transparent",
                    color: "#DD1D5E",
                  }}
                >
                  <Admin />
                  <Text ml="0.7rem">Admin</Text>
                </Button>
                <AccordionIcon ml="4.5rem" />
              </AccordionButton>
            </AccordionItem>
          </Accordion>
        </HStack>
        <HStack mb="0.5rem" p="0.4rem">
          <Accordion allowMultiple borderRadius="5px">
            <AccordionItem border="0px" cursor="pointer">
              <AccordionButton
                bg="none"
                p="0.1rem"
                _hover={{
                  color: "#DD1D5E",
                  borderRadius: "10px",
                }}
              >
                <Button
                  bg="none"
                  fontSize="0.8rem"
                  fontWeight="bold"
                  _hover={{
                    background: "none",
                  }}
                  _active={{
                    background: "transparent",
                    color: "#DD1D5E",
                  }}
                >
                  <Know />
                  <Text ml="0.7rem">Knowledge Base</Text>
                </Button>
                <AccordionIcon ml="1rem" />
              </AccordionButton>
            </AccordionItem>
          </Accordion>
        </HStack>
        <HStack mb="0.5rem" p="0.4rem">
          <Accordion allowMultiple borderRadius="5px">
            <AccordionItem border="0px" cursor="pointer">
              <AccordionButton
                bg="none"
                p="0.1rem"
                _hover={{
                  color: "#DD1D5E",
                  borderRadius: "10px",
                }}
              >
                <Button
                  bg="none"
                  fontSize="0.8rem"
                  fontWeight="bold"
                  _hover={{
                    background: "none",
                  }}
                  _active={{
                    background: "transparent",
                    color: "#DD1D5E",
                  }}
                >
                  <Train />
                  <Text ml="0.7rem">Train SAM</Text>
                </Button>
                <AccordionIcon ml="3.4rem" />
              </AccordionButton>
            </AccordionItem>
          </Accordion>
        </HStack>
        <HStack mb="0.5rem" p="0.4rem">
          <Accordion allowMultiple borderRadius="5px">
            <AccordionItem border="0px" cursor="pointer">
              <AccordionButton
                bg="none"
                p="0.1rem"
                _hover={{
                  color: "#DD1D5E",
                  borderRadius: "10px",
                }}
              >
                <Button
                  bg="none"
                  fontSize="0.8rem"
                  fontWeight="bold"
                  _hover={{
                    background: "none",
                  }}
                  _active={{
                    background: "transparent",
                    color: "#DD1D5E",
                  }}
                >
                  <Agent />
                  <Text ml="0.7rem">Agent Inbox</Text>
                </Button>
                <AccordionIcon ml="2.9rem" />
              </AccordionButton>
            </AccordionItem>
          </Accordion>
        </HStack>
        <HStack mb="0.5rem" p="0.4rem">
          <Accordion allowMultiple borderRadius="5px">
            <AccordionItem border="0px" cursor="pointer">
              <AccordionButton
                bg="none"
                p="0.1rem"
                _hover={{
                  color: "#DD1D5E",
                  borderRadius: "10px",
                }}
              >
                <Button
                  bg="none"
                  fontSize="0.8rem"
                  fontWeight="bold"
                  _hover={{
                    background: "none",
                  }}
                  _active={{
                    background: "transparent",
                    color: "#DD1D5E",
                  }}
                >
                  <Help />
                  <Text ml="0.7rem">Help Center</Text>
                </Button>
                <AccordionIcon ml="3rem" />
              </AccordionButton>
            </AccordionItem>
          </Accordion>
        </HStack>
        <HStack mb="0.5rem" p="0.4rem">
          <Accordion allowMultiple borderRadius="5px">
            <AccordionItem border="0px" cursor="pointer">
              <AccordionButton
                bg="none"
                p="0.1rem"
                _hover={{
                  color: "#DD1D5E",
                  borderRadius: "10px",
                }}
              >
                <Button
                  bg="none"
                  fontSize="0.8rem"
                  fontWeight="bold"
                  _hover={{
                    background: "none",
                  }}
                  _active={{
                    background: "transparent",
                    color: "#DD1D5E",
                  }}
                >
                  <Analytic />
                  <Text ml="0.7rem">Analytics</Text>
                </Button>
                <AccordionIcon ml="4rem" />
              </AccordionButton>
              <AccordionPanel>
                <Link to="/ultra">
                  <Button
                    onClick={onClick}
                    borderBottom="0px"
                    fontSize="0.8rem"
                    fontWeight="bold"
                    bg="none"
                    _hover={{
                      color: "#DD1D5E",
                      borderRadius: "10px",
                    }}
                    _active={{
                      background: "transparent",
                      color: "#DD1D5E",
                      borderRadius: "10px",
                    }}
                  >
                    Teams
                  </Button>
                </Link>
              </AccordionPanel>
              <AccordionPanel>
                <Link to="/ultra">
                  <Button
                    onClick={onClick}
                    borderBottom="0px"
                    fontSize="0.8rem"
                    fontWeight="bold"
                    bg="none"
                    _hover={{
                      color: "#DD1D5E",
                      borderRadius: "10px",
                    }}
                    _active={{
                      background: "transparent",
                      color: "#DD1D5E",
                      borderRadius: "10px",
                    }}
                  >
                    Knowledge Base
                  </Button>
                </Link>
              </AccordionPanel>
              <AccordionPanel>
                <Link to="/ultra">
                  <Button
                    onClick={onClick}
                    borderBottom="0px"
                    fontSize="0.8rem"
                    fontWeight="bold"
                    bg="none"
                    _hover={{
                      color: "#DD1D5E",
                      borderRadius: "10px",
                    }}
                    _active={{
                      background: "transparent",
                      color: "#DD1D5E",
                      borderRadius: "10px",
                    }}
                  >
                    Training SAM
                  </Button>
                </Link>
              </AccordionPanel>
              <AccordionPanel>
                <Link to="/ultra">
                  <Button
                    onClick={onClick}
                    borderBottom="0px"
                    fontSize="0.8rem"
                    fontWeight="bold"
                    bg="none"
                    _hover={{
                      color: "#DD1D5E",
                      borderRadius: "10px",
                    }}
                    _active={{
                      background: "transparent",
                      color: "#DD1D5E",
                      borderRadius: "10px",
                    }}
                  >
                    Help Center
                  </Button>
                </Link>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </HStack>
      </Box>
    </VStack>
  );
};

const SideBar = ({ isOpen, variant, onClose }) => {
  return variant === "sidebar" ? (
    <Box
      position="fixed"
      left={0}
      w="240px"
      top={0}
      h="100%"
      bg="#ffffff"
      zIndex="5"
      borderRight="1px solid #e5e9f2"
    >
      <Flex
        mb="2rem"
        m="1rem 2rem"
        border="1px solid  #e5e9f2"
        borderRadius="10px"
        p="1rem 2rem"
        justifyContent="space-between"
      >
        <Box></Box>
        <Box>
          <Text fontSize="0.8rem" color="#000" fontWeight="bold">
            Metacare
          </Text>
          <Text fontSize="0.5rem">adeyinka@metacare.app</Text>
        </Box>
      </Flex>

      <SidebarContent onClick={onClose} />
    </Box>
  ) : (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent bg="#fff">
          <HStack alignitems="center" >
            <DrawerCloseButton
              color="#e5e9f2"
              _active={{
                outline: "none",
              }}
            />
            
              <DrawerHeader>
                <Box
                  mb="2rem"
                  m="1rem 2rem"
                  border="1px solid  #e5e9f2"
                  borderRadius="10px"
                  p="1rem 2rem"
                >
                  <Text fontSize="0.9rem" color="#000">
                    Metacare
                  </Text>
                  <Text fontSize="0.5rem">adeyinka@metacare.app</Text>
                </Box>
              </DrawerHeader>
         
          </HStack>

          <DrawerBody
            sx={{
              "&::-webkit-scrollbar": {
                height: "5px",
                width: "6px",
                borderRadius: "15px",
                backgroundColor: `rgba(0, 0, 0, 0.05)`,
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: `#8094ae`,
                borderRadius: "15px",
                width: "3px",
                height: "5px",
              },
            }}
          >
            <SidebarContent onClick={onClose} />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
export default SideBar;
