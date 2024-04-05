import styled from "styled-components";
const Classes = () => {
  return (
    <CourseContain>
      <Title>your class list</Title>
    </CourseContain>
  );
};

export default Classes;
const CourseContain = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 90px;
`;
const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
`;
