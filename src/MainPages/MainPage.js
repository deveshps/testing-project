import Footer from "./Footer";
import Header from "./Header";
import MainBody from "./MainBody";
import HomeIcon from "../images/home-icon.png"
import SearchIcon from "../images/search-icon.png"
import BellIcon from "../images/bell-icon.png"
import MessageIcon from "../images/message-icon.png"
import LevisIcon from "../images/levis-icon.png";
import LevisTshirts from "../images/levis-tshirt.png";
import ShirtImage from "../images/shirtImage.png";
import TShirtImage from "../images/tshirtImage.png";
import { useState } from "react";
import BodyDetails from "./Body/Bodydetails";


const MainPage =() => {
    const [selectedItem,setSelectedItem] = useState({});
    // data is hard coaded data here
    const data = [
        {
            icon:LevisIcon,
            title:"Levi's®",
            hashTag:"LEVIS",
            date:"2022 03 17",
            description:"Sprint is in the air, and so is festival season. Get The Ultimate Guide to Festival Season Dressing.",
            link:"https://xd.adobe.com/view/8de827fe-1b32-4707-bcac-28340142fb6d-d8bb/screen/8fea7f3a-24e4-4008-935b-e5162ba4cc72?fullscreen",
            image:LevisTshirts,
            comment:34,
            like:9,
            heart:58
        },
        {
            icon:LevisIcon,
            title:"Levi's®",
            hashTag:"MONTEE CARLO",
            date:"2022 09 12",
            description:"Sprint is in the air, and so is festival season. Get The Ultimate Guide to Festival Season Dressing.",
            link:"https://xd.adobe.com/view/8de827fe-1b32-4707-bcac-28340142fb6d-d8bb/screen/8fea7f3a-24e4-4008-935b-e5162ba4cc72?fullscreen",
            image:ShirtImage,
            comment:12,
            like:39,
            heart:78
        },
        {
            icon:LevisIcon,
            title:"Levi's®",
            hashTag:"NIKE",
            date:"2022 03 17",
            description:"Sprint is in the air, and so is festival season. Get The Ultimate Guide to Festival Season Dressing.",
            link:"https://xd.adobe.com/view/8de827fe-1b32-4707-bcac-28340142fb6d-d8bb/screen/8fea7f3a-24e4-4008-935b-e5162ba4cc72?fullscreen",
            image:TShirtImage,
            comment:87,
            like:36,
            heart:8
        }
    ]
    return <div style={{padding:"0px 15px 0px"}}>
        {selectedItem && Object.keys(selectedItem).length && <BodyDetails setSelectedItem ={setSelectedItem} selectedItem={selectedItem}/> || 
            <>
            <Header tweets="23.6K" title="Levi's®"/>
            <MainBody data={data} setSelectedItem={setSelectedItem}/>
            <Footer data = {[HomeIcon,SearchIcon,BellIcon,MessageIcon]}/>
            </>
            }
    </div>
}
export default MainPage;