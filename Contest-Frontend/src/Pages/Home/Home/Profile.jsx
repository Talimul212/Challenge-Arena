import styled from "styled-components";
import { IoPersonCircleSharp } from "react-icons/io5";
import { primaryColor } from "../../../Components/Color/Color";
import { Link } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa";
const Profile = () => {
  return (
    <Container>
      <Div
        style={{
          display: "flex",
          padding: "0px 10px",
          paddingBottom: "15px",
          gap: "8px",
          marginBottom: "10px",
          marginLeft: "-13px",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <IoPersonCircleSharp color={primaryColor} size={"80px"} />
        <div>
          <p style={{ fontSize: "15px", fontWeight: "700" }}>Talimul Islam</p>
          <p
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              gap: "4px",
              fontSize: "13px",
              fontWeight: "500",
            }}
          >
            <FaGraduationCap /> BS in CSE
          </p>
        </div>
      </Div>
      <Div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Link to="/profile">PROFILE</Link>
        <Link to="/https://bubban.agamilabs.com/">BUBBAN</Link>
      </Div>
    </Container>
  );
};

export default Profile;

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  margin-top: 10px;
  align-items: center;
  justify-content: space-between;

  /* Adjust as needed */
`;
const Div = styled.div`
  a {
    padding: 5px 20px;
    background: #e4e1e164;
    border-radius: 5px;
    color: gray;
    font-size: 13px;
    font-weight: 500;
    margin-bottom: 9px;
    &:hover {
      background: ${primaryColor};
      color: white;
    }
  }
`;
