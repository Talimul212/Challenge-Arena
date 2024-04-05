import { useParams } from "react-router-dom";
// import { useState } from "react";
import styled from "styled-components";
import ClassMateCard from "../../Components/Card/ClassMateCard";
import Classes from "./Components/Classes/Classes";
import Course from "./Components/Course/Course";
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
    <SixCardDetailsContainer>
      <p>{/* Page {pageNumber} of {numPages} */}</p>
      {item === "classmate" ? (
        <ClassMateCard />
      ) : item === "course" ? (
        <Course />
      ) : item === "classes" ? (
        <Classes />
      ) : (
        <></>
      )}
    </SixCardDetailsContainer>
  );
};

export default SixCardDetails;
const SixCardDetailsContainer = styled.div`
  margin-bottom: 20px;
  width: 95%;
  margin: 0 auto;
`;
