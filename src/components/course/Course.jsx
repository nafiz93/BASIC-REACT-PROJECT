/* eslint-disable react/prop-types */
import { AiOutlineDollar } from "react-icons/ai";
import { HiOutlineBookOpen } from "react-icons/hi";

const Course = ({ course, sendName }) => {
    const { img, title, description, credits } = course;

    // Handle select button click
    const handleSelect = () => {
        sendName(course);
        //getPrice(course);
        //handleShowIcon(course);
    };

    return (
        <div className="bg-[#FFF] flex flex-col justify-between rounded-xl m-3 max-w-80">
            <div>
                <img className="w-full h-[244px]" src={img} alt={title} />
            </div>
            <div>
                <h2 className="text-xl font-bold">{title}</h2>
            </div>
            <div>
                <p className="text-xs text-left p-2">{description}</p>
            </div>
            <div>
                <div className="flex justify-center items-center mt-2">
                    <button className="flex justify-center items-center">
                        <AiOutlineDollar /> Price:
                    </button>
                    <button className="flex justify-center items-center ml-2">
                        <HiOutlineBookOpen /> Credit: {credits}
                    </button>
                </div>
                <button className="bg-[#2F80ED] rounded w-full mt-2 text-white h-10" onClick={handleSelect}>Select</button>
            </div>
        </div>
    );
};

export default Course;
