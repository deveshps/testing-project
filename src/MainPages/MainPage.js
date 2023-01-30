import {useSelector,useDispatch} from "react-redux"
import {updateSelectedItem} from "../ReduxSlice";
import Footer from "./Footer";
import Header from "./Header";
import MainBody from "./MainBody";
import HomeIcon from "../images/home-icon.png"
import SearchIcon from "../images/search-icon.png"
import BellIcon from "../images/bell-icon.png"
import MessageIcon from "../images/message-icon.png"
import { useNavigate } from "react-router";


const MainPage =() => {
    const data = useSelector((state) => state.items.data);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const setSelectedItem = (item) => {
        dispatch(updateSelectedItem(item))
        navigate("/main-page/details")
    }
    return <div style={{padding:"0px 15px 0px"}}>
            <Header tweets="23.6K" title="Levi's®"/>
            <MainBody data={data} setSelectedItem={setSelectedItem}/>
            <Footer data = {[HomeIcon,SearchIcon,BellIcon,MessageIcon]}/>
    </div>
}
export default MainPage;