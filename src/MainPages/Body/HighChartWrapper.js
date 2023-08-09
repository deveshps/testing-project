import { useState } from "react";
import HighCharts from "./HighChart";

var timmer;

const HighChartWrapper = () => {

    const [data,setData] = useState([])
    const [capturepoint,setCapturepoint] = useState([])
    const [maxTempValue,setMaxTempValue] = useState(120)

    const handleStart = () => {
        setData([])
        setCapturepoint([])
        setMaxTempValue(120)
        timmer = setInterval(() => {
            setData((prevData) => {
                if(prevData?.length > 0)
                return [
                  ...prevData,
                  {
                    time:
                      prevData?.length+1 || 0 * 1,
                    temp: Number(Math.round(Math.random() * 100)),
                  },
                ];
                else     return [
                    {
                      time:
                        prevData?.length+1 || 0 * 1,
                      temp: Number(Math.round(Math.random() * 100)),
                    },
                  ];
              });
              setCapturepoint((prevData) => {
                if(prevData?.length > 0)
                return [
                ...prevData,
                2,
              ]
              else return [
                2,
              ]
            });
        },1000)
    }

    const handleSTop = () => {
        clearInterval(timmer)
    }

console.log("??> ",data)
return <div style={{margin:20,marginTop:80,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
        <HighCharts
        data={data}
        capturepoint={capturepoint}
        maxTempValue={maxTempValue}
        />
        <div>
            <button onClick={handleStart} style={{marginRight:10,marginLeft:20,cursor:"pointer"}}>Start</button>
            <button onClick={handleSTop} style={{cursor:"pointer"}}>Stop</button>
        </div>
    </div>
} 

export default HighChartWrapper;