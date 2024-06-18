import Logo from "../../../../assets/logo/BU.png";
import Leader from "../../../../assets/aboutImg/leader.jpg";
import saimon from "../../../../assets/aboutImg/saimon1.jpg";
import ovi from "../../../../assets/aboutImg/Ovi2.jpg";
import { FaGraduationCap } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
const AboutUs = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <img
          src={Logo}
          className=" w-24 my-5 border-[1px] rounded border-[#38b6ff] shadow"
          alt=""
        />
        <p className="text-xl font-semibold">
          <span className="text-[#00bf53]">University</span> - Instructor App
          For Android
        </p>
        <p className="my-4 text-left text-xl font-semibold">
          <span className="text-[#00bf53]">Last Update</span> - 15 june, 2024
        </p>
        <p className="mb-2 text-left text-xl font-semibold">
          <span className="text-[#00bf53]">Version</span> - 2.0.0
        </p>
      </div>
      <p className=" text-justify  mt-4">
        Welcome to Unversity-Instructor, the all-in-one platform designed to
        enhance the educational experience for students and educators alike. Our
        mission is to create a seamless and interactive environment where
        students can easily manage their academic life and connect with their
        peers and teachers.
      </p>
      <p className=" text-2xl font-semibold text-center  shadow rounded text-[#38b6ff]  py-1 mt-5">
        -: Team Member :-
      </p>

      <p className=" text-2xl font-semibold text-[#00bf63] mt-4">Team Leader</p>
      <div className="mb-10">
        <div className=" shadow p-3 flex justify-between rounded">
          <div className="avatar text-center">
            <div className="w-32 rounded ">
              <img src={Leader} />
            </div>
          </div>
          <div>
            <p className=" text-xl font-semibold">Talimul Islma</p>
            <p
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                gap: "4px",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              <FaGraduationCap /> BS in CSE{" "}
              <span className="text-[#38b6ff]">(5th Batch)</span>
            </p>
            <p
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                gap: "4px",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              <FaUniversity />
              Bandarban University
            </p>
            <p
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                gap: "4px",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              <CgMail />
              <u> islamtalimul@0gmail.com</u>
            </p>
          </div>
        </div>
        <p className=" text-right text-2xl font-semibold mt-4 text-[#00bf63]">
          App Designer
        </p>
        <div className=" shadow p-3 flex justify-between rounded">
          <div>
            <p className=" text-2xl font-semibold">Saimon Chowdhury </p>
            <p
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                gap: "4px",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              <FaGraduationCap /> BS in CSE
              <span className="text-[#38b6ff]">(4th Batch)</span>
            </p>
            <p
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                gap: "4px",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              <FaUniversity />
              Bandarban University
            </p>
            <p
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                gap: "4px",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              <CgMail />
              <u> saimon@1gmail.com</u>
            </p>
          </div>
          <div className="avatar text-center">
            <div className="w-32 rounded ">
              <img src={saimon} />
            </div>
          </div>
        </div>
        <p className=" text-left text-2xl font-semibold mt-4 text-[#00bf63]">
          Data Analyst
        </p>
        <div className=" shadow p-3 flex justify-between rounded">
          <div className="avatar text-center">
            <div className="w-32 rounded ">
              <img src={ovi} />
            </div>
          </div>
          <div>
            <p className=" text-2xl font-semibold">Ikhtiyar Ovi </p>
            <p
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                gap: "4px",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              <FaGraduationCap /> BS in CSE
              <span className="text-[#38b6ff]">( Special Batch)</span>
            </p>
            <p
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                gap: "4px",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              <FaUniversity />
              Bandarban University
            </p>
            <p
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                gap: "4px",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              <CgMail />
              <u> ikhtiyar@2gmail.com</u>
            </p>
          </div>
        </div>
      </div>
      <div className="mb-24">
        <p className=" text-xl  mb-1">What We Offer</p>
        <ul className=" flex flex-wrap gap-2">
          <li className=" border-[1px] p-1 rounded border-[#00bf63] text-[#00bf63] font-semibold">
            <>Class Routine Management</>
          </li>
          <li className=" border-[1px] p-1 rounded border-[#00bf63] text-[#00bf63] font-semibold">
            <>Classmate Directory</>
          </li>
          <li className=" border-[1px] p-1 rounded border-[#00bf63] text-[#00bf63] font-semibold">
            <>Exam Schedules</>
          </li>
          <li className=" border-[1px] p-1 rounded border-[#00bf63] text-[#00bf63] font-semibold">
            <>Teacher Listings</>
          </li>
          <li className=" border-[1px] p-1 rounded border-[#00bf63] text-[#00bf63] font-semibold">
            <>Course Management</>
          </li>
          <li className=" border-[1px] p-1 rounded border-[#00bf63] text-[#00bf63] font-semibold">
            <>Book Marketplace</>
          </li>
          <li className=" border-[1px] p-1 rounded border-[#00bf63] text-[#00bf63] font-semibold">
            <>CGPA Calculator</>
          </li>
          <li className=" border-[1px] p-1 rounded border-[#00bf63] text-[#00bf63] font-semibold">
            Tutor Requests
          </li>
          <li className=" border-[1px] p-1 rounded border-[#00bf63] text-[#00bf63] font-semibold">
            Blood Bank
          </li>
          <li className=" border-[1px] p-1 rounded border-[#00bf63] text-[#00bf63] font-semibold">
            Poll Create
          </li>
          <li className=" border-[1px] p-1 rounded border-[#00bf63] text-[#00bf63] font-semibold">
            Additional Tools
          </li>
        </ul>
        <h3 className=" text-xl mt-5 mb-1">Future Enhancements</h3>
        <ul className="flex flex-wrap gap-2">
          <li className=" border-[1px] p-1 rounded border-[#00bf63] text-[#00bf63] font-semibold">
            Messaging
          </li>
          <li className=" border-[1px] p-1 rounded border-[#00bf63] text-[#00bf63] font-semibold">
            Group Video Calls
          </li>
          <li className=" border-[1px] p-1 rounded border-[#00bf63] text-[#00bf63] font-semibold">
            Cloud Storage
          </li>
          <li className=" border-[1px] p-1 rounded border-[#00bf63] text-[#00bf63] font-semibold">
            Blogging
          </li>
          <li className=" border-[1px] p-1 rounded border-[#00bf63] text-[#00bf63] font-semibold">
            AI Mind
          </li>
        </ul>
      </div>
    </>
  );
};

export default AboutUs;
