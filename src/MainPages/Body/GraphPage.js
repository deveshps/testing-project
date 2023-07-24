import * as React from 'react';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Filler,
  ScriptableContext,
} from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import styles from "../graph.css";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Filler,
  zoomPlugin
);

const TemperatureGraph = React.memo(() => {
  const data = [
    {
        "time": 0,
        "temp": 0
    },
    {
        "time": 1,
        "temp": 8.1
    },
    {
        "time": 2,
        "temp": 16.2
    },
    {
        "time": 3,
        "temp": 24.2
    },
    {
        "time": 4,
        "temp": 32
    },
    {
        "time": 5,
        "temp": 39.5
    },
    {
        "time": 6,
        "temp": 46.6
    },
    {
        "time": 7,
        "temp": 53.4
    },
    {
        "time": 8,
        "temp": 59.8
    },
    {
        "time": 9,
        "temp": 65.6
    },
    {
        "time": 10,
        "temp": 71
    },
    {
        "time": 11,
        "temp": 75.7
    },
    {
        "time": 12,
        "temp": 79.8
    },
    {
        "time": 13,
        "temp": 83.2
    },
    {
        "time": 14,
        "temp": 86
    },
    {
        "time": 15,
        "temp": 88
    },
    {
        "time": 16,
        "temp": 89.3
    },
    {
        "time": 17,
        "temp": 89.9
    },
    {
        "time": 18,
        "temp": 89.8
    },
    {
        "time": 19,
        "temp": 88.9
    },
    {
        "time": 20,
        "temp": 87.2
    },
    {
        "time": 21,
        "temp": 84.8
    },
    {
        "time": 22,
        "temp": 81.8
    },
    {
        "time": 23,
        "temp": 78
    },
    {
        "time": 24,
        "temp": 73.7
    },
    {
        "time": 25,
        "temp": 68.7
    },
    {
        "time": 26,
        "temp": 63.1
    },
    {
        "time": 27,
        "temp": 57
    },
    {
        "time": 28,
        "temp": 50.5
    },
    {
        "time": 29,
        "temp": 43.5
    },
    {
        "time": 30,
        "temp": 36.2
    },
    {
        "time": 31,
        "temp": 28.6
    },
    {
        "time": 32,
        "temp": 20.7
    },
    {
        "time": 33,
        "temp": 12.7
    },
    {
        "time": 34,
        "temp": 4.5
    },
    {
        "time": 35,
        "temp": 3.6
    },
    {
        "time": 36,
        "temp": 11.7
    },
    {
        "time": 37,
        "temp": 19.8
    },
    {
        "time": 38,
        "temp": 27.7
    },
    {
        "time": 39,
        "temp": 35.3
    },
    {
        "time": 40,
        "temp": 42.7
    },
    {
        "time": 41,
        "temp": 49.7
    },
    {
        "time": 42,
        "temp": 56.3
    },
    {
        "time": 43,
        "temp": 62.4
    },
    {
        "time": 44,
        "temp": 68.1
    },
    {
        "time": 45,
        "temp": 73.1
    },
    {
        "time": 46,
        "temp": 77.6
    },
    {
        "time": 47,
        "temp": 81.4
    },
    {
        "time": 48,
        "temp": 84.5
    },
    {
        "time": 49,
        "temp": 87
    },
    {
        "time": 50,
        "temp": 88.7
    },
    {
        "time": 51,
        "temp": 89.7
    },
    {
        "time": 52,
        "temp": 89.9
    },
    {
        "time": 53,
        "temp": 89.4
    },
    {
        "time": 54,
        "temp": 88.2
    },
    {
        "time": 55,
        "temp": 86.3
    },
    {
        "time": 56,
        "temp": 83.6
    },
    {
        "time": 57,
        "temp": 80.2
    },
    {
        "time": 58,
        "temp": 76.2
    },
    {
        "time": 59,
        "temp": 71.5
    },
    {
        "time": 60,
        "temp": 66.3
    },
    {
        "time": 61,
        "temp": 60.5
    },
    {
        "time": 62,
        "temp": 54.2
    },
    {
        "time": 63,
        "temp": 47.4
    },
    {
        "time": 64,
        "temp": 40.3
    },
    {
        "time": 65,
        "temp": 32.8
    },
    {
        "time": 66,
        "temp": 25.1
    },
    {
        "time": 67,
        "temp": 17.1
    },
    {
        "time": 68,
        "temp": 9.1
    },
    {
        "time": 69,
        "temp": 0.9
    },
    {
        "time": 70,
        "temp": 7.2
    },
    {
        "time": 71,
        "temp": 15.3
    },
    {
        "time": 72,
        "temp": 23.3
    },
    {
        "time": 73,
        "temp": 31.1
    },
    {
        "time": 74,
        "temp": 38.6
    },
    {
        "time": 75,
        "temp": 45.8
    },
    {
        "time": 76,
        "temp": 52.7
    },
    {
        "time": 77,
        "temp": 59.1
    },
    {
        "time": 78,
        "temp": 65
    },
    {
        "time": 79,
        "temp": 70.4
    },
    {
        "time": 80,
        "temp": 75.2
    },
    {
        "time": 81,
        "temp": 79.3
    },
    {
        "time": 82,
        "temp": 82.9
    },
    {
        "time": 83,
        "temp": 85.7
    },
    {
        "time": 84,
        "temp": 87.8
    },
    {
        "time": 85,
        "temp": 89.2
    },
    {
        "time": 86,
        "temp": 89.9
    },
    {
        "time": 87,
        "temp": 89.8
    },
    {
        "time": 88,
        "temp": 89
    },
    {
        "time": 89,
        "temp": 87.4
    },
    {
        "time": 90,
        "temp": 85.2
    },
    {
        "time": 91,
        "temp": 82.2
    },
    {
        "time": 92,
        "temp": 78.5
    },
    {
        "time": 93,
        "temp": 74.2
    },
    {
        "time": 94,
        "temp": 69.3
    },
    {
        "time": 95,
        "temp": 63.8
    },
    {
        "time": 96,
        "temp": 57.8
    },
    {
        "time": 97,
        "temp": 51.3
    },
    {
        "time": 98,
        "temp": 44.3
    },
    {
        "time": 99,
        "temp": 37
    },
    {
        "time": 100,
        "temp": 29.4
    },
    {
        "time": 101,
        "temp": 21.6
    },
    {
        "time": 102,
        "temp": 13.6
    },
    {
        "time": 103,
        "temp": 5.4
    },
    {
        "time": 104,
        "temp": 2.6
    },
    {
        "time": 105,
        "temp": 10.8
    },
    {
        "time": 106,
        "temp": 18.9
    },
    {
        "time": 107,
        "temp": 26.8
    },
    {
        "time": 108,
        "temp": 34.5
    },
    {
        "time": 109,
        "temp": 41.9
    },
    {
        "time": 110,
        "temp": 48.9
    },
    {
        "time": 111,
        "temp": 55.6
    },
    {
        "time": 112,
        "temp": 61.8
    },
    {
        "time": 113,
        "temp": 67.4
    },
    {
        "time": 114,
        "temp": 72.6
    },
    {
        "time": 115,
        "temp": 77.1
    },
    {
        "time": 116,
        "temp": 81
    },
    {
        "time": 117,
        "temp": 84.2
    },
    {
        "time": 118,
        "temp": 86.7
    },
    {
        "time": 119,
        "temp": 88.5
    },
    {
        "time": 120,
        "temp": 89.6
    },
    {
        "time": 121,
        "temp": 89.9
    },
    {
        "time": 122,
        "temp": 89.5
    },
    {
        "time": 123,
        "temp": 88.4
    },
    {
        "time": 124,
        "temp": 86.5
    },
    {
        "time": 125,
        "temp": 83.9
    },
    {
        "time": 126,
        "temp": 80.6
    },
    {
        "time": 127,
        "temp": 76.7
    },
    {
        "time": 128,
        "temp": 72.1
    },
    {
        "time": 129,
        "temp": 66.9
    },
    {
        "time": 130,
        "temp": 61.2
    },
    {
        "time": 131,
        "temp": 54.9
    },
    {
        "time": 132,
        "temp": 48.2
    },
    {
        "time": 133,
        "temp": 41.1
    },
    {
        "time": 134,
        "temp": 33.7
    },
    {
        "time": 135,
        "temp": 26
    },
    {
        "time": 136,
        "temp": 18.1
    },
    {
        "time": 137,
        "temp": 10
    }
  ]
  const showPoint = true
  const capturePoint = [
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2
  ]
  const title = "Temperature";
  const temperatureUnit = "c"
  const maxTempValue =144
  const labels =[
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    62,
    63,
    64,
    65,
    66,
    67,
    68,
    69,
    70,
    71,
    72,
    73,
    74,
    75,
    76,
    77,
    78,
    79,
    80,
    81,
    82,
    83,
    84,
    85,
    86,
    87,
    88,
    89,
    90,
    91,
    92,
    93,
    94,
    95,
    96,
    97,
    98,
    99,
    100,
    101,
    102,
    103,
    104,
    105,
    106,
    107,
    108,
    109,
    110,
    111,
    112,
    113,
    114,
    115,
    116,
    117,
    118,
    119,
    120,
    121,
    122,
    123,
    124,
    125,
    126,
    127,
    128,
    129,
    130,
    131,
    132,
    133,
    134,
    135,
    136,
    137,
    138,
    139,
    140,
    141,
    142,
    143,
    144,
    145,
    146,
    147,
    148,
    149,
    150,
    151,
    152,
    153,
    154,
    155,
    156,
    157,
    158,
    159,
    160,
    161,
    162,
    163,
    164,
    165,
    166,
    167,
    168,
    169,
    170,
    171,
    172,
    173
]
  // console.log("???????????? data",data," showPoint :- ",showPoint,"capturePoint ",capturePoint," title ",title, "temperatureUnit ",temperatureUnit," maxTempValue ",maxTempValue," labels ",labels)
  const [graphData ,setGraphData] = useState(data);
  const [enableZoom, setEnableZoom] = useState(true);
  const yAxisScale =  title === "Voltage"  ? {min: -12,max: 12,stepSize:1} : {min:0,max:maxTempValue ? (temperatureUnit === "c" ? maxTempValue : Number(Number((9 / 5) * Number(maxTempValue) + 32).toFixed(0) )) : 50};
  const chatData = {
    labels: labels ? labels : graphData.map((el) => el.time),
    datasets: [
      {
        label: title,
        data: graphData.map((el) => temperatureUnit === 'f' ? ((9 / 5) * el.temp + 32).toFixed(1) : el.temp),
        tension: 0.4,
        showLine: showPoint ? true : false,
        borderWidth: 2,
        borderColor: "#A8D8D1",
        fill: true,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(204, 225, 222,1)");
          gradient.addColorStop(1, "rgba(204, 225, 222,0.1)");
          return gradient;
        },
        pointRadius: showPoint ? 2 : capturePoint,
        pointStyle: "circle",
        pointBorderColor: "#424C58",
        pointBackgroundColor: "#424C58",
      },
    ],
  };
  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ...yAxisScale
      },
    },
    // animation:false, // if you want to stop anumation when draw thae graph
    plugins: {
      zoom: {
        zoom: {
          wheel: {
            enabled: enableZoom, // SET SCROOL ZOOM TO TRUE
            // mode:"x",
            speed:0.01
          },
          drag :{
            enabled:enableZoom,
            speed:0.01,
            // mode:"x",
          },
            pinch :{
            enabled:enableZoom,
            speed:0.01,
            // mode:"x",
          },
          mode:'x',
          limits:{
            y: {min: 0, max: 1000},
            x: {min: 0, max:1000 }
          },
          onZoomStart: ({chart,event,point}) => {
            console.log("hammer", event);
            console.log("zoom point", point);
            console.log("chart zoom level ",chart.getZoomLevel())
            if(event?.type === "wheel" && event?.wheelDelta < 0){
              return true
            }
            return chart.getZoomLevel() <= 13;
            },
        },
        pan: {
          enabled: true,
          mode: "x",
        },
      },
      legend:{
        display:false
      }
    },
  };
  const ResetZoom = () => {
    setEnableZoom(!enableZoom);
  };

  // React.useEffect(() => {
  //   if(data && data.length){
  //     setGraphData([...data])
  //   }else {
  //     setGraphData([])
  //   }
  // },[data])
  return (
    <>
    <div style={{width:350,margin:10,marginTop:50}}>
      <Line
        data={chatData}
        options={options}
      />
      <div className={styles.zoomButton} onClick={ResetZoom}>{enableZoom ? "Reset " : "Enable "} Zoom</div>
      </div>
    </>
  );
});

export default TemperatureGraph;
