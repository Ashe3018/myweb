import React from "react";
import ProductGrid from "../components/ProductGrid";
import { useLocation } from "react-router-dom";
import useCRUD from "../hooks/useCRUD";
const About = () => {
  const nav = useLocation();
  const { datas } = useCRUD(
    "https://www.ayu.server.ayubceramic.com/product",nav.pathname
  );
  
  return (
  <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-8 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">

    {/* HEADER */}
 <div className="text-center mb-12">
  <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800">
    About Us
  </h1>

  <p className="mt-3 max-w-2xl mx-auto text-gray-600">
    <span className="font-semibold text-slate-800">
      Tricore IT Solution
    </span>{" "}
    is a technology-focused company providing modern and reliable digital services
    to help businesses grow and operate efficiently.
  </p>

  {/* List */}
  <ul className="mt-6 max-w-md mx-auto text-gray-600 space-y-2">
    <li className="flex items-center justify-center gap-2">
      <span className="text-blue-600 font-bold">•</span>
      Digital Menu System Development
    </li>
    <li className="flex items-center justify-center gap-2">
      <span className="text-blue-600 font-bold">•</span>
      Website Design & Development
    </li>
    <li className="flex items-center justify-center gap-2">
      <span className="text-blue-600 font-bold">•</span>
      System Management & IT Support
    </li>
  </ul>
</div>

    {/* OUR STORY */}
   <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
  {/* Text */}
  <div className="text-center mb-12">
    <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800">
      Our Story
    </h1>

    <p className="mt-3 max-w-2xl mx-auto text-gray-600 leading-relaxed">
      <span className="font-semibold text-slate-800">
        Tricore IT Solution
      </span>{" "}
      was founded with a clear mission — to help businesses grow through
      smart, reliable, and innovative technology solutions. What began as a
      small team passionate about technology has evolved into a trusted IT
      partner delivering practical digital solutions.
      <br />
      <br />
      Today, we specialize in digital menu systems, website development, and
      system management services. We are committed to delivering high-quality,
      secure, and scalable solutions while building long-term relationships
      with our clients through transparency and professionalism.
    </p>
  </div>

  {/* Image */}
  <div className="flex justify-center lg:justify-end">
    <img
      src="/images/team.png"
      alt="Tricore IT Solution Team"
      className="w-full max-w-md rounded-xl object-cover"
    />
  </div>
</div>


    {/* OUR VALUES GRID */}
    <div className="text-center mb-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-6">
        Our Core Values
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow hover:shadow-xl p-6 flex flex-col items-center text-center">
          <img src="/images/qua.png" alt="Quality" className="rounded-lg mb-4 h-44 object-cover" />
          <h3 className="font-semibold text-lg text-slate-800 mb-2">Quality</h3>
          <p className="text-gray-500 text-sm">
            We deliver top-quality materials and services that our clients can trust.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow hover:shadow-xl p-6 flex flex-col items-center text-center">
          <img src="/images/integrity.png" alt="Integrity" className="rounded-lg mb-4 h-44 object-cover" />
          <h3 className="font-semibold text-lg text-slate-800 mb-2">Integrity</h3>
          <p className="text-gray-500 text-sm">
            Honesty and transparency are at the core of our operations.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow hover:shadow-xl p-6 flex flex-col items-center text-center">
          <img src="/images/cus.png" alt="Customer Focus" className="rounded-lg mb-4 h-44 object-cover" />
          <h3 className="font-semibold text-lg text-slate-800 mb-2">Customer Focus</h3>
          <p className="text-gray-500 text-sm">
            Our clients’ success drives everything we do, from product selection to service delivery.
          </p>
        </div>
      </div>
    </div>

    {/* TEAM GRID (Optional) */}
    {/* <div className="text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-6">
        Meet the Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
          <img src="/images/team1.png" alt="CEO" className="w-24 h-24 rounded-full mb-4 object-cover" />
          <h3 className="font-semibold text-lg text-slate-800">Jane Doe</h3>
          <p className="text-gray-500 text-sm">CEO & Founder</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
          <img src="/images/team2.png" alt="CTO" className="w-24 h-24 rounded-full mb-4 object-cover" />
          <h3 className="font-semibold text-lg text-slate-800">John Smith</h3>
          <p className="text-gray-500 text-sm">CTO</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
          <img src="/images/team3.png" alt="COO" className="w-24 h-24 rounded-full mb-4 object-cover" />
          <h3 className="font-semibold text-lg text-slate-800">Emily Brown</h3>
          <p className="text-gray-500 text-sm">COO</p>
        </div>
      </div>
    </div> */}



  </div>
</div>
  );
};

export default About;
