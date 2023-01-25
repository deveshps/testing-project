import MoreIcon from "../../images/thre-dot-icon.png";
import BlueTickIcon from "../../images/blue-tick-icon.png";
import moment from "moment"

const BodyHeader = ({data}) => {
    return  <div className="bodyHeaderPrimary">
    <div className="bodyHeaderPrimaryText">
        <div style={{fontSize:12,fontWeight:700,color:"#2A2E31"}}>{data.title}</div>
        <img src={BlueTickIcon} style={{width:15,margin:"0px 2px"}} alt="blue tick"/>
        <div style={{fontSize:12,color:"#7F8A91"}}>@{data.hashTag}</div>
        <div style={{width:3,height:3,margin:"0px 4px",backgroundColor:"#7F8A91",borderRadius:"100%"}}>{" "}</div>
        <div style={{color:"#7F8A91",fontSize:12}}>{moment(data.date).format("MMM DD")}</div>
    </div>
    <img src={MoreIcon} style={{width:15}} alt="dots"/>
</div>
}
export default BodyHeader