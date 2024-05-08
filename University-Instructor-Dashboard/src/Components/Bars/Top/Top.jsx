import logo from "../../../assets/logo/UIlogo.png";
import { CgMail } from "react-icons/cg";
const Top = () => {
  return (
    <div>
      <div className="navbar  shadow-md bg-base-100 border-b-[1px]  ps-2 px-4">
        <div className="flex-1 ">
          <div className="flex flex-shrink-0 items-center ">
            <img className="h-12 w-auto" src={logo} alt="Your Company" />
          </div>
        </div>
        <div className="flex-1 ms-[-100px]">
          <p className="text-xl font-semibold uppercase">
            <span className="text-[#00bf63]">University </span>
            Instrutor
            <span className="text-[#00bf63]"> DashBoard </span>
          </p>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className=" flex  justify-start me-4 items-center"
            >
              <div className="w-6  ">
                <img
                  className="rounded"
                  alt="Tailwind CSS Navbar component"
                  src="https://www.einfosoft.com/templates/admin/smart/source/assets/img/flags/gb.png"
                />
              </div>
              <p className="  font-semibold">English</p>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-6 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-52"
            >
              <li>
                <div className=" flex  justify-start me-2 items-center">
                  <div className="w-6  ">
                    <img
                      className="rounded"
                      alt="Tailwind CSS Navbar component"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/2000px-Flag_of_Bangladesh.svg.png"
                    />
                  </div>
                  <p className="  font-semibold">Bangla</p>
                </div>
              </li>
              <li>
                <div className=" flex  justify-start me-2 items-center">
                  <div className="w-5  ">
                    <img
                      className="rounded"
                      alt="Tailwind CSS Navbar component"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
                    />
                  </div>
                  <p className="  font-semibold">Hindi</p>
                </div>
              </li>
              <li>
                <div className=" flex  justify-start me-2 items-center">
                  <div className="w-5  ">
                    <img
                      className="rounded"
                      alt="Tailwind CSS Navbar component"
                      src="https://www.einfosoft.com/templates/admin/smart/source/assets/img/flags/gb.png"
                    />
                  </div>
                  <p className="  font-semibold">English</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="me-2">
            <p className="bg-[#00bf63]  w-4 ms-3 mb-[-10px] z-40 text-white font-semibold rounded-full text-center text-[10px]">
              3
            </p>
            <CgMail size={25} className=" -z-40" />
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-7 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
