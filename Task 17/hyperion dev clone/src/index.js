//index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/header';
import NavBar from './components/navBar';
import MainBody from './components/mainBody';
import BootcampCourseCardList from './components/bootcampCards';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Stats from './components/stats';

//diefing an array of objects for the different bootcamps to be used in bootcampCourseCardList
const bootcampCourses = [
  {
    id: 1,
    name: "Certified Full Stack Web & Software Engineer bootcamp",
    description:
      "Learn to create complex and powerful software, apps, and websites in our most advanced Immersive bootcamp.",
  },
  {
    id: 2,
    name: "Software Engineer bootcamp",
    description:
      "Go from newbie to software engineer in no time. Learn everything you need to create amazing computer programs and software.",
  },
  {
    id: 3,
    name: "Data Science bootcamp",
    description:
      "Learn to use classic machine learning models and popular data science tools to work with data to empower business, research, and technology.",
  },
  {
    id: 4,
    name: "Full Stack Web Developer bootcamp",
    description:
      "Master frontend & backend web development to build database-driven web apps using the powerful MERN stack.",
  },
  {
    id: 5,
    name: "Cyber Security bootcamp",
    description:
      "Master Python, Cyber Security principles, and defensive strategies to become a Cyber Security professional in 6 months or less.",
  },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <NavBar/>
    <MainBody/>
    {/* passing the bootcampCourses array of objects through this component so it has access to all of the objects and their properties */}
    <BootcampCourseCardList bootcampCourses={bootcampCourses}/>
    <Stats/>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
