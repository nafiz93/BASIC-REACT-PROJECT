/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineDollar } from "react-icons/ai";

const Bookmark = ({ names, creditTime, selectedCourses }) => {
    const remainTime = 20;
    const [toastShown, setToastShown] = useState(false);

    useEffect(() => {
        if (creditTime > 20 && !toastShown) { // this && means both condition has to be true
            toast.warning("Credit time exceeded 20 hours!");
            setToastShown(true);
        }
    }, [creditTime, toastShown]); //Normal if: Runs on every render, regardless of dependency changes.
    // useEffect: Runs only when specified dependencies change, ensuring side effects are executed only when necessary.
    //This approach leads to better performance and more maintainable code in React applications.

    // Calculate the total price correctly
    let initialPrice = 0;
    names.forEach(name => {
        initialPrice += parseFloat(name.price);
    });

    return (
        <div className="w-1/3">
            <ToastContainer />
            {creditTime <= 20 ? (
                <div className="flex">
                    <h2 className="text-xl text-blue-600 text-left m-2">Credit Hour Remaining:</h2>
                    <p className="mt-3 text-blue-600">{remainTime - creditTime}</p>
                </div>
            ) : (
                <h2 className="text-xl text-blue-600 text-left m-2">Credit Hour Exceeded:</h2>
            )}
            <h2 className="border-2 border-[rgba(28, 27, 27, 0.20)] max-w-64 my-5"></h2>
            <h2 className="text-xl text-black font-bold text-left m-6">Course Name:</h2>
            {names.map((name, idx) => (
                <div key={idx} className="flex items-center">
                    {selectedCourses.includes(name.id) && <AiOutlineDollar />} {/* && this condition here inside the jsx means when this condition selectedCourses.includes(name.id)  is true render the element <AiOutlineDollar /> */}
                    <h3 className="text-left m-6">{name.title}</h3>
                </div>
            ))}
            {creditTime <= 20 ? (
                <h3>Total Credit Hour: {creditTime}</h3>
            ) : (
                <h2 className="text-xl text-blue-600 text-left m-2">20 Credit Hour is the limit</h2>
            )}
            <h3>Total price: {initialPrice}</h3>
        </div>
    );
};

export default Bookmark;
