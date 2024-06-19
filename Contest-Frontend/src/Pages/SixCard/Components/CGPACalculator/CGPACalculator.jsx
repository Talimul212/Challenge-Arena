import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { FaTelegramPlane } from "react-icons/fa";
const gradePoints = {
  "A+": 4.0,
  A: 3.75,
  "A-": 3.5,
  "B+": 3.25,
  B: 3.0,
  "B-": 2.75,
  "C+": 2.5,
  C: 2.25,
  D: 2.0,
  F: 0.0,
};

const CGPACalculator = () => {
  const [semesters, setSemesters] = useState([
    {
      name: "Semester 1",
      subjects: [{ subject: "", credit: "", grade: "" }],
    },
  ]);

  const handleSemesterNameChange = (index, event) => {
    const values = [...semesters];
    values[index].name = event.target.value;
    setSemesters(values);
  };

  const handleInputChange = (semIndex, subIndex, event) => {
    const semValues = [...semesters];
    const subjectValues = [...semValues[semIndex].subjects];
    subjectValues[subIndex][event.target.name] = event.target.value;
    semValues[semIndex].subjects = subjectValues;
    setSemesters(semValues);
  };

  const handleAddSubject = (semIndex) => {
    const semValues = [...semesters];
    semValues[semIndex].subjects.push({ subject: "", credit: "", grade: "" });
    setSemesters(semValues);
  };

  const handleRemoveSubject = (semIndex, subIndex) => {
    const semValues = [...semesters];
    const subjectValues = [...semValues[semIndex].subjects];
    if (subjectValues.length > 1) {
      subjectValues.splice(subIndex, 1);
      semValues[semIndex].subjects = subjectValues;
      setSemesters(semValues);
    }
  };

  const handleAddSemester = () => {
    setSemesters([
      ...semesters,
      {
        name: `Semester ${semesters.length + 1}`,
        subjects: [{ subject: "", credit: "", grade: "" }],
      },
    ]);
  };

  const handleRemoveSemester = (semIndex) => {
    const semValues = [...semesters];
    if (semValues.length > 1) {
      semValues.splice(semIndex, 1);
      setSemesters(semValues);
    }
  };

  const calculateSemesterCGPA = (semester) => {
    let totalCredits = 0;
    let totalPoints = 0;
    semester.subjects.forEach(({ credit, grade }) => {
      const creditValue = parseFloat(credit);
      const gradeValue = gradePoints[grade];
      if (!isNaN(creditValue) && !isNaN(gradeValue)) {
        totalCredits += creditValue;
        totalPoints += creditValue * gradeValue;
      }
    });
    return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : 0;
  };

  const calculateOverallCGPA = () => {
    let totalCredits = 0;
    let totalPoints = 0;
    semesters.forEach((semester) => {
      semester.subjects.forEach(({ credit, grade }) => {
        const creditValue = parseFloat(credit);
        const gradeValue = gradePoints[grade];
        if (!isNaN(creditValue) && !isNaN(gradeValue)) {
          totalCredits += creditValue;
          totalPoints += creditValue * gradeValue;
        }
      });
    });
    return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : 0;
  };

  return (
    <div className="mb-20">
      {semesters.map((semester, semIndex) => (
        <div
          key={semIndex}
          className="mb-8 p-4 border shadow rounded mt-7 me-1"
        >
          <div className="flex justify-between items-center mb-4">
            <input
              type="text"
              name="semesterName"
              value={semester.name}
              onChange={(event) => handleSemesterNameChange(semIndex, event)}
              placeholder="Semester Name"
              className="w-full p-2 border-none rounded"
            />
            <button
              onClick={() => handleRemoveSemester(semIndex)}
              className="ml-2 p-1  bg-red-500 text-white rounded-full  mt-[-70px] me-[-25px] drop-shadow-lg"
            >
              <RxCross2 />
            </button>
          </div>
          {semester.subjects.map((subject, subIndex) => (
            <div key={subIndex} className="flex space-x-4 mb-4 mt-3">
              <input
                type="text"
                name="subject"
                value={subject.subject}
                onChange={(event) =>
                  handleInputChange(semIndex, subIndex, event)
                }
                placeholder="Subject"
                className="w-[43vw] p-2 border rounded"
              />
              <select
                name="grade"
                value={subject.grade}
                onChange={(event) =>
                  handleInputChange(semIndex, subIndex, event)
                }
                className="w-[18vw] p-2 border rounded bg-white"
              >
                <option value="" disabled>
                  Select Grade
                </option>
                {Object.keys(gradePoints).map((grade) => (
                  <option key={grade} value={grade}>
                    {grade}
                  </option>
                ))}
              </select>
              <div className="indicator">
                <button
                  onClick={() => handleRemoveSubject(semIndex, subIndex)}
                  className=" text-2xl indicator-item badge drop-shadow-lg text-red-500  border-none bg-transparent "
                >
                  <MdDeleteForever />
                </button>
                <input
                  type="number"
                  name="credit"
                  value={subject.credit}
                  onChange={(event) =>
                    handleInputChange(semIndex, subIndex, event)
                  }
                  placeholder="Credit"
                  className="w-[18vw] p-2 border rounded"
                />
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center">
            <button
              onClick={() => handleAddSubject(semIndex)}
              className=" text-xl flex text justify-start border-[1px] px-2 py-1 shadow border-[#00bf63] items-center gap-2  rounded mb-4"
            >
              <FaTelegramPlane className="text-[#00bf63] " /> Subject
            </button>
            <div className="text-lg font-semibold">
              Semester GPA: {calculateSemesterCGPA(semester)}
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-between items-center px-1">
        <button
          onClick={handleAddSemester}
          className=" text-xl flex text justify-start border-[1px] p-1 shadow border-[#38b6ff] items-center gap-2  rounded mb-4"
        >
          <FaTelegramPlane className="text-[#38b6ff] " /> Semester
        </button>
        <div className="text-xl font-bold">
          Overall <span className="text-[#00bf63]">CGPA</span>:{" "}
          {calculateOverallCGPA()}
        </div>
      </div>
    </div>
  );
};

export default CGPACalculator;
