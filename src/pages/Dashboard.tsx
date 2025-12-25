import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useStore } from "@/store/useStore";
import { BookOpen, Clock, Award, TrendingUp, PlayCircle, ChevronRight } from "lucide-react";
import { demoCourses } from "@/lib/data";

export default function Dashboard() {
  const { user } = useStore();

  // Mock data for dashboard
  const stats = [
    { label: "Courses in Progress", value: "3", icon: BookOpen, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Hours Learned", value: "24.5", icon: Clock, color: "text-indigo-600", bg: "bg-indigo-50" },
    { label: "Certificates Earned", value: "1", icon: Award, color: "text-green-600", bg: "bg-green-50" },
    { label: "Learning Streak", value: "5 Days", icon: TrendingUp, color: "text-orange-600", bg: "bg-orange-50" },
  ];

  const enrolledCourses = demoCourses.slice(0, 2);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-12" id="main">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {user?.name.split(' ')[0]}! 👋</h1>
          <p className="text-gray-500">You've completed 65% of your weekly goal. Keep it up!</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 flex items-center gap-5">
              <div className={`w-14 h-14 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center`}>
                <stat.icon size={28} />
              </div>
              <div>
                <div className="text-2xl font-extrabold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content: Enrolled Courses */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Continue Learning</h2>
              <Link to="/" className="text-indigo-600 font-bold text-sm hover:underline">View all</Link>
            </div>

            <div className="space-y-6">
              {enrolledCourses.map((course) => (
                <div key={course.id} className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 group hover:shadow-md transition-all">
                  <div className="w-full md:w-56 aspect-video rounded-2xl overflow-hidden shrink-0 relative">
                    <img src={course.thumb} alt={course.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <PlayCircle className="text-white" size={48} />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-indigo-600 transition-colors">{course.title}</h3>
                    <p className="text-sm text-gray-500 mb-6">Lesson 4 of 12 • 45m remaining</p>

                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-bold text-gray-600 uppercase tracking-wider">
                        <span>Progress</span>
                        <span>35%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-600 rounded-full" style={{ width: '35%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar: Recommendations & Activity */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Recommended for you</h2>
              <div className="space-y-6">
                {demoCourses.slice(3, 6).map((course) => (
                  <Link key={course.id} to={`/course/${course.slug}`} className="flex gap-4 group">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0">
                      <img src={course.thumb} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="font-bold text-gray-900 text-sm line-clamp-2 group-hover:text-indigo-600 transition-colors">{course.title}</h4>
                      <p className="text-xs text-gray-500 mt-1">${course.price.toFixed(2)}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <button className="w-full mt-8 py-4 rounded-2xl border-2 border-gray-50 text-indigo-600 font-bold text-sm hover:bg-indigo-50 transition-all flex items-center justify-center gap-2">
                Explore More
                <ChevronRight size={16} />
              </button>
            </div>

            <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-[2.5rem] p-8 text-white shadow-xl shadow-indigo-100">
              <h3 className="text-xl font-bold mb-4">Upgrade to Pro</h3>
              <p className="text-indigo-100 text-sm mb-8 leading-relaxed">
                Get unlimited access to all courses, certificates, and exclusive community features.
              </p>
              <button className="w-full bg-white text-indigo-600 py-4 rounded-2xl font-bold text-sm hover:bg-indigo-50 transition-all shadow-lg">
                Go Pro Now
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
