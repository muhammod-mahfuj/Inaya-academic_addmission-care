import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const CourseDetails = () => {
    const course = useLoaderData(); 
    console.log(course)
    return (
        <>
            <Navbar></Navbar>
        <div className='my-12 mx-8'>
            <div  className="card grid grid-cols-2 gap-10 justify-center bg-white  ">
                <figure className=''>
                   <img src={course?.image} alt={course.title} className="w-full h-80 object-cover" />
                </figure>
                <div className="card-body">
                    <h3 className="card-title text-xl font-semibold text-blue-600 mb-3">
                        {course?.title}
                    </h3>
                    <ul className="space-y-2 text-gray-700 text-base">
                        <li>বিষয় ভিত্তিক মোট ক্লাস: {course?.total_classes} টি</li>
                        <li>স্পেশাল ক্লাস: {course?.special_classes} টি</li>
                        <li>সলভ ক্লাস: {course?.solve_classes} টি</li>
                        <li>ক্লাস টেস্ট (প্রতি সপ্তাহে): {course?.weekly_tests} টি</li>
                        <li>সাবজেক্ট ফাইনাল টেস্ট: {course?.subject_final_tests} টি</li>
                        <li>ফাইনাল মডেল টেস্ট: {course?.final_model_tests} টি</li>
                    </ul>
                </div>
            </div>
        </div>
        <Footer></Footer>
     </>
    );
};

export default CourseDetails;