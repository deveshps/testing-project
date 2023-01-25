import BlackTickIcon from "../../images/black-tick-icon.png";

const Body = ({data,setSelectedItem}) => {
    const clickHandler = (item) => {
        setSelectedItem(item)
    }
    return <>
         <div className="bodyHeaderSecondary">
                            <img src={BlackTickIcon} style={{width:12}} alt="tick"/>
                            <div style={{color:"#7F8A91",fontSize:14,marginLeft:5}}>Official</div>
                        </div>
                        {data.description && <div style={{fontSize:14,color:"#313538",fontWeight:400}}>{data.description}</div>}
                        {data.link && <div className="bodyLink">
                                <div style={{color:"#313538"}}>HERE:</div>
                                <a style={{color:"#1D9BF0",width:200,marginLeft:3}} href={data.link}>{data.link}</a>
                            </div>}
                        <div className="bodyImage">
                            <div onClick={() => clickHandler(data)} className="bodyImageSubSection">
                            <img src={data.image} alt="MainImage"/>
                            <div className="bodyLowerLink">
                                <a style={{backgroundColor:"#1D9BF0",color:"#ffffff",width:200}} href={data.link}>{data.link}</a>
                            </div>
                            </div>
                        </div>
    </>
}
export default Body