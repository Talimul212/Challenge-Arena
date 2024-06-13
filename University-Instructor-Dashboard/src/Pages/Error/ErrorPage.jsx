// import logo from "../../assets/logo/BU.png";
import { FaRegFaceSadTear } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col relative top-32 justify-center items-center ">
      <p>
        <FaRegFaceSadTear className=" text-[#00bf63]" size={"150px"} />
        {/* <img src={logo} alt="" /> */}
      </p>
      <p className="text-5xl text-[#00bf63] font-semibold my-2">404</p>
      <p className="text-2xl text-[#00bf63] font-semibold ">Pages Not Found </p>
      <Link
        to="/"
        className="text-2xl text-white bg-[#00bf63] px-2 text-center font-semibold border-[1px] border-[#00bf63]  rounded cursor-pointer mt-3 py-1 hover:bg-transparent hover:text-[#00bf63] duration-700 "
      >
        Go Back
      </Link>
    </div>
  );
};

export default ErrorPage;
