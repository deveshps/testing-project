import CommentIcon from "../../images/comment-icon.png"
import LikeIcon from "../../images/arrow-icons.png"
import HeartIcon from "../../images/heart-icon.png"
import ShareIcon from "../../images/share-icon.png"

const BodyFooter = ({data}) => {
    return <div className="bodyFooter">
    <div className="bodyFooterSubWrapper">
        <img src={CommentIcon} style={{width:15}} alt="comment"/>
        <div style={{marginLeft:5,fontSize:12,color:"#869097"}}>{data.comment}</div>
    </div>
    <div className="bodyFooterSubWrapper">
        <img src={LikeIcon} style={{width:15}} alt="like"/>
        <div style={{marginLeft:5,fontSize:12,color:"#869097"}}>{data.like}</div>
    </div>
    <div className="bodyFooterSubWrapper">
        <img src={HeartIcon} style={{width:15}} alt="heart"/>
        <div style={{marginLeft:5,fontSize:12,color:"#869097"}}>{data.heart}</div>
    </div>
    <div className="bodyFooterSubWrapper">
        <img src={ShareIcon} style={{width:15,marginRight:5}} alt="share"/>
        <div style={{marginLeft:5,fontSize:12,color:"#869097"}}>{data.share}</div>
    </div>
</div>
}

export default BodyFooter