import {useSelector} from "react-redux"
import Header from "./Header";
import PlusIcon from "../images/plus-icon.png"
import MinuseIcon from "../images/minuse-icon.png"
import ArrowDownIcon from "../images/arrow-down-icon.png";
import DeliveryIcon from "../images/delivery-icon.png";
import StoreIcon from "../images/store-icon.png";
import RightArrowIcon from "../images/rightArrow-icon.png";
import ApplePayIcon from "../images/applepay-icon.png";
import CardIcon from "../images/card-icon.png";
import PaypalIcon from "../images/paypal-icon.png";
import GpayIcon from "../images/gpay-icon.png";
import ExpandIcon from "../images/expand-icon.png";
import CollapseIcon from "../images/collapse-icon.png";
import RezolveBuyIcon from "../images/rezolveBuy-Icon.png";

import { useState } from "react";
import { useNavigate } from "react-router";

const PurchageItem = () => {
    const [quantity,setQuantity] = useState(1);
    const [isPriceExpand,setPriceExpand] = useState(false);
    const selectedItem = useSelector((state) => state.items.selectedItem);
    const navigate = useNavigate();
    const quantityHandler = (type) => {
        if(type === 'add' && quantity < 3)
        setQuantity(quantity + 1)
        else if(type === "sub" && quantity > 1)
        setQuantity(quantity -1)
    }
    const submitHandler = () => {
        navigate("/main-page")
    }
    return <div style={{padding:10}}>
        <Header />
        <div style={{display:"flex",marginTop:20,flexDirection:"row",flex:1}}>
            <img src={selectedItem.image} style={{flex:1,borderRadius:10,height:170}} alt="icon"/>
            <div style={{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center"}}>
                <div style={{fontSize:18,fontWeight:500,margin:"10px 20px"}}>{selectedItem.name}</div>
                <div style={{display:"flex",flexDirection:"row",alignItems:"center",borderBottom:"2px solid #F4F4F4",marginBottom:15,paddingBottom:15,marginLeft:20}}>
                    <div style={{fontWeight:600,color:"#041F63"}}>${selectedItem.price}</div>
                    <div style={{marginLeft:20,fontWeight:400,color:"#7F7F7F"}}>${selectedItem.price}</div>
                </div>
                <div style={{marginLeft:20,marginBottom:20,padding:"10px 5px",backgroundColor:"#FAFAFD",borderRadius:10,display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:100}}>
                    <img src={MinuseIcon} onClick={() => quantityHandler("sub")} style={{width:15,cursor:"pointer",marginLeft:8}} alt="-"/>
                    <div style={{fontWeight:500}}>{quantity}</div>
                    <img src={PlusIcon} onClick={() => quantityHandler("add")} style={{width:18,cursor:"pointer"}} alt="+"/>
                </div>
            </div>
        </div>
        <div style={{marginTop:15,fontSize:13,fontWeight:500,color:"#428FEA",textAlign:"right"}}>What's My Size?</div>
        <div style={{marginTop:10,padding:"10px 5px",backgroundColor:"#FAFAFD",borderRadius:10,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
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
        <div style={{marginTop:10,padding:"10px 5px",backgroundColor:"#FAFAFD",borderRadius:10,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
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
    <div style={{border:"2px solid #F6F7FC",marginTop:15,marginBottom:10}}>{""}</div>
    <div style={{margin:"10px 0px",fontSize:14,fontWeight:500}}>Delivery Option</div>
    <div style={{padding:10,border:"1px solid #EEEEEE",borderRadius:10,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
        <img src={DeliveryIcon} style={{marginLeft:5,padding:5,width:30,backgroundColor:"#F6F7FC",borderRadius:100}} alt="delivery"/>
        <div style={{marginLeft:15,fontSize:13}}>
            <div style={{fontWeight:500,marginBottom:5,color:"#5F5F5F"}}>Send to Address</div>
            <div style={{color:"#5F5F5F"}}>Your order will be sent to this address</div>
        </div>
        <img src={RightArrowIcon} style={{width:10}} alt = "rightArrow"/>
    </div>
    <div style={{padding:10,marginTop:10,border:"1px solid #EEEEEE",borderRadius:10,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
        <img src={StoreIcon} style={{marginLeft:5,padding:5,width:30,backgroundColor:"#F6F7FC",borderRadius:100}} alt="delivery"/>
        <div style={{marginLeft:15,fontSize:13}}>
            <div style={{fontWeight:500,marginBottom:5,color:"#5F5F5F"}}>Collect in Store</div>
            <div style={{color:"#5F5F5F"}}>Pick up your order from a preferred stoe of your choice</div>
        </div>
        <img src={RightArrowIcon} style={{width:10}} alt = "rightArrow"/>
    </div>
    <div style={{border:"2px solid #F6F7FC",marginTop:15,marginBottom:10}}>{""}</div>
    <div style={{margin:"10px 0px",fontSize:14,fontWeight:500}}>Pay Using</div>
    <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginTop:15,marginBottom:10,paddingBottom:15,borderBottom:"1px solid #F6F7FC"}}>
        <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            <img src={CardIcon} style={{width:50}} alt="card"/>
            <div style={{color:"#555555",fontSize:14,fontWeight:500,marginLeft:15}}>Debit/Credit Cards</div>
        </div>
        <img src={RightArrowIcon} style={{width:10,marginRight:5}} alt = "rightArrow"/>
    </div>
    <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginTop:15,marginBottom:10,paddingBottom:15,borderBottom:"1px solid #F6F7FC"}}>
        <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            <img src={PaypalIcon} style={{width:50}} alt="paypal"/>
            <div style={{color:"#555555",fontSize:14,fontWeight:500,marginLeft:15}}>PayPal</div>
        </div>
        <img src={RightArrowIcon} style={{width:10,marginRight:5}} alt = "rightArrow"/>
    </div>
    <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginTop:15,marginBottom:10,paddingBottom:15,borderBottom:"1px solid #F6F7FC"}}>
        <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            <img src={ApplePayIcon} style={{width:50}} alt="applePay"/>
            <div style={{color:"#555555",fontSize:14,fontWeight:500,marginLeft:15}}>Apple Pay</div>
        </div>
        <img src={RightArrowIcon} style={{width:10,marginRight:5}} alt = "rightArrow"/>
    </div>
    <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginTop:15,marginBottom:10,paddingBottom:15,borderBottom:"4px solid #F6F7FC"}}>
        <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            <img src={GpayIcon} style={{width:50}} alt="gpay"/>
            <div style={{color:"#555555",fontSize:14,fontWeight:500,marginLeft:15}}>Google Pay</div>
        </div>
        <img src={RightArrowIcon} style={{width:10,marginRight:5}} alt = "rightArrow"/>
    </div>
    <div style={{borderBottom:"4px Solid #F6F7FC",paddingBottom:15,marginBottom:20}}>
        <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
            <div style={{color:"#428FEA",fontSize:14,fontWeight:500}}>Price Details</div>
            <img onClick={() => setPriceExpand(!isPriceExpand)} src={isPriceExpand ? CollapseIcon : ExpandIcon} style={{width:10}} alt="drop down icon"/>
        </div>
        {isPriceExpand && <div style={{marginTop:15}}>
            <div style={{fontSize:13,fontWeight:300,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                <div>Subtotal(excluding Tax)</div>
                <div>${selectedItem.price * quantity}</div>
            </div>
            <div style={{marginTop:15,fontSize:13,fontWeight:300,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                <div>Shipping</div>
                <div>$0.00</div>
            </div>
            <div style={{marginTop:15,fontSize:13,fontWeight:300,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                <div>Tax</div>
                <div>${((selectedItem.price * quantity *12.35)/100).toFixed(2)}</div>
            </div>
        </div> || null}
    </div>
    <div onClick={() => submitHandler()} style={{backgroundColor:"#041F63",textAlign:"center",padding:"10px",color:"white",borderRadius:10,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
        <img src={RezolveBuyIcon}  alt="rezolveIcon"/>
        <div style={{marginLeft:10}}>Instant Buy <span style={{marginLeft:15}}>${(Number(quantity * selectedItem.price) + Number(((selectedItem.price * quantity *12.35)/100).toFixed(2))).toFixed(2)}</span></div>
    </div>
    </div>
}

export default PurchageItem;