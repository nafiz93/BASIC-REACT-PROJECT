// import { useState, useEffect } from 'react';
// import './App.css';
// import Courses from './components/courses/Courses';
// import Bookmark from './components/bookmark/Bookmark';
// import { addToLs, getItem } from './components/localStorage/ls';

// function App() {
//   const [courses, setCourses] = useState([]);
//   const [names, setNames] = useState([]);
//   const [creditTime, setCreditTime] = useState(0);
//   const [price, setPrice] = useState(0);

//   const getCreditTime = (time) => {
//     setCreditTime(prevTime => prevTime + time);
//   };

//   const getPrice = (course) => {
//     const parsemoney = parseFloat(course.price);
//     console.log(parsemoney)
//     setPrice(price + parsemoney);
//     addToLs(course.id, course.price);
//   };
//   const PriceButton = (course) => {
//     const parsemoney = parseFloat(course.price);
//     console.log(parsemoney)
//     setPrice(price + parsemoney);
//     addToLs(course.id, course.price);
//   };
//   // User Clicks "Select" Button: This triggers the handleSelect function in the Course component.
//   // handleSelect Calls sendName: The sendName function is called with the course object as its parameter.
//   // sendName Adds the Course: The sendName function adds the course to the names state.
//   // sendName Calls getPrice: The sendName function then calls getPrice with the same course object.
//   const sendName = (course) => {

//     const updatedNames = [...names, course];
//     setNames(updatedNames);
//     getPrice(course); // Ensure getPrice is called to update price correctly
//     getCreditTime(course.credits); // Ensure credit time is updated when a course is added

//   };


//   useEffect(() => {
//     fetch('data.json')
//       .then(response => response.json())
//       .then(data => {
//         setCourses(data);
//         const storedData = getItem() || { ids: [], totalPrice: 0 };
//         const storedCourses = storedData.ids.map(id => data.find(course => course.id == id));
//         const validStoredCourses = storedCourses.filter(course => course);
//         setNames(validStoredCourses);
//         setPrice(storedData.totalPrice);
//       });
//   }, []);

//   return (
//     <div className='md:flex bg-[#F3F3F3]'>
//       <Courses courses={courses} sendName={sendName} getCreditTime={getCreditTime} PriceButton={PriceButton} />
//       <Bookmark names={names} creditTime={creditTime} price={price} />
//     </div>
//   );
// }

// export default App;

import { useState, useEffect } from 'react';

import './App.css';


function App() {


  const [courses, setCourses] = useState([]);
  const [names, setNames] = useState([]);
  const [creditTime, setCreditTime] = useState(0);
  const [price, setPrice] = useState(0);
  const [selectedCourses, setSelectedCourses] = useState([]); // State to track selected courses

  // const getPrice = (course) => {

  //   setPrice(prevPrice => prevPrice + parseFloat(course.price));
  //   //addToLs(course.id, course.price);

  // };








  return (
    <div className='md:flex bg-[#F3F3F3]'>

    </div>
  );
}

export default App;
