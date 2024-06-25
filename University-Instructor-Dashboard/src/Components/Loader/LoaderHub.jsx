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
        ) : type === "courses" ? (
          <>
            <div className="lg:flex items-center gap-2">
              <Skeleton count={2} height={"120px"} width={"30vw"} />
              <Skeleton count={2} height={"120px"} width={"29vw"} />
              <Skeleton count={2} height={"120px"} width={"30vw"} />
            </div>
            <div>
              <div className="lg:flex justify-between mt-8 mb-2">
                <Skeleton count={1} height={"50px"} width={"90vw"} />
              </div>
              <div className=" flex justify-start gap-3">
                <Skeleton
                  count={3}
                  style={{ marginBottom: "2px" }}
                  height={"60px"}
                  width={"90vw"}
                />
              </div>
            </div>
          </>
        ) : type === "Student" ? (
          <>
            <div
              style={{
                display: "flex",
                gap: "20px",
                justifyContent: "center",
                marginTop: "30px",
                marginLeft: "-30px",
              }}
            >
              <Skeleton
                className=" shadow"
                count={1}
                height={"50px"}
                width={"90vw"}
              />
            </div>
            <div style={{ marginTop: "10px" }} className="flex gap-5">
              <div>
                <Skeleton
                  className=" shadow"
                  count={1}
                  height={"40px"}
                  width={"300px"}
                />
              </div>
              <div>
                <Skeleton
                  className=" shadow"
                  count={1}
                  height={"40px"}
                  width={"300px"}
                />
              </div>
              <div>
                <Skeleton count={1} height={"40px"} width={"300px"} />
              </div>
              <div>
                <Skeleton count={1} height={"40px"} width={"100px"} />
              </div>
              <div>
                <Skeleton count={1} height={"40px"} width={"150px"} />
              </div>
            </div>
            <div style={{ marginTop: "10px" }} className="flex gap-5">
              <div>
                <Skeleton
                  className=" shadow"
                  count={4}
                  height={"40px"}
                  width={"300px"}
                />
              </div>
              <div>
                <Skeleton
                  className=" shadow"
                  count={4}
                  height={"40px"}
                  width={"300px"}
                />
              </div>
              <div>
                <Skeleton
                  className=" shadow"
                  count={4}
                  height={"40px"}
                  width={"300px"}
                />
              </div>
              <div>
                <Skeleton
                  className=" shadow"
                  count={4}
                  height={"40px"}
                  width={"100px"}
                />
              </div>
              <div>
                <Skeleton
                  className=" shadow"
                  count={4}
                  height={"40px"}
                  width={"150px"}
                />
              </div>
            </div>
          </>
        ) : type === "teachersList" ? (
          <>
            <div>
              <div className="lg:flex justify-start gap-3">
                <Skeleton count={1} height={"50px"} width={"82vw"} />
                <Skeleton count={1} height={"50px"} width={"7vw"} />
              </div>
              <div className="mt-3 flex justify-start gap-3">
                <Skeleton
                  count={8}
                  marginTop={"10px"}
                  height={"40px"}
                  width={"90vw"}
                />
              </div>
            </div>
          </>
        ) : type === "faculty" ? (
          <div className="flex gap-2 justify-start">
            <Skeleton
              className=" shadow-md"
              count={2}
              height={"110px"}
              width={"20vw"}
              style={{ marginBottom: "5px" }}
            />
            <Skeleton
              className=" shadow-md"
              count={2}
              height={"110px"}
              style={{ marginBottom: "5px" }}
              width={"20vw"}
            />
          </div>
        ) : type === "facultyCard" ? (
          <>
            <div className="flex justify-start gap-5">
              <div className="flex gap-2 justify-start">
                <Skeleton
                  className=" shadow-md"
                  count={3}
                  height={"190px"}
                  width={"20vw"}
                  style={{ marginBottom: "5px" }}
                />
                <Skeleton
                  className=" shadow-md"
                  count={2}
                  height={"190px"}
                  style={{ marginBottom: "5px" }}
                  width={"20vw"}
                />
                <Skeleton
                  className=" shadow-md"
                  count={2}
                  height={"190px"}
                  style={{ marginBottom: "5px" }}
                  width={"20vw"}
                />
              </div>
              <div>
                <Skeleton
                  className=" shadow-md"
                  count={1}
                  height={"70px"}
                  width={"28vw"}
                />
              </div>
            </div>
          </>
        ) : type === "batch" ? (
          <>
            <div className="lg:flex items-center gap-2">
              <Skeleton count={2} height={"60px"} width={"30vw"} />
              <Skeleton count={2} height={"60px"} width={"29vw"} />
              <Skeleton count={2} height={"60px"} width={"30vw"} />
            </div>
            <div>
              <div className="lg:flex justify-between mt-8">
                <Skeleton count={1} height={"50px"} width={"90vw"} />
              </div>
              <div className=" flex justify-start gap-3">
                <Skeleton
                  count={1}
                  marginTop={"10px"}
                  height={"100px"}
                  width={"300px"}
                />
                <Skeleton count={1} height={"100px"} width={"300px"} />
                <Skeleton count={1} height={"100px"} width={"300px"} />
                <Skeleton count={1} height={"100px"} width={"293px"} />
              </div>
              <div className=" flex justify-start gap-3">
                <Skeleton
                  count={3}
                  marginTop={"10px"}
                  height={"50px"}
                  width={"300px"}
                />
                <Skeleton count={2} height={"50px"} width={"300px"} />
                <Skeleton count={1} height={"50px"} width={"300px"} />
                <Skeleton count={2} height={"50px"} width={"293px"} />
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
