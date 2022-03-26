import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Line } from "react-chartjs-2";
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
const ChartGraph = () => {
  return (
    <Box width="100%">
      <Box mb="2rem">
        <Box
          bg="white"
          rounded="md"
          boxShadow="md"
          p="0.9rem"
          borderRadius="5px"
          fontSize="12px"
          border="1px solid #e5e9f2"
          width={{
            xl: "90%",
          }}
        >
          <Text fontSize="1rem" fontWeight="bold" p="1rem">
            Sales Chart
          </Text>

          <Line
            // data={saler}
            options={{
              // maintainAspectRatio: false,
              title: {
                display: true,
                text: "Average Rainfall per month",
                fontSize: 20,
              },
              legend: {
                display: true,
                position: "right",
              },
              animations: {
                tension: {
                  duration: 1000,
                  easing: "linear",
                  from: 1,
                  to: 0,
                  loop: false,
                },
              },
              scales: {
                y: {
                  // defining min and max so hiding the dataset does not change scale range
                  min: 0,
                  max: 100,
                  beginAtZero: true,
                },
                x: {
                  type: "time",
                  time: {
                    unit: "day",
                  },
                },
              },
            }}
            height={400}
            width={600}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default ChartGraph