import React from "react";
import Swal from "sweetalert2";

const Form = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    // Send the data to FormSubmit
    try {
      const res = await fetch("https://formsubmit.co/sayed718187@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        Swal.fire({
            icon: "success",
            title: "জমা দেওয়া হয়েছে!",
            text: `আপনার বার্তা পেয়েছি, ধন্যবাদ!   আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।`,
            confirmButtonText: "ঠিক আছে",
          });

        form.reset(); // clear the form
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "ত্রুটি!",
        text: "ফর্ম জমা দেওয়া যায়নি। আবার চেষ্টা করুন।",
      });
    }
  };

  return (
    <section id="form" className="max-w-2xl mx-auto bg-white p-10 shadow-md rounded-xl my-10">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
        প্রশ্ন জিজ্ঞাসা ফর্ম
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="name"
          required
          placeholder="আপনার নাম"
          className="input input-bordered w-full"
        />
        <input
          type="tel"
          name="phone"
          required
          placeholder="মোবাইল নম্বর"
          className="input input-bordered w-full"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="আপনার ইমেইল"
          className="input input-bordered w-full"
        />

        <select name="course" className="select select-bordered w-full">
          <option value="">কোন কোর্স সম্পর্কে জানতে চান?</option>
          <option value="ডিপ্লোমা ইন নার্সিং">ডিপ্লোমা ইন নার্সিং</option>
          <option value="বিএসসি ইন নার্সিং">বিএসসি ইন নার্সিং</option>
          <option value="ডিপ্লোমা ইন মিডওয়াইফারি">ডিপ্লোমা ইন মিডওয়াইফারি</option>
          <option value="আইএইচটি-ম্যাটস">আইএইচটি-ম্যাটস</option>
          <option value="ন্যাশনাল ইউনিভার্সিটি ভর্তি কোচিং">ন্যাশনাল ইউনিভার্সিটি ভর্তি কোচিং</option>
          <option value="এসএসসি পরীক্ষা প্রস্তুতি">এসএসসি পরীক্ষা প্রস্তুতি</option>
          <option value="এইচএসসি পরীক্ষা প্রস্তুতি">এইচএসসি পরীক্ষা প্রস্তুতি</option>
        </select>


        <textarea
          name="message"
          rows="4"
          placeholder="আপনার প্রশ্ন লিখুন"
          className="textarea textarea-bordered w-full"
        />

        <button type="submit" className="btn btn-primary w-full text-lg">
          জমা দিন
        </button>
      </form>
    </section>
  );
};

export default Form;
