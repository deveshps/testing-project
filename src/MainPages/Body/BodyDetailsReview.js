import { useState } from "react";
import { useNavigate } from "react-router";
import DetailsReviewIcon from "../../images/details-review-icon.png";
import BackIcon from "../../images/left-back-icon.png";

const BodyDetailsReview = () => {
    const navigate = useNavigate();
    const [termCond,setTermCond] = useState(false);
    const submitHandler = () => {
        if(termCond){
            setTermCond(false)
            navigate("/main-page")
        }
    }
    return <div>
        <img onClick={() => navigate(-1)} src={BackIcon} style={{width:25,position:"absolute",padding:10}} alt="back"/>
        <img src={DetailsReviewIcon} style={{width:"100%"}} alt="detailsImage"/>
        <div style={{marginLeft:20}}>
            <div style={{fontSize:21,fontWeight:500}}>Complete your Details</div>
            <div style={{marginTop:10,marginBottom:20,lineHeight:1.4,fontSize:14,fontWeight:400,color:"#727272"}}>This information will be saved securely and used for this and all future orders</div>
            <div style={{backgroundColor:"#F6F7FC",padding:10,borderRadius:10,marginRight:5}}>
                <div style={{fontSize:14,color:"#A5A6A8",marginBottom:5}}>Full Name</div>
                <div style={{fontSize:16,color:"#2F2F2F"}}>Chris Dicken</div>
            </div>
            <div style={{backgroundColor:"#F6F7FC",padding:10,marginTop:12,borderRadius:10,marginRight:5}}>
                <div style={{fontSize:14,color:"#A5A6A8",marginBottom:5}}>Email</div>
                <div style={{fontSize:16,color:"#2F2F2F"}}>cdicken@gmail.com</div>
            </div>
            <div style={{backgroundColor:"#F6F7FC",padding:10,marginBottom:20,marginTop:12,borderRadius:10,marginRight:5,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                <div>
                    <div style={{fontSize:14,color:"#A5A6A8",marginBottom:5}}>Phone Number</div>
                    <div style={{fontSize:16,color:"#2F2F2F"}}>+44 2025143970</div>
                </div>
                <div style={{color:"#066DE4",fontSize:14,fontWeight:500}}>Change</div>
            </div>
            <div style={{display:"flex",flexDirection:"row",fontSize:14,fontWeight:300,color:"#616162",alignItems:"center"}}>
                <input type="checkbox" checked={termCond} onChange={(e) => {setTermCond(e.target.checked)}}/>
                <div style={{marginLeft:8}}>I agree with the </div>
                <div style={{marginLeft:4,color:"#066DE4",marginRight:4}}>Terms of Use</div>
                <div>and</div>
                <div style={{color:"#066DE4",marginLeft:4}}>Privacy Policy.</div>
            </div>
            <div onClick={submitHandler} style={{border:"2px solid #818FB1",fontWeight:500,marginTop:10,marginRight:5,cursor:"pointer",marginBottom:10,borderRadius:10,color:"#0C2668",padding:10,textAlign:"center"}}>Save & Continue</div>
        </div>
    </div>
}

export default BodyDetailsReview;