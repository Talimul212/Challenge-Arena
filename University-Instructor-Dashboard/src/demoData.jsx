import { MdOutlineViewCompactAlt } from "react-icons/md";
import { FaCodeBranch } from "react-icons/fa6";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { SiGoogleclassroom } from "react-icons/si";
import { MdOutlineGroups } from "react-icons/md";
import { PiNewspaperClipping } from "react-icons/pi";
import { IoMdNotifications } from "react-icons/io";
import { PiExamFill } from "react-icons/pi";
import { MdOutlineEvent } from "react-icons/md";
export const sideBarData = [
  {
    id: 1,
    route: "/",
    title: "Over view",
    icon: <MdOutlineViewCompactAlt size={24} />,
  },
  {
    id: 5,
    route: "/UI/faculty",
    title: "Faculty",
    icon: <MdOutlineGroups size={24} />,
  },
  {
    id: 2,
    route: "/UI/batch",
    title: "Batch",
    icon: <FaCodeBranch size={24} />,
  },
  {
    id: 3,
    route: "/UI/teachers",
    title: "Teachers",
    icon: <LiaChalkboardTeacherSolid size={24} />,
  },
  {
    id: 4,
    route: "/UI/classes",
    title: "Classes Routine",
    icon: <SiGoogleclassroom size={24} />,
  },
  {
    id: 6,
    route: "/UI/newsfeed",
    title: "Newsfeed",
    icon: <PiNewspaperClipping size={24} />,
  },
  {
    id: 6,
    route: "/UI/notifications",
    title: "Notifications",
    icon: <IoMdNotifications size={24} />,
  },
  {
    id: 6,
    route: "/UI/examSchedules",
    title: "Exam Schedules ",
    icon: <PiExamFill size={24} />,
  },
  {
    id: 7,
    route: "/UI/noticeEvent",
    title: "Notice & Event",
    icon: <MdOutlineEvent size={24} />,
  },
];
