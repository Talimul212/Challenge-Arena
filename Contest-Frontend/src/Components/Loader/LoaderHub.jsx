/* eslint-disable react/prop-types */
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
const LoaderHub = ({ type }) => {
  return (
    <div>
      <div className="container">
        {type === "examRoutine" ? (
          <div className="mt-4">
            <Skeleton count={1} height={"20px"} width={"100%"} />
            <div className="mt-10">
              <Skeleton count={1} height={"25px"} width={"50%"} />
              <div className="my-2">
                <Skeleton count={1} height={"60px"} width={"100%"} />
              </div>
              <div className="flex justify-between">
                <Skeleton count={1} height={"30px"} width={"100px"} />
                <div className="flex  justify-start gap-5">
                  <Skeleton count={1} height={"30px"} width={"42px"} />
                  <Skeleton count={1} height={"30px"} width={"42px"} />
                  <Skeleton count={1} height={"30px"} width={"42px"} />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <Skeleton count={1} height={"25px"} width={"50%"} />
              <div className="my-2">
                <Skeleton count={1} height={"60px"} width={"100%"} />
              </div>
              <div className="flex justify-between">
                <Skeleton count={1} height={"30px"} width={"100px"} />
                <div className="flex  justify-start gap-5">
                  <Skeleton count={1} height={"30px"} width={"42px"} />
                  <Skeleton count={1} height={"30px"} width={"42px"} />
                  <Skeleton count={1} height={"30px"} width={"42px"} />
                </div>
              </div>
            </div>
          </div>
        ) : type === "classRoutine" ? (
          <>
            <div>
              <div className="flex flex-col gap-1 mx-auto mt-4">
                <Skeleton count={1} height={"50px"} width={"95vw"} />
                <Skeleton count={1} height={"50px"} width={"95vw"} />
                <Skeleton count={1} height={"50px"} width={"95vw"} />
                <Skeleton count={1} height={"50px"} width={"95vw"} />
                <Skeleton count={1} height={"50px"} width={"95vw"} />
              </div>
            </div>
          </>
        ) : type === "classes" ? (
          <>
            <div className="my-2 flex flex-col gap-1">
              <Skeleton count={1} height={"160px"} width={"88vw"} />
              <Skeleton count={1} height={"160px"} width={"88vw"} />
            </div>
          </>
        ) : type === "course" ? (
          <>
            <div>
              <div className="flex justify-between gap-5 mt-4">
                <Skeleton count={1} height={"20px"} width={"95vw"} />
              </div>
              <div className="flex justify-between gap-5 mt-1">
                <Skeleton count={1} height={"40px"} width={"70px"} />
                <Skeleton count={1} height={"40px"} width={"70px"} />
              </div>
              <div className="flex justify-start gap-5 mt-2">
                <Skeleton count={5} height={"40px"} width={"95vw"} />
              </div>
            </div>
          </>
        ) : type === "Student" ? (
          <>
            <div style={{ marginLeft: "86px" }} className="flex gap-5">
              <div>
                <Skeleton count={1} height={"40px"} width={"500px"} />
              </div>
              <div>
                <Skeleton count={1} height={"40px"} width={"500px"} />
              </div>
              <div>
                <Skeleton count={1} height={"40px"} width={"100px"} />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                gap: "20px",
                justifyContent: "center",
                marginTop: "30px",
                marginLeft: "20px",
              }}
            >
              <Skeleton count={1} height={"200px"} width={"1120px"} />
            </div>
          </>
        ) : type === "teachers" ? (
          <>
            <div className="flex justify-between w-[97%] mx-auto mt-4">
              <Skeleton count={3} height={"160px"} width={"175px"} />
              <Skeleton count={2} height={"160px"} width={"175px"} />
            </div>
          </>
        ) : type === "classMate" ? (
          <div className="flex gap-2 flex-col mt-4">
            <Skeleton count={1} height={"60px"} width={"95vw"} />
            <Skeleton count={1} height={"60px"} width={"95vw"} />
            <Skeleton count={1} height={"60px"} width={"95vw"} />
          </div>
        ) : type === "CourseDetails" ? (
          <>
            <div className="lg:flex items-center gap-8">
              <Skeleton count={1} height={"340px"} width={"600px"} />
              <Skeleton count={1} height={"340px"} width={"500px"} />
            </div>
            <div>
              <div className="lg:flex justify-between mt-20">
                <Skeleton count={1} height={"60px"} width={"150px"} />
                <Skeleton count={1} height={"60px"} width={"150px"} />
              </div>
              <div className=" mt-20">
                <Skeleton
                  count={2}
                  marginTop={"10px"}
                  height={"70px"}
                  width={"100%"}
                />
                <Skeleton count={2} height={"70px"} width={"100%"} />
              </div>
              <div className=" mt-20">
                <Skeleton count={1} height={"60px"} width={"150px"} />
                <Skeleton
                  count={1}
                  marginTop={"10px"}
                  height={"200px"}
                  width={"100%"}
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="mt-4 mb-2">
              <Skeleton count={1} height={"20px"} width={"95vw"} />
            </div>
            <div>
              <Skeleton count={2} height={"50px"} width={"95vw"} />
              <Skeleton count={2} height={"50px"} width={"95vw"} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoaderHub;
