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
        "https://m.media-amazon.com/images/I/61Fw-vhAsoL._AC_UF1000,1000_QL80_.jpg",
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

// import { IoPersonOutline } from "react-icons/io5";
import { PiNewspaperClipping } from "react-icons/pi";
import { LuMessagesSquare } from "react-icons/lu";
import { MdOutlinePoll } from "react-icons/md";
import { LiaDatabaseSolid } from "react-icons/lia";
import { RiGroup2Fill } from "react-icons/ri";
// import { GrSchedules } from "react-icons/gr";
// import { MdOutlineClass } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
// import { TiGroup } from "react-icons/ti";
import { FaCalculator } from "react-icons/fa";
import { IoAnalytics } from "react-icons/io5";
import { RiGalleryLine } from "react-icons/ri";
import { MdOutlineEvent } from "react-icons/md";
import { CiCircleQuestion } from "react-icons/ci";
import { IoMdNotifications } from "react-icons/io";
export const bottomBarData = [
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
  { id: 6, icon: RiGroup2Fill, title: " Faculty", route: "/buI/faculty" },
  { id: 9, icon: GiTeacher, title: "Tuition", route: "/buI/tuition" },
  { id: 11, icon: FaCalculator, title: "CGPA Count", route: "/buI/cgpa" },
  {
    id: 12,
    icon: IoAnalytics,
    title: "  CGPA Analyzer",
    route: "/buI/cgpaAnalyzer",
  },
  { id: 13, icon: RiGalleryLine, title: "Gallery", route: "/buI/gellary" },
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

export const coursesData = [
  {
    courseName: "Data Structures and Algorithms",
    teacherName: "Dr. John Smith",
    credits: 3,
    hours: 4,
    courseCode: "CSE200",
    type: "Theory",
    relatedBooks: [
      {
        title: "Introduction to Algorithms",
        author: "Thomas H. Cormen",
        imageURL: "https://example.com/intro-to-algorithms.jpg",
      },
      {
        title: "Data Structures and Algorithms in Java",
        author: "Robert Lafore",
        imageURL: "https://example.com/data-structures-in-java.jpg",
      },
      // Add more related books as needed
    ],
  },
  {
    courseName: "Database Management Systems",
    teacherName: "Prof. Emily Johnson",
    credits: 3,
    hours: 3,
    courseCode: "CSE310",
    type: "Lab",
    relatedBooks: [
      {
        title: "Database System Concepts",
        author: "Abraham Silberschatz",
        imageURL: "https://example.com/db-system-concepts.jpg",
      },
      {
        title: "Fundamentals of Database Systems",
        author: "Ramez Elmasri",
        imageURL: "https://example.com/fundamentals-of-db-systems.jpg",
      },
      // Add more related books as needed
    ],
  },
  {
    courseName: "Software Engineering",
    teacherName: "Dr. Michael Brown",
    credits: 3,
    hours: 3,
    courseCode: "CSE420",
    type: "Theory",
    relatedBooks: [
      {
        title: "Software Engineering: A Practitioner's Approach",
        author: "Roger S. Pressman",
        imageURL: "https://example.com/software-engineering.jpg",
      },
      // Add more related books as needed
    ],
  },
  {
    courseName: "Computer Networks",
    teacherName: "Prof. Sarah Wilson",
    credits: 3,
    hours: 3,
    courseCode: "CSE530",
    type: "Lab",
    relatedBooks: [
      {
        title: "Computer Networking: A Top-Down Approach",
        author: "James F. Kurose",
        imageURL: "https://example.com/computer-networking.jpg",
      },
      {
        title: "Data Communications and Networking",
        author: "Behrouz A. Forouzan",
        imageURL: "https://example.com/data-communications.jpg",
      },
      // Add more related books as needed
    ],
  },
];

export const CourseSchedule = [
  {
    day: "Friday",
    batch: "5th/5th",
    courses: [
      {
        period: "1st Period (9.00 am – 10.30 am)",
        courseName: "Theory of Computation",
        instructor: "MSKS",
      },
      {
        period: "2nd Period (10.30 am – 12.00 pm)",
        courseName: "Computer Architecture",
        instructor: "MMAS",
      },
      {
        period: "3rd Period (12.00 pm - 01.30 pm)",
        courseName: "System Analysis and Design",
        instructor: "MSKS",
      },
      {
        period: "4th Period (01.30 pm – 03.00 pm)",
        courseName: "Database Management Systems",
        instructor: "MUR",
      },
    ],
  },
  {
    day: "Saturday",
    batch: "5th/5th",
    courses: [
      {
        period: "1st Period (9.00 am – 10.30 am)",
        courseName: "Computer Architecture",
        instructor: "MMAS",
      },
      {
        period: "2nd Period (10.30 am – 12.00 pm)",
        courseName: "System Analysis and Design",
        instructor: "MMAS",
      },
    ],
  },
  {
    day: "Sunday",
    batch: "5th/5th",
    courses: [
      {
        period: "1st Period (9.00 am – 10.30 am)",
        courseName: "Database Management Systems",
        instructor: "MUR",
      },
      {
        period: "2nd Period (10.30 am – 12.00 pm)",
        courseName: "Operating System",
        instructor: "MMAS",
      },
      {
        period: "3rd Period (12.00 pm - 01.30 pm)",
        courseName: "Operating System Lab",
        instructor: "MMAS",
      },
    ],
  },
  {
    day: "Monday",
    batch: "5th/5th",
    courses: [
      {
        period: "1st Period (9.00 am – 10.30 am)",
        courseName: "Theory of Computation",
        instructor: "MSKS",
      },
      {
        period: "2nd Period (10.30 am – 12.00 pm)",
        courseName: "Database Management Systems Lab",
        instructor: "MUR",
      },
      {
        period: "3rd Period (12.00 pm - 01.30 pm)",
        courseName: "Operating System",
        instructor: "MMAS",
      },
      {
        period: "4th Period (01.30 pm – 03.00 pm)",
        courseName: "Graph Theory Lab",
        instructor: "MSKS",
      },
    ],
  },
  {
    day: "Tuesday",
    batch: "5th/5th",
    courses: [
      {
        period: "1st Period (9.00 am – 10.30 am)",
        courseName: "Mobile Application Development Lab",
        instructor: "MUR",
      },
      {
        period: "2nd Period (10.30 am – 12.00 pm)",
        courseName: "Computer Architecture",
        instructor: "MMAS",
      },
      {
        period: "3rd Period (12.00 pm - 01.30 pm)",
        courseName: "Database Management Systems",
        instructor: "MUR",
      },
    ],
  },
];

export const completeCourseData = [
  {
    courseName: "Data Structures and Algorithms",
    courseCode: "CSE200",
    credits: 3,
    cgpaPoint: 3.5,
    cgpa: "B+",
    type: "Theory",
    teacherName: "Dr. John Smith",
    semesterCompleted: 1,
    midtermMark: "22/30",
    finalTermMark: "40/50",
    teacherHandMark: "18/20",
    totalMark: "80/100",
  },
  {
    courseName: "Database Management Systems",
    courseCode: "CSE310",
    credits: 3,
    cgpaPoint: 3.7,
    cgpa: "B+",
    type: "Theory",
    teacherName: "Prof. Emily Johnson",
    semesterCompleted: 4,
    midtermMark: "22/30",
    finalTermMark: "45/50",
    teacherHandMark: "19/20",
    totalMark: "86/100",
  },
  {
    courseName: "Database Management Systems Lab",
    courseCode: "CSE310L",
    credits: 3,
    cgpaPoint: 3.7,
    cgpa: "B+",
    type: "Lab",
    teacherName: "Prof. Emily Johnson",
    semesterCompleted: 4,
    midtermMark: "22/30",
    finalTermMark: "45/50",
    teacherHandMark: "19/20",
    totalMark: "86/100",
  },
  {
    courseName: "Software Engineering",
    courseCode: "CSE420",
    credits: 3,
    cgpaPoint: 3.8,
    cgpa: "A",
    type: "Theory",
    teacherName: "Dr. Michael Brown",
    semesterCompleted: 5,
    midtermMark: "27/30",
    finalTermMark: "48/50",
    teacherHandMark: "20/20",
    totalMark: "95/100",
  },
  {
    courseName: "Computer Networks",
    courseCode: "CSE530",
    credits: 3,
    cgpaPoint: 3.6,
    cgpa: "B+",
    type: "Lab",
    teacherName: "Prof. Sarah Wilson",
    semesterCompleted: 4,
    midtermMark: "21/30",
    finalTermMark: "40/50",
    teacherHandMark: "17/20",
    totalMark: "78/100",
  },
  {
    courseName: "Algorithm Design",
    courseCode: "CSE600",
    credits: 3,
    cgpaPoint: 3.9,
    cgpa: "A",
    type: "Theory",
    teacherName: "Dr. Jane Doe",
    semesterCompleted: 5,
    midtermMark: "28/30",
    finalTermMark: "49/50",
    teacherHandMark: "20/20",
    totalMark: "97/100",
  },
  {
    courseName: "New Course",
    courseCode: "NEW101",
    credits: 3,
    cgpaPoint: 4.0,
    cgpa: "A+",
    type: "Theory",
    teacherName: "Prof. New Teacher",
    semesterCompleted: 6,
    midtermMark: "30/30",
    finalTermMark: "50/50",
    teacherHandMark: "20/20",
    totalMark: "100/100",
  },
];

export const courseTeacherData = [
  {
    id: 6,
    name: "Fatima Ali",
    photoURL:
      "https://scontent.fcgp3-1.fna.fbcdn.net/v/t39.30808-6/387167602_1611937125878832_6687982353967740114_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9buFxxfMDuIAb7l-tEQ&_nc_ht=scontent.fcgp3-1.fna&oh=00_AfBlg2Z_enRP9UyklNu-oSS1aI-gSo3lpHFLWfSMIwLjKw&oe=66189B11",
    position: "Lecturer",
    courseList: [
      {
        courseName: "Introduction to Programming",
        courseCode: "CSE110",
      },
      {
        courseName: "Web Development",
        courseCode: "CSE220",
      },
    ],
    whatsappNumber: "+1234567890",
    gmailAccount: "fatima.ali@gmail.com",
  },
  {
    id: 7,
    name: "Youssef Ahmed",
    photoURL:
      "https://scontent.fcgp3-1.fna.fbcdn.net/v/t39.30808-6/428711439_3680786232162066_7074512577400629760_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=xvn1Crj9KzcAb6rROa-&_nc_ht=scontent.fcgp3-1.fna&oh=00_AfDheiF-ipaQoo1dXYUtw4zKwVMkQ-jfwcTNGTcVMxE7Tw&oe=66188784",
    position: "Professor",
    courseList: [
      {
        courseName: "Database Management Systems",
        courseCode: "CSE310",
      },
      {
        courseName: "Software Engineering",
        courseCode: "CSE420",
      },
    ],
    whatsappNumber: "+1234567891",
    gmailAccount: "youssef.ahmed@gmail.com",
  },
  {
    id: 8,
    name: "Sana Khan",
    photoURL:
      "https://scontent.fcgp3-1.fna.fbcdn.net/v/t39.30808-6/409761888_1789300151495727_3373174694337264930_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jZalM4C-1pcAb5VSsKu&_nc_ht=scontent.fcgp3-1.fna&oh=00_AfBiRYpeb06LwRfr75UgKS8ePq9tFOMoPd5j8Cvqkewbbg&oe=6618966D",
    position: "Lecturer",
    courseList: [
      {
        courseName: "Computer Networks",
        courseCode: "CSE530",
      },
      {
        courseName: "Computer Networks Lab",
        courseCode: "CSE530L",
      },
    ],
    whatsappNumber: "+1234567892",
    gmailAccount: "sana.khan@gmail.com",
  },
  {
    id: 9,
    name: "Ayesha Hussain",
    photoURL:
      "https://scontent.fcgp3-2.fna.fbcdn.net/v/t39.30808-6/348556720_219614800822361_3351644192919147956_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oy00GvTYyOQAb4faB7g&_nc_ht=scontent.fcgp3-2.fna&oh=00_AfDUad9JxtheJLMev7CKx9_GJED_5yo7oYKZhUbjedFTAQ&oe=661898EF",
    position: "Professor",
    courseList: [
      {
        courseName: "Algorithm Design",
        courseCode: "CSE600",
      },
      {
        courseName: "Artificial Intelligence",
        courseCode: "CSE610",
      },
    ],
    whatsappNumber: "+1234567893",
    gmailAccount: "ayesha.hussain@gmail.com",
  },
  {
    id: 10,
    name: "Mohammad Saleh",
    photoURL:
      "https://scontent.fcgp3-1.fna.fbcdn.net/v/t1.6435-9/165867751_2871238409790397_6842629657528418810_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Zr4HgY5pUvgAb6wau0O&_nc_oc=Adg6Bi4abosWMHXPQzjrQluGA5fD6AhsEh8Bun33FFU_qapiYPOUF1lhgtN3MySlIjA&_nc_ht=scontent.fcgp3-1.fna&oh=00_AfAeKW9s8mo18QYkEKTySuga22XlwF7TbCnYLh7VpSxUSA&oe=663A28EF",
    position: "Professor",
    courseList: [
      {
        courseName: "Data Science",
        courseCode: "CSE710",
      },
      {
        courseName: "Machine Learning",
        courseCode: "CSE720",
      },
    ],
    whatsappNumber: "+1234567894",
    gmailAccount: "mohammad.saleh@gmail.com",
  },
];

export const examSchedule1 = [
  {
    date: "10/06/2023",
    day: "Monday",
    courses: [
      {
        courseCode: " CSE 413  ",
        courseName: "Data Management",
        semester: ["3rd", "4th", "4th (special)"],
      },
    ],
  },
  {
    date: "13/06/2023",
    day: "Tuesday",
    courses: [
      {
        courseCode: "GED 211",
        courseName: "Bangladesh Studies",
        semester: ["2nd"],
      },
      {
        courseCode: " GED 313  ",
        courseName: "Industrial Management",
        semester: ["3rd", "4th", "4th (special)"],
      },
    ],
  },
  {
    date: "15/06/2023",
    day: "Thursday",
    courses: [
      {
        courseCode: "MAT 341",
        courseName: "Complex Variables, Laplace and Fourier Transform",
        semester: ["3rd", "4th", "4th (special)", "8th"],
      },
    ],
  },
  {
    date: "17/06/2023",
    day: "Saturday",
    courses: [
      {
        courseCode: "CSE 201",
        courseName: "Discrete Mathematics",
        semester: ["2nd"],
      },
      {
        courseCode: "STA 321",
        courseName: "Probability and Statistical Analysis",
        semester: ["3rd", "4th", "7th"],
      },
      {
        courseCode: "CSE 703",
        courseName: "Artificial Intelligence",
        semester: ["7th", "8th"],
      },
      {
        courseCode: "CSE 805",
        courseName: "Machine Learning",
        semester: ["9th"],
      },
    ],
  },
  // Add more entries based on the pattern...
];
