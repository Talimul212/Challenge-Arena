import { useParams } from "react-router-dom";
import Faculty from "./Components/Faculty/Faculty";

const ShortHome = () => {
  const { id } = useParams();
  return (
    <div>
      {id === "faculty" ? <Faculty /> : id === "batch" ? <>batch</> : ""}
    </div>
  );
};

export default ShortHome;
