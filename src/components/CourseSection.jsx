import { useState } from "react";
import CourseCard from "./ui/CourseCard";

const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

const avatars = [
  "/images/avatars/student-1.jpg",
  "/images/avatars/student-2.jpg",
  "/images/avatars/student-3.jpg",
  "/images/avatars/student-4.jpg",
];

const courses = [
  {
    image: "/images/courses/course-6.jpg",
    title: "Learn Figma from Basic",
    author: "by purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
  },
  {
    image: "/images/courses/course-5.jpg",
    title: "Build Digital Asset",
    author: "by purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
  },
  {
    image: "/images/courses/course-4.jpg",
    title: "the Power of Big Data",
    author: "by purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
  },
  {
    image: "/images/courses/course-3.jpg",
    title: "Balancing Productivity and Life",
    author: "by purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
  },
  {
    image: "/images/courses/course-2.jpg",
    title: "Mastering Money Management",
    author: "by purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
  },
  {
    image: "/images/courses/course-1.jpg",
    title: "From Idea to Startup Success",
    author: "by purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
  },
];

export default function CourseSection() {
  const [active, setActive] = useState("Featured");

  return (
    <section id="courses" className="bg-white py-20">
      <div className="container-1440 px-5 text-center">
        <h2 className="heading-s text-neutral-950">
          Discover Your Passion, <br className="hidden md:block" />
          Build Your Skills
        </h2>
        <p className="body-m mx-auto mt-4 max-w-155 text-neutral-500">
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different fields, from technology
          to the arts, and make a difference in your career and life.
        </p>

        {/* category pills */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`label-s rounded-full px-4 py-2 transition-colors ${
                active === cat
                  ? "bg-secondary-500 text-neutral-950"
                  : "bg-neutral-50 text-neutral-600 hover:bg-neutral-100"
              }`}
            >
              {cat}
            </button>
          ))}
          <button className="label-s text-primary-700">+ More</button>
        </div>

        {/* course grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard
              key={course.title}
              {...course}
              avatars={avatars}
              extraCount="26+"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
