import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { Bar } from "react-chartjs-2";
import { RxCross2 } from "react-icons/rx";
import { FaTelegramPlane } from "react-icons/fa";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

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

const CGPAAnalyzer = () => {
  const [semesters, setSemesters] = useState([
    {
      name: "Semester 1",
      subjects: [{ subject: "", credit: "", grade: "" }],
    },
  ]);
  const [targetCGPA, setTargetCGPA] = useState(0);

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

  const cgpaData = {
    labels: ["Total CGPA", "Your CGPA", "Target CGPA", "Expected CGPA"],
    datasets: [
      {
        label: "CGPA",
        data: [
          4.0,
          calculateOverallCGPA(),
          targetCGPA,
          (calculateOverallCGPA() + targetCGPA) / 2,
        ],
        backgroundColor: ["#438d45", "#38b6ff", "#00bf63", "#ff9800"],
      },
    ],
  };

  const courseData = {
    labels: semesters.flatMap((semester) =>
      semester.subjects.map((subject) => subject.subject)
    ),
    datasets: [
      {
        label: "Required",
        data: semesters.flatMap((semester) =>
          semester.subjects.map((subject) => gradePoints[subject.grade])
        ),
        backgroundColor: "#ff9800",
      },
      {
        label: "Expected",
        data: semesters.flatMap((semester) =>
          semester.subjects.map(() => targetCGPA)
        ),
        backgroundColor: "#38b6ff",
      },
    ],
  };

  return (
    <div className="mb-20 ">
      <div className="bg-gradient-to-r from-[#00bf63] to-[#38b6ff] p-4 rounded-lg mb-8  mt-5">
        <div className="flex justify-between mb-4">
          <div className="text-white text-lg font-semibold">
            <p>Target CGPA</p>
            <p>{targetCGPA.toFixed(2)}</p>
          </div>
          <div className="text-white text-lg font-semibold">
            <p>Your CGPA</p>
            <p>{calculateOverallCGPA()}</p>
          </div>
          <div className="text-white text-lg font-semibold">
            <p>Credits</p>
            <p>
              {semesters
                .flatMap((semester) =>
                  semester.subjects.map(
                    (subject) => parseFloat(subject.credit) || 0
                  )
                )
                .reduce((a, b) => a + b, 0)}
            </p>
          </div>
        </div>
        <input
          type="number"
          value={targetCGPA}
          onChange={(e) => setTargetCGPA(parseFloat(e.target.value))}
          placeholder="Target CGPA"
          className="w-full p-2 rounded-lg"
        />
      </div>
      <div>
        <h2 className="text-xl font-bold mb-4">CGPA Analysis</h2>
        <Bar data={cgpaData} />
      </div>
      <div>
        <h2 className="text-xl font-bold mb-4 mt-5">Course Grade Comparison</h2>
        <Bar data={courseData} />
      </div>
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
            <div key={subIndex} className="flex space-x-3 mb-4 mt-3">
              <input
                type="text"
                name="subject"
                value={subject.subject}
                onChange={(event) =>
                  handleInputChange(semIndex, subIndex, event)
                }
                placeholder="Subject"
                className="w-[42vw] p-2 border rounded"
              />
              <select
                name="grade"
                value={subject.grade}
                onChange={(event) =>
                  handleInputChange(semIndex, subIndex, event)
                }
                className="w-[20vw] p-2 border rounded bg-white"
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
      ))}
      <button
        onClick={handleAddSemester}
        className=" text-xl flex text justify-start border-[1px] p-1 shadow border-[#38b6ff] items-center gap-2  rounded mb-4"
      >
        <FaTelegramPlane className="text-[#38b6ff] " /> Semester
      </button>
    </div>
  );
};

export default CGPAAnalyzer;
