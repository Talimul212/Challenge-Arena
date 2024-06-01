import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";
const columns = [
  {
    field: "id",
    type: "number",
    headerName: "S.No",
    renderCell: (params) => {
      return <div className="text-center font-semibold ">{params.row.id}</div>;
    },
    width: 70,
  },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
  {
    field: "action",
    headerName: "Action",
    width: 130,
    renderCell: (params) => {
      return (
        <div className=" flex justify-start mt-4 items-center gap-3">
          <div
            title="View"
            className=" bg-[#00bf63] text-white border  px-3 rounded shadow hover:bg-transparent hover:border-[#38b6ff] hover:text-[#38b6ff] cursor-pointer duration-700"
            // onClick={() => toggleModal(params.row._id)}
          >
            <FaEye size={17} />
          </div>
          <div
            className="bg-[#38b6ff] text-white border px-3 rounded shadow hover:bg-transparent hover:border-[#d33] hover:text-[#d33] cursor-pointer duration-700"
            // onClick={() => handleDelete(params.row._id)}
          >
            <BsTrash size={17} />
          </div>
        </div>
      );
    },
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];
const ExamTopper = () => {
  const [open, setOpen] = useState("open");
  const hanlderOpen = () => {
    setOpen(!open);
  };
  return (
    <div className=" mt-5 me-6  mb-16 ">
      <div style={{ height: open ? 400 : 100, width: "55vw" }}>
        <p className=" flex items-center justify-between  mt-2 text-lg font-semibold shadow-lg mb-1  bg-white rounded p-2 ">
          Exam Toppers :
          {open ? (
            <span onClick={hanlderOpen}>
              <FaAngleDown />
            </span>
          ) : (
            <span className=" duration-300" onClick={hanlderOpen}>
              <FaChevronUp />
            </span>
          )}
        </p>
        {!open ? (
          ""
        ) : (
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
              rowSelection={false}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ExamTopper;
