import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import CourseCard from "@/components/CourseCard";
import { findCoursesByCategory, categories } from "@/lib/data";
import { ArrowLeft, Filter } from "lucide-react";

export default function CategoryPage() {
  const { slug } = useParams();
  const normalized = slug ?? "";
  const courses = findCoursesByCategory(normalized);
  const cat = categories.find((c) => c.slug === normalized);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-12" id="main">
        <div className="mb-12">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-indigo-600 mb-8 font-medium transition-colors">
            <ArrowLeft size={16} />
            Back to home
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
                {cat?.name || "Category"}
              </h1>
              <p className="text-gray-500 text-lg">
                Explore our top-rated courses in {cat?.name.toLowerCase() || "this category"}.
              </p>
            </div>
            <button className="flex items-center gap-2 bg-gray-50 border border-gray-100 px-6 py-3 rounded-2xl font-bold text-gray-700 hover:bg-gray-100 transition-all">
              <Filter size={20} />
              Filter & Sort
            </button>
          </div>
        </div>

        {courses.length === 0 ? (
          <div className="text-center py-24 bg-gray-50 rounded-[3rem] border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No courses found</h2>
            <p className="text-gray-500 mb-8">We're currently working on adding more courses to this category.</p>
            <Link to="/" className="text-indigo-600 font-bold hover:underline">Browse other categories</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {courses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
