/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import TeachersTable from "../../../../Components/Table/TeachersTable/TeachersTable";
import { useEffect } from "react";
import LoaderHub from "../../../../Components/Loader/LoaderHub";
import { getTeacherslist } from "../../../../features/Teachers/serviceApi";
import { getCourses } from "../../../../features/Courses/serviceApi";

const Teachers = () => {
  const { data, isLoading } = useSelector((state) => state?.teachersList);
  const takedCourse = useSelector((state) => state?.coursesList?.data);

  const dispatch = useDispatch();

  useEffect(() => {
    getTeacherslist(dispatch);
    getCourses(dispatch);
  }, [dispatch]);

  if (isLoading) {
    return <LoaderHub type={"courses"} />;
  }

  return (
    <>
      <div>
        <TeachersTable data={data} course={takedCourse} />
      </div>
    </>
  );
};

export default Teachers;
// {
//   "_id": "661599fa3264e15f6c11326f",
//   "name": "Talimul Islam",
//   "gender": "Male",
//   "photoURL": "https://example.com/teacher-photo.jpg",
//   "email": "talimul0@gmail.com",
//   "position": "Lecturer",
//   "department": "CSE",
//   "courseList": [
//     {
//       "courseName": "Introduction to Programming",
//       "courseCode": "CSE110",
//       "_id": "661599fa3264e15f6c113270"
//     },
//     {
//       "courseName": "Web Development",
//       "courseCode": "CSE220",
//       "_id": "661599fa3264e15f6c113271"
//     }
//   ],
//   "whatsappNumber": 8801534567890,
//   "gmailAccount": "talimul.islam@gmail.com",
//   "createdAt": "2024-04-09T19:41:46.784Z",
//   "updatedAt": "2024-04-09T19:41:46.784Z",
//   "__v": 0
// },
