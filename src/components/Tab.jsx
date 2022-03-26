import React from "react";
import { Tabs, TabList, TabPanel, TabPanels, Tab } from "@chakra-ui/react";
import Header from "./Header";
import ChartGraph from "./ChartGraph";

const Taber = () => {
  return (
    <Tabs
      mt="6rem"
      pl="15rem"
      colorScheme="#060213"
      _active={{
        outline: "none",
        bg: "none",
      }}
    >
      <TabList borderBottom="2px solid">
        <Tab _selected={{ color: "#060213" }} color="#696D8C">
          Efficiency
        </Tab>
        <Tab _selected={{ color: "#060213" }} color="#696D8C">
          Volume
        </Tab>
        <Tab _selected={{ color: "#060213" }} color="#696D8C">
          Customer Satisfaction
        </Tab>
        <Tab _selected={{ color: "#060213" }} color="#696D8C">
          Backlog
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Header />
          {/* <ChartGraph /> */}
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Taber;
