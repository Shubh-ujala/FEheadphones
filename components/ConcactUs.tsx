"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function ContactForm() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Your message has been submitted!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-xl mx-auto py-10 px-4">
     
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-black cursor-pointer mb-6"
      >
        <IoMdArrowRoundBack size={20} />
        Back
      </button>

     
      <h1 className="text-3xl font-primary font-bold text-center mb-2">
        Contact Us
      </h1>

      <p className="text-center text-neutral-700 text-sm mb-8">
        For support or inquiries, email us at{" "}
        <span className="font-semibold underline underline-offset-4">
          support@SonicWave.com
        </span>
      </p>


      <div className="bg-neutral-100 rounded-2xl p-6 shadow-sm border border-neutral-200">
        <h2 className="text-xl font-primary font-semibold mb-6">
          Send a Message
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
         
          <div>
            <label className="block font-semibold mb-1 text-neutral-800 text-sm">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl border border-neutral-300 
              focus:outline-none focus:ring-2 focus:ring-neutral-200 bg-white text-sm"
            />
          </div>

       
          <div>
            <label className="block font-semibold mb-1 text-neutral-800 text-sm">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl border border-neutral-300 
              focus:outline-none focus:ring-2 focus:ring-neutral-200 bg-white text-sm"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-neutral-800 text-sm">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl border border-neutral-300 
              focus:outline-none focus:ring-2 focus:ring-neutral-200 bg-white text-sm"
            ></textarea>
          </div>

          
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl 
            font-semibold text-sm hover:bg-neutral-900 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
