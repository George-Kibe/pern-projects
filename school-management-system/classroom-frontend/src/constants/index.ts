import { GraduationCap, School } from "lucide-react";

export const USER_ROLES = {
  STUDENT: "student",
  TEACHER: "teacher",
  ADMIN: "admin",
};

export const ROLE_OPTIONS = [
  {
    value: USER_ROLES.STUDENT,
    label: "Student",
    icon: GraduationCap,
  },
  {
    value: USER_ROLES.TEACHER,
    label: "Teacher",
    icon: School,
  },
];

export const DEPARTMENTS = [
  "Computer Science",
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "English",
  "History",
  "Geography",
  "Economics",
  "Business Administration",
  "Engineering",
  "Psychology",
  "Sociology",
  "Political Science",
  "Philosophy",
  "Education",
  "Fine Arts",
  "Music",
  "Physical Education",
  "Law",
] as const;

export const DEPARTMENT_OPTIONS = DEPARTMENTS.map((dept) => ({
  value: dept,
  label: dept,
}));

export const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3MB in bytes
export const ALLOWED_TYPES = [
  "image/png",
  "image/jpeg",
  "image/jpg",
  "image/webp",
];

export const CLOUDINARY_UPLOAD_URL = import.meta.env.VITE_CLOUDINARY_UPLOAD_URL;
export const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
export const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

export const BASE_URL = import.meta.env.VITE_API_URL;
export const ACCESS_TOKEN_KEY = import.meta.env.VITE_ACCESS_TOKEN_KEY;
export const REFRESH_TOKEN_KEY = import.meta.env.VITE_REFRESH_TOKEN_KEY;

export const REFRESH_TOKEN_URL = `${BASE_URL}/refresh-token`;

export const CLOUDINARY_UPLOAD_PRESET = import.meta.env
  .VITE_CLOUDINARY_UPLOAD_PRESET;


export const MOCK_SUBJECTS = [
  {
    "id": 1,
    "name": "Introduction to Computer Science",
    "code": "CSC101",
    "department": "Computer Science",
    "description": "Fundamental concepts of programming, algorithms, and computational thinking.",
    "createdAt": "2026-01-05T09:15:00Z",
    "updatedAt": "2026-01-05T09:15:00Z"
  },
  {
    "id": 2,
    "name": "Data Structures and Algorithms",
    "code": "CSC201",
    "department": "Computer Science",
    "description": "Study of arrays, linked lists, stacks, queues, trees, sorting and searching algorithms.",
    "createdAt": "2026-01-06T10:00:00Z",
    "updatedAt": "2026-01-10T12:30:00Z"
  },
  {
    "id": 3,
    "name": "Database Systems",
    "code": "CSC230",
    "department": "Information Technology",
    "description": "Relational databases, SQL, normalization, and database design principles.",
    "createdAt": "2026-01-07T08:45:00Z",
    "updatedAt": "2026-01-09T11:20:00Z"
  },
  {
    "id": 4,
    "name": "Operating Systems",
    "code": "CSC240",
    "department": "Computer Science",
    "description": "Processes, threads, memory management, scheduling, and file systems.",
    "createdAt": "2026-01-08T09:10:00Z",
    "updatedAt": "2026-01-08T09:10:00Z"
  },
  {
    "id": 5,
    "name": "Web Development",
    "code": "IT210",
    "department": "Information Technology",
    "description": "Frontend and backend web technologies including HTML, CSS, JavaScript, and APIs.",
    "createdAt": "2026-01-09T14:05:00Z",
    "updatedAt": "2026-01-11T16:40:00Z"
  },
  {
    "id": 6,
    "name": "Computer Networks",
    "code": "IT220",
    "department": "Information Technology",
    "description": "Networking models, TCP/IP, routing, switching, and network security basics.",
    "createdAt": "2026-01-10T13:25:00Z",
    "updatedAt": "2026-01-10T13:25:00Z"
  },
  {
    "id": 7,
    "name": "Software Engineering",
    "code": "CSC310",
    "department": "Software Engineering",
    "description": "Software development life cycle, agile methodologies, and project management practices.",
    "createdAt": "2026-01-11T10:50:00Z",
    "updatedAt": "2026-01-13T09:00:00Z"
  },
  {
    "id": 8,
    "name": "Artificial Intelligence",
    "code": "CSC330",
    "department": "Computer Science",
    "description": "Introduction to machine learning, search algorithms, and intelligent systems.",
    "createdAt": "2026-01-12T12:00:00Z",
    "updatedAt": "2026-01-14T15:30:00Z"
  },
  {
    "id": 9,
    "name": "Mobile Application Development",
    "code": "SE320",
    "department": "Software Engineering",
    "description": "Design and development of Android and cross-platform mobile applications.",
    "createdAt": "2026-01-13T11:40:00Z",
    "updatedAt": "2026-01-15T17:10:00Z"
  },
  {
    "id": 10,
    "name": "Cybersecurity Fundamentals",
    "code": "IT300",
    "department": "Information Technology",
    "description": "Principles of information security, cryptography, and vulnerability assessment.",
    "createdAt": "2026-01-14T09:30:00Z",
    "updatedAt": "2026-01-16T10:45:00Z"
  }
]
