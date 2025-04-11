import React from "react";
import { motion } from "motion/react"

const Features = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-blue-700 mb-10 border-b pb-4 border-blue-100">
        আমাদের বৈশিষ্ট্য
      </h2>

       <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-10">
        {/* একাডেমিক বৈশিষ্ট্য */}
        <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="transition-all duration-500 border shadow-xl p-10 rounded-lg hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">১. একাডেমিক বৈশিষ্ট্য</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><span className="font-medium">যোগ্য ও অভিজ্ঞ শিক্ষকবৃন্দ –</span> বিশেষায়িত ও অভিজ্ঞ শিক্ষক দ্বারা পাঠদান।</li>
                <li><span className="font-medium">আপডেটেড ও মানসম্পন্ন পাঠ্যসামগ্রী –</span> পরীক্ষাভিত্তিক সাজেশন ও নোট সরবরাহ।</li>
                <li><span className="font-medium">ব্যক্তিগত মনোযোগ –</span> প্রতিটি শিক্ষার্থীর জন্য আলাদা গাইডলাইন ও মনিটরিং।</li>
                <li><span className="font-medium">নিয়মিত পরীক্ষা ও মূল্যায়ন –</span> মাসিক, সাপ্তাহিক ও মডেল টেস্ট ব্যবস্থা।</li>
              </ul>
      </motion.div>



        {/* প্রযুক্তিগত সুবিধা */}
        <div className="transition-all duration-500 border shadow-xl p-10 rounded-lg hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">২. প্রযুক্তিগত সুবিধা</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><span className="font-medium">অনলাইন ক্লাস ও রেকর্ডেড লেকচার –</span> যেকোনো সময় ক্লাস রিভিউয়ের সুযোগ।</li>
            <li><span className="font-medium">ডিজিটাল লার্নিং মডিউল –</span> মোবাইল অ্যাপ ও ই-লার্নিং সুবিধা।</li>
            <li><span className="font-medium">প্রশ্নব্যাংক ও অনুশীলনী –</span> শিক্ষার্থীদের জন্য বিভিন্ন লেভেলের অনুশীলন ব্যবস্থা।</li>
          </ul>
        </div>

        {/* অতিরিক্ত সুবিধা */}
        <div className="transition-all duration-500 border shadow-xl p-10 rounded-lg hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">৩. অতিরিক্ত সুবিধা</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><span className="font-medium">বৃত্তি ও ফি ছাড়ের সুযোগ –</span> মেধাবীদের জন্য স্কলারশিপ সুবিধা।</li>
            <li><span className="font-medium">শীতাতপ নিয়ন্ত্রিত ক্লাসরুম –</span> আরামদায়ক ও শিক্ষাবান্ধব পরিবেশ।</li>
            <li><span className="font-medium">লাইব্রেরি ও রিসোর্স সেন্টার –</span> গবেষণার জন্য সমৃদ্ধ বই ও স্টাডি ম্যাটেরিয়াল।</li>
          </ul>
        </div>

        {/* সাফল্যের নিশ্চয়তা */}
        <div className="transition-all duration-500 border shadow-xl p-10 rounded-lg hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">৪. সাফল্যের নিশ্চয়তা</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><span className="font-medium">উচ্চ সফলতার হার –</span> পূর্বের শিক্ষার্থীদের ভালো ফলাফলের প্রমাণ।</li>
            <li><span className="font-medium">বিশেষ প্রস্তুতি ক্লাস –</span> বোর্ড ও ভর্তি পরীক্ষার জন্য বিশেষ কোর্স।</li>
            <li><span className="font-medium">সফল শিক্ষার্থীদের রিভিউ –</span> পূর্বের শিক্ষার্থীদের মতামত ও সফলতার গল্প।</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
