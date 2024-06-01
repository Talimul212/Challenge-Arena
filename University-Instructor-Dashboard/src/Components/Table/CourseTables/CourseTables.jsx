/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { FcAddDatabase } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";
import { LiaSortAmountUpSolid } from "react-icons/lia";
import { CgDetailsMore } from "react-icons/cg";
import CoursesModal from "../../Modal/CoursesModal/CoursesModal";
import { useState } from "react";
const CourseTables = ({ type }) => {
  const [modalData, setModalData] = useState();
  const toggleModal = (id) => {
    document.getElementById("my_modal_3").showModal();
    setModalData(id);
  };
  const columns = [
    {
      field: "id",
      type: "number",
      headerName: "S.No",
      renderCell: (params) => {
        return (
          <div className="text-center font-semibold ">{params.row.id}</div>
        );
      },
      width: 70,
    },
    { field: "name", headerName: "Course Name", width: 170 },
    { field: "credits", headerName: "Credits", width: 100 },
    { field: "courseCode", headerName: "Course Code", width: 130 },
    {
      field: "hours",
      headerName: "Hours",
      width: 100,
    },
    {
      field: "batch",
      headerName: "Batch",
      width: 100,
    },
    {
      field: "type",
      headerName: "Type",
      width: 100,
    },
    { field: "teacherName", headerName: "Course Teacher", width: 140 },
    {
      field: "relatedBooks",
      headerName: "Related Books",
      renderCell: (params) => {
        return (
          <div className="flex justify-around items-center ">
            <button onClick={() => toggleModal("1")}>
              <div
                title="View"
                className=" bg-[#00bf63] text-white border px-3 rounded shadow hover:bg-transparent hover:border-[#38b6ff] hover:text-[#38b6ff] cursor-pointer duration-700"
                // onClick={() => toggleModal(params.row._id)}
              >
                <CgDetailsMore size={17} />
              </div>
            </button>
            <div className="flex items-center ">
              <LiaSortAmountUpSolid size={17} color="#38b6ff" />
              <p>2</p>
            </div>
          </div>
        );
      },
      width: 170,
    },
  ];
  const handleDelete = () => {
    // Swal.fire({
    //   title: "Are you sure?",
    //   text: "You want to delete  review",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Delete",
    // }).then(async (result) => {
    //   if (result.isConfirmed) {
    //     try {
    //       await makeRequest.delete(`/review/${id}`);
    //       setData(data.filter((item) => item._id !== id));
    //       Swal.fire("Updated", "Deleted Successfully", "success");
    //     } catch (err) {
    //       Swal.fire("Failed", "Fail to delete", "error");
    //     }
    //   }
    // });
  };

  const rows = [
    {
      id: 1,
      name: "Theory of Computation",
      credits: "3",
      teacherName: "Smith",
      hours: "30",
      type: "Theory",
      courseCode: "CSE110",
      batch: "5th,3th",
    },
  ];
  const actionColumn = [
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

  return (
    <>
      {type == "CSE" ? (
        <div className=" me-6  mb-16 duration-700">
          <div style={{ height: open ? 400 : 100, width: "90vw" }}>
            <div className="flex items-center justify-between  mt-2 text-lg font-semibold shadow-lg mb-1  bg-white rounded p-2 ">
              <p>Department of {type}</p>
              <Link
                to="/UI/courses/addForm"
                className="bg-[#00bf63] duration-700 px-4 rounded shadow hover:text-[#38b6ff] border hover:bg-transparent hover:border-[#38b6ff]  text-white py-1"
              >
                <FcAddDatabase />
              </Link>
            </div>
            <div className=" duration-300">
              <DataGrid
                rows={rows}
                columns={columns.concat(actionColumn)}
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
          </div>
        </div>
      ) : type == "BBA" ? (
        <p>BBA</p>
      ) : type == "ENG" ? (
        <p>ENG</p>
      ) : type == "GDS" ? (
        <p>GDS</p>
      ) : type == "HTM" ? (
        <p>HTM</p>
      ) : (
        ""
      )}
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <CoursesModal modalData={modalData} />
    </>
  );
};

export default CourseTables;
