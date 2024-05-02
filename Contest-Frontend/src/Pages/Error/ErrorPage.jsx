// import logo from "../../assets/logo/BU.png";
import { FaRegFaceSadTear } from "react-icons/fa6";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center left-[27vw] top-[28vh] absolute">
      <p>
        <FaRegFaceSadTear className=" text-[#00bf63]" size={"150px"} />
        {/* <img src={logo} alt="" /> */}
      </p>
      <p className="text-5xl text-[#00bf63] font-semibold my-2">404</p>
      <p className="text-2xl text-[#00bf63] font-semibold ">Pages Not Found </p>
      <Link
        to={"/login"}
        className="text-2xl text-white bg-[#00bf63] px-2 text-center font-semibold  rounded cursor-pointer mt-3 py-1 hover:bg-[#20f58e] "
      >
        Go Back
      </Link>
    </div>
  );
};

export default ErrorPage;
