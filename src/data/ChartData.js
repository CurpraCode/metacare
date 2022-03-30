export const ChartData = [
  {
    id: 1,
    month: "Jan",
    valNum: 11,
  },

  {
    id: 2,
    month: "Feb",
    valNum: 17,
  },
  {
    id: 3,
    month: "Mar",
    valNum: 47,
  },
  {
    id: 4,
    month: "Apr",
    valNum: 19,
  },
  {
    id: 5,
    month: "May",
    valNum: 19,
  },
  {
    id: 6,
    month: "Jun",
    valNum: 30,
  },
  {
    id: 7,
    month: "Jul",
    valNum: 42,
  },
  {
    id: 8,
    month: "Aug",
    valNum: 32,
  },
];
export const options = {
  responsive: true,
  scales: {
    xAxes: {
      grid: {
        display: false,
      },
    },
    yAxes: {
      min: 10,
      max: 50,
      grid: {
        // display:false
      },
    },
  },

  plugins: {
    legend: {
      display:false
    },
  },
 
};

export const labels = ChartData.map((val) => val.month);

