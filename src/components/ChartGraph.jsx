import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { data, options } from "../data/ChartData";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartHead from "./common/ChartHead";
import SideInfo from "./common/SideInfo";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  Title,
  Tooltip,
  Legend
);

const ChartGraph = ({ valtexter, show, sidetexter }) => {
  return (
    <Box width="100%" mt="2rem">
      <Box mb="2rem">
        <Box
          bg="white"
          rounded="md"
          //   boxShadow="md"
          p="0.9rem"
          borderRadius="5px"
          fontSize="12px"
          border="1px solid #e5e9f2"
          width={{
            xl: "90%",
          }}
        >
          <Flex justifyContent="space-between" width="100%" alignItems="center">
            <Box>
              <ChartHead valtext={valtexter} showColor={show} />
              <Chart type="line" data={data} options={options}  height={300}
  width={790} borderLeft="1px sol black"/>
            </Box>
            <SideInfo sidetext={sidetexter}/>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default ChartGraph;
