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
          <ChartGraph
            valtexter="Average response Time"
            show="#F05D23"
            sidetexter="Average Response Time"
          />
          <ChartGraph
            valtexter="Replies per resolution "
            show="#3E68FF"
            sidetexter="Average Replies "
          />
          <ChartGraph
            valtexter="Average resolution time"
            show="#FB6491"
            sidetexter="Average Resolution Rate"
          />
          <ChartGraph
            valtexter="First contact resolution rate"
            show="#07C9E2"
            sidetexter="Average Contact Rate"
          />
        </TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Taber;
