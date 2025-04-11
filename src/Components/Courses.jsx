import React from 'react';
import deplomaPic from '../assets/courses/deplomaNursing.jpg';
import bscPic from '../assets/courses/bscNursing.jpg';
import midWifery from '../assets/courses/Midwifery.jpg';
import { Link } from 'react-router-dom';

const Courses = () => {
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
      solve_classes: "28",
      weekly_tests: "২",
      subject_final_tests: "",
      final_model_tests: "15"
    }
  ];

  return (
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

      <div className="mt-10 text-center">
        <Link to="/courses" className="btn btn-primary p-8 btn-wide text-white text-xl">
          আরও কোর্স দেখুন
        </Link>
      </div>
    </section>
  );
};

export default Courses;
