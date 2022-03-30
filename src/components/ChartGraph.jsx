import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { options, labels, ChartData } from "../data/ChartData";
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
  const data = {
    labels,
    datasets: [
      {
        data: ChartData.map((val) => val.valNum),
        borderColor: show,
        backgroundColor: "rgba(255, 99, 132, 0.1)",
      },
    ],
  };
  return (
    <Box width="100%" mt="2rem">
      <Flex mb="2rem">
        <Box
          bg="white"
          //   rounded="md"
          p="0.9rem"
          borderLeftRadius="5px"
          borderLeft="0px"
          fontSize="12px"
          border="1px solid #e5e9f2"
          width={{
            xl: "90%",
          }}
        >
          <Box>
            <ChartHead valtext={valtexter} showColor={show} />
            <Chart
              type="line"
              data={data}
              options={options}
              height={300}
              width={790}
            />
          </Box>
        </Box>
        <SideInfo sidetext={sidetexter} />
      </Flex>
    </Box>
  );
};

export default ChartGraph;
