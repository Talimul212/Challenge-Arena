import { MdOutlineViewCompactAlt } from "react-icons/md";
import { FaCodeBranch } from "react-icons/fa6";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { SiGoogleclassroom } from "react-icons/si";
export const sideBarData = [
  {
    id: 1,
    route: "/",
    title: "Over view",
    icon: <MdOutlineViewCompactAlt size={24} />,
  },
  { id: 2, route: "/batch", title: "Batch", icon: <FaCodeBranch size={24} /> },
  {
    id: 3,
    route: "/teachers",
    title: "Teachers",
    icon: <LiaChalkboardTeacherSolid size={24} />,
  },
  {
    id: 4,
    route: "/classes",
    title: "Classes",
    icon: <SiGoogleclassroom size={24} />,
  },
];
