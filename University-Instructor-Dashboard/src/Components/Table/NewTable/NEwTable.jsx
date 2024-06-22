import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../features/users/serviceApi";

const NEwTable = () => {
  const [open, setOpen] = useState(true);
  const hanlderOpen = () => {
    setOpen(!open);
  };

  const { totalUser, isLoading } = useSelector((state) => state?.user);
  const dispatch = useDispatch();

  useEffect(() => {
    getUser(dispatch);
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const columns = [
    { field: "studentId", headerName: "S.ID", width: 90 },
    {
      field: "photoURL",
      headerName: "",
      renderCell: (params) => {
        return (
          <div className="">
            <img
              className="rounded"
              src={`http://localhost:8000/images/${params?.row?.photoURL?.filename}`}
              alt="avatar"
            />
            {params.row.name}
          </div>
        );
      },
      width: 70,
    },
    { field: "name", headerName: "Name", width: 150 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "department", headerName: "Department", width: 150 },
    { field: "batch", headerName: "Batch", width: 90 },
    { field: "semseter", headerName: "Semester", width: 90 },
    { field: "gender", headerName: "Gender", width: 90 },
    { field: "createdAt", headerName: "Admission Data", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="flex justify-start mt-4 items-center gap-3">
            <div
              title="View"
              className="bg-[#00bf63] text-white border px-3 rounded shadow hover:bg-transparent hover:border-[#38b6ff] hover:text-[#38b6ff] cursor-pointer duration-700"
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

  return (
    <div className="mt-5 me-6 mb-6">
      <div style={{ height: open ? 400 : 15, width: "100%" }}>
        <p className="flex items-center justify-between mt-2 text-lg font-semibold shadow-lg mb-1 bg-white rounded p-2">
          New Student List:
          {open ? (
            <span onClick={hanlderOpen}>
              <FaAngleDown />
            </span>
          ) : (
            <span className="duration-300" onClick={hanlderOpen}>
              <FaChevronUp />
            </span>
          )}
        </p>
        {!open ? (
          ""
        ) : (
          <div className="duration-300">
            <DataGrid
              rows={
                totalUser?.map((user, index) => ({ ...user, id: index + 1 })) ||
                []
              }
              columns={columns}
              className="shadow-lg bg-white"
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

export default NEwTable;
