/* eslint-disable react/prop-types */

import Course from "../course/Course";


const Courses = ({ courses, sendName, getCreditTime, getPrice, PriceButton, handleIcon }) => {
    return (
        <div className="w-2/3 grid grid-cols-3">
            {
                courses.map(course => <Course key={course.id} course={course} sendName={sendName} getCreditTime={getCreditTime} getPrice={getPrice} PriceButton={PriceButton} handleIcon={handleIcon}></Course>)
            }
        </div>
    );
};

export default Courses;