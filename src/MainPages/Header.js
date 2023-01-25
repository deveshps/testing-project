import {useNavigate} from "react-router-dom"
import LeftBackIcon from "../images/left-back-icon.png"
import BlueTickIcon from "../images/blue-tick-icon.png"

const Header = (props) => {
    const {tweets=0,title="Levi's®"} = props || {};
    const navigate = useNavigate();
    const handler = () => {
        if(props.clickHandler){
            props.clickHandler()
        }else navigate(-1)
    }
    return <div className="headerWrapper">
        <img src={LeftBackIcon} onClick={handler} style={{cursor:"pointer",width:25}} alt="LeftBackIcon"/>
        <div className="headerTextWrapper">
            <div>
               <div className="headerTextOneWrapper">
                <div style={{fontSize:13,fontWeight:600}}>{title}</div>
                <img src={BlueTickIcon} alt="" style={{width:17,marginLeft:2}}/>
               </div>
                <div style={{fontSize:12,marginTop:3,color:"#BFC4C9"}}>{tweets} Tweets</div>
            </div>
            <div style={{fontSize:13,fontWeight:700,color:"white",backgroundColor:"black",borderRadius:25,padding:"8px 10px"}}>Follow</div>
        </div>
    </div>
}

export default Header