import React, { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const CoursesPg = () => {
   const courses = useLoaderData();
      
    return (
        <div>
            <Navbar></Navbar>
               <section className="py-16 px-4 md:px-20 bg-base-100">
                 <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-12">
                   আমাদের কোর্সসমূহ
                 </h2>
           
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   {courses.map((course) => (
                     <div key={course.id} className="card bg-white shadow-xl border border-blue-100">
                       <figure>
                         <img src={course.image} alt={course.title} className="w-full h-60 object-cover" />
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
                         <div className="mt-4">
                           <Link to={`/courses/${course?.id}`} className="btn btn-outline btn-primary w-full">
                             বিস্তারিত জানুন
                           </Link>
                         </div>
                       </div>
                     </div>
                   ))}
                 </div>
               </section>
             <Footer></Footer>
        </div>
    );
};

export default CoursesPg;