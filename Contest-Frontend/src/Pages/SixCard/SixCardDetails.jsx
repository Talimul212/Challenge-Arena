import { useParams } from "react-router-dom";
import styled from "styled-components";
import ClassMateCard from "../../Components/Card/ClassMateCard";
import Classes from "./Components/Classes/Classes";
import Course from "./Components/Course/Course";
import CompleteCourse from "./Components/CompleteCourse/CompleteCourse";
import TeacherList from "./Components/Teacher/TeacherList";
import ExamRoutine from "./Components/ExamRoutine/ExamRoutine";
import TuitionHome from "./Components/Tuition/TuitionHome";
import BloodBank from "./Components/BloodBank/BloodBank";
import Gellary from "./Components/gellary/Gellary";
import AboutUs from "./Components/AboutUs/AboutUs";
import Faculty from "./Components/Faculty/Faculty";
import CGPACalculator from "./Components/CGPACalculator/CGPACalculator";
import CGPAAnalyzer from "./Components/CGPAAnalyzer/CGPAAnalyzer";
// import samplePDF from "../../assets/PDF/Pdf1.pdf"; // Replace './sample.pdf' with the path to your PDF file

// Required to avoid issues with displaying PDFs in some environments
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const SixCardDetails = () => {
  const { item } = useParams();
  //   const [numPages, setNumPages] = useState(null);
  //   const [pageNumber, setPageNumber] = useState(1);

  //   function onDocumentLoadSuccess({ numPages }) {
  //     setNumPages(numPages);
  //   }

  return (
    <>
      <SixCardDetailsContainer>
        <p>{/* Page {pageNumber} of {numPages} */}</p>
        {item === "classmate" ? (
          <ClassMateCard />
        ) : item === "course" ? (
          <Course />
        ) : item === "faculty" ? (
          <Faculty />
        ) : item === "classes" ? (
          <Classes />
        ) : item === "completeCourse" ? (
          <CompleteCourse />
        ) : item === "teacher" ? (
          <TeacherList />
        ) : item === "examSchedules" ? (
          <ExamRoutine />
        ) : item === "gellary" ? (
          <Gellary />
        ) : item === "about" ? (
          <AboutUs />
        ) : item === "cgpa" ? (
          <CGPACalculator />
        ) : item === "cgpaAnalyzer" ? (
          <CGPAAnalyzer />
        ) : (
          <></>
        )}
      </SixCardDetailsContainer>
      {item === "tuition" ? (
        <TuitionHome />
      ) : item === "bloodBank" ? (
        <BloodBank />
      ) : (
        <></>
      )}
    </>
  );
};

export default SixCardDetails;
const SixCardDetailsContainer = styled.div`
  margin-bottom: 20px;
  width: 95%;
  margin: 0 auto;
`;
