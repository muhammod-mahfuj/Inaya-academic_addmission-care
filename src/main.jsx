import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import CoursesPg from './Pages/Courses/CoursesPg';
import CourseDetails from './Pages/Course/CourseDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/courses",
    element: <CoursesPg></CoursesPg>,
    loader: () => fetch("./coursesDetails.json"),
  },
  {
    path: "/courses/:id",
    element: <CourseDetails></CourseDetails>,
    loader: async ({ params }) => {
      const res = await fetch(`./coursesDetails.json`);
      const data = await  res.json();
      const course = data.find(sub => sub.id === params.id);
      return course;
    },
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
