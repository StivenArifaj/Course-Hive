import Navbar from "../components/Navbar";
import CourseGrid from "../components/CourseGrid";
import CategoryGrid from "../components/CategoryGrid";
import Hero from "../components/Hero";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main id="main">
        <Hero />

        <div className="bg-gray-50 py-20">
          <CategoryGrid />
        </div>

        <div className="py-20">
          <CourseGrid />
        </div>

        {/* Features Section */}
        <section className="py-24 bg-indigo-900 text-white overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-400 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl font-bold mb-6">Why Choose Course Hive?</h2>
              <p className="text-indigo-100 text-lg">
                We provide the tools and resources you need to master any skill and achieve your professional goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  title: "Expert Instructors",
                  desc: "Learn from industry professionals with years of real-world experience.",
                  icon: "🎓"
                },
                {
                  title: "Lifetime Access",
                  desc: "Enroll once and access your courses anytime, anywhere, forever.",
                  icon: "♾️"
                },
                {
                  title: "Verified Certificates",
                  desc: "Earn certificates that are recognized by top companies worldwide.",
                  icon: "📜"
                }
              ].map((feature, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/20 transition-all group">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-indigo-100 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-indigo-200">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-8 relative z-10">Ready to start your journey?</h2>
            <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto relative z-10">
              Join thousands of students and start learning today. Get 20% off your first course with code <span className="font-mono font-bold text-white bg-white/20 px-3 py-1 rounded-lg">WELCOME20</span>
            </p>
            <a
              href="#featured"
              className="inline-block bg-white text-indigo-600 px-10 py-4 rounded-2xl text-lg font-bold hover:bg-indigo-50 transition-all shadow-xl relative z-10"
            >
              Get Started Now
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-indigo-600 p-1.5 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
              </div>
              <span className="font-bold text-2xl text-white">CourseHive</span>
            </div>
            <p className="max-w-sm mb-8 leading-relaxed">
              Empowering learners worldwide with high-quality, expert-led online courses. Start your journey today.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Platform</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Browse Courses</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Categories</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Instructors</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-20 mt-20 border-t border-gray-800 text-center text-sm">
          © {new Date().getFullYear()} Course Hive Academy. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
