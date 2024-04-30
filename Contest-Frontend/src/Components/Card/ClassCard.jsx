import styled from "styled-components";
import { bgColor } from "../Color/Color";
import { BiLike } from "react-icons/bi";
import { FaRegFaceSmileWink } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getClasses } from "../../features/classRoutine/serviceApi";
import LoaderHub from "../Loader/LoaderHub";
const ClassCard = () => {
  const { data, isLoading } = useSelector((state) => state?.classRoutine);
  const dispatch = useDispatch();
  useEffect(() => {
    getClasses(dispatch);
  }, [dispatch]);
  if (!isLoading) {
    <LoaderHub type={"classes"} />;
  }
  const todayClasses = (data) => {
    const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
    return data?.filter((classItem) => classItem?.day === today);
  };

  const tomorrowClasses = (data) => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowDay = tomorrow.toLocaleDateString("en-US", {
      weekday: "long",
    });
    return data?.filter((classItem) => classItem?.day === tomorrowDay);
  };
  const todayClassesData = todayClasses(data);
  const tomorrowClassesData = tomorrowClasses(data);
  return (
    <>
      {!data ? (
        <LoaderHub type={"classes"} />
      ) : (
        <Container>
          {todayClassesData == 0 ? (
            <>
              <CardContainer>
                <Div>
                  <p style={{ textTransform: "uppercase", color: "black" }}>
                    Today
                  </p>
                  <p
                    style={{
                      fontSize: "13px",
                      padding: "3px 6px 3px 6px",
                      borderRadius: "5px",
                      color: "gray",
                      fontWeight: "600",
                      background: "#ffffffc5",
                    }}
                  >
                    {new Date().toLocaleDateString("en-US", {
                      weekday: "long",
                      day: "numeric",
                      month: "short",
                    })}
                  </p>
                </Div>
                <Div1>
                  <FaRegFaceSmileWink color="gray" size={"40px"} />
                  <p
                    className="mt-2"
                    style={{
                      fontSize: "13px",
                      padding: "3px 6px 3px 6px",
                      borderRadius: "5px",
                      color: "gray",
                      fontWeight: "600",
                      background: "#ffffffc5",
                    }}
                  >
                    No More Class Today
                  </p>
                </Div1>
              </CardContainer>
            </>
          ) : (
            <>
              {todayClassesData?.map((classItem) => (
                <CardContainer key={classItem?._id}>
                  <Div>
                    <p style={{ textTransform: "uppercase", color: "black" }}>
                      TODay
                    </p>
                    <p
                      style={{
                        fontSize: "13px",
                        padding: "3px 6px 3px 6px",
                        borderRadius: "5px",
                        color: "gray",
                        fontWeight: "600",
                        background: "#ffffffc5",
                      }}
                    >
                      {classItem?.day},{" "}
                      {new Date().toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                      })}
                    </p>
                  </Div>
                  <Div1>
                    <BiLike color="gray" size={"40px"} />
                    <p
                      className="mt-2"
                      style={{
                        fontSize: "13px",
                        padding: "3px 6px 3px 6px",
                        borderRadius: "5px",
                        color: "gray",
                        fontWeight: "600",
                        background: "#ffffffc5",
                      }}
                    >
                      {classItem?.courses[0].period}
                    </p>
                    <p style={{ color: "gray", marginTop: "10px" }}>
                      {classItem?.courses[0].courseName}
                    </p>
                  </Div1>
                </CardContainer>
              ))}
            </>
          )}
          {tomorrowClassesData == 0 ? (
            <>
              <CardContainer>
                <Div>
                  <p style={{ textTransform: "uppercase", color: "black" }}>
                    Tomorrow
                  </p>
                  <p
                    style={{
                      fontSize: "13px",
                      padding: "3px 6px 3px 6px",
                      borderRadius: "5px",
                      color: "gray",
                      fontWeight: "600",
                      background: "#ffffffc5",
                    }}
                  >
                    {new Date().toLocaleDateString("en-US", {
                      weekday: "long",
                      day: "numeric",
                      month: "short",
                    })}
                  </p>
                </Div>
                <Div1>
                  <FaRegFaceSmileWink color="gray" size={"40px"} />
                  <p
                    className="mt-2"
                    style={{
                      fontSize: "13px",
                      padding: "3px 6px 3px 6px",
                      borderRadius: "5px",
                      color: "gray",
                      fontWeight: "600",
                      background: "#ffffffc5",
                    }}
                  >
                    No More Class Tomorrow
                  </p>
                </Div1>
              </CardContainer>
            </>
          ) : (
            <>
              {tomorrowClassesData?.map((classItem) => (
                <CardContainer key={classItem?._id}>
                  <Div>
                    <p style={{ textTransform: "uppercase", color: "black" }}>
                      Tomorrow
                    </p>
                    <p
                      style={{
                        fontSize: "13px",
                        padding: "3px 6px 3px 6px",
                        borderRadius: "5px",
                        color: "gray",
                        fontWeight: "600",
                        background: "#ffffffc5",
                      }}
                    >
                      {classItem?.day},{" "}
                      {new Date().toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                      })}
                    </p>
                  </Div>
                  <Div1>
                    <BiLike color="gray" size={"40px"} />
                    <p
                      className="mt-2"
                      style={{
                        fontSize: "13px",
                        padding: "3px 6px 3px 6px",
                        borderRadius: "5px",
                        color: "gray",
                        fontWeight: "600",
                        background: "#ffffffc5",
                      }}
                    >
                      {classItem?.courses[0].period}
                    </p>
                    <p style={{ color: "gray", marginTop: "10px" }}>
                      {classItem?.courses[0].courseName}
                    </p>
                  </Div1>
                </CardContainer>
              ))}
            </>
          )}
        </Container>
      )}
    </>
  );
};

export default ClassCard;
const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: center;
  justify-content: space-between;

  /* Adjust as needed */
`;
const CardContainer = styled.div`
  background: ${bgColor};
  width: 100%;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 15px;
`;
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: "10px";
  color: gray;
`;
const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
