import { useParams } from "react-router-dom";
import Faculty from "./Components/Faculty/Faculty";
import Batch from "./Components/Batch/Batch";
import Teachers from "./Components/Teachers/Teachers";
import Courses from "./Components/Courses/Courses";

const ShortHome = () => {
  const { id } = useParams();
  return (
    <div className="h-[100vh]">
      {id === "faculty" ? (
        <Faculty />
      ) : id === "batch" ? (
        <Batch />
      ) : id === "teachers" ? (
        <Teachers />
      ) : id === "courses" ? (
        <Courses />
      ) : (
        ""
      )}
    </div>
  );
};

export default ShortHome;