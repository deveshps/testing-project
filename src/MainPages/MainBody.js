import Body from "./Body/Body";
import BodyFooter from "./Body/BodyFooter";
import BodyHeader from "./Body/BodyHeader";

const MainBody  =({data =[],setSelectedItem,}) => {
    return <div className="classWrapper">
        {data && data.length && data.map(el =>(
            <div className="imageWrapper">
                <div className="bodyWrapper">
                <img src={el.icon} style={{width:35,height:35,borderRadius:'100%',marginRight:10}} alt="icon"/>
                    <div className="bodyRightSection">
                        <BodyHeader data ={el} />
                        <Body data = {el} setSelectedItem={setSelectedItem} />
                        <BodyFooter data={el}/>
                    </div>
                </div>
            </div>
        ))}
    </div>
}

export default MainBody