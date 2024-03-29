import styled from "styled-components";
import { SiGoogleclassroom } from "react-icons/si";
import { GiThreeFriends } from "react-icons/gi";
import { FaClipboardList } from "react-icons/fa";
import { PiExamFill } from "react-icons/pi";
import { FaBookOpenReader } from "react-icons/fa6";
import { primaryColor, secondaryColor } from "../Color/Color";
const FourCard = () => {
  const items = [
    { id: 1, title: "Class", icon: <SiGoogleclassroom size={"20px"} /> },
    { id: 2, title: "Class Mate", icon: <GiThreeFriends size={"20px"} /> },
    { id: 3, title: "Course", icon: <FaClipboardList size={"20px"} /> },
    {
      id: 4,
      title: "Complete Course",
      icon: <FaClipboardList size={"20px"} />,
    },
    { id: 5, title: "Course Book", icon: <FaBookOpenReader size={"20px"} /> },
    { id: 6, title: "Exam Schedules", icon: <PiExamFill size={"20px"} /> },
  ];

  return (
    <Container>
      {items.map((item, i) => (
        <Div key={item.id}>
          {i % 2 == 0 ? (
            <Div1>
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </Div1>
          ) : (
            <Div2>
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </Div2>
          )}
        </Div>
      ))}
    </Container>
  );
};

export default FourCard;
const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 100px;
  /* Adjust as needed */
`;
const Div = styled.div``;
const Div1 = styled.div`
  display: flex;
  width: 100px;
  gap: 5px;
  justify-content: center;
  align-items: center;
  height: 90px;
  text-align: center;
  color: aliceblue;
  flex-direction: column;

  border-radius: 10px;
  background: ${primaryColor};
  cursor: pointer;
`;
const Div2 = styled.div`
  display: flex;
  width: 100px;
  gap: 5px;
  height: 90px;
  text-align: center;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  color: aliceblue;
  align-items: center;
  cursor: pointer;
  background: ${secondaryColor};
`;
