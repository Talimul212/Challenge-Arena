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
const CourseTables = ({ data, type, name }) => {
  const [modalData, setModalData] = useState();
  const [cousrseD, setCourseD] = useState();
  const toggleModal = (data) => {
    document.getElementById("my_modal_3").showModal();
    setModalData(data);
  };
  const coureModal = (n) => {
    console.log(n);
    document.getElementById("my_modal_4").showModal();
    const count = data?.find((it) => it?._id === n);
    console.log(count);
    setCourseD(count);
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
    { field: "courseName", headerName: "Course Name", width: 170 },
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
            <button onClick={() => toggleModal(params?.row?.relatedBooks)}>
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
              <p>
                {params?.row?.relatedBooks.length
                  ? params?.row?.relatedBooks.length
                  : 0}
              </p>
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

  const individual = data?.filter((item) => item.department === type);
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
              onClick={() => coureModal(params.row._id)}
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
      <div className="  mb-10 duration-700">
        <div style={{ height: open ? 400 : 100, width: "1235px" }}>
          <div className=" duration-300">
            {individual ? (
              <DataGrid
                rows={
                  individual?.map((user, index) => ({
                    ...user,
                    id: index + 1,
                  })) || []
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
            ) : (
              <p>hgkja</p>
            )}
          </div>
        </div>
      </div>

      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <CoursesModal type={"courseBook"} modalData={modalData} />
      <CoursesModal type={"courseDetails"} modalData={cousrseD} />
    </>
  );
};

export default CourseTables;
