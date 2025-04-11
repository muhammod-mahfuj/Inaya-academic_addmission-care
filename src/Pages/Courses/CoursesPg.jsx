import React from 'react';
import deplomaPic from '../../assets/courses/deplomaNursing.jpg'
import bscPic from '../../assets/courses/bscNursing.jpg'
import midWifery from '../../assets/courses/Midwifery.jpg'
import hsc from '../../assets/courses/hsc.webp'
import ssc from '../../assets/courses/ssc.webp'
import nu from '../../assets/courses/nu.webp'
import ihtMath from '../../assets/courses/iht-math.jpg'
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const CoursesPg = () => {
    const courses = [
        {
          id: 'diploma-nursing',
          title: "ডিপ্লোমা ইন নার্সিং",
          image: deplomaPic,
          total_classes: "৮০",
          special_classes: "",
          solve_classes: "৩০",
          weekly_tests: "২",
          subject_final_tests: "",
          final_model_tests: "15"
        },
        {
          id: 'bsc-nursing',
          title: "বিএসসি ইন নার্সিং",
          image: bscPic,
          total_classes: "৮০",
          special_classes: "",
          solve_classes: "৩০",
          weekly_tests: "২",
          subject_final_tests: "",
          final_model_tests: "14"
        },
        {
          id: 'midwifery',
          title: "ডিপ্লোমা ইন মিডওয়াইফারি",
          image: midWifery,
          total_classes: "৮০",
          special_classes: "",
          solve_classes: "২৮",
          weekly_tests: "২",
          subject_final_tests: "",
          final_model_tests: "15"
        },
        {
          id: 'iht-mats',
          title: "আইএইচটি-ম্যাটস",
          image: ihtMath,
          total_classes: "৭৫",
          special_classes: "",
          solve_classes: "২৫",
          weekly_tests: "২",
          subject_final_tests: "",
          final_model_tests: "১২"
        },
        {
          id: 'nu-admission',
          title: "ন্যাশনাল ইউনিভার্সিটি ভর্তি কোচিং",
          image: nu,
          total_classes: "৭০",
          special_classes: "",
          solve_classes: "২০",
          weekly_tests: "১",
          subject_final_tests: "",
          final_model_tests: "১০"
        },
        {
          id: 'ssc-exam',
          title: "এসএসসি পরীক্ষা প্রস্তুতি",
          image: ssc,
          total_classes: "৯০",
          special_classes: "",
          solve_classes: "৩৫",
          weekly_tests: "২",
          subject_final_tests: "",
          final_model_tests: "১৬"
        },
        {
          id: 'hsc-exam',
          title: "এইচএসসি পরীক্ষা প্রস্তুতি",
          image: hsc,
          total_classes: "৯০",
          special_classes: "",
          solve_classes: "৩৫",
          weekly_tests: "২",
          subject_final_tests: "",
          final_model_tests: "১৬"
        }
      ];
      
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
                           {course.title}
                         </h3>
                         <ul className="space-y-2 text-gray-700 text-base">
                           <li>বিষয় ভিত্তিক মোট ক্লাস: {course.total_classes} টি</li>
                           <li>স্পেশাল ক্লাস: {course.special_classes} টি</li>
                           <li>সলভ ক্লাস: {course.solve_classes} টি</li>
                           <li>ক্লাস টেস্ট (প্রতি সপ্তাহে): {course.weekly_tests} টি</li>
                           <li>সাবজেক্ট ফাইনাল টেস্ট: {course.subject_final_tests} টি</li>
                           <li>ফাইনাল মডেল টেস্ট: {course.final_model_tests} টি</li>
                         </ul>
                         <div className="mt-4">
                           <Link to={`/courses/${course.id}`} className="btn btn-outline btn-primary w-full">
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