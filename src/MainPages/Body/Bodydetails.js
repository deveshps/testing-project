import Header from "../Header";
import ArrowDownIcon from "../../images/arrow-down-icon.png";
import PlusIcon from "../../images/plus-icon.png";
import MinuseIcon from "../../images/minuse-icon.png";
import { useState } from "react";
import Modal from "./modal";
import { useNavigate } from "react-router";


const BodyDetails = ({setSelectedItem,selectedItem}) => {
    const navigate = useNavigate();
    const [quantity,setQuantity] = useState(1);
    const [isModalOpen,setModal] = useState(false)
    const quantityHandler = (type) => {
        if(type === 'add' && quantity < 3)
        setQuantity(quantity + 1)
        else if(type === "sub" && quantity > 1)
        setQuantity(quantity -1)
    }
    const clickHandler = () => {
        setSelectedItem({})
    }
    const puchageHandler = () => {
        setModal(true)
    }
    const otpVerified = () => {
        setModal(false)
        navigate("/main-page/details-review")
    }
return <div style={{padding:"10px 0px 0px"}}>
            <Header tweets="23.6K" title="Levi's®" clickHandler={clickHandler}/>
            <div className="detailPageWrapper">
                <img src={selectedItem.image} style={{margin:10,borderRadius:5}} alt="images"/>
                <UpperBody quantityHandler={quantityHandler} quantity={quantity}/>
                <LowerBody />
                <div className="detailPageFooterWrapper">
                    <div onClick={puchageHandler} style={{backgroundColor:"#041F63",width:"100%",textAlign:"center",padding:"10px",color:"white",borderRadius:10}}>Instant Buy <span style={{marginLeft:15}}>{quantity * 80.88}</span></div>
                </div>
            </div>
            <Modal isOpen={isModalOpen} setModal={setModal} otpVerified={otpVerified}/>
</div>

}

export default BodyDetails

const UpperBody = ({quantityHandler,quantity}) => {
    return  <div style={{borderBottom:"4px solid #F4F4F4"}}>
    <div style={{fontSize:18,fontWeight:500,margin:"10px 20px"}}>New Original Sweatshirt</div>
    <div style={{display:"flex",flexDirection:"row",alignItems:"center",borderBottom:"2px solid #F4F4F4",marginBottom:15,paddingBottom:15,marginLeft:20}}>
        <div style={{fontWeight:600,color:"#041F63"}}>$80.88</div>
        <div style={{marginLeft:20,fontWeight:400,color:"#7F7F7F"}}>$80.88</div>
    </div>
    <div style={{marginLeft:20,fontSize:12,color:"#ACACAC",marginBottom:5}}>Select Quantity</div>
    <div style={{marginLeft:20,marginBottom:20,padding:"10px 5px",backgroundColor:"#FAFAFD",borderRadius:10,display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:100}}>
        <img src={MinuseIcon} onClick={() => quantityHandler("sub")} style={{width:15,cursor:"pointer",marginLeft:8}} alt="-"/>
        <div style={{fontWeight:500}}>{quantity}</div>
        <img src={PlusIcon} onClick={() => quantityHandler("add")} style={{width:18,cursor:"pointer"}} alt="+"/>
    </div>
    <div style={{marginLeft:20,padding:"10px 5px",backgroundColor:"#FAFAFD",borderRadius:10,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
        <div>
            <div style={{fontSize:12,color:"#B9BABD",marginBottom:5}}>
                Select Size
            </div>
            <div style={{fontSize:16}}>
                Medium
            </div>
        </div>
        <img src={ArrowDownIcon} style={{width:18,marginRight:10}} alt="arrow down"/>
    </div>
    <div style={{marginLeft:20,marginTop:15,padding:"10px 5px",backgroundColor:"#FAFAFD",borderRadius:10,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
        <div>
            <div style={{fontSize:12,color:"#B9BABD",marginBottom:5}}>
                Select Color
            </div>
            <div style={{fontSize:16}}>
                Blue
            </div>
        </div>
        <img src={ArrowDownIcon} style={{width:18,marginRight:10}} alt="arrow down"/>
    </div>
</div>
}
const LowerBody = () => {
    return  <div style={{borderBottom:"4px solid #F4F4F4",marginBottom:30,paddingBottom:10}}>
    <div style={{marginLeft:20,marginTop:20}}>
        <div style={{fontWeight:500}}>Product Description</div>
        <ul style={{color:"#626262",fontSize:14,fontWeight:400,lineHeight:1.5}}>
            <li>Soft French Terry meets a classic</li>
            <li>What's not to love? This versatile staple will go just as well with your favorite cut-off shorts as it does with pleated chinos</li>
            <li>A easy-to-style staple you can wear with pretty much anything</li>
            <li>Made rom soft French Terry</li>
            <li>Details with Levi's iconic</li>
        </ul>
    </div>
</div>
}