/* eslint-disable react/prop-types */
import styled from "styled-components";
import { vercel } from "../../helpers/api";

const TeacherCard = ({ teacher }) => {
  return (
    <CardContainer className="bg-white shadow rounded border-[1px]">
      <TeacherImage
        className=" rounded-t"
        src={`${vercel}/images/${teacher?.photoURL?.filename}`}
        alt={teacher.name}
      />
      <div className="px-1 pb-1">
        <TeacherName>{teacher.name}</TeacherName>
        <p>{teacher.position}</p>
      </div>
    </CardContainer>
  );
};

export default TeacherCard;

const CardContainer = styled.div`
  width: 175px;
  margin-bottom: 10px;
`;

const TeacherImage = styled.img`
  width: 100%;
  height: 190px;

  transition: transform 0.3s ease-in-out;
`;

const TeacherName = styled.p`
  font-weight: bold;
  font-size: 18px;
`;
