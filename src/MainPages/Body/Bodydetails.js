import Header from "../Header";
import ArrowDownIcon from "../../images/arrow-down-icon.png";

const BodyDetails = ({setSelectedItem,selectedItem}) => {
    const clickHandler = () => {
        setSelectedItem({})
    }
return <div style={{padding:"10px 0px 0px"}}>
            <Header tweets="23.6K" title="Levi's®" clickHandler={clickHandler}/>
            <div className="detailPageWrapper">
                <img src={selectedItem.image} style={{margin:10,borderRadius:5}} alt="images"/>
                <UpperBody />
                <LowerBody />
                <div className="detailPageFooterWrapper">
                    <div style={{backgroundColor:"#041F63",width:"100%",textAlign:"center",padding:"10px",color:"white",borderRadius:10}}>Instant Buy</div>
                </div>
            </div>
</div>

}

export default BodyDetails

const UpperBody = () => {
    return  <div style={{borderBottom:"4px solid #F4F4F4"}}>
    <div style={{fontSize:18,fontWeight:500,margin:"10px 20px"}}>New Original Sweatshirt</div>
    <div style={{display:"flex",flexDirection:"row",alignItems:"center",borderBottom:"2px solid #F4F4F4",marginBottom:15,paddingBottom:15,marginLeft:20}}>
        <div style={{fontWeight:600,color:"#041F63"}}>$80.88</div>
        <div style={{marginLeft:20,fontWeight:400,color:"#7F7F7F"}}>$80.88</div>
    </div>
    <div style={{marginLeft:20,fontSize:12,color:"#ACACAC",marginBottom:5}}>Select Quantity</div>
    <div style={{marginLeft:20,marginBottom:20,padding:"10px 5px",backgroundColor:"#FAFAFD",borderRadius:10,display:"flex",flexDirection:"row",alignItems:"center",width:60}}>
        <div style={{width:20,marginLeft:8}}>-</div>
        <div style={{width:20}}>1</div>
        <div>+</div>
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