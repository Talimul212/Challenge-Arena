export const departments = {
  CSE: [
    {
      id: 1,
      name: "Introduction to Algorithms",
      title: "Introduction to Algorithms",
      author: "Thomas H. Cormen",
      price: 30.5,
      date: "Mar 12",
      image_url:
        "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791156641131.jpg",
    },
    {
      id: 2,
      name: "Clean Code",
      title: "Clean Code: A Handbook of Agile Software Craftsmanship",
      author: "Robert C. Martin",
      price: 25.2,
      date: "Mar 14",
      image_url: "https://m.media-amazon.com/images/I/51E2055ZGUL._SL1000_.jpg",
    },
  ],
  BBA: [
    {
      id: 3,
      name: "Principles of Management",
      title: "Principles of Management",
      author: "Peter F. Drucker",
      price: 20.75,
      date: "Mar 15",
      image_url:
        "https://redshine.co.in/wp-content/uploads/2022/03/9789198758290_thumbnail.jpg",
    },
    {
      id: 4,
      name: "Marketing Management",
      title: "Marketing Management",
      author: "Philip Kotler",
      price: 22.9,
      date: "Mar 17",
      image_url:
        "https://www.edtechpress.co.uk/catalog/books/Strategic%20Marketing%20Management.jpg",
    },
  ],
  GDS: [
    {
      id: 5,
      name: "Thinking, Fast and Slow",
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      price: 18.6,
      date: "Mar 18",
      image_url:
        "https://www.booksoftitans.com/wp-content/uploads/2017/12/thinking-fast-and-slow.jpg",
    },
    {
      id: 6,
      name: "Freakonomics",
      title:
        "Freakonomics: A Rogue Economist Explores the Hidden Side of Everything",
      author: "Steven D. Levitt",
      price: 19.35,
      date: "Mar 20",
      image_url:
        "https://upload.wikimedia.org/wikipedia/en/6/63/Freakonomics.jpg",
    },
  ],
  English: [
    {
      id: 7,
      name: "To Kill a Mockingbird",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: 15.5,
      date: "Mar 25",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
    },
    {
      id: 8,
      name: "Pride and Prejudice",
      title: "Pride and Prejudice",
      author: "Jane Austen",
      price: 16.75,
      date: "Mar 27",
      image_url:
        "https://m.media-amazon.com/images/M/MV5BMDM0MjFlOGYtNTg2ZC00MmRkLTg5OTQtM2U5ZjUyYTgxZThiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
    },
  ],
  HTM: [
    {
      id: 9,
      name: "Hospitality Management",
      title: "Hospitality Management",
      author: "John Doe",
      price: 18.99,
      date: "Mar 28",
      image_url: "https://m.media-amazon.com/images/I/41De-4UIn3L.jpg",
    },
    {
      id: 10,
      name: "Tourism Management",
      title: "Tourism Management",
      author: "Jane Doe",
      price: 20.25,
      date: "Mar 30",
      image_url:
        "https://images.routledge.com/common/jackets/crclarge/978008043/9780080435893.jpg",
    },
  ],
};

import { IoPersonOutline } from "react-icons/io5";
import { PiNewspaperClipping } from "react-icons/pi";
import { LuMessagesSquare } from "react-icons/lu";
import { MdOutlinePoll } from "react-icons/md";
import { LiaDatabaseSolid } from "react-icons/lia";
import { RiGroup2Fill } from "react-icons/ri";
import { GrSchedules } from "react-icons/gr";
import { MdOutlineClass } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { TiGroup } from "react-icons/ti";
import { FaCalculator } from "react-icons/fa";
import { IoAnalytics } from "react-icons/io5";
import { RiGalleryLine } from "react-icons/ri";
import { MdOutlineEvent } from "react-icons/md";
import { CiCircleQuestion } from "react-icons/ci";
import { IoMdNotifications } from "react-icons/io";
export const bottomBarData = [
  { id: 1, icon: IoPersonOutline, title: "profile", route: "/buI/profile" },
  {
    id: 2,
    icon: PiNewspaperClipping,
    title: "Newsfeed",
    route: "/buI/newsfeed",
  },
  { id: 3, icon: LuMessagesSquare, title: "Messages", route: "/buI/messages" },
  {
    id: 4,
    icon: MdOutlinePoll,
    title: "Create Poll",
    route: "/buI/createPoll",
  },
  { id: 5, icon: LiaDatabaseSolid, title: "Course", route: "/buI/course" },
  { id: 6, icon: RiGroup2Fill, title: " Faculties", route: "/buI/faculties" },
  { id: 7, icon: GrSchedules, title: "Schedules", route: "/buI/schedules" },
  { id: 8, icon: MdOutlineClass, title: "Classes", route: "/buI/classes" },
  { id: 9, icon: GiTeacher, title: "Tuition", route: "/buI/tuition" },
  { id: 10, icon: TiGroup, title: "classmate", route: "/buI/classmate" },
  { id: 11, icon: FaCalculator, title: "CGPA Calculator", route: "/buI/cgpa" },
  {
    id: 12,
    icon: IoAnalytics,
    title: "  CGPA Analyzer",
    route: "/buI/cgpaAnalyzer",
  },
  { id: 13, icon: RiGalleryLine, title: "Gallery", route: "/buI/gallery" },
  {
    id: 14,
    icon: MdOutlineEvent,
    title: " Notice & Event",
    route: "/buI/noticeEvent",
  },
  { id: 15, icon: CiCircleQuestion, title: "About", route: "/buI/about" },
  {
    id: 16,
    icon: IoMdNotifications,
    title: "Notifications",
    route: "/buI/notifications",
  },
];
