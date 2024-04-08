/* eslint-disable react/prop-types */
const ExamCard = ({ courseCode, courseName, semester }) => {
  const lo = semester.map((sem, index) => (
    <div key={index} className="bg-[#38b6ff] p-1 rounded  text-white my-2">
      <div>{sem}</div>
    </div>
  ));

  return (
    <div className="border-[1px] ps-1 border-black mb-1 ">
      <p className="text-blacks">{courseName}</p>
      <p className="text-blacks">{courseCode}</p>
      <p className="flex justify-start items-center gap-2">Semester:{lo}</p>
    </div>
  );
};

export default ExamCard;
