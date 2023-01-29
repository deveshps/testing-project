import { useState } from "react";
import AppleIcon from "../../images/apple-icon.png";
import FacebookIcon from "../../images/facebook-icon.png";
import GoogleIcon from "../../images/google-icon.png";
import BackIcon from "../../images/left-back-icon.png";
import DownArrowIcon from "../../images/downArrow-icon.png";
import CountryIcon from "../../images/country-icon.png";
import KeypadIcon from "../../images/keypad-icon.png";
import SuccessfullyIcon from "../../images/successfully-icon.png";

const Modal = ({ isOpen, setModal ,otpVerified}) => {
  const [phoneNumber, setPhoneNumber] = useState(false);
  const [finalModal,setFinalModal] = useState(false);
    const finalSubmit = () => {
        setFinalModal(true)
        setTimeout(() => {setFinalModal(false);otpVerified()}, 1000);
    }
  return (
    <div>
      {isOpen && (
        <div
          style={{
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            position: "fixed",
            opacity: isOpen ? 0.7 : 0,
            backgroundColor: "grey",
          }}
          onClick={() => setModal(false)}
        />
      )}
      <div
        style={{
          top: "20%",
          height: "80%",
          left: 0,
          right: 0,
          backgroundColor: "white",
          borderRadius: 20,
          padding: 20,
          position: "fixed",
          opacity: isOpen ? 1 : 0,
          transition: "all 0.4s ease-out",
          transform: isOpen ? "translateY(0)" : "translateY(100vh)",
          overflow: "auto",
        }}
      >
        {finalModal ? (<img src={SuccessfullyIcon}  alt="submit"/>) : (phoneNumber && (
          <SecondModal setPhoneNumber={setPhoneNumber} finalSubmit={finalSubmit} setModal={setModal} />
        )) || <FirstModal setPhoneNumber={setPhoneNumber} />}
      </div>
    </div>
  );
};

export default Modal;

const FirstModal = ({ setPhoneNumber }) => {
  return (
    <>
      <div
        style={{
          marginTop: 15,
          fontSize: 21,
          fontWeight: 450,
          marginBottom: 10,
        }}
      >
        Sign in to Instant Buy
      </div>
      <div style={{ fontSize: 15, lineHeight: 1.4, color: "#696F75" }}>
        Once you are signed in, you'll be able to puchage in an instant
      </div>
      <div
        onClick={() => setPhoneNumber(true)}
        style={{
          backgroundColor: "#041F63",
          color: "white",
          borderRadius: 10,
          padding: 10,
          textAlign: "center",
          marginTop: 10,
          cursor: "pointer",
        }}
      >
        Continue with Phone Number
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flex: 1,
          marginTop: 15,
          alignItems: "center",
        }}
      >
        <div style={{ border: "1px solid #F5F5F5", marginTop: 4, flex: 1 }}>
          {""}
        </div>
        <div style={{ fontSize: 14, margin: "0px 6px", color: "#AAAAAA" }}>
          or
        </div>
        <div style={{ border: "1px solid #F5F5F5", marginTop: 4, flex: 1 }}>
          {""}
        </div>
      </div>
      <div
        style={{
          marginTop: 15,
          border: "2px solid #8BBBF8",
          borderRadius: 10,
          padding: 10,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={FacebookIcon} style={{ width: 20 }} alt={"facebook"} />
        <div style={{ color: "#1B79F2", marginLeft: 10, fontWeight: 500 }}>
          Continue with Facebook
        </div>
      </div>
      <div
        style={{
          marginTop: 15,
          border: "2px solid #EE928B",
          borderRadius: 10,
          padding: 10,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={GoogleIcon} style={{ width: 20 }} alt={"google"} />
        <div style={{ color: "#E65C51", fontWeight: 500, marginLeft: 10 }}>
          Continue with Google
        </div>
      </div>
      <div
        style={{
          marginTop: 15,
          border: "2px solid #757575",
          borderRadius: 10,
          padding: 10,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={AppleIcon} style={{ width: 20 }} alt={"apple"} />
        <div style={{ color: "#757575", marginLeft: 10, fontWeight: 500 }}>
          Continue with Apple
        </div>
      </div>
    </>
  );
};
const SecondModal = ({ setModal,finalSubmit ,setPhoneNumber }) => {
  const [requestCode, setRequestCode] = useState(false);
  const [otpData,setOtpData] = useState([{},{},{},{},{},{}]);
  const backHandler = () => {
    if (requestCode) {
      setRequestCode(false);
      setOtpData([{},{},{},{},{},{}])
    } else {
      setModal(false);
      setPhoneNumber(false);
    }
  };
  
  const handleSubmit = () => {
    if(otpData && otpData[0] && otpData[0]['item']){
        backHandler()
        finalSubmit()
    }else if(requestCode) {
        setOtpData([{item:"3"},{item:"0"},{item:"9"},{item:"6"},{item:"6"},{item:"0"}])
    }
  }
  return (
    <>
      <img
        onClick={backHandler}
        src={BackIcon}
        style={{ width: 25 }}
        alt="back"
      />
      {(requestCode && (
        <div>
          <div style={{ fontSize: 21, fontWeight: 500, marginTop: 10 }}>
            Verify Phone Number
          </div>
          <div
            style={{
              marginTop: 10,
              fontWeight: 400,
              color: "#909090",
              fontSize: 14,
            }}
          >
            We have sent a 6-digit code to +44 2025143970
          </div>
          <div style={{display:"flex",flexDirection:"row",alignItems:"center",marginTop:20}}>
            {otpData.map(el => (<div onClick={() => setOtpData([{item:"3"},{item:"0"},{item:"9"},{item:"6"},{item:"6"},{item:"0"}])} style={{padding:"20px 20px",backgroundColor:"#F6F7FC",color:el.item ? "black" : "#F6F7FC",borderRadius:10,marginRight:10}}>{el.item || "0"}</div>))}
          </div>
          <div 
           style={{
            marginTop: 10,
            fontWeight: 400,
            color: "#909090",
            fontSize: 14,
            marginBottom:22
          }}
          >Didn't receive the code?   Retry in 00:08</div>
        </div>
      )) || (
        <div>
          <div style={{ fontSize: 21, fontWeight: 500, marginTop: 10 }}>
            Sign in with Phone Number
          </div>
          <div
            style={{
              marginTop: 10,
              fontWeight: 400,
              color: "#909090",
              fontSize: 14,
            }}
          >
            We will send you a 6-digit verification code
          </div>
          <div
            style={{
              backgroundColor: "#F6F7FC",
              borderRadius: 10,
              marginTop: 10,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              flex: 1,
            }}
          >
            <div
              style={{
                backgroundColor: "#E3EDFA",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: 15,
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
              }}
            >
              <img
                src={CountryIcon}
                style={{ width: 20, marginRight: 10 }}
                alt="country"
              />
              <img src={DownArrowIcon} style={{ width: 10 }} alt="arrow" />
            </div>
            <div style={{ marginLeft: 20 }}>
              <div style={{ color: "#7A7B7C", marginBottom: 5, fontSize: 12 }}>
                Phone Number
              </div>
              <div style={{ fontSize: 17, fontWeight: 300 }}>
                +44 2025143970
              </div>
            </div>
          </div>
          <div
            onClick={() => setRequestCode(true)}
            style={{
              border: "2px solid #818FB1",
              borderRadius: 10,
              padding: 10,
              color: "#041F63",
              textAlign: "center",
              marginTop: 15,
              fontSize: 15,
              fontWeight: 500,
            }}
          >
            Request Code
          </div>
        </div>
      )}
      <div
        style={{
          marginTop: 10,
          marginBottom: 30,
          backgroundColor: "#E9EAEE",
          padding: 2,
        }}
      >
        <img onClick={handleSubmit} src={KeypadIcon} style={{ width: "100%" }} alt="keypad" />
      </div>
      <div
        style={{
          marginTop: 15,
          marginBottom: 20,
          border: "2px solid #EE928B",
          borderRadius: 10,
          padding: 10,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={GoogleIcon} style={{ width: 20 }} alt={"google"} />
        <div style={{ color: "#E65C51", fontWeight: 500, marginLeft: 10 }}>
          Continue with Google
        </div>
      </div>
    </>
  );
};
