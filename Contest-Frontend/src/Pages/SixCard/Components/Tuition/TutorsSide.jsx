import { Link } from "react-router-dom";
import boy from "../../../../assets/avater/boy.png";
import girl from "../../../../assets/avater/girl.svg";
import { TiMessages } from "react-icons/ti";
const TutorsSide = () => {
  return (
    <div className="mb-5">
      <div className="flex justify-between items-center me-3 mb-[-8px]">
        <div
          role="alert"
          className="p-3 rounded-lg flex justify-start items-center gap-3 bg-white"
        >
          <div className="avatar">
            <div className="w-16  rounded-full  ring-offset-base-100 ring-offset-[1px]">
              <img src={boy} alt="Avatar" />
            </div>
          </div>
          <div className="">
            <h3 className="font-bold">Hasna MD: Hosan Shakib </h3>{" "}
            {/* Assuming item has a 'name' property */}
            <div>
              <p className=" text-sm">
                dsjhflkajf hfkjlsdjhf fhsdhf fjsdlkjf jkhsjkfdh
                kjjshdfjhofgjshj;lkgj;shusgtrj; fhasfhhskdfal jhflksaf
                akjkhfljsaf
              </p>
            </div>
            <h3 className="font-[500] text-[#38b6ff]">
              Bandarban member para Bandarban sadar
            </h3>{" "}
          </div>
        </div>
        <Link to="/chatBox">
          <div className=" font-bold text-[#38b6ff] text-xl">
            <TiMessages />
          </div>
        </Link>
      </div>
      <div className="flex justify-between items-center me-3">
        <div
          role="alert"
          className="p-3 rounded-lg flex justify-start items-center gap-3 bg-white"
        >
          <div className="avatar">
            <div className="w-16  rounded-full  ring-offset-base-100 ring-offset-[1px]">
              <img src={girl} alt="Avatar" />
            </div>
          </div>
          <div className="">
            <h3 className="font-bold">Hasna MD: Hosan Shakib </h3>{" "}
            {/* Assuming item has a 'name' property */}
            <div>
              <p className=" text-sm">dsjhflkajf jhflksaf akjkhfljsaf</p>
            </div>
            <h3 className="font-[500] text-[#38b6ff]">
              Bandarban 9 no Bandarban sadar
            </h3>{" "}
          </div>
        </div>
        <Link to="/chatBox">
          <div className=" font-bold text-[#38b6ff] text-xl">
            <TiMessages />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TutorsSide;
