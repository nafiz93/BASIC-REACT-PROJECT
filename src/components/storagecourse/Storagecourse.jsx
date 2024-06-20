/* eslint-disable react/prop-types */


const Storagecourse = ({ names, totalPrice }) => {
    return (
        <div>
            <h1>Stored Courses</h1>
            <div>
                {names.map(course => (
                    <div key={course.id}>
                        <h2>{course.title}</h2>
                        <p>{course.description}</p>
                        <p>Price: ${course.price}</p>
                        <p>Credits: {course.credits}</p>
                    </div>
                ))}
            </div>
            <h3>Total Price: ${totalPrice}</h3>
        </div>
    );
};

export default Storagecourse;
