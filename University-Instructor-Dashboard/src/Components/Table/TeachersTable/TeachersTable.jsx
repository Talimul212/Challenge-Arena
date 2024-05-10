import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { IoIosPersonAdd } from "react-icons/io";
const columns = [
  { field: "photoURL", headerName: "", width: 70 },
  { field: "name", headerName: "Name", width: 120 },
  { field: "email", headerName: "Email", width: 120 },
  { field: "gender", headerName: "Gender", width: 100 },
  { field: "position", headerName: "Position", width: 110 },
  { field: "department", headerName: "Department", width: 130 },
  {
    field: "mobileNumber ",
    headerName: "Mobile Number",
    width: 120,
  },
  {
    field: "courseList",
    headerName: "Course List",
    width: 120,
  },
  {
    field: "action",
    headerName: "Action",
    width: 100,
  },
];

const rows = [
  {
    id: 1,
    name: "Snow",
    gender: "male",
    position: "prfosser",
    email: "Jon@gmail.coms",
    department: "CSE",
    mobileNumber: "4525",
  },
];
const TeachersTable = () => {
  const [open, setOpen] = useState("open");
  const hanlderOpen = () => {
    setOpen(!open);
  };
  return (
    <div className=" me-6  mb-16 ">
      <div style={{ height: open ? 400 : 100, width: "90vw" }}>
        <p className=" flex items-center justify-between  mt-2 text-lg font-semibold shadow-lg mb-1  bg-white rounded p-2 ">
          Teachers List:
          <span
            className="bg-[#00bf63] px-4 rounded shadow hover:text-[#38b6ff] border hover:bg-transparent hover:border-[#38b6ff]  text-white py-1"
            onClick={hanlderOpen}
          >
            <IoIosPersonAdd />
          </span>
        </p>

        <div className=" duration-300">
          <DataGrid
            rows={rows}
            columns={columns}
            className="shadow-lg bg-white duration-300"
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
};

export default TeachersTable;
