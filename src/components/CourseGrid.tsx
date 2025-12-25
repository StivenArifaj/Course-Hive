
import CourseCard from "./CourseCard";
import { demoCourses } from "@/lib/data";
import type { FC } from "react";

const CourseGrid: FC = () => {
  return (
    <section id="featured" className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Courses</h2>
          <p className="text-gray-500">Hand-picked courses from our top instructors</p>
        </div>
        <div className="flex items-center gap-4">
          <select className="bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>All Categories</option>
            <option>Development</option>
            <option>Design</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {demoCourses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </section>
  );
}

export default CourseGrid;
