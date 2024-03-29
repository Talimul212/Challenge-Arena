import styled from "styled-components";
import { bgColor } from "../Color/Color";
import { BiLike } from "react-icons/bi";
const ClassCard = () => {
  return (
    <Container>
      <CardContainer>
        <Div>
          <p style={{ textTransform: "uppercase", color: "black" }}>TODay</p>
          <p
            style={{
              fontSize: "13px",
              padding: "3px 6px 3px 6px",
              borderRadius: "5px",
              color: "gray",
              fontWeight: "600",
              background: "#ffffffc5",
            }}
          >
            Thu, 28 March
          </p>
        </Div>
        <Div1>
          <BiLike color="gray" size={"40px"} />
          <p style={{ color: "gray", marginTop: "10px" }}>
            Theory of Computation
          </p>
        </Div1>
      </CardContainer>
      <CardContainer>
        <Div>
          <p style={{ textTransform: "uppercase", color: "black" }}>Tomorrow</p>
          <p
            style={{
              fontSize: "13px",
              padding: "3px 6px 3px 6px",
              borderRadius: "5px",
              color: "gray",
              fontWeight: "600",
              background: "#ffffffc5",
            }}
          >
            Thu, 28 March
          </p>
        </Div>
        <Div1>
          <BiLike color="gray" size={"40px"} />
          <p style={{ color: "gray", marginTop: "10px" }}>
            No Classes Tomorrow
          </p>
        </Div1>
      </CardContainer>
    </Container>
  );
};

export default ClassCard;
const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: center;
  justify-content: space-between;

  /* Adjust as needed */
`;
const CardContainer = styled.div`
  background: ${bgColor};
  width: 100%;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 15px;
`;
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: "10px";
  color: gray;
`;
const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
