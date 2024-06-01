import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa6";
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
  { field: "CSE", headerName: " Computer Science & Engineering", width: 210 },
  {
    field: "BBA",
    headerName: "Bachelor of Business Administration",
    width: 210,
  },
  {
    field: "ENG",
    headerName: " Bachelor of English",
    type: "text",
    width: 210,
  },
  {
    field: "GDS",
    headerName:
      " Bachelor of Social Science in Governance & Development Studies",
    type: "text",
    width: 210,
  },
  {
    field: "HTM",
    headerName: " Bachelor of Hospitality &Tourism Management",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 210,
  },
];

const rows = [
  {
    id: 1,
    CSE: "Batch-1(spring-2022)",
    BBA: "Batch-1(spring-2022)",
    GDS: "Batch-1(spring-2022)",
    ENG: "Batch-1(spring-2022)",
    HTM: "Batch-1(spring-2022)",
  },
  {
    id: 2,
    CSE: "Batch-2(autumn-2022)",
    BBA: "Batch-2(autumn-2022)",
    GDS: "Batch-2(autumn-2022)",
    ENG: "Batch-2(autumn-2022)",
    HTM: "Batch-2(autumn-2022)",
  },
  {
    id: 3,
    CSE: "",
    BBA: "Batch-3(spring-2023)",
    GDS: "Batch-3(spring-2023)",
    ENG: "Batch-3(spring-2023)",
    HTM: "Batch-3(spring-2023)",
  },
];
const BatchTable = () => {
  const [open, setOpen] = useState("open");
  const hanlderOpen = () => {
    setOpen(!open);
  };
  return (
    <div className=" mt-5 me-9 ms-6  mb-16 ">
      <div
        style={{
          height: open ? 400 : 100,
          width: "90vw",
        }}
      >
        <p className=" flex items-center justify-between  mt-2 text-lg font-semibold shadow-lg mb-1  bg-white rounded p-2 ">
          Faculty Batch List:
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
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BatchTable;
