import CommentIcon from "../../images/comment-icon.png"
import LikeIcon from "../../images/arrow-icons.png"
import HeartIcon from "../../images/heart-icon.png"
import ShareIcon from "../../images/share-icon.png"

const BodyFooter = ({data}) => {
    const handleShares = async () => {
        const item = {
            name: "T042323-1355-L",
            "date": "04-23-2023",
            "time": "01.55PM",
            data:[{a:"as"},"b","c"],
            datas: [
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
                }
            ]
        }
        var csv = "";
        const header = ["Time","Temperature ( C )"]
        if (header) {
          for (let one of header) {
            csv += one + ",";
          }
          csv += "\n";
        }
        // csv += data.name + '\n';
        if (item && item.datas) {
          for(let one of item.datas){
            if(header && header[1] === "Temperature ( C )"){
              csv += one.time;
              csv += "," + one.temp;
            }
            csv += "\n";
          }
        }
        console.log("??ASSSSSSS ",csv)
        if (!navigator.canShare) {
            console.log("Your browser doesn't support the Web Share API.")
            return;
          }
          try {
            const file = new File([csv], "devesh.csv" , {type:"text/csv"});
            console.log("???????? ",file)
            await navigator.share({
              url:"wqertyrewqertew.csv", // can be anything or any url
              text: `${"Temperature"}`,
              title: `${"Temperature"} Experiment Data`, // subject
              files:[file]
            });
            console.log("data has been shared Successfully!")
          } catch (error) {
            console.error(error)
          }
    }
    const handleShare = async (title) => {
     
         const item =  {
    "name": "T061923-1129-M1",
    "date": "06-19-2023",
    "time": "11.29AM",
    "data": [
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
        }
    ]
  }
        const selectedButton="temperature";
        //   let storageTempData = JSON.stringify(item);
        // localStorage.setItem(
        // `temperature_data_T061923-1130-M1`,
        // storageTempData
        // );
        // window.alert(`Data saved :- ${localStorage.getItem("temperature_data_T061923-1130-M1") ? "temperature_data_T061923-1130-M1" : "Not found"}`)
    if(item){
      if (!navigator.canShare) {
        console.log("Your browser doesn't support the Web Share API.")
        return;
      }
      try {
        let header = ["Time ( Sec )", "Temperature ( C )"];
        if (selectedButton === "voltage") header = ["Time ( Sec )", "Voltage (V)"];
        else if (selectedButton === "rgb")
          header = ["Measurement No.", "RED", "GREEN", "BLUE"];
        
        let csv = "";
        if(header && header[2] === "GREEN" && item?.isCalibratedAndTested){
          csv += "Calibrated and Tested";
          csv += "\n";
        }
        if (header) {
          for (let one of header) {
            csv += one + ",";
          }
          csv += "\n";
        }
        // csv += data.name + '\n';
        if (item && item.data && item.data.length > 0) {
          for(let one of item.data){
            if(header && header[1] === "Temperature ( C )"){
              csv += one.time;
              csv += "," + one.temp;
            }else if(header && header[1] === "Voltage (V)"){
              csv += one.time;
              csv += "," + one.voltage;
            }else if(header && header[2] === "GREEN"){
              csv += one["Measuement No"];
              csv += "," + one['RED'];
              csv += "," + one['GREEN'];
              csv += "," + one['BLUE'];
      
            }
            csv += "\n";
          }
        }
        const file = new File([csv], `${item?.name}.csv`,{type:"text/csv"});
        // console.log("???????? ",file)
        let expType = (selectedButton.slice(0,1)).toLocaleUpperCase() + selectedButton.slice(1)
        await navigator.share({
          url:`${expType} Experiment data of ${item.name}`,
          text: `${expType} data of ${item?.name}`,
          title: `${expType} Experiment Data`, // Email subject
          files:[file]
        });
        console.log("data has been shared Successfully!")
      } catch (error) {
        console.error(error)
      }
      // console.log("share data",item)
    }
  };
    return <div className="bodyFooter">
    <div className="bodyFooterSubWrapper">
        <img src={CommentIcon} style={{width:15}} alt="comment"/>
        <div style={{marginLeft:5,fontSize:12,color:"#869097"}}>{data.comment}</div>
    </div>
    <div className="bodyFooterSubWrapper">
        <img src={LikeIcon} style={{width:15}} alt="like"/>
        <div style={{marginLeft:5,fontSize:12,color:"#869097"}}>{data.like}</div>
    </div>
    <div className="bodyFooterSubWrapper">
        <img src={HeartIcon} style={{width:15}} alt="heart"/>
        <div style={{marginLeft:5,fontSize:12,color:"#869097"}}>{data.heart}</div>
    </div>
    <div className="bodyFooterSubWrapper">
        <img src={ShareIcon} onClick = {handleShare} style={{width:15,marginRight:5,cursor:"pointer"}} alt="share"/>
        <div style={{marginLeft:5,fontSize:12,color:"#869097"}}>{data.share}</div>
    </div>
</div>
}

export default BodyFooter