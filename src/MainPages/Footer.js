
import './styles.css';

const Footer = ({data=[]}) => {
    return <div className='footerWrapper'>
        {data && data.length && data.map(el => (
            <img src={el} style={{width:20,marginRight:20,marginLeft:20}} alt={el}/>
        ))}
    </div>
}

export default Footer