import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

// type Props = {
//     data:{time:number,temp:number}[];
//     capturePoint:[];
//     showPoint:boolean;
//     maxTempValue:number;
//     dataRate:number | undefined;
//     title?:string;
//     temperatureUnit?:string;

// }
const HighCharts = React.memo(({data,dataRate=1,capturePoint,showPoint=true,title="Temperature",temperatureUnit="c",maxTempValue=50}) => {
  const options /* : Highcharts.Options */ = {
    chart: {
        type: 'area',
        lineColor:"#A8D8D1",
        showLines:false,
        // backgroundColor:"#EFEFEF",
    //   events: {
    //     load: function (a:any,b:any) {
    //         console.log("??>>>>  a and b",a,b)
    //       // set up the updating of the chart each second
    //       const series =  undefined //this.series[0];
    //       setInterval(function () {
    //         const x = new Date().getTime(), // current time
    //         y = Math.round(Math.random() * 100);
    //           console.log("??>>>> ",x,y,    series)
    //         //   series.options.marker.enabled = !series.options.marker.enabled;
    //         // series.addPoint([x, y], true, true);
    //       }, 3000);
    //     }
    //   },
    //   scrollablePlotArea:{
    //     scrollPositionX:0,
    //     scrollPositionY:1
    //   }
    },
    plotOptions:{
        area:{
            color:"#A8D8D1",
            fillColor:"#E4F3F1",
            lineWidth:2,
            fillOpacity:0.001,
            // dataLabels:[{borderWidth:10}],
            label:{enabled:true},
            point:{visible:true},
            dataLabels:{enabled:showPoint ? true :  false},
            // ...(showPoint ? {marker:{enabled:true,fillColor:"#424C58",width:20,radius:4}} : {})
            marker:{enabled: showPoint ? true : false,fillColor:"#424C58",width:20,radius:4}

        },
        line:{
            color:"#A8D8D1"
        },
        // series: {
        //     datagrouping: {
        //          enabled: false
        //     },
        //     point:{
        //         selected:true
        //     }
        // }
    },
    // annotations:{
    //     labels:{
    //         point:"0",
    //         formatter:function(a:any){
    //             console.log("??>>>>  formator ",a)
    //             return 0
    //         }
    //     }
    // },
    // point:{visible:true},
    // colors:["green"],
    // lineColor:"red",
        xAxis:{
            // zoomEnabled:true,
            labels: {
                formatter: function(e,d) {
                    let r = e?.chart?.series[1];
                    // for(let one of data){
                    //     // if(one?.)
                    // }
                    console.log("??>>>>  e in x-axis",/* e,data?.length, */r,typeof r," values ",r?.processedYData);
                    let result = e.value.toString().slice(6,11); 
                    // if(initialXValue === -1){
                    //     setInitialXValue(result)
                    // }
                    console.log("??>>>>   value :- ",e.value)
                    return e.value;
                },
            },

            title:{
                text:title,
                align:"left",
                // offset:24,
                // margin:0,
                // style:{
                //     color:"red",
                //     fontSize:15
                // }
            },
            // accessibility: {
            //     rangeDescription: 'Range: 2010 to 2020'
            // }
            // showEmpty:false,
        //     ...(isRunning ? {} :{max:10,
            // categories:['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18'],
        //     //      dateTimeLabelFormats:{
        //     //     second:" %H:%S"
        //     // },
        // }),
            // dateTimeLabelFormats:{
            //     second:"%H:%M:%S"
            // },
        // offset:"number"
        // labels:{enables:true}
    },
    yAxis:{
        // left:true,
        // categories:[0,6,12,18,24,30,36,42,48,54,60,66,72,78,84,90,96,102],
        // categories:[0,1],
        max:maxTempValue
        ? temperatureUnit === "c"
          ? maxTempValue + 12
          : Number(Number((9 / 5) * Number(maxTempValue) + 32).toFixed(0))
        : 50,
        min:title === "Voltage" ? -12 : 0,
        opposite:false,
        // lineColor:"red",
        lineWidth:1,
        margin:10,
        minPadding:10,
        gridLineWidth: 0,
        // dateTimeLabelFormats:{
        //     second:"%S"
        // }
    },
    // accessibility: {
    //   enabled: false
    // },

    time: {
      useUTC: false
    },
    rangeSelector: {
    //   buttons: [
    //     {
    //       count: 1,
    //       type: "minute",
    //       text: "1M"
    //     },
    //     {
    //       count: 5,
    //       type: "minute",
    //       text: "5M"
    //     },
    //     {
    //       type: "all",
    //       text: "All"
    //     }
    //   ],
    buttons:[],
      inputEnabled: false,
    //   selected: 0
    selected:0,
    },
    // navigator:{enabled:false},// bottom scrollbar

    // scrollbar:{enabled:false},  // bottom scroll area
    // title: {
    //   text: "Live random data"
    // },

    exporting: {
      enabled: false
    },

    series: [
      {
        // marker:{enabled:false},
            // ...(showPoint ? {lineWidth:2} :{marker:{enabled:false,fillColor:"#424C58",width:20,radius:4,states:{hover:{enabled:false}}},lineWidth:0,}),
        name: title,
        data: (function () {
          // generate an array of random data
          const graphData = [],
            time = new Date().getTime();
        //     // graphData.push([new Date(new Date("2023 08 06")).getTime() + -89 * 1000, Math.round(Math.random() * 100)])
        //   for (let i = -1; i <= 8; i += 1) {
        //     graphData.push([time + i * 1000, Math.round(Math.random() * 100)]);
        //   }
            for(let i = 0;i < data?.length;i++){
                // graphData.push([data[i].time ,data[i].temp])
                let yData =  temperatureUnit === "f"
                ? Number(Number((9 / 5) * data[i].temp + 32).toFixed(1))
                : (data[i]?.temp || 0);
                console.log("??????????????????????")
                graphData.push({x:(data[i]?.time || 0),y:yData/* ,dataLabels:{enabled:capturePoint[i] ? true : false}, marker:{enabled:capturePoint[i] ? true : false} */})
                console.log("?????????????????????? after")
                
            }
            if(data?.length <= 5){
                for(let i = data?.length ; i<=5;i++){
                    graphData.push({x:i * Number(dataRate)})
    
                }
            }
        //   console.log("??>>>>   graphData ",graphData,data)
          return graphData;
        })(),
        // data:[[0,0],[1,10],[2,20],[3,12],[4,40],[5,21],[6,60],[7,1],[8,15],[9,90],[10,56],[11,65],[12.45],[13,23],[14,34],[20,44],[10,87]],
        // point: {
        //     events: {
        //       click: (e:any, x:any, y:any) => {
        //         // this.setState({ current: e.point.x });
        //         console.log(e.target, e.point.x);
        //       }
        //       // mouseOver: function(e) {
        //       //     $(this.series.chart.xAxis[0].labelGroup.element.childNodes[this.x]).css({fontWeight: 'bold'});
        //       // },
        //       // mouseOut: function() {
        //       //     $(this.series.chart.xAxis[0].labelGroup.element.childNodes[this.x]).css({fontWeight: 'normal'});
        //       // }
        //     }
        //   },
        // label:{enabled:false},
      },
    //   !showPoint ?  {} : {
    //     name: "Temperature",
    //     // marker:{enabled:true},
    //         marker:{enabled:true,fillColor:"#424C58",width:10,radius:4,height:10},
    //         lineWidth:2,
    //     data: (function () {
    //         // generate an array of random data
    //         const graphData:any = [],
    //           time = new Date().getTime();
    //       //     // graphData.push([new Date(new Date("2023 08 06")).getTime() + -89 * 1000, Math.round(Math.random() * 100)])
    //       //   for (let i = -1; i <= 8; i += 1) {
    //       //     graphData.push([time + i * 1000, Math.round(Math.random() * 100)]);
    //       //   }
    //           for(let i = 0;i < data?.length;i++){
    //             if(capturePoint[i])
    //             graphData.push([data[i].time ,data[i].temp])
    //             //   graphData.push([time + data[i].time * 1000,data[i].temp])
    //           }
    //         console.log("??>>>>   graphData ",graphData,data,capturePoint)
    //         return graphData;
    //       })(),
    //     // data:[8,16.2]
    //   }
    ]
  };
  return (
    <div style={{height:250,width:700}}>
    <HighchartsReact
      constructorType={"stockChart"}
      highcharts={Highcharts}
      options={options}
      // ref={chartComponentRef}
      // {...props}
    />
    </div>
  );
});

export default HighCharts;
