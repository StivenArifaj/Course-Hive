import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { findCourseById } from "@/lib/data";
import { Star, Clock, Globe, Award, CheckCircle2, ShoppingCart, ArrowLeft } from "lucide-react";
import { useStore } from "@/store/useStore";

export default function CourseDetail() {
  const { id } = useParams();
  const course = id ? findCourseById(id) : undefined;
  const { addToCart, cart } = useStore();

  const isInCart = course ? cart.some(item => item.courseId === course.id) : false;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-12" id="main">
        {!course ? (
          <section className="text-center py-20">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Course not found</h2>
            <p className="text-gray-600 mb-8">We couldn't find the course you're looking for.</p>
            <Link to="/" className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-all">
              Return to Home
            </Link>
          </section>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column: Content */}
            <div className="lg:col-span-2">
              <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-indigo-600 mb-8 font-medium transition-colors">
                <ArrowLeft size={16} />
                Back to courses
              </Link>

              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                {course.title}
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {course.description}
              </p>

              <div className="flex flex-wrap items-center gap-6 mb-12 p-6 bg-gray-50 rounded-3xl border border-gray-100">
                <div className="flex items-center gap-2">
                  <Star className="text-yellow-400 fill-yellow-400" size={20} />
                  <span className="font-bold text-gray-900">{course.rating}</span>
                  <span className="text-gray-500">(2,450 ratings)</span>
                </div>
                <div className="h-4 w-px bg-gray-300 hidden sm:block"></div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock size={20} />
                  <span>12.5 hours on-demand video</span>
                </div>
                <div className="h-4 w-px bg-gray-300 hidden sm:block"></div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Globe size={20} />
                  <span>English</span>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">What you'll learn</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Master the core concepts and advanced techniques",
                    "Build real-world projects for your portfolio",
                    "Understand industry best practices and standards",
                    "Gain hands-on experience with modern tools",
                    "Learn how to solve complex problems efficiently",
                    "Get lifetime access to all course materials"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-green-500 mt-1 shrink-0" size={20} />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Content</h2>
                <div className="space-y-4">
                  {[
                    { title: "Introduction & Setup", lessons: 4, duration: "45m" },
                    { title: "Core Fundamentals", lessons: 8, duration: "2h 15m" },
                    { title: "Advanced Techniques", lessons: 12, duration: "4h 30m" },
                    { title: "Real-world Projects", lessons: 6, duration: "3h 20m" },
                    { title: "Final Assessment & Certification", lessons: 2, duration: "1h 10m" }
                  ].map((section, i) => (
                    <div key={i} className="border border-gray-100 rounded-2xl p-5 hover:bg-gray-50 transition-colors cursor-pointer group">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-8 h-8 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center font-bold text-sm">
                            {i + 1}
                          </div>
                          <h3 className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{section.title}</h3>
                        </div>
                        <div className="text-sm text-gray-500">
                          {section.lessons} lessons • {section.duration}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-white rounded-[2.5rem] shadow-2xl shadow-indigo-100 border border-gray-100 overflow-hidden">
                <div className="aspect-video relative">
                  <img src={course.thumb} alt={course.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl text-indigo-600 hover:scale-110 transition-transform cursor-pointer">
                      <ShoppingCart className="fill-indigo-600 ml-1" size={24} />
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-4xl font-extrabold text-gray-900">${course.price.toFixed(2)}</span>
                    <span className="text-xl text-gray-400 line-through">$99.99</span>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-lg">70% OFF</span>
                  </div>

                  <div className="space-y-4 mb-8">
                    <button
                      onClick={() => addToCart(course)}
                      disabled={isInCart}
                      className={`w-full py-4 rounded-2xl font-bold text-lg shadow-xl transition-all flex items-center justify-center gap-2 ${isInCart
                          ? "bg-green-50 text-green-600 cursor-default"
                          : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-200"
                        }`}
                    >
                      {isInCart ? "Already in Cart" : "Add to Cart"}
                    </button>
                    <button className="w-full py-4 rounded-2xl font-bold text-lg border-2 border-gray-100 text-gray-900 hover:bg-gray-50 transition-all">
                      Buy Now
                    </button>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Award size={18} className="text-indigo-600" />
                      <span>Certificate of completion</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Globe size={18} className="text-indigo-600" />
                      <span>Full lifetime access</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <CheckCircle2 size={18} className="text-indigo-600" />
                      <span>30-day money-back guarantee</span>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-100">
                    <div className="flex items-center gap-4">
                      <img
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${course.instructor}`}
                        alt={course.instructor}
                        className="w-12 h-12 rounded-full border border-gray-200"
                      />
                      <div>
                        <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Instructor</div>
                        <div className="font-bold text-gray-900">{course.instructor}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
