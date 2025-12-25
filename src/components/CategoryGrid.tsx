import { categories } from "@/lib/data";
import { Link } from "react-router-dom";
import { Code, Palette, Briefcase, Camera, Megaphone, Heart, Landmark } from "lucide-react";

const iconMap: Record<string, any> = {
  development: Code,
  design: Palette,
  business: Briefcase,
  photography: Camera,
  marketing: Megaphone,
  "personal-growth": Heart,
  finance: Landmark,
};

export default function CategoryGrid() {
  return (
    <section id="categories" className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Explore Categories</h2>
          <p className="text-gray-500">Find the right course for your career path</p>
        </div>
        <Link to="/" className="text-indigo-600 font-bold hover:text-indigo-700 transition-colors flex items-center gap-2">
          View all categories
          <Landmark size={16} className="hidden" /> {/* Just to keep the map consistent if needed */}
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
        {categories.map((cat) => {
          const Icon = iconMap[cat.slug] || Code;
          return (
            <Link
              key={cat.slug}
              to={`/category/${cat.slug}`}
              className="group flex flex-col items-center"
            >
              <div className="w-full aspect-square bg-white rounded-3xl shadow-sm border border-gray-100 flex items-center justify-center mb-4 group-hover:shadow-xl group-hover:shadow-indigo-100 group-hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  <Icon size={32} />
                </div>
              </div>
              <span className="text-sm font-bold text-gray-700 group-hover:text-indigo-600 transition-colors text-center">
                {cat.name}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
