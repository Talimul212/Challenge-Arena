/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { IoIosPersonAdd } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";
import { LiaSortAmountUpSolid } from "react-icons/lia";
import { CgDetailsMore } from "react-icons/cg";
import { useState } from "react";
import TeacherModale from "../../Modal/TeacherModale/TeacherModale";
import CoursesModal from "../../Modal/CoursesModal/CoursesModal";
// eslint-disable-next-line react/prop-types
const TeachersTable = ({ data, course }) => {
  const [teacher, setTeacher] = useState(null);
  const [cour, setCourse] = useState(null);
  const len = (n) => {
    const count = course?.find((it) => it?.teacherName === n);
    return <p>{count?.relatedBooks?.length || 0}</p>;
  };
  const toggleModal = (id, type, n) => {
    document.getElementById("my_modal_3").showModal();
    if (type == "teacher") {
      const single = data?.find((item) => item._id == id);
      setTeacher(single);
    } else {
      const count = course?.find((it) => it?.teacherName === n);
      setCourse(count);
    }
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
    {
      field: "photoURL",
      headerName: "",
      renderCell: (params) => {
        return (
          <div className="">
            <img
              className="rounded"
              src={`http://localhost:8000/images/${params?.row?.photoURL?.filename}`}
            />
            {params.row.name}
          </div>
        );
      },
      width: 70,
    },
    { field: "name", headerName: "Name", width: 130 },
    { field: "gender", headerName: "Gender", width: 100 },
    { field: "position", headerName: "Position", width: 110 },
    { field: "department", headerName: "Department", width: 170 },
    {
      field: "email",
      headerName: "Email",
      renderCell: (params) => {
        return (
          <div className="text-center text-[#00bf63]">{params.row.email}</div>
        );
      },
      width: 150,
    },
    {
      field: "whatsappNumber",
      headerName: "Mobile Number",
      renderCell: (params) => {
        return (
          <div className="text-center text-[#00bf63]">
            {params.row.whatsappNumber}
          </div>
        );
      },
      width: 120,
    },
    {
      field: "courseList",
      headerName: "Course List",
      renderCell: (params) => {
        return (
          <div className="flex justify-around items-center ">
            <div
              title="View"
              className=" bg-[#00bf63] text-white border px-3 rounded shadow hover:bg-transparent hover:border-[#38b6ff] hover:text-[#38b6ff] cursor-pointer duration-700"
              onClick={() =>
                toggleModal(params.row._id, "course", params?.row?.name)
              }
            >
              <CgDetailsMore size={17} />
            </div>
            <div className="flex justify-start items-center ">
              <LiaSortAmountUpSolid size={17} color="#38b6ff" />
              <p>{len(params?.row?.name)}</p>
            </div>
          </div>
        );
      },
      width: 160,
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
              onClick={() => toggleModal(params.row._id, "teacher")}
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
    <div className=" me-6  mb-16 ">
      <div style={{ height: open ? 400 : 100, width: "90vw" }}>
        <div className="flex items-center justify-between  mt-2 text-lg font-semibold shadow-lg mb-1  bg-white rounded p-2 ">
          <p>Teachers List:</p>
          <Link
            to="/UI/teacherForm"
            className="bg-[#00bf63] duration-700 px-4 rounded shadow hover:text-[#38b6ff] border hover:bg-transparent hover:border-[#38b6ff]  text-white py-1"
          >
            <IoIosPersonAdd />
          </Link>
        </div>
        <div className=" duration-300">
          <DataGrid
            rows={
              data?.map((user, index) => ({ ...user, id: index + 1 })) || []
            }
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
      <TeacherModale teacher={teacher} />
      <CoursesModal modalData={cour} />
    </div>
  );
};

export default TeachersTable;
