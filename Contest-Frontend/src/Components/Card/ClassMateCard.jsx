/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "../../features/users/serviceApi";
import { vercel } from "../../helpers/api";
import LoaderHub from "../Loader/LoaderHub";
const ClassMateCard = () => {
  const { totalUser, isLoading } = useSelector((state) => state?.user);
  const { currentUser } = useSelector((state) => state?.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    getUser(dispatch, currentUser.batch, currentUser.semseter, currentUser._id);
  }, [dispatch, currentUser.batch, currentUser.semseter, currentUser._id]);
  if (isLoading) {
    <p>lolo</p>;
  }

  return (
    <>
      {!totalUser ? (
        <LoaderHub type={"classMate"} />
      ) : (
        <div className="mt-4">
          <div>
            {totalUser?.map((item, i) => (
              <div
                key={item._id}
                role="alert"
                className="p-3 rounded-lg flex justify-between items-center bg-white shadow border-[1px] mb-3"
              >
                <div className="gap-4 flex">
                  <div className="avatar">
                    <div className="w-12 rounded-full ring ring-[#00bf63] ring-offset-base-100 ring-offset-[1px]">
                      <img
                        src={`${vercel}/images/${item?.photoURL?.filename}`}
                        alt="Avatar"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold">{item.name}</h3>{" "}
                    {/* Assuming item has a 'name' property */}
                    <div className="text-xs">
                      <span className=" font-medium text-sm">Student ID:</span>
                      {item.studentId}
                    </div>
                  </div>
                </div>
                {/* <Link to={`/details/${item._id}`}> */}
                {/* {" "} */}
                {/* <button className="text-[#00bf63] hover:text-black"> */}
                {/* <FaEye /> */}
                {/* </button> */}
                {/* </Link> */}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ClassMateCard;
